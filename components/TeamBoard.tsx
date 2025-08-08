'use client'

import { motion } from 'framer-motion'

const boardMembers = [
  {
    name: 'Beatriz',
    role: 'Presidente',
    description: 'Responsável pela liderança geral da liga, coordenação das atividades e representação institucional.',
    responsibilities: ['Coordenação Geral', 'Representação Externa', 'Planejamento Estratégico'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    name: 'Sandy',
    role: 'Vice-presidente',
    description: 'Auxilia na coordenação das atividades e substitui a presidência quando necessário.',
    responsibilities: ['Apoio à Presidência', 'Coordenação de Projetos', 'Gestão Interna'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: 'Úrsula Teles',
    role: 'Diretora de Marketing',
    description: 'Responsável pela comunicação, marketing digital e divulgação das atividades da liga.',
    responsibilities: ['Comunicação Digital', 'Design Gráfico', 'Redes Sociais'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  },
  {
    name: 'Ana Luiza Schutz',
    role: 'Diretora de Pesquisa',
    description: 'Coordena os projetos de pesquisa, iniciação científica e publicações da liga.',
    responsibilities: ['Projetos de Pesquisa', 'Iniciação Científica', 'Publicações'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    name: 'Sophia Helena',
    role: 'Diretora de Extensão',
    description: 'Organiza as atividades de extensão, capacitações e ações junto à comunidade.',
    responsibilities: ['Ações Comunitárias', 'Capacitações', 'Parcerias Externas'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

export default function TeamBoard() {
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
                {/* Photo Placeholder */}
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Role Icon */}
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <div className="text-gray-600">
                    {member.icon}
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
    </div>
  )
}