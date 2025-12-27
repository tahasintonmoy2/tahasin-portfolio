"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {

  return (
    <section className="px-8 md:px-12 py-16 max-w-4xl">
      <div className="about-content">
        <h2 className="text-3xl font-bold mb-8">About</h2>
      </div>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p className="about-text">
          I&apos;m dedicated to creating web applications that make a real difference. With over 6 years of professional
          experience, my goal is to deliver seamless digital experiences that users love and businesses can rely on. I
          bring expertise in modern frontend development and scalable backend systems, focusing on solving problems
          efficiently and effectively.
        </p>
        <p className="about-text">
          What drives me is the opportunity to collaborate with teams and clients who share a commitment to excellence.
          I believe the best solutions come from truly understanding your goals, then translating them into clean,
          maintainable applications that perform flawlessly. Every project I take on reflects my passion for quality and
          attention to detail.
        </p>
        <p className="about-text">
          Whether building responsive interfaces, architecting reliable backend services, or optimizing application
          performance, I bring a thoughtful approach to every challenge. I&apos;m excited to partner with you on meaningful
          projects that have real impact.
        </p>
      </div>
    </section>
  )
}
