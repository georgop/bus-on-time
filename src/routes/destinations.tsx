import { createFileRoute } from '@tanstack/react-router'
import { useState, type ReactNode } from 'react'
import delphi from '@/images/delphi.jpg'
import epidavros from '@/images/epidavros.jpg'
import mikines from '@/images/mikines.jpg'
import olympia from '@/images/olympia.jpeg'
import nafplio from '@/images/nafplio.jpg'
import sounio from '@/images/sounio.webp'
import meteora from '@/images/meteora.jpg'
import loutraki from '@/images/loutraki.jpg'
import heroImg from '@/images/hero.jpeg'
import outlet from '@/images/outlet.jpg'
import marathonas from '@/images/marathonas.jpg'

export const Route = createFileRoute('/destinations')({
  component: DestinationsPage,
})

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
    >
      {children}
    </a>
  )
}

function DestinationsPage() {
  const [activeTab, setActiveTab] = useState<'excursions' | 'tours'>(
    'excursions',
  )

  const excursions = [
    {
      title: 'Delphi',
      image: delphi,
      description: (
        <>
          <p>
            Once known as the navel of the world, Delphi sits on the slopes of
            Mount Parnassus overlooking a breathtaking valley. Visit the Temple
            of Apollo, the ancient theatre and the renowned Archaeological
            Museum to feel the spiritual heart of ancient Greece.
          </p>
          <p className="mt-2">
            Walk along the Sacred Way where ancient pilgrims once carried their
            offerings, and imagine the oracles that shaped the decisions of
            city-states and kings. Learn more via UNESCO{' '}
            <Link href="https://whc.unesco.org/en/list/393/">here</Link>, the
            Ministry of Culture{' '}
            <Link href="https://delphi.culture.gr/">here</Link>, and Visit
            Greece{' '}
            <Link href="https://www.visitgreece.gr/experiences/culture/archaeological-sites-and-monuments/archaeological-site-of-delphi/">
              here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: 'Ancient Epidavros',
      image: epidavros,
      description: (
        <>
          <p>
            Home to the most perfectly preserved theatre of antiquity, Epidavros
            blends healing, nature and art. Its world-famous acoustics and the
            Sanctuary of Asclepius make this site a masterpiece of classical
            culture.
          </p>
          <p className="mt-2">
            Test the theatre’s acoustics yourself, then explore the foundations
            of the ancient healing centre. Learn more from UNESCO{' '}
            <Link href="https://whc.unesco.org/en/list/491/">here</Link> and the
            Ministry of Culture{' '}
            <Link href="https://odysseus.culture.gr/h/3/eh355.jsp?obj_id=14301">
              here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: 'Ancient Mycenae',
      image: mikines,
      description: (
        <>
          <p>
            Walk through the Lion Gate into the legendary city of Agamemnon.
            Explore Cyclopean walls, royal tombs and treasures that shaped the
            myths of the Trojan War.
          </p>
          <p className="mt-2">
            Mycenae’s beehive tombs and palace ruins reveal the power and
            sophistication of the Late Bronze Age. Learn more from UNESCO{' '}
            <Link href="https://whc.unesco.org/en/list/941/">here</Link> and
            Visit Greece{' '}
            <Link href="https://www.visitgreece.gr/experiences/culture/archaeological-sites-and-monuments/archaeological-site-of-mycenae/">
              here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: 'Ancient Olympia',
      image: olympia,
      description: (
        <>
          <p>
            In a lush Peloponnese valley, Olympia gave birth to the Olympic
            Games. Visit the sacred Altis, the Temple of Zeus and the original
            athletic stadium.
          </p>
          <p className="mt-2">
            Stand where ancient athletes competed and explore museum treasures
            that reveal the origins of athletic culture. Learn more via UNESCO{' '}
            <Link href="https://whc.unesco.org/en/list/517/">here</Link> and
            Visit Greece{' '}
            <Link href="https://www.visitgreece.gr/experiences/culture/archaeological-sites-and-monuments/archaeological-site-of-olympia/">
              here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: 'Nafplio - Bourtzi',
      image: nafplio,
      description: (
        <>
          <p>
            Nafplio is a romantic seaside town filled with marble alleys and
            Venetian charm. Climb the Palamidi Fortress and admire iconic
            Bourtzi castle floating in the bay.
          </p>
          <p className="mt-2">
            Once the capital of modern Greece, its narrow streets and
            neoclassical mansions make it perfect for a leisurely stroll.
            Discover more at Visit Greece{' '}
            <Link href="https://www.visitgreece.gr/mainland/peloponnese/nafplio/">
              here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: 'Cape Sounio',
      image: sounio,
      description: (
        <>
          <p>
            At the southern tip of Attica stands the Temple of Poseidon,
            guardian of sailors since antiquity. Enjoy one of the most stunning
            sunsets in Greece.
          </p>
          <p className="mt-2">
            Perched on a cliff above the Aegean, this Doric temple offers
            breathtaking sea views. Learn more at Visit Greece{' '}
            <Link href="https://www.visitgreece.gr/experiences/culture/archaeological-sites-and-monuments/the-archaeological-site-of-sounio/">
              here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: 'Meteora - Monasteries',
      image: meteora,
      description: (
        <>
          <p>
            Meteora’s monasteries sit atop towering sandstone pillars, creating
            a mystical atmosphere unlike anywhere else in Greece.
          </p>
          <p className="mt-2">
            Visit active monasteries, hike panoramic trails and explore this
            UNESCO site’s spiritual heritage. Learn more{' '}
            <Link href="https://whc.unesco.org/en/list/455/">here</Link>.
          </p>
        </>
      ),
    },
    {
      title: 'Loutraki',
      image: loutraki,
      description: (
        <>
          <p>
            A cosmopolitan resort known for its thermal springs, crystal-clear
            waters and lively promenade. Loutraki is the ideal place to relax by
            the sea, visit the spa or enjoy a taste of local nightlife.
          </p>
          <p className="mt-2">
            The town has been famous for its healing mineral waters since the
            early 20th century, and today offers modern spa facilities and a
            long beachside strip of cafés and tavernas. Learn more at the
            official Loutraki Tourism website{' '}
            <Link href="https://www.visitloutraki.com/en">here</Link>.
          </p>
        </>
      ),
    },
  ]

  const tours = [
    {
      title: 'Airport - Athens',
      image: heroImg,
      description: (
        <>
          <p>
            Start your journey with a city tour of Athens, including the
            Acropolis, the Parthenon, the Panathenaic Stadium and lively
            Syntagma Square.
          </p>
          <p className="mt-2">
            This introductory tour is perfect for first-time visitors who want a
            taste of ancient history and modern city life in just a few hours.
            Get inspired by the official Athens guide{' '}
            <Link href="https://www.thisisathens.org/">here</Link>.
          </p>
        </>
      ),
    },
    {
      title: 'Airport - Shopping in Athens',
      image: outlet,
      description: (
        <>
          <p>
            Head straight from the airport to McArthurGlen Athens Designer
            Outlet and enjoy tax-free shopping with top international brands.
          </p>
          <p className="mt-2">
            Stroll through open-air walkways, grab a coffee and explore a wide
            selection of fashion, accessories and lifestyle stores with great
            discounts. Learn more about the outlet{' '}
            <Link href="https://designeroutletathens.gr/">
              on their website
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: 'Airport - Marathonas',
      image: marathonas,
      description: (
        <>
          <p>
            Visit the birthplace of the historic Battle of Marathon and learn
            about Greece’s athletic and military heritage.
          </p>
          <p className="mt-2">
            Combine a coastal drive with a stop at the tumulus of the Athenian
            soldiers and the nearby museum. Read more about the area on Visit
            Greece{' '}
            <Link href="https://www.visitgreece.gr/mainland/attica/marathon/">
              here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: 'Airport - Cape Sounio',
      image: sounio,
      description: (
        <>
          <p>
            Travel along the coast from the airport to the Temple of Poseidon at
            Cape Sounio and enjoy seaside views along the Athenian Riviera.
          </p>
          <p className="mt-2">
            This short yet scenic tour is ideal if you want an unforgettable
            first or last impression of Athens and the Saronic Gulf. Learn more
            about Cape Sounio{' '}
            <Link href="https://www.visitgreece.gr/experiences/culture/archaeological-sites-and-monuments/the-archaeological-site-of-sounio/">
              here
            </Link>
            .
          </p>
        </>
      ),
    },
  ]

  const activeData = activeTab === 'excursions' ? excursions : tours

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      {/* Header */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://www.visitgreece.gr/images/1750x680/jpg/files/militos_4_monuments-sounio_1750x680.webp')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        <h1 className="relative text-5xl font-bold text-white drop-shadow-lg">
          Destinations
        </h1>
      </section>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setActiveTab('excursions')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${
              activeTab === 'excursions'
                ? 'bg-cyan-500 text-slate-900 shadow-lg'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            One-day Excursions
          </button>
          <button
            onClick={() => setActiveTab('tours')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all ${
              activeTab === 'tours'
                ? 'bg-cyan-500 text-slate-900 shadow-lg'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            Sightseeing Tours (3–4 hours)
          </button>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeData.map((item, i) => (
            <div
              key={i}
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:border-cyan-500/50 transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <div className="text-gray-400 leading-relaxed space-y-2">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DestinationsPage
