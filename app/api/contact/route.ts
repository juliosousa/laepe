import { NextRequest, NextResponse } from 'next/server'

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateContactData(data: ContactData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres')
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('E-mail inválido')
  }

  if (!data.subject || data.subject.trim().length === 0) {
    errors.push('Assunto é obrigatório')
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message }: ContactData = body

    // Validação dos dados
    const validation = validateContactData({ name, email, subject, message })
    
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          errors: validation.errors 
        },
        { status: 400 }
      )
    }

    // Aqui você pode adicionar a lógica para enviar o e-mail
    // Por exemplo, usando um serviço como SendGrid, Nodemailer, etc.
    
    // Simulação de envio de e-mail (mock)
    console.log('Nova mensagem de contato:', {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    })

    // Em produção, você implementaria o envio real do e-mail aqui
    // await sendEmail({
    //   to: 'laepeufsc@gmail.com',
    //   subject: `Nova mensagem de contato: ${subject}`,
    //   text: `
    //     Nome: ${name}
    //     E-mail: ${email}
    //     Assunto: ${subject}
    //     Mensagem: ${message}
    //   `
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao processar contato:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        errors: ['Erro interno do servidor. Tente novamente mais tarde.'] 
      },
      { status: 500 }
    )
  }
}

// Método GET não permitido
export async function GET() {
  return NextResponse.json(
    { error: 'Método não permitido' },
    { status: 405 }
  )
}
