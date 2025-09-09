import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeepTrust Instagram Demo',
  description: 'AI-powered deepfake detection system for Instagram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
