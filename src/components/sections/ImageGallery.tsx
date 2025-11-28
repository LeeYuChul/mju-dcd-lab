import type { News } from "../../types/notion"

interface ImageGalleryProps {
  news: News[]
}

export function ImageGallery({ news }: ImageGalleryProps) {
  // News 데이터에서 이미지가 있는 항목만 필터링
  const imagesFromNews = news
    .filter(item => item.image)
    .map((item, i) => ({
      id: i + 1,
      url: item.image!,
      alt: item.title,
      label: item.title,
    }))

  // 이미지가 부족한 경우 placeholder 추가
  const totalImages = 20
  const images = imagesFromNews.length >= totalImages 
    ? imagesFromNews.slice(0, totalImages)
    : [
        ...imagesFromNews,
        ...Array.from({ length: totalImages - imagesFromNews.length }, (_, i) => ({
          id: imagesFromNews.length + i + 1,
          url: `https://via.placeholder.com/400x400?text=Activity+${imagesFromNews.length + i + 1}`,
          alt: `Activity ${imagesFromNews.length + i + 1}`,
          label: '',
        }))
      ]

  // 첫 번째 행 이미지 (무한 루프를 위해 3번 복제)
  const row1Images = images.slice(0, 10)
  const row1Loop = [...row1Images, ...row1Images, ...row1Images]
  
  // 두 번째 행 이미지 (무한 루프를 위해 3번 복제)
  const row2Images = images.slice(10, 20)
  const row2Loop = [...row2Images, ...row2Images, ...row2Images]

  return (
    <section className="py-16 md:py-20 border-b border-border overflow-hidden bg-muted/30">
      <div className="mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">In Motion, In Loop</h2>
        <p className="text-center text-muted-foreground mt-2">Core Loop Lab의 활동을 소개합니다</p>
      </div>

      {/* First row - scrolls right */}
      <div className="relative mb-4 overflow-hidden">
        <div 
          className="flex gap-4 animate-horizontal-scroll-row1"
          style={{ 
            willChange: 'transform',
            width: 'fit-content'
          }}
        >
          {row1Loop.map((image, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-80 h-64 bg-card rounded-lg overflow-hidden border border-border relative"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {image.label && (
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium line-clamp-1">{image.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second row - scrolls left */}
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-4 animate-horizontal-scroll-row2"
          style={{ 
            willChange: 'transform',
            width: 'fit-content'
          }}
        >
          {row2Loop.map((image, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-80 h-64 bg-card rounded-lg overflow-hidden border border-border relative"
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {image.label && (
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium line-clamp-1">{image.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
