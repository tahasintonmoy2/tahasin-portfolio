"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Turing",
      period: "2025 – Present",
      description:
        "Lead development of scalable microservices architecture. Architected and deployed production systems serving 100k+ users using React, Next.js, and Spring Boot.",
    },
    {
      role: "Full Stack Engineer",
      company: "Freelance",
      period: "2020 – 2023",
      description:
        "Built MVP to production-ready platform. Implemented real-time features using WebSockets and optimized database queries for 10x performance improvement.",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-item", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        duration: 0.6,
        opacity: 0,
        x: -30,
        stagger: 0.2,
        ease: "power2.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-8 md:px-12 py-16 max-w-4xl">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div ref={timelineRef} className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item border-l border-border pl-6 pb-6 last:pb-0"
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <motion.h3
                  className="text-lg font-semibold text-foreground"
                  whileHover={{ color: "var(--accent)" }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.role}
                </motion.h3>
                <p className="text-sm text-accent">{exp.company}</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
