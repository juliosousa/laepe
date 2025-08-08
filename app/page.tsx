import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Stats from '@/components/Stats'
import CardsGrid from '@/components/CardsGrid'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import SupportCTA from '@/components/SupportCTA'
import StudentsCTA from '@/components/StudentsCTA'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'
import MissionVisionValues from '@/components/MissionVisionValues'

// Dados para os componentes
const statsData = [
  { number: '120+', label: 'alunos impactados/ano' },
  { number: '30+', label: 'ações de extensão/ano' },
  { number: '15+', label: 'parceiros institucionais' },
]

const pillarsData = [
  {
    title: 'Ensino e Treinamento',
    description: 'Aulas, workshops e simulações realistas com foco em APH e Emergência.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Pesquisa e Produção Científica',
    description: 'Projetos orientados, grupos de estudo e participação em eventos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Extensão e Comunidade',
    description: 'Ações externas em parceria com serviços públicos e instituições.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

const benefitsData = [
  {
    title: 'Aprendizado prático em cenários críticos',
    description: 'Experiência real em situações de emergência e APH.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Networking com profissionais de referência',
    description: 'Conecte-se com especialistas da área de emergência.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Certificados e horas complementares',
    description: 'Documentação oficial para seu currículo acadêmico.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Portfólio acadêmico',
    description: 'Projetos e publicações para destacar sua formação.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Soft skills: liderança e comunicação',
    description: 'Desenvolva habilidades essenciais para sua carreira.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Acesso a eventos e cursos parceiros',
    description: 'Oportunidades exclusivas de capacitação e networking.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
      </svg>
    ),
  },
]

const galleryImages = [
  { src: '/assets/gallery/1.jpg', alt: 'Foto 1 - LAEPE', title: 'Atividade LAEPE 1' },
  { src: '/assets/gallery/2.jpg', alt: 'Foto 2 - LAEPE', title: 'Atividade LAEPE 2' },
  { src: '/assets/gallery/3.jpg', alt: 'Foto 3 - LAEPE', title: 'Atividade LAEPE 3' },
  { src: '/assets/gallery/4.jpg', alt: 'Foto 4 - LAEPE', title: 'Atividade LAEPE 4' },
  { src: '/assets/gallery/5.jpg', alt: 'Foto 5 - LAEPE', title: 'Atividade LAEPE 5' },
  { src: '/assets/gallery/6.jpg', alt: 'Foto 6 - LAEPE', title: 'Atividade LAEPE 6' },
]

const testimonialsData = [
  {
    text: 'A LAEPE foi fundamental para minha formação. As simulações realistas me prepararam para situações críticas que enfrentei na prática.',
    author: 'Maria Silva',
    role: 'Enfermeira',
    institution: 'Hospital Universitário'
  },
  {
    text: 'Participar da LAEPE me deu oportunidades únicas de networking e aprendizado prático que não teria em sala de aula.',
    author: 'João Santos',
    role: 'Estudante de Enfermagem',
    institution: 'UFSC'
  },
  {
    text: 'Como parceiro institucional, vemos o impacto positivo da LAEPE na formação de profissionais qualificados para emergência.',
    author: 'Dr. Carlos Oliveira',
    role: 'Coordenador Médico',
    institution: 'SAMU Florianópolis'
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Sobre a LAEPE */}
      <Section id="sobre" background="white">
        <AboutSection />
      </Section>

      {/* Missão, Visão e Valores */}
      <Section background="gray">
        <MissionVisionValues />
      </Section>

      {/* O que fazemos */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que fazemos
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Nossos três pilares fundamentais para formação completa em APH e Emergência
          </p>
        </div>
        
        <CardsGrid cards={pillarsData} columns={3} />
      </Section>

      {/* Benefícios */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Benefícios de participar
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Descubra as vantagens de fazer parte da LAEPE
          </p>
        </div>
        
        <CardsGrid cards={benefitsData} columns={3} />
      </Section>

      {/* Galeria */}
      <Section background="white">
        <Gallery 
          images={galleryImages}
          title="Na prática, com impacto"
          description="Experiências que aproximam teoria e realidade: simulações, treinamentos e ações de extensão."
        />
      </Section>

      {/* Apoie a LAEPE */}
      <Section id="apoie" background="gray">
        <SupportCTA />
      </Section>

      {/* Depoimentos */}
      <Section background="white">
        <Testimonials testimonials={testimonialsData} />
      </Section>

      {/* Chamada para Alunos */}
      <Section background="primary">
        <StudentsCTA />
      </Section>

      {/* Contato */}
      <Section id="contato" background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Fale com a LAEPE
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Dúvidas, parcerias ou imprensa? Escreva para nós.
          </p>
        </div>
        
        <ContactForm />
        
        <div className="mt-12 text-center">
          <p className="text-foreground/80 mb-4">
            Ou entre em contato diretamente:
          </p>
          <a
            href="mailto:laepeufsc@gmail.com"
            className="text-primary hover:text-primary-600 font-medium transition-colors duration-200"
          >
            laepeufsc@gmail.com
          </a>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
