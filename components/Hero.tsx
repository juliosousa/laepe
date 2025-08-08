'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  useEffect(() => {
    // Preload the image to ensure it loads faster
    const img = new window.Image()
    img.src = '/assets/bg.jpg'
    img.onload = () => setImageLoaded(true)
  }, [])
  const bullets = [
    'Treinamentos e simulações realistas',
    'Pesquisa e produção científica aplicadas',
    'Ação comunitária e integração com serviços',
  ]

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

      <div className="container-max relative z-10">
        <motion.div
          className="text-center px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            variants={itemVariants}
          >
            Atendimento Pré‑Hospitalar e Emergência,{' '}
            <span className="text-yellow-300">na prática</span> e com{' '}
            <span className="text-yellow-300">propósito</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            variants={itemVariants}
          >
            A LAEPE – UFSC conecta ensino, pesquisa e extensão para formar profissionais 
            preparados para salvar vidas e transformar a saúde na comunidade.
          </motion.p>

          {/* Bullets */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
            variants={itemVariants}
          >
            {bullets.map((bullet, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 text-white shadow-lg border border-white/20"
              >
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="font-medium">{bullet}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href="/alunos"
              className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 backdrop-blur-sm"
              aria-label="Participar da LAEPE"
            >
              Quero participar da LAEPE
            </Link>
            <button
              onClick={() => {
                document.getElementById('apoie')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
              className="btn-outline text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-200 backdrop-blur-sm shadow-lg"
              aria-label="Apoiar a LAEPE"
            >
              Quero apoiar a LAEPE
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
