'use client'

import { motion } from 'framer-motion'

export default function SponsorsFooter() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Call to join */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Seja nosso parceiro!
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Faça parte da formação dos profissionais que salvam vidas em nossa comunidade.
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Quero ser um patrocinador
          </button>
        </motion.div>

      </div>
    </section>
  )
}