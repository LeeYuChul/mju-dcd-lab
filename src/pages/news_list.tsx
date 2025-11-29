import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import type { News } from '../types/notion';
import { parseDetails, formatDate } from '../utils/parseDetails';
import { trackPageView } from '../utils/analytics';

interface NewsListProps {
  news: News[];
  onBack: () => void;
}

const NewsList: React.FC<NewsListProps> = ({ news, onBack }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Core Loop Lab - Activities";
    trackPageView("Core Loop Lab - Activities", "/activities");
  }, []);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            돌아가기
          </Button>
          <h1 className="text-xl font-bold">All Activities</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="text-muted-foreground">
            총 {news.length}개의 활동이 있습니다
          </p>
        </div>

        {/* Gallery Grid - 반응형 1/2/3 컬럼 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => {
            const detailSections = parseDetails(item.details);
            
            return (
              <Collapsible
                key={item.id}
                open={openItems.includes(item.id)}
                onOpenChange={() => toggleItem(item.id)}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  {item.image && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-mono font-semibold">
                          {formatDate(item.date)}
                        </span>
                      </div>
                      {item.tags && item.tags.length > 0 && (
                        <div className="absolute top-3 right-3 flex gap-1">
                          {item.tags.slice(0, 2).map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.summary}
                    </p>

                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full mt-auto gap-2 group">
                        <span>{openItems.includes(item.id) ? "접기" : "자세히 보기"}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openItems.includes(item.id) ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent>
                    <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">날짜</p>
                        <p className="text-foreground">{formatDate(item.date)}</p>
                      </div>

                      {detailSections.map((section, idx) => (
                        <div key={idx}>
                          <p className="text-sm font-semibold text-muted-foreground mb-2">
                            {section.title}
                          </p>
                          {section.items.length > 0 ? (
                            <ul className="space-y-1 text-sm text-foreground">
                              {section.items.map((detailItem, itemIdx) => (
                                <li key={itemIdx}>{detailItem}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ))}

                      {item.tags && item.tags.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-2">태그</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-accent rounded-md text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.link && (
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-2">링크</p>
                          <Button variant="outline" size="sm" asChild>
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="gap-2"
                            >
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
            );
          })}
        </div>

        {news.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">등록된 활동이 없습니다.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-foreground py-6 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-background/60">
            Copyright © 2025 Myongji University Core Loop Laboratory
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewsList;
