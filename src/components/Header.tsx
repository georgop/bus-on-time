import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import logo from '@/logo.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Destinations', to: '/destinations' },
    { name: 'Vehicles', to: '/vehicles' },
    { name: 'Prices', to: '/prices' },
    { name: 'Contact', to: '/contact' },
  ]

  return (
    <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Bus On Time" className="w-36 h-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
              activeProps={{
                className:
                  'text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-slate-900 text-gray-300 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <span className="font-bold text-lg text-white">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/60 transition-colors"
              activeProps={{
                className:
                  'text-cyan-400 bg-slate-800/60 font-semibold py-2 px-3 rounded-lg',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay when menu open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  )
}
