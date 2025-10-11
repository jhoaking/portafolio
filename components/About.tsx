"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Code, Users, Target } from "lucide-react"

export default function About() {
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

    const element = document.getElementById("sobre-mi")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Code,
      title: "Código Limpio",
      description: "Escribo código mantenible siguiendo las mejores prácticas de desarrollo",
    },
    {
      icon: Target,
      title: "APIs Robustas",
      description: "Especializado en crear APIs eficientes, seguras y escalables",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboro efectivamente en equipos multidisciplinarios",
    },
    {
      icon: GraduationCap,
      title: "Aprendizaje Continuo",
      description: "Siempre actualizándome con las últimas tecnologías",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sobre <span className="text-green-400">mí</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Actualmente sigo formándome como ingeniero informático, combinando teoría y práctica en proyectos reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className={`transition-all duration-1000 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Mi Trayectoria</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="font-semibold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      Estudiante de Ingeniería Informática
                    </h4>
                    <p className="text-gray-400">Actualmente cursando la carrera, enfocándome en desarrollo backend</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div>
                    <h4 className="font-semibold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      Técnico Medio en Sistemas Informáticos
                    </h4>
                    <p className="text-gray-400">Base sólida en fundamentos de programación y sistemas</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-gray-800/50 to-green-900/20 p-8 rounded-2xl border border-green-800/30 backdrop-blur-sm transition-all duration-1000 delay-500 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Mi Enfoque</h3>
              <p className="text-gray-300 leading-relaxed">
                Me apasiona crear soluciones backend robustas y eficientes. Creo firmemente en la importancia del código
                limpio, las buenas prácticas y la colaboración en equipo. Cada proyecto es una oportunidad para aprender
                y mejorar mis habilidades técnicas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-green-800/30 backdrop-blur-sm hover:border-green-600/50 hover:shadow-lg hover:shadow-green-900/20 transition-all duration-500 hover:scale-105 ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 700}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg flex items-center justify-center mb-4 border border-green-700/30">
                  <highlight.icon className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
