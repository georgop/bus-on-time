import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
})

function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.weserv.nl/?url=http://www.busontime.gr/images/terms.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          General Terms & Conditions
        </h1>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Intro */}
        <p className="text-lg text-gray-400 leading-relaxed">
          Please take a moment to review the following terms and conditions that
          apply to all transportation and excursion services provided by{' '}
          <span className="text-cyan-400 font-semibold">Bus On Time</span>. By
          confirming a reservation, you agree to the terms described below.
        </p>

        {/* General Terms */}
        <div>
          <h2 className="text-2xl font-semibold text-white border-b border-cyan-500/50 pb-2 mb-4">
            General Terms
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-400">
            <li>
              Bookings must be made no later than{' '}
              <span className="text-white font-medium">48 hours</span> before
              the start of your transfer.
            </li>
            <li>
              Prices are arranged upon request and may vary depending on route,
              distance, or time.
            </li>
            <li>
              Prices do <span className="font-medium text-white">not</span>{' '}
              include entrance fees to archaeological sites, museums, or guided
              tours unless otherwise stated.
            </li>
            <li>
              In the event of{' '}
              <span className="text-white font-medium">
                extreme weather, strikes, or road closures
              </span>
              , schedules may be adjusted.
            </li>
            <li>
              Reservations are confirmed upon a{' '}
              <span className="text-white font-medium">
                50% deposit payment
              </span>
              , after which a confirmation email will be sent with payment
              details.
            </li>
          </ul>
        </div>

        {/* Cancellation Policy */}
        <div>
          <h2 className="text-2xl font-semibold text-white border-b border-cyan-500/50 pb-2 mb-4">
            Cancellation Policy
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-400">
            <li>
              Bookings may be canceled free of charge up to{' '}
              <span className="text-white font-medium">48 hours</span> before
              pickup.
            </li>
            <li>
              For cancellations made less than{' '}
              <span className="text-white font-medium">12 hours</span> before
              pickup, the deposit amount becomes non-refundable.
            </li>
            <li>
              Refunds are processed to the original payment method unless stated
              otherwise.
            </li>
          </ul>
        </div>

        {/* Liabilities */}
        <div>
          <h2 className="text-2xl font-semibold text-white border-b border-cyan-500/50 pb-2 mb-4">
            Liabilities
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-400">
            <li>
              In case of no-show without prior notice, the full service cost
              will be charged.
            </li>
            <li>
              Our driver will wait up to{' '}
              <span className="text-white font-medium">30 minutes</span> at the
              agreed meeting point. After that time, the transfer may be
              considered canceled.
            </li>
            <li>
              Clients must inform the company immediately of any delays or
              flight changes.
            </li>
            <li>
              The company is not liable for delays caused by factors beyond its
              control (traffic, strikes, weather, etc.).
            </li>
          </ul>
        </div>

        {/* Extra Information */}
        <div>
          <h2 className="text-2xl font-semibold text-white border-b border-cyan-500/50 pb-2 mb-4">
            Additional Information
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-400">
            <li>
              Our driver will meet you at the arrivals hall of{' '}
              <span className="text-white font-medium">
                Athens International Airport (El. Venizelos)
              </span>{' '}
              holding a sign with your name.
            </li>
            <li>
              In case of difficulty locating the driver, please contact us
              directly at{' '}
              <a
                href="tel:+306978506516"
                className="text-cyan-400 hover:underline"
              >
                +30 6978506516
              </a>{' '}
              or{' '}
              <a
                href="tel:+306941442220"
                className="text-cyan-400 hover:underline"
              >
                +30 6941442220
              </a>
              .
            </li>
            <li>
              Our driver will assist you with luggage and ensure a comfortable
              journey to your destination.
            </li>
            <li>
              Excursion extensions may be arranged on request by email, and we
              will confirm availability as soon as possible.
            </li>
          </ul>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-500 italic text-center border-t border-slate-700 pt-6">
          © {new Date().getFullYear()} Bus On Time. All rights reserved.
        </p>
      </section>
    </div>
  )
}
