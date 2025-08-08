'use client'

import { motion } from 'framer-motion'

const partnersTestimonials = [
  {
    text: 'A parceria com a LAEPE trouxe uma nova dimensão ao treinamento de nossas equipes. Os estudantes chegam com conhecimento atualizado e energia renovada para o atendimento pré-hospitalar.',
    author: 'Dr. Carlos Mendes',
    role: 'Coordenador Médico',
    institution: 'SAMU Florianópolis',
    avatar: (
      <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
        CM
      </div>
    ),
  },
  {
    text: 'Os projetos colaborativos com a LAEPE resultaram em protocolos mais eficientes e uma melhor integração entre academia e prática hospitalar. Recomendamos fortemente essa parceria.',
    author: 'Enfª. Ana Silva',
    role: 'Supervisora de Emergência',
    institution: 'Hospital Universitário UFSC',
    avatar: (
      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
        AS
      </div>
    ),
  },
  {
    text: 'A qualidade dos treinamentos oferecidos pela LAEPE é excepcional. Nossa corporação se beneficia muito da troca de conhecimentos e das simulações realistas.',
    author: 'Cap. Roberto Santos',
    role: 'Comandante',
    institution: 'Corpo de Bombeiros SC',
    avatar: (
      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
        RS
      </div>
    ),
  },
]

const institutionLogos = [
  { name: 'SAMU', color: 'from-red-500 to-red-600' },
  { name: 'HU-UFSC', color: 'from-blue-500 to-blue-600' },
  { name: 'CBMSC', color: 'from-orange-500 to-orange-600' },
  { name: 'PRF-SC', color: 'from-green-500 to-green-600' },
  { name: 'SMS-FLN', color: 'from-purple-500 to-purple-600' },
  { name: 'UFSC', color: 'from-primary to-secondary' },
]

export default function PartnersTestimonials() {
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
    <div className="py-8">
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          O que nossos parceiros dizem
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Depoimentos de instituições que já experimentaram os benefícios de nossa parceria
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {partnersTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed mb-8 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {testimonial.avatar}
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {testimonial.institution}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Partner Institutions */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Instituições Parceiras
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {institutionLogos.map((institution, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${institution.color} rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                {institution.name}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-foreground/60 mt-8 text-sm">
          E muitas outras instituições que confiam em nossa expertise
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">15+</div>
          <div className="text-foreground/70">Parceiros Ativos</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">50+</div>
          <div className="text-foreground/70">Projetos Colaborativos</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">100+</div>
          <div className="text-foreground/70">Profissionais Capacitados</div>
        </div>
      </motion.div>
    </div>
  )
}