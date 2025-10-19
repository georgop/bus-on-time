import ExcursionsSection from '@/components/ExcursionsSection'
import HeroCarousel from '@/components/HeroCarousel'
import SightseeingSection from '@/components/SightseeingSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroCarousel />
      <ExcursionsSection />
      <SightseeingSection />
    </div>
  )
}
