import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "../ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Card } from "../ui/card"
import type { News } from "../../types/notion"

interface ActivitiesSectionProps {
  news: News[]
}

export function ActivitiesSection({ news }: ActivitiesSectionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  // 최신 4개만 표시
  const displayNews = news.slice(0, 4)

  if (displayNews.length === 0) {
    return (
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Highlights from Our Activities</h2>
          <div className="text-center py-10">
            <p className="text-muted-foreground">등록된 활동이 없습니다.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 border-b border-border" id="activities">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Highlights from Our Activities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {displayNews.map((activity) => (
            <Collapsible
              key={activity.id}
              open={openItems.includes(activity.id)}
              onOpenChange={() => toggleItem(activity.id)}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                {activity.image && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-mono font-semibold">{activity.date.split('-')[0]}</span>
                    </div>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{activity.description}</p>

                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full mt-auto gap-2 group">
                      <span>{openItems.includes(activity.id) ? "접기" : "자세히 보기"}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openItems.includes(activity.id) ? "rotate-180" : ""}`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                </div>

                <CollapsibleContent>
                  <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">날짜</p>
                      <p className="text-foreground">{activity.date}</p>
                    </div>

                    {activity.description && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">설명</p>
                        <p className="text-foreground whitespace-pre-wrap">{activity.description}</p>
                      </div>
                    )}

                    {activity.tags && activity.tags.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-2">태그</p>
                        <div className="flex flex-wrap gap-2">
                          {activity.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-accent rounded-md text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {activity.link && (
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-2">링크</p>
                        <Button variant="outline" size="sm" asChild>
                          <a href={activity.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                            바로가기
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
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
