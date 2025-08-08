'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Ana Carolina Silva',
    period: '8º período - Enfermagem',
    role: 'Ex-presidente da LAEPE',
    image: '/placeholder-student1.jpg',
    testimonial: 'A LAEPE transformou minha visão sobre enfermagem. As simulações realistas me prepararam para situações que só encontrei no estágio hospitalar. Hoje me sinto muito mais confiante para atuar em emergências.',
    highlight: 'Simulações realistas'
  },
  {
    name: 'Gabriel Santos',
    period: '6º período - Enfermagem', 
    role: 'Membro ativo há 2 anos',
    image: '/placeholder-student2.jpg',
    testimonial: 'Participar da LAEPE foi essencial para meu desenvolvimento acadêmico. Através dos projetos de pesquisa, consegui publicar artigos e apresentar trabalhos em congressos nacionais.',
    highlight: 'Projetos de pesquisa'
  },
  {
    name: 'Mariana Costa',
    period: '7º período - Enfermagem',
    role: 'Coordenadora de Extensão',
    image: '/placeholder-student3.jpg',
    testimonial: 'O networking que construí na LAEPE foi incrível. Conheci profissionais do SAMU e bombeiros que me abriram portas para estágios e oportunidades de trabalho.',
    highlight: 'Networking profissional'
  },
  {
    name: 'Pedro Oliveira',
    period: '5º período - Enfermagem',
    role: 'Membro ativo há 1 ano',
    image: '/placeholder-student4.jpg',
    testimonial: 'As capacitações técnicas da LAEPE complementaram perfeitamente minha formação. Aprendi técnicas de primeiros socorros e suporte básico de vida que uso até hoje.',
    highlight: 'Capacitações técnicas'
  },
  {
    name: 'Julia Ferreira',
    period: '9º período - Enfermagem',
    role: 'Graduanda e monitora',
    image: '/placeholder-student5.jpg',
    testimonial: 'Graças à experiência na LAEPE, consegui uma vaga na residência em emergência. O diferencial que a liga proporcionou foi decisivo na minha aprovação.',
    highlight: 'Diferencial curricular'
  },
  {
    name: 'Lucas Andrade',
    period: '4º período - Enfermagem',
    role: 'Novo membro',
    image: '/placeholder-student6.jpg',
    testimonial: 'Mesmo sendo novo na liga, já percebo como as atividades estão ampliando minha visão sobre emergência. Os veteranos são muito acolhedores e dispostos a ensinar.',
    highlight: 'Ambiente acolhedor'
  }
]

export default function StudentsTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
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
          O que nossos alunos dizem
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Conheça as experiências de estudantes que transformaram sua formação através da LAEPE
        </p>
      </motion.div>

      {/* Main Testimonial Display */}
      <motion.div
        className="relative max-w-4xl mx-auto mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="md:flex">
            {/* Student Photo Placeholder */}
            <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            {/* Testimonial Content */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="mb-6">
                <svg className="w-8 h-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                  "{testimonials[currentIndex].testimonial}"
                </p>
                
                <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 text-sm font-medium text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {testimonials[currentIndex].highlight}
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 text-sm mb-1">
                  {testimonials[currentIndex].period}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mb-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-gray-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-gray-50 rounded-2xl p-8 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">95%</div>
          <div className="text-sm text-gray-600">Aprovação em residências</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">120+</div>
          <div className="text-sm text-gray-600">Alunos já participaram</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">8.5/10</div>
          <div className="text-sm text-gray-600">Satisfação média</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
          <div className="text-sm text-gray-600">Recomendariam a liga</div>
        </div>
      </motion.div>
    </div>
  )
}