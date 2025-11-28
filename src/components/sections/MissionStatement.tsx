import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const koreanText = {
  lines: [
    "가치있는 문제를 발굴하고, 그 문제에 집중합니다.",
    "데이터를 기반으로 다각도로 원인을 분석하고, 실증가능한 해결책을 찾습니다.",
    "인공지능 혁신 속에서 긍정적 변화를 이끌 방법을 탐구합니다.",
    "사용자를 깊이 이해하고, 작동하는 순환구조를 설계합니다.",
    "Core-Loop Lab은 완성보다 탐색, 시도, 검증의 반복과정을 더 중요하게 생각합니다.",
  ],
}

const englishText = {
  lines: [
    "We identify meaningful problems and stay focused on them.",
    "We analyze root causes from multiple angles using data, and pursue solutions that can be empirically validated.",
    "We explore ways to drive positive impact amid the wave of AI innovation.",
    "We seek to deeply understand users and design the loops that truly work.",
    "At Core-Loop Lab, we value the iterative cycle of exploration, experimentation, and verification more than the pursuit of a finished answer.",
  ],
}

export function MissionStatement() {
  const [isKorean, setIsKorean] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsKorean((prev) => !prev)
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  const currentText = isKorean ? koreanText : englishText

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4">
        {/* PC: 540px 고정 높이, 모바일: 480px 고정 높이 - relative로 레이아웃 시프트 방지 */}
        <div className="h-[480px] md:h-[540px] relative overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={isKorean ? 'ko' : 'en'}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="max-w-5xl mx-auto w-full px-4">
                <div className="space-y-6 md:space-y-8">
                  {currentText.lines.map((line, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut" 
                      }}
                      className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
