'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SupportCTA() {
  const supportOptions = [
    {
      title: 'Para Instituições',
      subtitle: 'Parcerias',
      description: 'A LAEPE está vinculada à UFSC, universidade de referência. Parcerias geram credibilidade, co‑criação de treinamentos, aproximação com talentos e impacto social.',
      cta: 'Quero ser parceiro',
      href: '/parceiros',
      className: 'bg-gradient-to-br from-primary to-primary-600 text-white',
    },
    {
      title: 'Para Pessoas e Empresas',
      subtitle: 'Patrocínio',
      description: 'Vincule sua imagem a projetos relevantes para a sociedade e incentive a formação acadêmica de qualidade.',
      cta: 'Quero patrocinar',
      href: '/patrocinadores',
      className: 'bg-gradient-to-br from-secondary to-secondaryDark text-white',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Apoie a LAEPE</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Junte-se a nós na missão de formar profissionais preparados para salvar vidas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {supportOptions.map((option, index) => (
          <motion.div
            key={index}
            className={`card ${option.className} border-0`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <span className="text-sm font-medium opacity-80 uppercase tracking-wide">
                {option.subtitle}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
            
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              {option.description}
            </p>
            
            <Link
              href={option.href}
              className="inline-block bg-white text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={option.cta}
            >
              {option.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Additional info */}
      <motion.div
        className="text-center mt-12 p-6 bg-gray-50 rounded-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-foreground/80 mb-4">
          Todas as contribuições são direcionadas para o desenvolvimento de atividades acadêmicas, 
          treinamentos e projetos de extensão comunitária.
        </p>
        <p className="text-sm text-foreground/60">
          Para mais informações sobre parcerias e patrocínios, entre em contato conosco.
        </p>
      </motion.div>
    </div>
  )
}
