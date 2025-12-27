"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import ContactForm from "./contact-form"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: "power2.out",
      })

      gsap.from(".contact-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        opacity: 0,
        y: 20,
        delay: 0.2,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-8 md:px-12 py-16 max-w-4xl">
      <h2 className="contact-title text-3xl font-bold mb-8">Let&apos;s Connect</h2>
      <p className="contact-text text-muted-foreground mb-12 max-w-2xl leading-relaxed">
        I&apos;m always interested in discussing new projects, creative ideas, and opportunities. Fill out the form below and
        I&apos;ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </section>
  )
}
