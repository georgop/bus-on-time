import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/destinations')({
  component: DestinationsPage,
})

function DestinationsPage() {
  const [activeTab, setActiveTab] = useState<'excursions' | 'tours'>(
    'excursions',
  )

  const excursions = [
    {
      title: 'Delphi',
      image:
        'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqFPFUvdLTS2RmYudrtzh4pHiQ1gLjT48D_JS_2B1NQ7vNCYhqbOZv_NW_fC4E9bCILT_t4mE_CZLcov0ZYQweGjEELu79hC3nDvs6QsKovP0FJrNFqtyhJ1aqfRuBGIBZxzBoX=w1080-h624-n-k-no',
      description: `
        Once known as the navel of the world, Delphi sits on the slopes of Mount Parnassus, overlooking a breathtaking valley. Visit the Temple of Apollo, the ancient theatre and the renowned Archaeological Museum to feel the spiritual heart of ancient Greece.
      `,
    },
    {
      title: 'Ancient Epidavros',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Epidauros-Theater-1.jpg/1280px-Epidauros-Theater-1.jpg',

      description: `
       Home to the most perfectly preserved theatre of antiquity, Epidavros combines art, healing, and nature. Its world-famous acoustics and the Sanctuary of Asclepius make this site a masterpiece of ancient Greek culture.
      `,
    },
    {
      title: 'Ancient Mycenae',
      image:
        'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noDhLeqHZ9M6RaNKukggCtwBD5u9Fo4dYJgPMX8Cb8SKSY040-kFTWCYWvIui8y6sAqzxm2EKkcVIAP-L6-CxtQTHUtjLcjYZpvBPPYfNw_Hss9eivqJ9ABTWQcHvrtM3I-01Nn0Q=s1360-w1360-h1020-rw',
      description: `
       Walk through the Lion Gate into the legendary city of Agamemnon. Explore Cyclopean Walls, royal tombs and treasures that tell the story of a civilization which shaped the myths of the Trojan War.
      `,
    },
    {
      title: 'Ancient Olympia',
      image:
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQAUxI1JrWqd2Mf85b_DyIEk-Cu3hRb6wlS-3CpqaMyMuA5qv6UeZqp6bpKZLY6xdcsUfDABoDTg7aYn7iAHtZ2mDGKt9a1ASYCFShYVg',
      description: `
        In a lush valley of the Peloponnese, Olympia gave birth to the Olympic Games. Visit the sacred Altis, the Temple of Zeus and the original stadium where athletes once competed for eternal glory.
      `,
    },
    {
      title: 'Nafplio - Bourtzi',
      image:
        'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqIRjqBnKvLleDzS-h96W-HrcGFVpZzvV1gc_Ft0_KdcXuklU-7WIB0DxMFBkePROUzIB77_aGFiq2nFp-PYGZorOUmgTJoFO2EB4IRGl5_Mb5zSqnUtSg_3To1xtijlDBvRaM1=w1080-h624-n-k-no',
      description: `
        A romantic seaside town of marble alleys and neoclassical mansions. Stroll the promenade, climb Palamidi Fortress, and admire the tiny castle of Bourtzi floating gracefully in the harbor.
      `,
    },
    {
      title: 'Cape Sounio',
      image:
        'https://www.visitgreece.gr/images/1750x680/jpg/files/militos_4_monuments-sounio_1750x680.webp',
      description: `
        At the southern tip of Attica stands the Temple of Poseidon, guardian of the sea. Enjoy a scenic coastal drive along the Athenian Riviera and witness one of the most enchanting sunsets in Greece.
      `,
    },
    {
      title: 'Meteora - Monasteries',
      image:
        'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoGwM9-8D0d0U_r6PQCotn0Kr-3mZaEnpuyPkHfnG9LgFWcimWe41AwhwWHZztlb1yLgeQ3cc_R5yi0JRlcu_YA8pi7sg7ZAekay-ZKAgwqNfz-7Kxnq3oc8v9POKHUXFFlarb=s1360-w1360-h1020-rw',
      description: `
        Towering sandstone pillars crowned with centuries-old monasteries create a landscape straight from a dream. Meteora is a UNESCO World Heritage site blending natural wonder and deep spirituality.
      `,
    },
    {
      title: 'Loutraki',
      image:
        'https://www.visitloutraki.com/sites/default/files/1city-of-loutraki.jpg',
      description: `
        A cosmopolitan resort known for its thermal springs, crystal-clear waters and lively promenade. Loutraki is the ideal place to relax by the sea, visit the spa, or enjoy a taste of local nightlife.
      `,
    },
  ]

  const tours = [
    {
      title: 'Airport - Athens',
      image:
        'https://images.pexels.com/photos/20872423/pexels-photo-20872423.jpeg',
      description: `
        A city tour of Athens: the Acropolis, the Parthenon, the 
        Panathenaic Stadium, and the vibrant Syntagma Square.
      `,
    },
    {
      title: 'Airport - Shopping in Athens',
      image:
        'https://designeroutletathens.gr/uploads/files/general/designer-outlet-athens-opening-hours-module.jpg',
      description: `
        Stop at McArthurGlen Athens Designer Outlet and enjoy 
        tax-free shopping with top international brands.
      `,
    },
    {
      title: 'Airport - Marathonas',
      image:
        'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npIfn4eH-IgnGV970XoSDbI7uwcjRBn9S9CKg7_HLrISqPZZ8JMat_AEqDQ9sJv8skkqjdvYCf4-r_SHXvuoT--U7SkQio7nzfHaLjYf21mXtcBdGmw9wwJsgsP0l1egR4oCRlN=w1080-h624-n-k-no',
      description: `
        Visit the birthplace of the historic Marathon battle 
        and learn about Greece’s athletic and military heritage.
      `,
    },
    {
      title: 'Airport - Cape Sounio',
      image:
        'https://www.visitgreece.gr/images/1750x680/jpg/files/militos_4_monuments-sounio_1750x680.webp',
      description: `
        Travel along the coast from the airport to the Temple of Poseidon 
        and enjoy seaside views along the Athenian Riviera.
      `,
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
                <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                  {item.description.trim()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
