import { Mail, Phone, MapPin, Globe, User, ExternalLink } from 'lucide-react'
import logo from '@/logo.png'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1 — About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Bus On Time"
              className="w-14 h-14 object-contain"
            />
            <h2 className="text-xl font-bold text-white">Bus On Time</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Bus On Time is a reliable company providing professional travel
            services and sightseeing tours across Athens and Greece. Your
            journey — always on schedule.
          </p>
          <br></br>
          <a href="/terms">Terms and conditions</a>
        </div>

        {/* Column 2 — Links */}
        {/* <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-b border-cyan-500 w-fit pb-1">
            Suggested Links
          </h3>
          <ul className="space-y-2">
            {[
              'One-day Excursions',
              'Sightseeing Tours',
              'Services',
              'Prices',
              'Contact',
              'General Terms',
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-cyan-400 flex items-center gap-2 transition-colors"
                >
                  <ExternalLink size={14} /> {link}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        <div></div>
        {/* Column 3 — Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 border-b border-cyan-500 w-fit pb-1">
            Contact
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <User size={18} className="text-cyan-400 mt-1" />
              <span>Petropanagiotakis Stratos</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-400 mt-1" />
              <span>Xanthippou 139, Papagou, Athens - 15669</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-cyan-400 mt-1" />
              <span>6978506516, 6951142444</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-cyan-400 mt-1" />
              <a
                href="mailto:p.eustratios@gmail.com"
                className="hover:text-cyan-400 transition-colors"
              >
                p.eustratios@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Globe size={18} className="text-cyan-400 mt-1" />
              <span>G.T.O. Licence: 0206E80000465901</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-sm text-gray-500 text-center py-4">
        © {new Date().getFullYear()} Bus On Time — Constructed by Georgios
        Georgopoulos
      </div>
    </footer>
  )
}
