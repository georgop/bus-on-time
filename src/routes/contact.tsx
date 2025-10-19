import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone, User, Globe, Send, Calendar } from 'lucide-react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    from: '',
    to: '',
    message: '',
  })

  const [arrivalDate, setArrivalDate] = useState<Date | null>(null)
  const [departureDate, setDepartureDate] = useState<Date | null>(null)
  const [sending, setSending] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!arrivalDate || !departureDate) {
      alert('Please select arrival and departure dates.')
      return
    }

    setSending(true)

    const templateParams = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      from: form.from,
      to: form.to,
      message: form.message,
      arrival: arrivalDate.toLocaleDateString(),
      departure: departureDate.toLocaleDateString(),
    }

    // Replace these IDs with your actual EmailJS credentials
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY',
      )
      .then(
        () => {
          alert('✅ Message sent successfully!')
          setForm({
            name: '',
            phone: '',
            email: '',
            from: '',
            to: '',
            message: '',
          })
          setArrivalDate(null)
          setDepartureDate(null)
        },
        (error) => {
          console.error(error)
          alert('❌ Failed to send message. Please try again later.')
        },
      )
      .finally(() => setSending(false))
  }

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
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Contact Form – State Your Interest
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-cyan-500 outline-none text-white"
                placeholder="Your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-cyan-500 outline-none text-white"
                placeholder="Your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-cyan-500 outline-none text-white"
                placeholder="Your email"
              />
            </div>

            {/* From / To */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">
                  From
                </label>
                <input
                  type="text"
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-cyan-500 outline-none text-white"
                  placeholder="Pickup location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">
                  To
                </label>
                <input
                  type="text"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-cyan-500 outline-none text-white"
                  placeholder="Destination"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">
                  Arrival Date *
                </label>
                <div className="relative">
                  <DatePicker
                    selected={arrivalDate}
                    onChange={(date) => setArrivalDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select arrival date"
                    className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-cyan-500 outline-none text-white"
                  />
                  <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">
                  Departure Date *
                </label>
                <div className="relative">
                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select departure date"
                    className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-cyan-500 outline-none text-white"
                  />
                  <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-400">
                Comments *
              </label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-cyan-500 outline-none text-white"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg transition disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.459920305364!2d23.793038476332013!3d38.00115307191857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a199b5db10901f%3A0x28e5465a7a6401ae!2sBus%20On%20Time!5e0!3m2!1sen!2sgr!4v1700000000000"
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
