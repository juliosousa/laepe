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

    // Preparar dados para envio
    const contactData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    }

    // Log local
    console.log('Nova mensagem de contato:', contactData)

    // Enviar para o webhook com autenticação básica
    try {
      const webhookUrl = 'https://auto.artificia.com.br/webhook/6e3bf6fb-daba-4c40-ac5f-258056a8fb20'
      const username = process.env.WEBHOOK_USERNAME
      const password = process.env.WEBHOOK_PASSWORD

      if (!username || !password) {
        console.error('⚠️ WEBHOOK: Credenciais não configuradas nas variáveis de ambiente')
        console.error('Configure WEBHOOK_USERNAME e WEBHOOK_PASSWORD no arquivo .env')
        // Continua mesmo sem as credenciais - não bloqueia o envio do formulário
      }

      console.log('📤 WEBHOOK: Iniciando envio para webhook externo...')
      console.log(`   URL: ${webhookUrl}`)
      console.log(`   Dados: ${JSON.stringify(contactData, null, 2)}`)

      // Criar o header de autenticação básica
      const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')

      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader
        },
        body: JSON.stringify(contactData)
      })

      if (!webhookResponse.ok) {
        console.error('❌ WEBHOOK: Falha no envio')
        console.error(`   Status: ${webhookResponse.status}`)
        console.error(`   StatusText: ${webhookResponse.statusText}`)

        // Tentar ler o corpo da resposta de erro
        try {
          const errorBody = await webhookResponse.text()
          if (errorBody) {
            console.error(`   Resposta: ${errorBody}`)
          }
        } catch (e) {
          // Ignora se não conseguir ler o corpo
        }
        // Continua mesmo se o webhook falhar - não bloqueia o envio do formulário
      } else {
        console.log('✅ WEBHOOK: Enviado com sucesso!')
        console.log(`   Status: ${webhookResponse.status}`)

        // Tentar ler o corpo da resposta de sucesso
        try {
          const responseBody = await webhookResponse.text()
          if (responseBody) {
            console.log(`   Resposta: ${responseBody}`)
          }
        } catch (e) {
          // Ignora se não conseguir ler o corpo
        }
      }
    } catch (webhookError) {
      console.error('❌ WEBHOOK: Erro ao conectar com o webhook')
      console.error(`   Erro: ${webhookError}`)
      console.error(`   Tipo: ${webhookError instanceof Error ? webhookError.message : 'Erro desconhecido'}`)
      // Continua mesmo se o webhook falhar - não bloqueia o envio do formulário
    }

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
