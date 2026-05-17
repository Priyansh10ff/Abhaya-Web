import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhaya — The app that has your back',
  description: 'Safety, legal rights, evidence vault, health and more — all in one app built for women in India, for when the system fails you.',
  keywords: ['women safety India', 'legal rights women', 'safety app India', 'women empowerment'],
  authors: [{ name: 'Abhaya Team' }],
  openGraph: {
    title: 'Abhaya — The app that has your back',
    description: 'Safety, legal rights, evidence vault, health — one app. Built for when the system fails you.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhaya — The app that has your back',
    description: 'Safety, legal rights, evidence vault, health — one app. Built for when the system fails you.',
  },
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-cream antialiased">
        {children}
      </body>
    </html>
  )
}
