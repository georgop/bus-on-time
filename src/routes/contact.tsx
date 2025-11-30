import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone, User, Globe } from 'lucide-react'
import 'react-datepicker/dist/react-datepicker.css'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      {/* Hero */}
      <section className="relative h-[35vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/20872423/pexels-photo-20872423.jpeg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        <h1 className="relative text-5xl font-bold text-white drop-shadow-lg">
          Contact Us
        </h1>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-4 rounded-[10px]">
          <iframe
            src="https://services.cognitoforms.com/f/RZXi8yEe7EK8WKQNxlxonw?id=2"
            height="787"
            width="100%"
          ></iframe>
        </div>
        <script src="https://services.cognitoforms.com/scripts/embed.js"></script>

        {/* Company Info + Map */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 shadow-lg backdrop-blur-md">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Info
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <User className="w-5 h-5 text-cyan-400 mt-1" />
                Petropanagiotakis Stratos
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                Xanthippou 139, Papagou, Athens - 15669
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                6978506516, 6951142444
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                <a
                  href="mailto:p.eustratios@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  p.eustratios@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-cyan-400 mt-1" />
                G.T.O. Licence: 0206E80000465901
              </li>
            </ul>
          </div>

          <iframe
            title="Bus On Time - Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.4078169078816!2d23.802124300000003!3d37.9909471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1983102dc9c49%3A0xb85917241b9b669f!2zzpJ1cyDOn24gzqRpbWUgLSBFzr3Ov865zrrOr86xz4POtyBtaW5pIGJ1cyDOvM61IM6_zrTOt86zz4wgLSBSZW50IE1pbmkgQnVzIHdpdGggZHJpdmVy!5e0!3m2!1sel!2sgr!4v1760846076350!5m2!1sel!2sgr"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="rounded-xl border border-slate-700"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
