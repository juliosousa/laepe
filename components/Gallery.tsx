'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  src: string
  alt: string
  title?: string
}

interface GalleryProps {
  images: GalleryImage[]
  title?: string
  description?: string
}

export default function Gallery({ images, title, description }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      {(title || description) && (
        <div className="text-center">
          {title && (
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          )}
          {description && (
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                className="object-contain max-h-[80vh] rounded-lg"
                priority
              />
              {images[selectedImage].title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                  <p className="text-white text-lg font-medium">
                    {images[selectedImage].title}
                  </p>
                </div>
              )}
            </motion.div>
            
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar galeria"
            >
              ×
            </button>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(
                      selectedImage === 0 ? images.length - 1 : selectedImage - 1
                    )
                  }}
                  aria-label="Imagem anterior"
                >
                  ‹
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(
                      selectedImage === images.length - 1 ? 0 : selectedImage + 1
                    )
                  }}
                  aria-label="Próxima imagem"
                >
                  ›
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
