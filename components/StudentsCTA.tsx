'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StudentsCTA() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 md:p-12">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Você é aluno(a) de Enfermagem da UFSC?
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          Participe da LAEPE e acelere sua formação com prática, pesquisa e extensão.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/alunos"
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Participar da LAEPE"
          >
            Quero participar
          </Link>
          
          <button
            onClick={() => {
              document.getElementById('contato')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Saber mais sobre a LAEPE"
          >
            Saber mais
          </button>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold">120+</div>
            <div className="text-sm opacity-80">Alunos impactados/ano</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">30+</div>
            <div className="text-sm opacity-80">Ações de extensão/ano</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">15+</div>
            <div className="text-sm opacity-80">Parceiros institucionais</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
