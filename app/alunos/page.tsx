import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import StudentsHero from '@/components/StudentsHero'
import StudentsBenefits from '@/components/StudentsBenefits'
import StudentsTestimonials from '@/components/StudentsTestimonials'
import StudentsGallery from '@/components/StudentsGallery'
import StudentsProcess from '@/components/StudentsProcess'

export const metadata: Metadata = {
  title: 'Alunos | LAEPE – UFSC',
  description: 'Participe da LAEPE e acelere sua formação com prática, pesquisa e extensão em APH e Emergência.',
  keywords: 'LAEPE, UFSC, alunos, enfermagem, liga acadêmica, APH, emergência',
}

export default function AlunosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <StudentsHero />
      
      {/* Benefícios */}
      <Section background="white">
        <StudentsBenefits />
      </Section>
      
      {/* Processo de Participação */}
      <Section background="gray">
        <StudentsProcess />
      </Section>
      
      {/* Depoimentos */}
      <Section background="white">
        <StudentsTestimonials />
      </Section>
      
      {/* Galeria */}
      <Section background="gray">
        <StudentsGallery />
      </Section>
      
      {/* Inscrição / Contato */}
      <Section id="inscricao" background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para fazer parte da LAEPE?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você 
            com as próximas etapas para participar da liga.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
          <ContactForm defaultSubject="alunos" />
        </div>
      </Section>

      <Footer />
    </main>
  )
}