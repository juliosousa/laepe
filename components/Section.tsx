'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'primary' | 'secondary'
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background = 'white' 
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
  }

  return (
    <section
      id={id}
      className={`section-padding ${backgroundClasses[background]} ${className}`}
    >
      <motion.div
        className="container-max"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
