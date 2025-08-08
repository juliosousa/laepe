import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'LAEPE – UFSC | Liga Acadêmica de Enfermagem Pré‑Hospitalar e Emergência',
  description: 'Liga acadêmica da UFSC focada em APH e Emergência. Ensino, pesquisa e extensão com impacto real na comunidade.',
  keywords: 'LAEPE, UFSC, enfermagem, pré-hospitalar, emergência, liga acadêmica, APH',
  authors: [{ name: 'LAEPE - UFSC' }],
  creator: 'LAEPE - UFSC',
  publisher: 'LAEPE - UFSC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://laepe.ufsc.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LAEPE – UFSC | Liga Acadêmica de Enfermagem Pré‑Hospitalar e Emergência',
    description: 'Liga acadêmica da UFSC focada em APH e Emergência. Ensino, pesquisa e extensão com impacto real na comunidade.',
    url: 'https://laepe.ufsc.br',
    siteName: 'LAEPE – UFSC',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LAEPE - UFSC Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAEPE – UFSC | Liga Acadêmica de Enfermagem Pré‑Hospitalar e Emergência',
    description: 'Liga acadêmica da UFSC focada em APH e Emergência. Ensino, pesquisa e extensão com impacto real na comunidade.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// JSON-LD Schema para Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LAEPE - UFSC',
  alternateName: 'Liga Acadêmica de Enfermagem Pré‑Hospitalar e Emergência',
  url: 'https://laepe.ufsc.br',
  logo: 'https://laepe.ufsc.br/assets/laepe-logo.png',
  description: 'Liga acadêmica da UFSC focada em APH e Emergência. Ensino, pesquisa e extensão com impacto real na comunidade.',
  email: 'laepeufsc@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Florianópolis',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/laepe.ufsc/',
    'https://www.facebook.com/laepe.ufsc/',
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'Universidade Federal de Santa Catarina',
    url: 'https://ufsc.br',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Santa Catarina',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3C3483" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
