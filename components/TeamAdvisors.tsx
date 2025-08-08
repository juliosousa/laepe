'use client'

import { motion } from 'framer-motion'

const advisors = [
  {
    name: 'Dra. Keyla C. Nascimento',
    role: 'Orientadora',
    description: 'Professora Doutora responsável pela orientação acadêmica e científica da LAEPE, com vasta experiência em enfermagem de emergência e atendimento pré-hospitalar.',
    specialties: ['Enfermagem de Emergência', 'Atendimento Pré-Hospitalar', 'Pesquisa Científica'],
    image: '/placeholder-advisor1.jpg'
  },
  {
    name: 'Enf. Alexandre Anselmo',
    role: 'Co-orientador',
    description: 'Enfermeiro especialista em emergência, atua como co-orientador fornecendo expertise prática e conexão direta com os serviços de saúde.',
    specialties: ['Urgência e Emergência', 'Capacitação Técnica', 'Supervisão Prática'],
    image: '/placeholder-advisor2.jpg'
  },
  {
    name: 'Enf. Alexandre Caminha',
    role: 'Co-orientador',
    description: 'Enfermeiro com experiência em atendimento pré-hospitalar, contribui com conhecimento prático e supervisão das atividades de extensão.',
    specialties: ['APH', 'Primeiros Socorros', 'Educação em Saúde'],
    image: '/placeholder-advisor3.jpg'
  }
]

export default function TeamAdvisors() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
          Orientação Acadêmica
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Nossos orientadores são profissionais especializados que garantem a excelência 
          acadêmica e científica das atividades desenvolvidas pela LAEPE
        </p>
      </motion.div>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {advisors.map((advisor, index) => (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
              {/* Photo */}
              <div className="w-full lg:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">Foto será adicionada</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Role Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {advisor.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/3">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {advisor.name}
                  </h3>
                  
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {advisor.description}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Áreas de Especialização:
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {advisor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="w-16 h-1 bg-gray-300 mx-auto lg:mx-0"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Compromisso com a Excelência
          </h3>
          
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe de orientação está comprometida em proporcionar uma formação 
            de qualidade, integrando teoria e prática para desenvolver profissionais 
            competentes e humanizados na área de enfermagem de emergência.
          </p>
        </div>
      </motion.div>
    </div>
  )
}