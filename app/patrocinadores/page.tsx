import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import SponsorsHero from '@/components/SponsorsHero'
import StorySection from '@/components/StorySection'
import ProblemSection from '@/components/ProblemSection'
import ImpactSection from '@/components/ImpactSection'
import BenefitsSection from '@/components/BenefitsSection'
import SponsorsTestimonials from '@/components/SponsorsTestimonials'
import SponsorshipTiers from '@/components/SponsorshipTiers'
import FinalCTA from '@/components/FinalCTA'
import SponsorsFooter from '@/components/SponsorsFooter'

export const metadata: Metadata = {
  title: 'Patrocinadores | LAEPE – UFSC',
  description: 'Invista na formação de quem salva vidas. Patrocinar a LAEPE é apoiar educação, ciência e impacto social no Atendimento Pré-Hospitalar e Emergência.',
  keywords: 'LAEPE, UFSC, patrocínio, patrocinadores, investimento, enfermagem, emergência, impacto social',
}

export default function SponsorsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <SponsorsHero />
      
      {/* História e Propósito */}
      <Section background="white">
        <StorySection />
      </Section>
      
      {/* O Problema que Enfrentamos */}
      <Section background="gray">
        <ProblemSection />
      </Section>
      
      {/* O Impacto do seu Patrocínio */}
      <Section background="white">
        <ImpactSection />
      </Section>
      
      {/* Benefícios para o Patrocinador */}
      <Section background="gray">
        <BenefitsSection />
      </Section>
      
      {/* Depoimentos */}
      <Section background="white">
        <SponsorsTestimonials />
      </Section>
      
      {/* Formas de Apoiar */}
      <Section background="gray">
        <SponsorshipTiers />
      </Section>
      
      {/* Chamada Final */}
      <Section background="primary">
        <FinalCTA />
      </Section>

      <SponsorsFooter />
      <Footer />
    </main>
  )
}