import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Technologies from "@/components/Technologies"
import Contact from "@/components/Contact"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-green-900">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  )
}
