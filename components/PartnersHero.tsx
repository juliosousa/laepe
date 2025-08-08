'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function PartnersHero() {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  useEffect(() => {
    // Preload the image to ensure it loads faster
    const img = new window.Image()
    img.src = '/assets/bg.jpg'
    img.onload = () => setImageLoaded(true)
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Effects */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/assets/bg.jpg"
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            // If image fails to load, still show the background with gradients
            setImageLoaded(true)
          }}
          priority
        />
        {/* Fallback gradient background if image doesn't load */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-secondary"></div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90"></div>
        {/* Additional Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
      </motion.div>
      
      {/* Pattern Overlay for Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-yellow-300/10 rounded-full blur-xl"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white mb-8"
            variants={itemVariants}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-medium">Parcerias Institucionais</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Juntos, podemos salvar mais{' '}
            <span className="text-yellow-300">vidas</span> e formar{' '}
            <span className="text-yellow-300">profissionais</span> melhores.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Parcerias estratégicas para treinamento, extensão e impacto social.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A LAEPE – UFSC integra ensino, pesquisa e extensão para capacitar futuros enfermeiros 
            em Atendimento Pré-Hospitalar e Emergência. Ao se tornar parceiro, sua instituição se 
            conecta a uma universidade de referência e contribui para o fortalecimento da saúde e 
            segurança da comunidade.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Quero ser parceiro da LAEPE
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Saiba mais</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}