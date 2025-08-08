'use client'

import { motion } from 'framer-motion'

export default function SponsorshipTiers() {
  const tiers = [
    {
      name: 'Patrocinador Bronze',
      subtitle: 'Contribuições menores ou doações de materiais',
      price: 'A partir de R$ 500',
      color: 'from-gray-600 to-gray-700',
      bgColor: 'from-gray-50 to-gray-100',
      borderColor: 'border-gray-300',
      popular: false,
      benefits: [
        'Logotipo em materiais impressos',
        'Menção em redes sociais',
        'Certificado de apoio social',
        'Relatório semestral de atividades',
        'Convite para eventos anuais'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
    },
    {
      name: 'Patrocinador Prata',
      subtitle: 'Apoio pontual para projetos, cursos ou eventos específicos',
      price: 'A partir de R$ 2.000',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      popular: true,
      benefits: [
        'Todos os benefícios do Bronze',
        'Logotipo em banners de eventos',
        'Participação em 2 treinamentos/ano',
        'Stand promocional em eventos',
        'Newsletter mensal exclusiva',
        'Acesso a relatórios de impacto'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: 'Patrocinador Ouro',
      subtitle: 'Apoio financeiro contínuo, com maior visibilidade e participação',
      price: 'A partir de R$ 5.000',
      color: 'from-green-600 to-green-700',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      popular: false,
      benefits: [
        'Todos os benefícios do Prata',
        'Logotipo principal em todos os materiais',
        'Participação ilimitada em treinamentos',
        'Co-criação de projetos específicos',
        'Presença VIP em todos os eventos',
        'Acesso direto à coordenação',
        'Relatórios trimestrais personalizados'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Escolha como você quer{' '}
            <span className="text-green-600">fazer parte</span> dessa{' '}
            <span className="text-blue-600">missão</span>.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Diferentes formas de apoio para diferentes perfis e necessidades
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative group ${tier.popular ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${tier.borderColor} h-full`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-600 shadow-sm group-hover:bg-gray-200 group-hover:text-gray-700 transition-all duration-300">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {tier.subtitle}
                  </p>
                  <div className="text-3xl font-bold text-gray-800">
                    {tier.price}
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground/70 text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    document.getElementById('contato')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 px-6 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Escolher {tier.name.split(' ')[1]}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom sponsorship option */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-3xl p-12 border border-green-200">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Criamos planos de patrocínio sob medida para grandes empresas, 
              hospitais e instituições com necessidades específicas.
            </p>
            <button
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Vamos conversar sobre um plano personalizado
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}