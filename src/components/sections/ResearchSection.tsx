import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Card } from "../ui/card"
import type { Project } from "../../types/notion"

interface ResearchSectionProps {
  projects: Project[]
}

export function ResearchSection({ projects }: ResearchSectionProps) {
  const [openProjects, setOpenProjects] = useState(true)

  if (projects.length === 0) {
    return (
      <section className="py-16 md:py-24 border-b border-border" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Research</h2>
          <div className="text-center py-10">
            <p className="text-muted-foreground">등록된 프로젝트가 없습니다.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 border-b border-border" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Research</h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Projects */}
          <Collapsible open={openProjects} onOpenChange={setOpenProjects}>
            <Card>
              <CollapsibleTrigger asChild>
                <button className="w-full px-6 py-5 flex items-center justify-between hover:bg-accent transition-colors rounded-t-xl">
                  <h3 className="text-xl font-semibold">Projects</h3>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openProjects ? "rotate-180" : ""}`} />
                </button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-start gap-4">
                      {project.image && (
                        <div 
                          className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                          style={{ backgroundColor: project.backgroundColor.startsWith('#') ? project.backgroundColor : `#${project.backgroundColor}` }}
                        >
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <span className="text-sm font-mono text-muted-foreground flex-shrink-0">
                            {project.startDate.split('-')[0]}
                          </span>
                          <div>
                            <h4 className="font-medium text-foreground leading-relaxed">{project.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{project.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </div>
    </section>
  )
}
