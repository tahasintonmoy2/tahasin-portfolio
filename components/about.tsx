"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
    <section className="px-8 md:px-12 py-16 max-w-4xl">
      <div className="about-content">
        <h2 className="text-3xl font-bold mb-8">About</h2>
      </div>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p className="about-text">
          I&apos;m a full-stack developer with 6+ years of experience delivering
          high-quality web applications. I combine technical expertise with a
          client-first approach, focusing on clear communication, meticulous
          execution, and genuine partnership. Whether building scalable backends
          or crafting responsive interfaces, I&apos;m committed to creating
          digital experiences that are reliable, impactful, and built to last.
        </p>
        <p className="about-text">
          Passionate about creating seamless experiences and collaborating with
          quality-driven teams and clients. Let&apos;s bring your vision to life
          with clean code and thoughtful architecture.
        </p>
      </div>
    </section>
  );
}
