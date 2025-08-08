'use client'

import { motion } from 'framer-motion'

export default function ProblemSection() {
  const challenges = [
    {
      title: 'Acidentes de trânsito',
      description: 'Milhares de acidentes acontecem diariamente, exigindo atendimento especializado',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
    },
    {
      title: 'Emergências médicas',
      description: 'Paradas cardíacas, AVCs e outras crises que precisam de resposta imediata',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Desastres naturais',
      description: 'Enchentes, deslizamentos e outras catástrofes que mobilizam equipes de emergência',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
            Emergências não esperam.{' '}
            <span className="text-blue-600">Precisamos estar prontos</span>.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Challenge Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 text-white">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {challenge.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8">
              Acidentes, crises de saúde e desastres acontecem todos os dias. Nessas horas, 
              a diferença entre a vida e a morte pode ser a{' '}
              <strong className="text-red-600">rapidez</strong>, a{' '}
              <strong className="text-red-600">técnica</strong> e a{' '}
              <strong className="text-red-600">segurança</strong> no atendimento.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Mas formar profissionais prontos para esse desafio exige investimento em{' '}
                <span className="font-bold text-red-600">treinamento</span>,{' '}
                <span className="font-bold text-red-600">tecnologia</span>,{' '}
                <span className="font-bold text-red-600">materiais</span> e{' '}
                <span className="font-bold text-red-600">ações no mundo real</span>{' '}
                — e é aí que o seu patrocínio faz toda a diferença.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-8">
              <motion.button
                onClick={() => {
                  document.getElementById('impacto')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Veja como seu apoio pode ajudar
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}