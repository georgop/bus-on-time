// components/ExcursionsSection.tsx
import { Link } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'

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
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqFPFUvdLTS2RmYudrtzh4pHiQ1gLjT48D_JS_2B1NQ7vNCYhqbOZv_NW_fC4E9bCILT_t4mE_CZLcov0ZYQweGjEELu79hC3nDvs6QsKovP0FJrNFqtyhJ1aqfRuBGIBZxzBoX=w1080-h624-n-k-no',
  },
  {
    title: 'Ancient Epidavros',
    subtitle: 'Corinth Canal · Epidavros',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Epidauros-Theater-1.jpg/1280px-Epidauros-Theater-1.jpg',
  },
  {
    title: 'Ancient Mycenae',
    subtitle: 'Corinth Canal · Mycenae',
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noDhLeqHZ9M6RaNKukggCtwBD5u9Fo4dYJgPMX8Cb8SKSY040-kFTWCYWvIui8y6sAqzxm2EKkcVIAP-L6-CxtQTHUtjLcjYZpvBPPYfNw_Hss9eivqJ9ABTWQcHvrtM3I-01Nn0Q=s1360-w1360-h1020-rw',
  },
  {
    title: 'Ancient Olympia',
    subtitle: 'Ancient Olympia',
    image:
      'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQAUxI1JrWqd2Mf85b_DyIEk-Cu3hRb6wlS-3CpqaMyMuA5qv6UeZqp6bpKZLY6xdcsUfDABoDTg7aYn7iAHtZ2mDGKt9a1ASYCFShYVg',
  },
  {
    title: 'Nafplio · Bourtzi',
    subtitle: 'Corinth Canal · Nafplion',
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqIRjqBnKvLleDzS-h96W-HrcGFVpZzvV1gc_Ft0_KdcXuklU-7WIB0DxMFBkePROUzIB77_aGFiq2nFp-PYGZorOUmgTJoFO2EB4IRGl5_Mb5zSqnUtSg_3To1xtijlDBvRaM1=w1080-h624-n-k-no',
  },
  {
    title: 'Cape Sounio',
    subtitle: 'Cape Sounio · Sunset',
    image:
      'https://www.visitgreece.gr/images/1750x680/jpg/files/militos_4_monuments-sounio_1750x680.webp',
  },
  {
    title: 'Meteora · Monasteries',
    subtitle: 'Trikala · Kalambaka · Meteora',
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoGwM9-8D0d0U_r6PQCotn0Kr-3mZaEnpuyPkHfnG9LgFWcimWe41AwhwWHZztlb1yLgeQ3cc_R5yi0JRlcu_YA8pi7sg7ZAekay-ZKAgwqNfz-7Kxnq3oc8v9POKHUXFFlarb=s1360-w1360-h1020-rw',
  },
  {
    title: 'Loutraki',
    subtitle: 'Loutraki · Corinth Canal',
    image:
      'https://www.visitloutraki.com/sites/default/files/1city-of-loutraki.jpg',
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
