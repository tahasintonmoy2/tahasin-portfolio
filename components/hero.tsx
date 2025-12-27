"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { MapPin } from "lucide-react"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-location", {
        duration: 0.8,
        opacity: 0,
        y: 15,
        ease: "power3.out",
        delay: 0.5,
      })

      gsap.from(".hero-buttons", {
        duration: 0.8,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        delay: 0.6,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="px-8 md:px-12 pt-24 max-w-4xl">
      <div className="space-y-6">
        <div className="hero-title overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            Hi, I&apos;m Tahasin Tonmoy <span className="wave">👋</span>
          </h1>
        </div>

        <div className="hero-subtitle overflow-hidden">
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I design and build full-stack web applications that work beautifully and perform reliably. Frontend
            expertise in React and Next.js creates smooth, responsive user experiences. Backend mastery with Java Spring
            Boot ensures scalable, secure, and maintainable systems. Let&apos;s bring your vision to life with clean code and
            thoughtful architecture.
          </p>
        </div>

        <div className="hero-location flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4"/>
          Based in Dhaka, Bangladesh
        </div>

        <div className="hero-buttons flex gap-4 pt-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-accent text-accent-foreground rounded font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-border text-foreground rounded font-medium hover:border-accent transition-colors"
          >
            View work
          </a>
        </div>
      </div>
    </section>
  )
}
