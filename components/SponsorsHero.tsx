'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SponsorsHero() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Green Overlay */}
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
          onError={() => setImageLoaded(true)}
          priority
        />
        {/* Fallback gradient background if image doesn't load */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800"></div>
        )}
        {/* Blue-Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 to-green-700/85"></div>
        {/* Additional Dark Overlay for Better Text Contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
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
          className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="font-medium">Patrocínio e Investimento Social</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Invista na formação de quem{' '}
            <span className="text-yellow-300">salva vidas</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Patrocinar a LAEPE – UFSC é apoiar educação, ciência e impacto social 
            no Atendimento Pré-Hospitalar e Emergência.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <button
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Quero patrocinar agora
            </button>
            <button
              onClick={() => {
                document.getElementById('contato')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
              className="inline-flex items-center gap-3 border-2 border-green-500 text-white hover:bg-green-600 hover:border-green-600 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Falar com a equipe
            </button>
          </motion.div>

          {/* Mini Prova Social */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <p className="text-white/90 text-lg">
              <strong className="text-yellow-300">Com o apoio</strong> de parceiros como SAMU, PRF e instituições de saúde, 
              já formamos <strong className="text-yellow-300">centenas de alunos</strong> e realizamos{' '}
              <strong className="text-yellow-300">dezenas de ações comunitárias</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
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