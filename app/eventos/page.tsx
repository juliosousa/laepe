import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EventsHero from '@/components/EventsHero'
import EventsList from '@/components/EventsList'

export const metadata: Metadata = {
  title: 'Eventos | LAEPE – UFSC',
  description: 'Confira os eventos, workshops e treinamentos promovidos pela Liga Acadêmica de Enfermagem Pré-Hospitalar e Emergência da UFSC.',
  keywords: 'LAEPE, UFSC, eventos, workshops, treinamentos, enfermagem, emergência, cursos',
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <EventsHero />
      <EventsList />
      <Footer />
    </main>
  )
}