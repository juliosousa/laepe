import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Alunos | LAEPE – UFSC',
  description:
    'Participe da LAEPE e acelere sua formação com prática, pesquisa e extensão em APH e Emergência.',
}

export default function AlunosPage() {
  const benefits = [
    'Certificados e horas complementares para o seu histórico acadêmico',
    'Treinamentos práticos e simulações realistas em APH e Emergência',
    'Networking com enfermeiros, médicos e equipes especializadas',
    'Participação em projetos e pesquisas científicas',
    'Acesso a eventos exclusivos e oportunidades da área',
    'Desenvolvimento de habilidades essenciais como liderança, comunicação e trabalho em equipe',
  ]

  return (
    <main className="min-h-screen">
      {/* Hero simples */}
      <section className="gradient-bg text-white py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/assets/laepe-logo.png"
              alt="Logotipo da LAEPE – UFSC"
              width={120}
              height={120}
              priority
              className="object-contain drop-shadow-md"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Acelere sua formação em Enfermagem com prática, pesquisa e impacto real.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            A LAEPE é mais que uma liga acadêmica: é um laboratório vivo para formar profissionais prontos para salvar vidas e liderar no Atendimento Pré-Hospitalar e Emergência.
          </p>
        </div>
      </section>

      {/* Intro */}
      <Section background="white">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-lg text-foreground/80">
            Se você é aluno(a) de Enfermagem da UFSC, esta é a sua oportunidade de colocar a mão na massa, aprender com profissionais de referência e viver experiências que farão toda a diferença no seu currículo e na sua atuação profissional.
          </p>
          <p className="text-xl font-semibold text-foreground">
            Na LAEPE, você aprende salvando vidas — e isso não tem preço.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="#inscricao" className="btn-primary text-lg px-8 py-4">
              Quero participar da LAEPE
            </Link>
            <Link href="/#" className="btn-secondary text-lg px-8 py-4">
              Conhecer a LAEPE
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefícios */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Por que participar?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="card">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-foreground/90 leading-relaxed">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Inscrição / Contato */}
      <Section id="inscricao" background="white">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Inscreva-se
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Preencha o formulário abaixo e selecione o assunto "Alunos". Entraremos em contato com você com as próximas etapas.
          </p>
        </div>
        <ContactForm defaultSubject="alunos" />
      </Section>
    </main>
  )
}


