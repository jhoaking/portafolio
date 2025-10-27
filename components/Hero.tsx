"use client"

import { useEffect, useState } from "react"
import { Github, Mail, MapPin, Globe } from "lucide-react"

interface Particle {
  left: string
  top: string
  delay: string
  duration: string
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // ✅ Generamos partículas solo en el cliente
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }))
    setParticles(generated)

    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-green-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Logo */}
          <div className="mb-8">
            <div
              className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-green-900/50 transition-all duration-1000 delay-300 ${
                isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
              }`}
            >
              JP
            </div>
          </div>

          {/* Nombre */}
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Joaquin Andres{" "}
            <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Peredo Rodriguez
            </span>
          </h1>

          {/* Rol */}
          <p
            className={`text-xl md:text-2xl text-green-400 mb-6 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Desarrollador Backend
          </p>

          {/* Descripción */}
          <p
            className={`text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Soy un desarrollador backend con una sólida base técnica, apasionado por construir APIs robustas,
            eficientes y seguras. Me destaco por escribir código limpio, aplicar buenas prácticas y trabajar en
            equipo.
          </p>

          {/* Idiomas */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-1100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
              <MapPin className="h-5 w-5 text-green-500" />
              <span>Español (Nativo)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
              <Globe className="h-5 w-5 text-green-500" />
              <span>Inglés (A2)</span>
            </div>
          </div>

          {/* Botones */}
          <div
            className={`flex justify-center gap-4 transition-all duration-1000 delay-1300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="mailto:peredoroj@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg shadow-green-900/30 hover:shadow-xl hover:shadow-green-900/40 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              Contactar
            </a>
            <a
              href="https://github.com/jhoaking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-green-600 text-green-400 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Partículas flotantes (solo en cliente) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-500/20 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>
    </section>
  )
}
