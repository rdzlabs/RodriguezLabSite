import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import { Label } from '../ui/label'
import { MenuBarMiddleSection } from './MenuBarMiddleSection'

export default function MiddleSection() {
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }))
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current])
  const images = [
    "/grad.JPG",
    "/army.jpg",
    "/army.jpg",
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full p-2 flex flex-col items-center gap-10">

        <div className="overflow-hidden w-full max-w-sm" ref={emblaRef}>
          <div className="flex transition-transform ease-in-out duration-700">
            {images.map((src, i) => (
              <div key={i} className="min-w-full p-2 shrink-0 grow-0 basis-full">
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-72 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        <MenuBarMiddleSection />

      </div>
    </div>
  )
}
