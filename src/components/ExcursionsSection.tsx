// components/ExcursionsSection.tsx
import { Link } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'
import delphi from '@/images/delphi.jpg'
import epidavros from '@/images/epidavros.jpg'
import mikines from '@/images/mikines.jpg'
import olympia from '@/images/olympia.jpeg'
import nafplio from '@/images/nafplio.jpg'
import sounio from '@/images/sounio.webp'
import meteora from '@/images/meteora.jpg'
import loutraki from '@/images/loutraki.jpg'

type Excursion = {
  title: string
  subtitle: string
  image: string
  to?: string // optional internal route
}

const excursions: Excursion[] = [
  {
    title: 'Delphi',
    subtitle: 'Livadia · Arachova · Delphi',
    image: delphi,
  },
  {
    title: 'Ancient Epidavros',
    subtitle: 'Corinth Canal · Epidavros',
    image: epidavros,
  },
  {
    title: 'Ancient Mycenae',
    subtitle: 'Corinth Canal · Mycenae',
    image: mikines,
  },
  {
    title: 'Ancient Olympia',
    subtitle: 'Ancient Olympia',
    image: olympia,
  },
  {
    title: 'Nafplio · Bourtzi',
    subtitle: 'Corinth Canal · Nafplion',
    image: nafplio,
  },
  {
    title: 'Cape Sounio',
    subtitle: 'Cape Sounio · Sunset',
    image: sounio,
  },
  {
    title: 'Meteora · Monasteries',
    subtitle: 'Trikala · Kalambaka · Meteora',
    image: meteora,
  },
  {
    title: 'Loutraki',
    subtitle: 'Loutraki · Corinth Canal',
    image: loutraki,
  },
]

export default function ExcursionsSection() {
  return (
    <section className="relative py-16 px-6">
      {/* subtle bg texture/gradient to match the app */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              One-day excursions
            </h2>
            <div className="h-1 w-32 bg-cyan-500 rounded mt-2" />
          </div>

          <Link
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold transition shadow-lg shadow-cyan-500/20"
            to={'/destinations'}
          >
            <MapPin size={18} />
            View all tours
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {excursions.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/40 backdrop-blur-sm hover:border-cyan-500/60 transition-all shadow-sm hover:shadow-cyan-500/10"
            >
              {/* Image */}
              <div className="relative h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
              </div>

              {/* Text block */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white drop-shadow">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300/90">{item.subtitle}</p>
              </div>

              {/* Clickable layer (optional internal route) */}
              {item.to ? (
                <Link
                  to={item.to}
                  className="absolute inset-0"
                  aria-label={`Open ${item.title}`}
                />
              ) : null}
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to={'/destinations'}
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
