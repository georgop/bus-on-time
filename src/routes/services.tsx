import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Plane,
  Ship,
  Landmark,
  Baby,
  Crown,
  Luggage,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const heroImg =
  'https://images.pexels.com/photos/20872423/pexels-photo-20872423.jpeg'

const services = [
  {
    icon: <Crown className="w-6 h-6 text-cyan-400" />,
    title: 'V.I.P. Transportation',
    desc: 'Discreet, comfortable, punctual transfers for executives and guests.',
  },
  {
    icon: <Landmark className="w-6 h-6 text-cyan-400" />,
    title: 'Private Tours (Athens & Greece)',
    desc: 'Curated city & countryside tours with optional licensed guides.',
  },
  {
    icon: <Plane className="w-6 h-6 text-cyan-400" />,
    title: 'Airport Transfers (ATH “Eleftherios Venizelos”)',
    desc: 'Meet & greet, luggage assistance, flight tracking.',
  },
  {
    icon: <Ship className="w-6 h-6 text-cyan-400" />,
    title: 'Port Transfers (Piraeus • Rafina • Lavrio)',
    desc: 'On-time connections to ferries & cruise terminals.',
  },
  {
    icon: <Baby className="w-6 h-6 text-cyan-400" />,
    title: 'Child Transport',
    desc: 'Safety-first vehicles with child seats on request.',
  },
  {
    icon: <Luggage className="w-6 h-6 text-cyan-400" />,
    title: 'Unaccompanied Packages',
    desc: 'Secure same-day delivery for documents & parcels.',
  },
]

function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      {/* Hero */}
      <section className="relative h-[48vh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Athens skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/50 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow">
              Services
            </h1>
            <p className="mt-3 text-lg text-gray-300 max-w-2xl">
              High-quality transportation services in Athens and across Greece —
              always on schedule, always comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Intro block (image + bullets) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: photo */}
          <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800/40">
            <img
              src="https://geediting.com/wp-content/uploads/2024/10/people-who-need-to-follow-a-strict-itinerary-when-they-travel-usually-display-these-traits-says-psychology.png"
              alt="Airport transfer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent" />
          </div>

          {/* Right: copy + bullets */}
          <div className="bg-slate-800/40 rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              What we do
            </h2>
            <p className="text-gray-400 mb-6">
              We stand by you with high-quality transportation services in
              Athens and all over Greece.
            </p>

            <ul className="space-y-4">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1">{s.icon}</div>
                  <div>
                    <p className="text-white font-medium">{s.title}</p>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to={'/prices'}
              className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Get a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: 'https://images.pexels.com/photos/20872423/pexels-photo-20872423.jpeg',

              title: 'City Highlights Tour',
              desc: 'Acropolis, Plaka, Syntagma & more — flexible itineraries with photo stops.',
            },
            {
              img: 'https://www.busontime.gr/images/arxiki1.jpg?1760834259125',
              title: 'Airport ↔ Hotel',
              desc: 'Meet & greet, flight tracking, no surprise fees.',
            },
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Epidauros-Theater-1.jpg/1280px-Epidauros-Theater-1.jpg',
              title: 'Custom Day Trips',
              desc: 'From Cape Sounion to Delphi — tailor the schedule to your group.',
            },
          ].map((card, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-800/40 hover:border-cyan-500/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">
                  {card.title}
                </h3>
                <p className="text-gray-400 mt-2">{card.desc}</p>
                <Link
                  to={'/contact'}
                  className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Book now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
