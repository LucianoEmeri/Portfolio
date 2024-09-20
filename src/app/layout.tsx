import React from 'react'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luciano Emerí ▸ Portfolio',
  description: 'Bienvenido a mi portfolio. Desarrollador web frontend con experiencia en React, Next.js y tecnologías modernas.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Luciano Emerí ▸ Portfolio',
    description: 'Bienvenido a mi portfolio. Desarrollador web frontend con experiencia en React, Next.js y tecnologías modernas.',
    url: 'https://lucianoemeri.com.ar',
    siteName: 'Portfolio de Luciano Emerí',
    images: [
      {
        url: 'https://lucianoemeri.com.ar/assets/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Luciano Emerí Portfolio',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luciano Emerí ▸ Portfolio',
    description: 'Desarrollador web frontend con experiencia en React, Next.js y tecnologías modernas.',
    images: ['https://lucianoemeri.com.ar/assets/profile.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}