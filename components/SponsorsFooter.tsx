'use client'

import { motion } from 'framer-motion'

export default function SponsorsFooter() {
  const currentSponsors = [
    { name: 'SAMU', level: 'Ouro', color: 'from-green-600 to-green-700' },
    { name: 'HU-UFSC', level: 'Ouro', color: 'from-green-600 to-green-700' },
    { name: 'CBMSC', level: 'Prata', color: 'from-blue-600 to-blue-700' },
    { name: 'PRF-SC', level: 'Prata', color: 'from-blue-600 to-blue-700' },
    { name: 'Clínica Vida', level: 'Bronze', color: 'from-gray-600 to-gray-700' },
    { name: 'MedEquip', level: 'Bronze', color: 'from-gray-600 to-gray-700' },
  ]

  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Patrocinadores Atuais
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 mb-12">
            Empresas e instituições que já fazem parte da nossa missão
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {currentSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="relative bg-gray-100 border border-gray-200 rounded-2xl p-6 text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="font-bold text-lg mb-2">{sponsor.name}</div>
                  <div className="text-sm opacity-90">{sponsor.level}</div>
                </div>
                
                {/* Tier badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  {sponsor.level === 'Ouro' && <span className="text-gray-600 text-xs font-bold">★</span>}
                  {sponsor.level === 'Prata' && <span className="text-gray-600 text-xs font-bold">●</span>}
                  {sponsor.level === 'Bronze' && <span className="text-gray-600 text-xs font-bold">▲</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to join */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Sua empresa pode estar aqui!
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Junte-se a essas instituições respeitadas e faça parte da formação 
            dos profissionais que salvam vidas em nossa comunidade.
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

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800 mb-2">R$ 50k+</div>
            <div className="text-foreground/70">Investimentos recebidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
            <div className="text-foreground/70">Patrocinadores ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
            <div className="text-foreground/70">Transparência nos gastos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}