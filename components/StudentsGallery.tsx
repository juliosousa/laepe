'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    title: 'Simulação de Atendimento Pré-Hospitalar',
    category: 'simulacoes',
    description: 'Treinamento prático com manequins e equipamentos profissionais'
  },
  {
    id: 2,
    title: 'Capacitação em Primeiros Socorros',
    category: 'capacitacoes',
    description: 'Workshop sobre técnicas de primeiros socorros para a comunidade'
  },
  {
    id: 3,
    title: 'Parceria com SAMU',
    category: 'parcerias',
    description: 'Visita técnica e intercâmbio com equipes do SAMU'
  },
  {
    id: 4,
    title: 'Pesquisa em Emergência',
    category: 'pesquisa',
    description: 'Apresentação de projeto de pesquisa em congresso nacional'
  },
  {
    id: 5,
    title: 'Ação de Extensão na Comunidade',
    category: 'extensao',
    description: 'Educação em saúde e prevenção de acidentes em escolas'
  },
  {
    id: 6,
    title: 'Integração de Novos Membros',
    category: 'eventos',
    description: 'Cerimônia de integração dos novos ligantes'
  },
  {
    id: 7,
    title: 'Treinamento com Bombeiros',
    category: 'parcerias',
    description: 'Capacitação em resgate e atendimento em situações de emergência'
  },
  {
    id: 8,
    title: 'Simulação Multiprofissional',
    category: 'simulacoes',
    description: 'Treinamento integrado com estudantes de medicina e fisioterapia'
  },
  {
    id: 9,
    title: 'Feira de Profissões',
    category: 'eventos',
    description: 'Participação em feira apresentando a enfermagem de emergência'
  }
]

const categories = [
  { id: 'todas', label: 'Todas as fotos', count: galleryItems.length },
  { id: 'simulacoes', label: 'Simulações', count: galleryItems.filter(item => item.category === 'simulacoes').length },
  { id: 'capacitacoes', label: 'Capacitações', count: galleryItems.filter(item => item.category === 'capacitacoes').length },
  { id: 'parcerias', label: 'Parcerias', count: galleryItems.filter(item => item.category === 'parcerias').length },
  { id: 'pesquisa', label: 'Pesquisa', count: galleryItems.filter(item => item.category === 'pesquisa').length },
  { id: 'extensao', label: 'Extensão', count: galleryItems.filter(item => item.category === 'extensao').length },
  { id: 'eventos', label: 'Eventos', count: galleryItems.filter(item => item.category === 'eventos').length }
]

export default function StudentsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('todas')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = selectedCategory === 'todas' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
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
          Galeria da LAEPE
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Acompanhe os momentos marcantes, atividades e conquistas dos nossos ligantes
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category.label} ({category.count})
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={selectedCategory} // Re-trigger animation on category change
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(item.id)}
          >
            <div className="relative bg-gray-100 aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Placeholder for actual image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-700 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <p className="text-sm font-medium">Ver detalhes</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Modal Placeholder */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-gray-100 aspect-video rounded-xl flex items-center justify-center mb-4">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Imagem será carregada aqui</p>
                </div>
              </div>
              
              <p className="text-foreground/80">
                {galleryItems.find(item => item.id === selectedImage)?.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Quer fazer parte dessas experiências?
        </h3>
        <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
          Junte-se à LAEPE e viva momentos únicos de aprendizado, crescimento e networking 
          que marcarão sua formação profissional.
        </p>
        <button
          onClick={() => {
            document.getElementById('inscricao')?.scrollIntoView({ 
              behavior: 'smooth' 
            })
          }}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          Participar da LAEPE
        </button>
      </motion.div>
    </div>
  )
}