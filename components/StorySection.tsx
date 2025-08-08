'use client'

import { motion } from 'framer-motion'

export default function StorySection() {
  return (
    <div className="py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mais do que uma liga acadêmica:{' '}
            <span className="text-gray-800">um compromisso com a vida</span>.
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Text Content */}
          <div className="text-left space-y-6">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Fundada na <strong className="text-gray-800">Universidade Federal de Santa Catarina</strong>, 
              a LAEPE atua há anos unindo ensino, pesquisa e extensão para preparar futuros enfermeiros 
              para situações de alta complexidade.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Cada simulação, cada treinamento e cada ação comunitária é uma oportunidade de{' '}
              <strong className="text-gray-800">salvar vidas hoje</strong> e formar{' '}
              <strong className="text-gray-800">profissionais melhores para o amanhã</strong>.
            </p>
            
            {/* Key Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground/70">
                  <strong>Ensino prático</strong> com simulações realistas de emergência
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground/70">
                  <strong>Pesquisa aplicada</strong> que melhora protocolos de atendimento
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground/70">
                  <strong>Extensão comunitária</strong> levando conhecimento à população
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
                <p className="text-foreground/70 italic leading-relaxed">
                  &ldquo;Formar profissionais de excelência em enfermagem, especializados em 
                  atendimento pré-hospitalar, capazes de salvar vidas e transformar a realidade 
                  da saúde em nossa comunidade.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">5+</div>
                <div className="text-xs text-foreground/60">Anos de impacto</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-xs text-foreground/60">Compromisso</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}