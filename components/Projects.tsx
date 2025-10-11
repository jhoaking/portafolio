"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Play, X } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  achievement: string
  videoUrl: string
  githubUrl?: string
  liveUrl?: string
  gridClass: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Autenticación Moderna",
    description:
      "Sistema de autenticación avanzado que integra métodos como JWT, OAuth2, Two-Factor Authentication y Magic Link. Desarrollado con NestJS y PostgreSQL siguiendo principios SOLID.",
    technologies: ["NestJS", "PostgreSQL", "TypeScript", "JWT", "OAuth2"],
    achievement:
      "Demuestra la implementación de estrategias modernas de seguridad y autenticación utilizadas en entornos empresariales.",
    videoUrl: "/placeholder.svg?height=300&width=400",
    githubUrl: "https://github.com/jhoaking/Sistema-de-autenticaci-n-moderna",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Plataforma de Seguimiento y Automatización de Servicios",
    description:
      "Backend orientado a la automatización de flujos mediante integración con n8n. Gestiona usuarios, tareas y notificaciones en tiempo real con autenticación centralizada.",
    technologies: ["Node.js", "Express", "MySQL", "Socket.io", "n8n"],
    achievement:
      "Conectó la API con flujos automáticos que ejecutan tareas del backend de forma autónoma, reduciendo intervención manual y errores operativos.",
    videoUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/jhoaking/seguimiento-Servicios",
    gridClass: "md:col-span-1",
  },
  {
    id: 3,
    title: "Pulse-hub",
    description:
      "Aplicación backend en tiempo real basada en WebSockets, diseñada para equipos de trabajo. Incluye chat, tareas compartidas y control de roles con autenticación.",
    technologies: ["NestJS", "PostgreSQL", "WebSockets", "JWT"],
    achievement:
      "Proporciona colaboración instantánea y monitoreo de datos en vivo con arquitectura modular escalable.",
    videoUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/jhoaking/Pulse-hub",
    gridClass: "md:col-span-1",
  },
  {
    id: 4,
    title: "WorkShowApp",
    description:
      "Proyecto colaborativo junto a un desarrollador full-stack. Participé en la implementación de la lógica backend para la gestión de usuarios, proyectos y tareas.",
    technologies: ["Node.js", "Express", "PostgreSQL", "TypeScript"],
    achievement:
      "Estructuró endpoints y controladores para mejorar la escalabilidad y mantenibilidad del sistema.",
    videoUrl: "/placeholder.svg?height=200&width=300",
    githubUrl: "https://github.com/BernardoPer19/WorkShowApp",
    gridClass: "md:col-span-2",
  },
]


export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setCardsVisible(true), 300)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("proyectos")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="proyectos"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-green-900/20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proyectos <span className="text-green-400">Destacados</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades en desarrollo backend
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${project.gridClass} bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-green-800/30 backdrop-blur-sm hover:border-green-600/50 hover:shadow-xl hover:shadow-green-900/20 transition-all duration-500 overflow-hidden group cursor-pointer hover:scale-[1.02] ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 bg-gradient-to-br from-green-900/20 to-gray-800/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.videoUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:from-gray-900/60 transition-all duration-500 flex items-center justify-center">
                    <Play className="h-12 w-12 text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-400 text-sm rounded-full border border-gray-700/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-green-800/30">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-gray-800/80 hover:bg-gray-700 rounded-full p-2 transition-colors duration-200 border border-green-800/30"
              >
                <X className="h-6 w-6 text-gray-300" />
              </button>

              <div className="relative h-64 md:h-80 bg-gradient-to-br from-green-900/20 to-gray-800/50 overflow-hidden">
                <img
                  src={selectedProject.videoUrl || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Tecnologías utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full font-medium border border-green-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Logros del proyecto</h4>
                  <p className="text-gray-300 bg-gradient-to-r from-green-900/20 to-gray-800/20 p-4 rounded-lg border border-green-800/30">
                    {selectedProject.achievement}
                  </p>
                </div>

                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-700"
                    >
                      <Github className="h-5 w-5" />
                      Ver Código
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
