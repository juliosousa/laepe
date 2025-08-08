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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Left side - Compelling content */}
          <div className="text-left">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Por que sua decisão importa AGORA?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white">Emergências não esperam:</strong>
                    <span className="text-white/90"> Cada dia sem investimento em treinamento é uma oportunidade perdida de salvar vidas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white">Impacto multiplicador:</strong>
                    <span className="text-white/90"> Um aluno bem treinado pode salvar dezenas de vidas ao longo da carreira.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white">Sua marca será lembrada:</strong>
                    <span className="text-white/90"> Por apoiar quem faz a diferença quando mais importa.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-white/80 mb-4">
                Ou entre em contato diretamente:
              </p>
              <a
                href="mailto:laepeufsc@gmail.com"
                className="inline-flex items-center gap-3 text-yellow-300 hover:text-white font-semibold text-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                laepeufsc@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Right side - Contact form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Quero ser patrocinador da LAEPE
              </h3>
              <p className="text-foreground/70">
                Preencha o formulário e nossa equipe entrará em contato
              </p>
            </div>
            <ContactForm defaultSubject="Patrocínio" />
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