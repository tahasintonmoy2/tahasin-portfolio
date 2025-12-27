"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar Navigation */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Hero />

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
    </div>
  )
}
