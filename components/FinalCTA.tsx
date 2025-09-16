'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function FinalCTA() {
  return (
    <div id="contato" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Vamos salvar mais{' '}
            <span className="text-blue-300">vidas</span> juntos?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-300 to-green-300 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Seu patrocínio é mais do que um investimento — é um{' '}
            <strong className="text-green-300">ato de responsabilidade social</strong> que 
            impacta diretamente a saúde da comunidade.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Left side - Compelling content */}
          <div className="text-left space-y-6">
            <motion.div
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20 shadow-xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">⏰</span>
                Por que sua decisão importa AGORA?
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-yellow-300 text-lg block mb-1">Emergências não esperam:</strong>
                    <span className="text-white/90 leading-relaxed">Cada dia sem investimento em treinamento é uma oportunidade perdida de salvar vidas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-300 to-green-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-green-300 text-lg block mb-1">Impacto multiplicador:</strong>
                    <span className="text-white/90 leading-relaxed">Um aluno bem treinado pode salvar dezenas de vidas ao longo da carreira.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-300 text-lg block mb-1">Sua marca será lembrada:</strong>
                    <span className="text-white/90 leading-relaxed">Por apoiar quem faz a diferença quando mais importa.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* Right side - Contact form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Decorative background elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>

            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 lg:p-10 shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  Quero ser patrocinador da LAEPE
                </h3>
                <p className="text-foreground/70 text-base lg:text-lg">
                  Preencha o formulário e nossa equipe entrará em contato em até 24h
                </p>
              </div>

              <ContactForm defaultSubject="Patrocínio" />

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Suas informações estão seguras conosco</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom testimonial */}
        <motion.div
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
              &quot;
            </div>
          </div>
          <p className="text-lg text-white/90 italic text-center mb-4">
            &quot;Apoiar a LAEPE é investir no futuro da saúde. Cada real aplicado aqui 
            se multiplica em vidas salvas e profissionais melhores.&quot;
          </p>
          <p className="text-white/70 text-center">
            <strong>Dra. Maria Santos</strong> - Patrocinadora desde 2022
          </p>
        </motion.div>
      </div>
    </div>
  )
}