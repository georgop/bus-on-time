import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/20872423/pexels-photo-20872423.jpeg',
    title: 'Explore the City, Right on Time',
    subtitle: 'Comfortable, scenic, and always punctual.',
  },
  {
    id: 2,
    image: 'http://www.busontime.gr/images/arxiki2.jpg?1760834259559',
    title: 'Discover Hidden Gems',
    subtitle: 'Guided tours to your favorite landmarks.',
  },
  {
    id: 3,
    image: 'http://www.busontime.gr/images/arxiki4.jpg?1760834263764',
    title: 'Your Journey, Our Promise',
    subtitle: 'Seamless travel experiences across the city.',
  },
  {
    id: 4,
    image: 'http://www.busontime.gr/images/arxiki1.jpg?1760834259125',
    title: 'Adventure Awaits',
    subtitle: 'Join our special countryside tours this season.',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 15000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative flex flex-col items-center justify-center text-center h-full px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-3">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              {slide.subtitle}
            </p>
            <a
              href="/destinations"
              className="inline-block px-8 py-3 rounded-[50px] bg-white hover:bg-secondary text-slate-900/95 font-semibold transition-all shadow-lg"
            >
              Explore Tours
            </a>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? 'bg-white scale-125' : 'bg-gray-400/70'
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}
