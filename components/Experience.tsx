"use client"

import { useEffect, useState } from "react"
import { Briefcase, Calendar, MapPin, Award } from "lucide-react"

interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: "work" | "education" | "freelance"
  description: string
  achievements: string[]
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Desarrollador Backend",
    company: "Proyecto Chequea (Sistema de Noticias)",
    location: "Remoto",
    period: "2025 - Actualidad",
    type: "work",
    description: "Desarrollo de backend para sistema de publicación y gestión de noticias.",
    achievements: [
      "Implementación de autenticación y control de permisos por roles",
      "Desarrollo completo de gestión de contenido",
      "Desarrollo de sockets para ver usuarios activos",
      "Implementación de SSE para notificaciones en tiempo real",
      "Integración de almacenamiento multimedia y endpoints administrativos",
      "Sistema de importación y optimización de imágenes"
    ],
    technologies: ["NestJS", "PostgreSQL", "Prisma", "TypeScript"]
  },
  {
    id: 2,
    title: "Desarrollador Backend",
    company: "Colaboraciones Externas",
    location: "Remoto",
    period: "2024 - 2025",
    type: "freelance",
    description: "Creación de APIs REST en proyectos colaborativos con frontend developers.",
    achievements: [
      "Diseño de lógica de negocio y modelado de datos eficiente",
      "Implementación de endpoints RESTful escalables y documentados",
      "Aplicación de metodologías ágiles en equipos multidisciplinarios",
      "Control de versiones con Git y documentación técnica detallada"
    ],
    technologies: ["Node.js", "Express", "NestJS", "PostgreSQL", "MySQL"]
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [itemsVisible, setItemsVisible] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          experiences.forEach((_, index) => {
            setTimeout(() => setItemsVisible(prev => [...prev, index]), index * 200)
          })
        }
      },
      { threshold: 0.1 }
    )

    const el = document.getElementById("experiencia")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-5 w-5" />
      case "education":
        return <Award className="h-5 w-5" />
      case "freelance":
        return <Briefcase className="h-5 w-5" />
      default:
        return <Briefcase className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-green-600 to-green-700"
      case "education":
        return "from-blue-600 to-blue-700"
      case "freelance":
        return "from-purple-600 to-purple-700"
      default:
        return "from-green-600 to-green-700"
    }
  }

  return (
    <section
      id="experiencia"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-green-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mi <span className="text-green-400">Experiencia</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Un recorrido por mi trayectoria profesional y académica
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-600/50 via-green-500/30 to-transparent hidden md:block"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={exp.id}
                    className={`relative md:flex items-center ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    } transition-all duration-700 ${
                      itemsVisible.includes(index)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {/* Tarjeta */}
                    <div
                      className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-green-800/30 backdrop-blur-sm hover:border-green-600/50 hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300 hover:scale-[1.02] w-full md:w-[45%] ${
                        isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                      }`}
                    >
                      {/* Icono conectado */}
                      <div
                        className={`absolute top-6 ${
                          isLeft ? "-right-8" : "-left-8"
                        } flex items-center justify-center`}
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${getTypeColor(
                            exp.type
                          )} rounded-full flex items-center justify-center text-white border-4 border-gray-900 shadow-lg`}
                        >
                          {getTypeIcon(exp.type)}
                        </div>
                      </div>

                      <div className="mb-2 flex items-center justify-between">
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(
                            exp.type
                          )} text-white text-xs font-medium rounded-full`}
                        >
                          {exp.type === "work"
                            ? "Trabajo"
                            : exp.type === "education"
                            ? "Educación"
                            : "Freelance"}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-green-400 font-medium mb-2">{exp.company}</p>
                      <div
                        className={`flex items-center gap-2 text-sm text-gray-400 ${
                          isLeft ? "justify-end" : "justify-start"
                        } mb-3`}
                      >
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <ul
                        className={`space-y-2 text-sm text-gray-400 ${
                          isLeft ? "text-right" : "text-left"
                        } mb-4`}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            {!isLeft && <span className="text-green-400 mt-1">•</span>}
                            <span>{achievement}</span>
                            {isLeft && <span className="text-green-400 mt-1">•</span>}
                          </li>
                        ))}
                      </ul>
                      {exp.technologies && (
                        <div
                          className={`flex flex-wrap gap-2 ${
                            isLeft ? "justify-end" : "justify-start"
                          }`}
                        >
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full border border-green-800/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
