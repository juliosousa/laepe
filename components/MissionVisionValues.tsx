'use client'

import { motion } from 'framer-motion'

const missionData = {
  title: 'Missão',
  icon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  text: 'Atuar no estudo, pesquisa e extensão tendo como finalidade o desenvolvimento, a promoção e a difusão de conhecimentos acerca da área de Atendimento Pré‑Hospitalar e Emergência, contribuindo para a formação acadêmica e profissional dos alunos a ela vinculados.',
  color: 'from-blue-500 to-purple-600',
}

const visionData = {
  title: 'Visão',
  icon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  text: 'Ser uma liga Acadêmica de referência em Atendimento Pré‑Hospitalar e Emergência para os estudantes, profissionais da saúde e comunidade.',
  color: 'from-purple-500 to-pink-600',
}

const valuesData = {
  title: 'Valores',
  icon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  items: [
    { text: 'Respeito à vida', icon: '💚' },
    { text: 'Crescimento profissional', icon: '📈' },
    { text: 'Interação com a comunidade', icon: '🤝' },
    { text: 'Ética e responsabilidade', icon: '⚖️' },
  ],
  color: 'from-green-500 to-teal-600',
}

export default function MissionVisionValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="relative py-8">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          Nossos Pilares
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Missão Card */}
        <motion.div
          className="group relative"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
            <div className="flex flex-col items-center text-center h-full">
              <div className={`w-20 h-20 bg-gradient-to-br ${missionData.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                <div className="text-white">
                  {missionData.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{missionData.title}</h3>
              <p className="text-foreground/70 leading-relaxed flex-grow">
                {missionData.text}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visão Card */}
        <motion.div
          className="group relative"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
            <div className="flex flex-col items-center text-center h-full">
              <div className={`w-20 h-20 bg-gradient-to-br ${visionData.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                <div className="text-white">
                  {visionData.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{visionData.title}</h3>
              <p className="text-foreground/70 leading-relaxed flex-grow">
                {visionData.text}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Valores Card */}
        <motion.div
          className="group relative"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
            <div className="flex flex-col items-center h-full">
              <div className={`w-20 h-20 bg-gradient-to-br ${valuesData.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                <div className="text-white">
                  {valuesData.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{valuesData.title}</h3>
              <ul className="space-y-3 text-left w-full">
                {valuesData.items.map((value, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-foreground/70 group/item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-2xl group-hover/item:scale-125 transition-transform duration-200">
                      {value.icon}
                    </span>
                    <span className="group-hover/item:text-foreground transition-colors duration-200">
                      {value.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}