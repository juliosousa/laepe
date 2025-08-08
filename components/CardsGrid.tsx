'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Card {
  title: string
  description: string
  icon?: ReactNode
  className?: string
}

interface CardsGridProps {
  cards: Card[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

export default function CardsGrid({ 
  cards, 
  columns = 3, 
  className = '' 
}: CardsGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6 lg:gap-8 ${className}`}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={`card ${card.className || ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          {card.icon && (
            <div className="mb-4 text-primary text-3xl">
              {card.icon}
            </div>
          )}
          <h3 className="text-xl font-bold text-foreground mb-3">
            {card.title}
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
