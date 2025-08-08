'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface StatItem {
  number: string
  label: string
  suffix?: string
}

interface StatsProps {
  stats: StatItem[]
  className?: string
}

export default function Stats({ stats, className = '' }: StatsProps) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const target = parseInt(stat.number.replace(/\D/g, ''))
      const increment = target / 50
      let current = 0

      return setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(intervals[index])
        }
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, 30)
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [stats])

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="mb-4">
            <span className="text-4xl md:text-5xl font-bold text-primary">
              {counts[index]}
              {stat.suffix}
            </span>
          </div>
          <p className="text-lg text-foreground font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
