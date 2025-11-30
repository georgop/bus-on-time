import { createFileRoute } from '@tanstack/react-router'
import { Users, Briefcase, Wifi, Snowflake, ShieldCheck } from 'lucide-react'
import amaksi1 from '@/images/amaksi1.jpg'
import amaksi2 from '@/images/amaksi2.webp'

export const Route = createFileRoute('/vehicles')({
  component: VehiclesPage,
})

function VehiclesPage() {
  const vehicles = [
    {
      id: 1,
      title: 'Mercedes-Benz Minibus (20 seats)',
      mainImage: amaksi1,
      gallery: [
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-2.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-5.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-4.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-8.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-11.jpg',
      ],
      description: `
        Spacious and comfortable 20-seater Mercedes-Benz minibus ideal for group sightseeing, 
        private tours, and airport transfers. Designed for reliability, comfort, and safety.`,
      features: [
        { icon: <Users className="w-4 h-4" />, label: '20 seats' },
        {
          icon: <Briefcase className="w-4 h-4" />,
          label: '10–14 large + hand luggage',
        },
        { icon: <Snowflake className="w-4 h-4" />, label: 'AC' },
        { icon: <Wifi className="w-4 h-4" />, label: 'Wi-Fi' },
        { icon: <ShieldCheck className="w-4 h-4" />, label: 'ABS' },
      ],
    },
    {
      id: 2,
      title: 'Mercedes-Benz Minibus (8 seats)',
      mainImage: amaksi2,
      gallery: [
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-1.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-3.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-6.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-7.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-9.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-10.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-12.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-13.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-14.jpg',
        'https://images.weserv.nl/?url=http://www.busontime.gr/images/oximata/photo-15.jpg',
      ],
      description: `
        Premium 8-seater Mercedes-Benz minibus perfect for smaller groups and private transfers across Athens and Greece. 
        Elegant, quiet, and highly efficient.`,
      features: [
        { icon: <Users className="w-4 h-4" />, label: '8 seats' },
        {
          icon: <Briefcase className="w-4 h-4" />,
          label: '6–8 large + hand luggage',
        },
        { icon: <Snowflake className="w-4 h-4" />, label: 'AC' },
        { icon: <Wifi className="w-4 h-4" />, label: 'Wi-Fi' },
        { icon: <ShieldCheck className="w-4 h-4" />, label: 'ABS' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1024,h_465/auto-client/7ed3f30387a6b93325d205c31e7e1689/pi_header.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        <h1 className="relative text-5xl font-bold text-white drop-shadow-lg">
          Vehicles
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12">
          We offer high-level transportation services to and from Athens
          Airport, harbors, and marinas, as well as tours across popular
          destinations in Greece. Our fleet provides{' '}
          <span className="text-cyan-400 font-semibold">
            safety, comfort, and reliability
          </span>{' '}
          for your travels.
        </p>

        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:border-cyan-500/50 transition-all"
          >
            {/* Main image */}
            <img
              src={vehicle.mainImage}
              alt={vehicle.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">{vehicle.title}</h2>
              <p className="text-gray-400 leading-relaxed">
                {vehicle.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {vehicle.features.map((f, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 bg-slate-700/60 border border-slate-600 rounded-full px-4 py-1.5 text-sm text-gray-300"
                  >
                    {f.icon} {f.label}
                  </span>
                ))}
              </div>

              {/* Gallery grid */}
              {/* Gallery grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-4">
                {vehicle.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all"
                  >
                    <img
                      src={img}
                      alt={`${vehicle.title} image ${i + 1}`}
                      className="w-full h-32 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
