'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  participants: number
  status: 'upcoming' | 'ongoing' | 'past'
  mainImage: string
  thumbnails: string[]
  category: string
}

interface EventCardProps {
  event: Event
  index: number
}

export default function EventCard({ event, index }: EventCardProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const statusColors = {
    upcoming: 'bg-green-100 text-green-800 border-green-200',
    ongoing: 'bg-blue-100 text-blue-800 border-blue-200',
    past: 'bg-gray-100 text-gray-600 border-gray-200'
  }

  const statusLabels = {
    upcoming: 'Próximo',
    ongoing: 'Em andamento',
    past: 'Realizado'
  }

  // All images for the event (main + thumbnails)
  const allImages = [event.mainImage, ...event.thumbnails]

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Main Image */}
        <div className="lg:col-span-1">
          <div
            className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer"
            onClick={() => setSelectedImage(0)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src={event.mainImage}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 z-20">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[event.status]}`}>
                {statusLabels[event.status]}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <div className="text-xs text-gray-600 font-medium">{event.category}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {event.description}
            </p>

            {/* Event Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Data e Hora</div>
                  <div className="text-sm font-semibold text-gray-900">{event.date} às {event.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Local</div>
                  <div className="text-sm font-semibold text-gray-900">{event.location}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Participantes</div>
                <div className="text-sm font-semibold text-gray-900">{event.participants} pessoas</div>
              </div>
            </div>
          </div>

          {/* Thumbnails and Action Button */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Galeria do Evento</span>
                {event.thumbnails.length > 4 && (
                  <span className="text-xs text-primary font-medium">+{event.thumbnails.length - 4} fotos</span>
                )}
              </div>
              <div className="flex gap-2">
                {event.thumbnails.slice(0, 4).map((thumb, idx) => (
                  <motion.div
                    key={idx}
                    className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(idx + 1)}
                  >
                    <Image
                      src={thumb}
                      alt={`${event.title} - Foto ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
                {event.thumbnails.length > 4 && (
                  <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <span className="text-sm font-semibold text-gray-600">+{event.thumbnails.length - 4}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-gray-100">
              {(event.status === 'upcoming' || event.status === 'ongoing') ? (
                <motion.button
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  INSCREVA-SE
                </motion.button>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-200 text-gray-500 font-bold py-3 px-6 rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  INSCRIÇÕES ENCERRADAS
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      </motion.div>

      {/* Simple Lightbox - Outside of card */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="relative">
            <Image
              src={allImages[selectedImage]}
              alt={`${event.title} - Foto`}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] max-w-[90vw]"
              priority
            />

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}