'use client'

import { motion } from 'framer-motion'

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Fortaleça sua marca',
      description: 'Associe-a a um projeto respeitado e de impacto social',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Ganhe visibilidade',
      description: 'Em eventos, materiais e redes sociais da LAEPE',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Contribua para a segurança',
      description: 'Da comunidade com mais profissionais capacitados',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Participe de ações conjuntas',
      description: 'Treinamentos e eventos da liga',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Aproxime-se de talentos',
      description: 'Futuros profissionais e potenciais colaboradores',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ]

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Patrocinar é investir em{' '}
            <span className="text-gray-800">pessoas</span>,{' '}
            <span className="text-gray-800">ciência</span> e{' '}
            <span className="text-gray-800">reputação</span>.
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Seu apoio traz benefícios mútuos: impacto social para a comunidade e 
            vantagens estratégicas para sua organização
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-600 shadow-sm group-hover:bg-gray-200 group-hover:text-gray-700 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-gray-800 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12 border border-green-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Benefício Especial</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Responsabilidade Social Corporativa
            </h3>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Demonstre o compromisso de sua empresa com a sociedade apoiando a formação 
              de profissionais que literalmente <strong className="text-green-600">salvam vidas</strong>. 
              Uma parceria que fortalece sua imagem corporativa e gera impacto real na comunidade.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}