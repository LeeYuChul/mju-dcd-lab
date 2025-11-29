import { useState } from "react"
import { ChevronDown, Mail } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import type { MasterStudent, GraduateStudent, Professor } from "../../types/notion"

interface TeamSectionProps {
  masterStudents: MasterStudent[]
  graduates: GraduateStudent[]
  professors: Professor[]
}

interface TeamMember {
  name: string
  nameEn?: string
  position: string
  department: string
  role?: string
  role2?: string
  email?: string
  studentEmail?: string
  image: string
  info?: string
  details?: string[]
  currentPosition?: string
  year?: number
}

interface TeamCategory {
  id: string
  title: string
  subtitle: string
  subtitleEn: string
  members: TeamMember[]
}

export function TeamSection({ masterStudents, graduates, professors }: TeamSectionProps) {
  const [openCategories, setOpenCategories] = useState<string[]>(["professor", "masters", "graduates"])
  const [expandedMember, setExpandedMember] = useState<string | null>(null)

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => (prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id]))
  }

  const teamCategories: TeamCategory[] = [
    {
      id: "professor",
      title: "Professor",
      subtitle: "성장은 직선이 아닙니다. 반복과 순환 속에서 서로를 성장시키는 동료를 찾습니다.",
      subtitleEn: "Growth is not linear. We seek teammates who evolve together through cycles of repetition and renewal.",
      members: professors.map(prof => ({
        name: prof.name,
        nameEn: prof.nameEn,
        position: prof.department,
        department: prof.position,
        role: prof.summary[0] || undefined,
        role2: prof.summary[1] || undefined,
        image: prof.photo || "https://via.placeholder.com/400x400?text=No+Photo",
        details: prof.details,
      })),
    },
    {
      id: "masters",
      title: "Graduate Student (Master's Program)",
      subtitle: "석사과정 연구원",
      subtitleEn: "Master's students conducting research in our lab.",
      members: masterStudents.map(student => ({
        name: student.name,
        position: "명지대학교 인공지능·소프트웨어융합대학",
        department: "디지털콘텐츠디자인학과",
        info: student.researchField,
        image: student.photo || "https://via.placeholder.com/400x400?text=No+Photo",
        year: student.year,
      })),
    },
    {
      id: "graduates",
      title: "Master's Graduate",
      subtitle: "졸업생",
      subtitleEn: "Alumni who have completed their master's degree.",
      members: graduates.map(student => {
        const deptParts = student.department.split('\n');
        return {
          name: student.name,
          position: deptParts[0] || "명지대학교 인공지능·소프트웨어융합대학",
          department: deptParts[1] || "디지털콘텐츠디자인학과",
          info: student.researchField,
          currentPosition: student.company,
          image: student.photo || "https://via.placeholder.com/400x400?text=No+Photo",
          year: student.graduationYear,
        };
      }),
    },
  ]

  return (
    <section className="py-16 md:py-24 border-b border-border" id="members">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Team</h2>

        <div className="max-w-6xl mx-auto space-y-6">
          {teamCategories.map((category) => (
            <Collapsible
              key={category.id}
              open={openCategories.includes(category.id)}
              onOpenChange={() => toggleCategory(category.id)}
            >
              <Card>
                <CollapsibleTrigger asChild>
                  <button className="w-full px-6 py-5 flex items-center justify-between hover:bg-accent transition-colors rounded-t-xl">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                      <p className="text-sm text-muted-foreground italic">{category.subtitleEn}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        openCategories.includes(category.id) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-border pt-6">
                    {category.members.length === 0 ? (
                      <div className="text-center py-6">
                        <p className="text-muted-foreground">등록된 멤버가 없습니다.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.members.map((member, idx) => (
                          <Card key={idx} className="overflow-hidden">
                            <div className="aspect-square bg-muted relative overflow-hidden">
                              <img
                                src={member.image || "https://via.placeholder.com/400x400?text=No+Photo"}
                                alt={member.name}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                              {member.nameEn && (
                                <p className="text-sm text-muted-foreground mb-2">{member.nameEn}</p>
                              )}
                              <p className="text-sm text-muted-foreground leading-relaxed">{member.position}</p>
                              <p className="text-sm text-muted-foreground leading-relaxed">{member.department}</p>
                              {member.role && (
                                <p className="text-sm text-muted-foreground mt-2">{member.role}</p>
                              )}
                              {member.role2 && (
                                <p className="text-sm text-muted-foreground">{member.role2}</p>
                              )}
                              {member.info && (
                                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{member.info}</p>
                              )}
                              {member.currentPosition && (
                                <p className="text-sm font-medium mt-2">{member.currentPosition}</p>
                              )}
                              {member.email && (
                                <div className="mt-3 space-y-1">
                                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                                    <a href={`mailto:${member.email}`} className="gap-2">
                                      <Mail className="w-4 h-4" />
                                      {category.id === 'professor' ? 'Official' : 'Email'}
                                    </a>
                                  </Button>
                                  {member.studentEmail && (
                                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                                      <a href={`mailto:${member.studentEmail}`} className="gap-2">
                                        <Mail className="w-4 h-4" />
                                        For Students
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              )}
                              {member.details && (
                                <div className="mt-3">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
                                    className="w-full"
                                  >
                                    {expandedMember === member.name ? "접기" : "더보기"}
                                  </Button>
                                  {expandedMember === member.name && (
                                    <div className="mt-3 space-y-1 text-xs text-muted-foreground leading-relaxed">
                                      {member.details.map((detail, detailIdx) => (
                                        <p key={detailIdx}>{detail}</p>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  )
}
