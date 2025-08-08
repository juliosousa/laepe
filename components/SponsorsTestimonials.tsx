'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SponsorsTestimonials() {
  const testimonials = [
    {
      text: 'A LAEPE é um exemplo de como universidade e comunidade podem caminhar juntas.',
      author: 'Dr. Ricardo Silva',
      role: 'Coordenador',
      institution: 'SAMU-SC',
      avatar: (
        <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          RS
        </div>
      ),
    },
    {
      text: 'Patrocinar a LAEPE é ter a certeza de que estamos ajudando a salvar vidas.',
      author: 'Dra. Fernanda Souza',
      role: 'Diretora Médica',
      institution: 'Clínica Vida',
      avatar: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          FS
        </div>
      ),
    },
    {
      text: 'Os alunos chegam ao mercado muito mais preparados graças às experiências que têm aqui.',
      author: 'Enfº. João Lima',
      role: 'Supervisor de Emergência',
      institution: 'Hospital Regional',
      avatar: (
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
          JL
        </div>
      ),
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem nossos{' '}
            <span className="text-green-600">apoiadores</span> e{' '}
            <span className="text-blue-600">parceiros</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-foreground/80">
            Depoimentos de quem já faz parte da nossa missão
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Main testimonial */}
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 min-h-[300px] flex flex-col justify-center">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Icon */}
              <div className="mb-8">
                <svg className="w-12 h-12 text-blue-500/30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 italic text-center">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                {testimonials[currentTestimonial].avatar}
                <div className="text-left">
                  <h4 className="font-bold text-foreground text-lg">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-foreground/70">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-sm font-medium text-green-600">
                    {testimonials[currentTestimonial].institution}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-green-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-300 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-300 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-foreground/60 mb-6">Confiança de instituições renomadas</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'SAMU', bg: 'from-blue-600 to-blue-700' },
              { name: 'UFSC', bg: 'from-green-600 to-green-700' },
              { name: 'HMS', bg: 'from-gray-600 to-gray-700' },
              { name: 'CBMSC', bg: 'from-blue-600 to-green-600' },
            ].map((org, index) => (
              <motion.div
                key={index}
                className={`w-16 h-16 bg-gradient-to-br ${org.bg} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {org.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}