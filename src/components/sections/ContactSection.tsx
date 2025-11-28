import { MapPin, Phone, ExternalLink } from "lucide-react"
import { Button } from "../ui/button"

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">주소</p>
                <p className="text-muted-foreground leading-relaxed">
                  명지대학교 인공지능·소프트웨어융합대학 디지털콘텐츠디자인학과
                </p>
                <p className="text-muted-foreground leading-relaxed">(우)03674 서울특별시 서대문구 거북골로 34</p>
                <p className="text-muted-foreground leading-relaxed">명지대학교 인문캠퍼스 종합관 S1803</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">연락처</p>
                <p className="text-muted-foreground">02-300-0677</p>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" asChild>
                <a href="https://naver.me/FV7YpPF3" target="_blank" rel="noopener noreferrer" className="gap-2">
                  오시는 길 (네이버 지도)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
