'use client'

import { motion } from 'framer-motion'

const partnershipTypes = [
  {
    title: 'SAMU & Emergências',
    description: 'Treinamentos conjuntos com equipes do SAMU, desenvolvendo protocolos atualizados e compartilhando expertise prática',
    examples: [
      'Simulações realistas de atendimento pré-hospitalar',
      'Treinamento em protocolos de emergência',
      'Intercâmbio de conhecimento técnico',
      'Desenvolvimento de materiais didáticos'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'from-red-500 to-red-600',
    bgGradient: 'bg-gradient-to-br from-red-50 to-red-100',
  },
  {
    title: 'Hospitais & Clínicas',
    description: 'Parcerias com instituições de saúde para estágios, pesquisas e desenvolvimento de protocolos assistenciais',
    examples: [
      'Estágios supervisionados em emergência',
      'Pesquisas clínicas colaborativas',
      'Desenvolvimento de protocolos assistenciais',
      'Capacitação de equipes multidisciplinares'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
  },
  {
    title: 'Bombeiros & Segurança',
    description: 'Colaboração com Corpo de Bombeiros e forças de segurança em ações de prevenção e resposta a emergências',
    examples: [
      'Treinamentos de primeiros socorros',
      'Campanhas de prevenção de acidentes',
      'Simulados de emergência em massa',
      'Capacitação em resgate e salvamento'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'from-orange-500 to-orange-600',
    bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
  },
]

export default function PartnershipExamples() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="py-8">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Exemplos de Parcerias
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Conheça as diferentes formas de colaboração que desenvolvemos com instituições parceiras
        </p>
      </motion.div>

      {/* Partnership Cards */}
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {partnershipTypes.map((partnership, index) => (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${partnership.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                    <div className="text-white">
                      {partnership.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {partnership.title}
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {partnership.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Examples */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`${partnership.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <h4 className="text-xl font-bold text-foreground mb-6">
                    Atividades e colaborações:
                  </h4>
                  <ul className="space-y-4">
                    {partnership.examples.map((example, exampleIndex) => (
                      <motion.li
                        key={exampleIndex}
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * exampleIndex }}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${partnership.color} rounded-lg flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform duration-200`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">
                          {example}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Sua instituição tem outras ideias?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Estamos abertos a novas formas de parceria. Vamos conversar sobre como podemos trabalhar juntos!
          </p>
          <button
            onClick={() => {
              document.getElementById('contato')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-1-4v4m6-4v4" />
            </svg>
            Vamos conversar
          </button>
        </div>
      </motion.div>
    </div>
  )
}