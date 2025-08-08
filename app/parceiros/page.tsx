import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import PartnersHero from '@/components/PartnersHero'
import ValueProposition from '@/components/ValueProposition'
import PartnershipExamples from '@/components/PartnershipExamples'
import PartnersTestimonials from '@/components/PartnersTestimonials'

export const metadata: Metadata = {
  title: 'Parcerias | LAEPE – UFSC',
  description: 'Torne-se parceiro da LAEPE e contribua para a formação de profissionais de saúde especializados em Atendimento Pré-Hospitalar e Emergência.',
  keywords: 'LAEPE, UFSC, parceiros, parcerias, SAMU, bombeiros, hospitais, enfermagem, emergência',
}

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <PartnersHero />
      
      {/* Value Proposition */}
      <Section background="white">
        <ValueProposition />
      </Section>
      
      {/* Partnership Examples */}
      <Section background="gray">
        <PartnershipExamples />
      </Section>
      
      {/* Testimonials from Partners */}
      <Section background="white">
        <PartnersTestimonials />
      </Section>
      
      {/* Contact Form */}
      <Section id="contato" background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quero ser parceiro da LAEPE
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Sua instituição pode transformar a formação de novos profissionais e ampliar 
            o alcance das ações de saúde na comunidade.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
          <ContactForm defaultSubject="Parceria Institucional" />
        </div>
      </Section>

      <Footer />
    </main>
  )
}