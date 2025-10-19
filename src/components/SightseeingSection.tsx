// components/SightseeingSection.tsx
import { Building2, ShoppingCart, Plane, Landmark, MapPin } from 'lucide-react'
import { Link } from '@tanstack/react-router'

type Tour = {
  title: string
  description: string
  icon: React.ReactNode
  to?: string
}

const tours: Tour[] = [
  {
    title: 'Airport → Athens',
    description:
      'A compact city tour to experience Athens’ contrasts and highlights right after your arrival.',
    icon: <Building2 className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: 'Shopping in Athens',
    description:
      'Make the most of your time with a stop at McArthurGlen Athens Designer Outlet.',
    icon: <ShoppingCart className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: 'Airport → Marathonas',
    description:
      'Short trip to historic Marathon, starting point of the classic 42 km route.',
    icon: <Plane className="w-10 h-10 text-cyan-400" />,
  },
  {
    title: 'Airport → Cape Sounion',
    description:
      'Head to Sounion to admire the Temple of Poseidon perched over dramatic sea cliffs.',
    icon: <Landmark className="w-10 h-10 text-cyan-400" />,
  },
]

export default function SightseeingSection() {
  return (
    <section className="relative py-16 px-6">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sightseeing Tours{' '}
              <span className="text-gray-400">(3–4 hours)</span>
            </h2>
            <div className="h-1 w-40 bg-cyan-500 rounded mt-2" />
          </div>

          <Link
            to={'/'}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold transition shadow-lg shadow-cyan-500/20"
          >
            <MapPin size={18} />
            View all tours
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <article
              key={tour.title}
              className="group relative h-full rounded-2xl border border-slate-700/70 bg-slate-800/40 backdrop-blur-sm p-6 text-center hover:border-cyan-500/60 transition-all shadow-sm hover:shadow-cyan-500/10"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900/60 ring-1 ring-slate-700/70 group-hover:ring-cyan-500/50 transition">
                {tour.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {tour.title}
              </h3>
              <p className="text-gray-300/90 leading-relaxed">
                {tour.description}
              </p>

              {tour.to ? (
                <Link
                  to={tour.to}
                  className="absolute inset-0"
                  aria-label={`Open ${tour.title}`}
                />
              ) : null}
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to={'/'}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold transition shadow-lg shadow-cyan-500/20"
          >
            <MapPin size={18} />
            View all tours
          </Link>
        </div>
      </div>
    </section>
  )
}
