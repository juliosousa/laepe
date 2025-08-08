'use client'

import { motion } from 'framer-motion'

const processSteps = [
  {
    number: '01',
    title: 'Inscrição',
    description: 'Preencha o formulário de inscrição com seus dados acadêmicos e motivações para participar da liga.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Processo Seletivo',
    description: 'Participação em dinâmica de grupo e entrevista individual para avaliar conhecimentos e perfil.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Integração',
    description: 'Participação em programa de integração com apresentação da liga, normas e planejamento anual.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Participação Ativa',
    description: 'Engajamento nas atividades de ensino, pesquisa e extensão durante todo o ano letivo.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

const requirements = [
  'Ser estudante regularmente matriculado no curso de Enfermagem da UFSC',
  'Ter disponibilidade de 8 horas semanais para atividades da liga',
  'Demonstrar interesse genuíno pela área de emergência e APH',
  'Comprometer-se com a participação nas atividades durante todo o ano',
  'Manter bom desempenho acadêmico no curso de graduação'
]

export default function StudentsProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Como participar
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Conheça o processo seletivo e os requisitos para fazer parte da LAEPE
        </p>
      </motion.div>

      {/* Process Steps */}
      <motion.div
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-gray-600">
                    {step.icon}
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-gray-300 mb-2">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Requirements Section */}
      <motion.div
        className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Requisitos para participar
            </h3>
            <p className="text-lg text-foreground/80 mb-8">
              Para garantir uma experiência enriquecedora e compromisso com as atividades, 
              estabelecemos alguns requisitos básicos:
            </p>
            
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground/80">
                    {requirement}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold text-foreground mb-4">
                Próximo processo seletivo
              </h4>
              
              <p className="text-lg text-foreground/80 mb-6">
                As inscrições abrem semestralmente. 
                Fique atento aos nossos canais de comunicação!
              </p>
              
              <button
                onClick={() => {
                  document.getElementById('inscricao')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Manifestar interesse
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}