'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const boardMembers = [
  {
    name: 'Beatriz',
    role: 'Presidente',
    description: 'Responsável pela liderança geral da liga, coordenação das atividades e representação institucional.',
    responsibilities: ['Coordenação Geral', 'Representação Externa', 'Planejamento Estratégico'],
    image: '/assets/team/beatriz.jpg'
  },
  {
    name: 'Sandy',
    role: 'Vice-presidente',
    description: 'Auxilia na coordenação das atividades e substitui a presidência quando necessário.',
    responsibilities: ['Apoio à Presidência', 'Coordenação de Projetos', 'Gestão Interna'],
    image: '/assets/team/sandy.jpg'
  },
  {
    name: 'Úrsula Teles',
    role: 'Diretora de Marketing',
    description: 'Responsável pela comunicação, marketing digital e divulgação das atividades da liga.',
    responsibilities: ['Comunicação Digital', 'Design Gráfico', 'Redes Sociais'],
    image: '/assets/team/ursula.jpg'
  },
  {
    name: 'Ana Luiza Schutz',
    role: 'Diretora de Pesquisa',
    description: 'Coordena os projetos de pesquisa, iniciação científica e publicações da liga.',
    responsibilities: ['Projetos de Pesquisa', 'Iniciação Científica', 'Publicações'],
    image: '/assets/team/ana.jpg'
  },
  {
    name: 'Sophia Helena',
    role: 'Diretora de Extensão',
    description: 'Organiza as atividades de extensão, capacitações e ações junto à comunidade.',
    responsibilities: ['Ações Comunitárias', 'Capacitações', 'Parcerias Externas'],
    image: '/assets/team/sophia.jpg'
  }
]

export default function TeamBoard() {
  const [selectedMember, setSelectedMember] = useState<typeof boardMembers[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Diretoria Executiva
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Conheça os estudantes que lideram a LAEPE, eleitos pelos membros para 
          representar e coordenar as atividades da liga acadêmica
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {boardMembers.map((member, index) => (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
              <div className="flex flex-col items-center text-center">
                {/* Photo */}
                <div 
                  className="relative w-32 h-32 mb-6 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full p-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-full h-full bg-white rounded-full p-1">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          priority={index < 3}
                        />
                        {/* Overlay hover effect */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <div className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {member.role}
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Responsibilities */}
                <div className="w-full">
                  <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Principais Responsabilidades:
                  </h4>
                  <div className="space-y-2">
                    {member.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                        <span className="text-foreground/70">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {[
          { number: '5', label: 'Diretores' },
          { number: '25+', label: 'Membros Ativos' },
          { number: '12', label: 'Meses de Mandato' },
          { number: '100%', label: 'Dedicação' }
        ].map((stat, index) => (
          <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Leadership Message */}
      <motion.div
        className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Liderança Estudantil Comprometida
          </h3>
          
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-6">
            Nossa diretoria é eleita democraticamente pelos membros da liga, garantindo 
            representatividade e compromisso com os ideais da LAEPE. Cada diretor 
            traz experiência e dedicação para suas áreas específicas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Eleição Democrática</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Mandato de 1 Ano</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Prestação de Contas</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal para ampliar foto */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Botão fechar */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Foto ampliada */}
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Informações do membro */}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {selectedMember.name}
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                      {selectedMember.role}
                    </div>
                  </div>

                  <p className="text-lg text-foreground/80 leading-relaxed mb-6 text-center">
                    {selectedMember.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                      Principais Responsabilidades:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {selectedMember.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg px-4 py-3 text-center">
                          <span className="text-sm font-medium text-foreground/70">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}