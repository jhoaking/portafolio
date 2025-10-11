"use client"

import { useEffect, useState } from "react"

const technologies = [
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🗄️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "JWT", icon: "🔐" },
  { name: "Jest", icon: "🧪" },
  { name: "Redis", icon: "🔴" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📝" },
  { name: "REST APIs", icon: "🌐" },
  { name: "Socket.io", icon: "⚡" },
]

export default function Technologies() {
  const [isVisible, setIsVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setCardsVisible(true), 500)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("tecnologias")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tecnologias" className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-green-400">Tecnologías</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Herramientas y tecnologías que domino para crear soluciones backend robustas
            </p>
          </div>

          {/* Infinite Slider */}
          <div className="relative mb-16">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 mx-4 bg-gradient-to-br from-gray-800/50 to-green-900/20 rounded-2xl p-6 border border-green-800/30 backdrop-blur-sm hover:border-green-600/50 hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300 min-w-[200px] hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Backend Development",
                description: "Especializado en crear APIs REST robustas, seguras y escalables con Node.js y Express",
              },
              {
                title: "Base de Datos",
                description:
                  "Experiencia en diseño y optimización de bases de datos relacionales con PostgreSQL y MySQL",
              },
              {
                title: "Testing & Quality",
                description:
                  "Implementación de pruebas unitarias e integración con Jest para garantizar código de calidad",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gradient-to-br from-gray-800/50 to-green-900/20 rounded-2xl border border-green-800/30 backdrop-blur-sm hover:border-green-600/50 hover:shadow-lg hover:shadow-green-900/20 transition-all duration-500 hover:scale-105 ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-green-400 mb-3">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
