'use client'

import { createFileRoute, Link } from '@tanstack/react-router'
import { Car, Landmark, Plane, Info } from 'lucide-react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/prices')({
  component: PricesPage,
})

type Item = {
  description: string
  vehicles: string[]
  category: 'oneDay' | 'sightseeing' | 'transfer'
}

const DATA: Item[] = [
  // One-day excursions
  {
    description: 'One-day excursion Athens – Livadia – Arachova – Delphi',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'oneDay',
  },
  {
    description:
      'One-day excursion Athens – Isthmus of Corinth – Ancient Epidavros',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'oneDay',
  },
  {
    description: 'One-day excursion Athens – Ancient Corinth – Ancient Mycenae',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'oneDay',
  },
  {
    description: 'One-day excursion Athens – Ancient Olympia',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'oneDay',
  },
  {
    description:
      'One-day excursion Athens – Isthmus of Corinth – Nafplio – Bourtzi',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'oneDay',
  },
  {
    description: 'One-day excursion Athens – Cape Sounio',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'oneDay',
  },
  {
    description: 'One-day excursion Athens – Meteora – Monasteries',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'oneDay',
  },
  {
    description: 'One-day excursion Athens – Loutraki',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'oneDay',
  },

  // Sightseeing (3–4h)
  {
    description: 'Sightseeing Tour: Airport → Athens Center → Acropolis',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'sightseeing',
  },
  {
    description: 'Sightseeing Tour: Airport → Shopping in Athens',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'sightseeing',
  },
  {
    description: 'Sightseeing Tour: Airport → Marathonas',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'sightseeing',
  },
  {
    description: 'Sightseeing Tour: Airport → Cape Sounion',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'sightseeing',
  },

  // Transfers
  {
    description: 'Transfer: Athens Airport ↔ Athens Center',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'transfer',
  },
  {
    description: 'Transfer: Athens Airport ↔ Piraeus Port',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'transfer',
  },
  {
    description: 'Transfer: Athens Center ↔ Piraeus Port',
    vehicles: ['Mini Van (4–7)', 'Mini Bus (8–20)'],
    category: 'transfer',
  },
]

const TABS = [
  { key: 'oneDay', label: 'One-day excursions', icon: Landmark },
  { key: 'sightseeing', label: 'Sightseeing (3–4h)', icon: Landmark },
  { key: 'transfer', label: 'Airport & Port transfers', icon: Plane },
] as const

function PricesPage() {
  const [active, setActive] = useState<(typeof TABS)[number]['key']>('oneDay')
  const [q] = useState('')

  const rows = useMemo(() => {
    return DATA.filter((d) => d.category === active).filter((d) =>
      d.description.toLowerCase().includes(q.toLowerCase()),
    )
  }, [active])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      {/* Hero / Title */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Prices</h1>
        <p className="mt-2 text-gray-400">
          Transparent, flexible, and tailored to your group size. Final quotes
          are <span className="text-cyan-400 font-medium">upon request</span>.
        </p>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition
                  ${
                    active === key
                      ? 'border-cyan-500 bg-slate-800 text-white'
                      : 'border-slate-700 bg-slate-800/50 hover:border-cyan-500/50 hover:text-white'
                  }
                `}
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/40">
          {/* Rows */}
          <ul className="divide-y divide-slate-700">
            {rows.map((item, i) => (
              <li
                key={i}
                className="px-5 py-4 grid md:grid-cols-[1fr,260px,160px] gap-4"
              >
                {/* Description */}
                <div>
                  <p className="text-white font-medium">{item.description}</p>

                  {/* Mobile-only vehicle list */}
                  <div className="mt-2 md:hidden text-sm text-gray-400 flex flex-wrap gap-2">
                    {item.vehicles.map((v) => (
                      <span
                        key={v}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/60 border border-slate-700"
                      >
                        <Car className="w-3 h-3 text-cyan-400" /> {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Vehicles (desktop) */}
                <div className="hidden md:flex items-center gap-2 flex-wrap">
                  {item.vehicles.map((v) => (
                    <span
                      key={v}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/60 border border-slate-700 text-gray-300 text-sm"
                    >
                      <Car className="w-3 h-3 text-cyan-400" /> {v}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex md:block items-center justify-between">
                  <span className="text-cyan-400 font-semibold">
                    Upon request
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Note / CTA */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-start gap-2">
            <Info className="w-4 h-4 text-cyan-400 mt-0.5" />
            Prices vary by group size, vehicle class, season, and itinerary
            time. Ask us for a final offer.
          </p>
          <Link
            to={'/contact'}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition"
          >
            Request a quote
          </Link>
        </div>
        <Link to={'/terms'}>Terms and conditions</Link>
      </section>
    </div>
  )
}
