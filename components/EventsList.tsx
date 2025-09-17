'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import EventCard, { Event } from './EventCard'

export default function EventsList() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all')

  // Mock data - Em produção, isso viria de uma API ou CMS
  const events: Event[] = [
    {
      id: '1',
      title: 'Workshop de Suporte Básico de Vida',
      description: 'Aprenda as técnicas essenciais de ressuscitação cardiopulmonar (RCP) e uso do DEA. Treinamento prático com simuladores de última geração.',
      date: '15/02/2025',
      time: '14:00',
      location: 'Centro de Ciências da Saúde - UFSC',
      participants: 45,
      status: 'upcoming',
      mainImage: '/assets/gallery/1.jpg',
      thumbnails: [
        '/assets/gallery/2.jpg',
        '/assets/gallery/3.jpg',
        '/assets/gallery/4.jpg',
        '/assets/gallery/5.jpg',
        '/assets/gallery/6.jpg'
      ],
      category: 'Workshop'
    },
    {
      id: '2',
      title: 'Simulação Realística em Emergências',
      description: 'Experiência imersiva em cenários de emergência com equipamentos profissionais. Desenvolva habilidades críticas em um ambiente controlado.',
      date: '28/01/2025',
      time: '09:00',
      location: 'Laboratório de Simulação - HU-UFSC',
      participants: 30,
      status: 'ongoing',
      mainImage: '/assets/gallery/2.jpg',
      thumbnails: [
        '/assets/gallery/1.jpg',
        '/assets/gallery/3.jpg',
        '/assets/gallery/4.jpg'
      ],
      category: 'Simulação'
    },
    {
      id: '3',
      title: 'Curso de Atendimento Pré-Hospitalar',
      description: 'Formação completa em APH com certificação. Abordagem teórica e prática do atendimento inicial ao paciente crítico.',
      date: '10/12/2024',
      time: '08:00',
      location: 'Auditório do CCS - UFSC',
      participants: 60,
      status: 'past',
      mainImage: '/assets/gallery/3.jpg',
      thumbnails: [
        '/assets/gallery/1.jpg',
        '/assets/gallery/2.jpg',
        '/assets/gallery/4.jpg',
        '/assets/gallery/5.jpg',
        '/assets/gallery/6.jpg',
        '/assets/gallery/WhatsApp Image 2025-08-08 at 14.16.37.jpeg'
      ],
      category: 'Curso'
    },
    {
      id: '4',
      title: 'Jornada de Emergências Médicas',
      description: 'Evento anual com palestras de especialistas renomados em medicina de emergência. Networking e atualização profissional.',
      date: '20/11/2024',
      time: '08:00',
      location: 'Centro de Convenções - UFSC',
      participants: 150,
      status: 'past',
      mainImage: '/assets/gallery/4.jpg',
      thumbnails: [
        '/assets/gallery/1.jpg',
        '/assets/gallery/2.jpg',
        '/assets/gallery/3.jpg',
        '/assets/gallery/5.jpg'
      ],
      category: 'Congresso'
    },
    {
      id: '5',
      title: 'Treinamento de Triagem Manchester',
      description: 'Capacitação no protocolo de classificação de risco mais utilizado no mundo. Melhore a eficiência do atendimento de emergência.',
      date: '05/03/2025',
      time: '13:30',
      location: 'Sala de Treinamento - CCS',
      participants: 25,
      status: 'upcoming',
      mainImage: '/assets/gallery/5.jpg',
      thumbnails: [
        '/assets/gallery/6.jpg',
        '/assets/gallery/WhatsApp Image 2025-08-08 at 14.16.37.jpeg'
      ],
      category: 'Treinamento'
    }
  ]

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true
    if (filter === 'upcoming') return event.status === 'upcoming' || event.status === 'ongoing'
    if (filter === 'past') return event.status === 'past'
    return true
  })

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-2 inline-flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Todos os Eventos
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === 'upcoming'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Próximos
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === 'past'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Realizados
            </button>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="space-y-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Nenhum evento encontrado</h3>
              <p className="text-gray-600">Não há eventos nesta categoria no momento.</p>
            </motion.div>
          )}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não perca nenhum evento!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Receba notificações sobre novos workshops, cursos e treinamentos diretamente no seu e-mail.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Cadastrar-se para notificações
          </button>
        </motion.div>
      </div>
    </section>
  )
}