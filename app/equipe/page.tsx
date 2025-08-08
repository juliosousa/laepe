import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import TeamHero from '@/components/TeamHero'
import TeamAdvisors from '@/components/TeamAdvisors'
import TeamBoard from '@/components/TeamBoard'

export const metadata: Metadata = {
  title: 'Equipe | LAEPE – UFSC',
  description: 'Conheça a equipe da LAEPE: orientadores, diretoria e membros que fazem a diferença na formação em enfermagem de emergência.',
  keywords: 'LAEPE, UFSC, equipe, orientadores, diretoria, enfermagem, liga acadêmica',
}

export default function EquipePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <TeamHero />
      
      {/* Orientadores */}
      <Section background="white">
        <TeamAdvisors />
      </Section>
      
      {/* Diretoria */}
      <Section background="gray">
        <TeamBoard />
      </Section>

      <Footer />
    </main>
  )
}