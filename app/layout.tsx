import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joaquin Peredo - Desarrollador Backend",
  description:
    "Portafolio profesional de Joaquin Andres Peredo Rodriguez, desarrollador backend especializado en Node.js, Express, PostgreSQL y APIs REST.",
  keywords: "desarrollador backend, Node.js, Express, PostgreSQL, API REST, JavaScript, TypeScript",
  authors: [{ name: "Joaquin Andres Peredo Rodriguez" }],
  openGraph: {
    title: "Joaquin Peredo - Desarrollador Backend",
    description: "Desarrollador backend especializado en crear APIs robustas y eficientes",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-900`}>{children}</body>
    </html>
  )
}
