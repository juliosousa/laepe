'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const subjects = [
  { value: 'parcerias', label: 'Parcerias' },
  { value: 'patrocinio', label: 'Patrocínio' },
  { value: 'alunos', label: 'Alunos' },
  { value: 'imprensa', label: 'Imprensa' },
  { value: 'outros', label: 'Outros' },
]

interface ContactFormProps {
  defaultSubject?: string
}

export default function ContactForm({ defaultSubject }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: defaultSubject ?? '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.subject) {
      newErrors.subject = 'Assunto é obrigatório'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="max-w-4xl w-full">
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nome completo *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white text-gray-900 placeholder-gray-500 text-lg ${
              errors.name ? 'border-red-500' : 'border-gray-300 focus:border-primary'
            }`}
            placeholder="Seu nome completo"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white text-gray-900 placeholder-gray-500 text-lg ${
              errors.email ? 'border-red-500' : 'border-gray-300 focus:border-primary'
            }`}
            placeholder="seu@email.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Assunto *
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className={`w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors bg-white text-gray-900 text-lg ${
              errors.subject ? 'border-red-500' : 'border-gray-300 focus:border-primary'
            }`}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          >
            <option value="">Selecione um assunto</option>
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-red-600">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={5}
            className={`w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-vertical bg-white text-gray-900 placeholder-gray-500 text-lg ${
              errors.message ? 'border-red-500' : 'border-gray-300 focus:border-primary'
            }`}
            placeholder="Conte-nos mais sobre sua mensagem..."
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-xl py-5 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Enviar mensagem"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <p className="text-green-800 font-medium">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-800 font-medium">
              Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo e-mail.
            </p>
          </motion.div>
        )}
      </motion.form>
    </div>
  )
}
