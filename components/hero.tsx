"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MapPin } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-location", {
        duration: 0.8,
        opacity: 0,
        y: 15,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".hero-buttons", {
        duration: 0.8,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-8 md:px-12 pt-24 max-w-4xl">
      <div className="space-y-6">
        <div className="hero-title overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            Hi, I&apos;m Tahasin Tonmoy <span className="wave">👋</span>
          </h1>
        </div>

        <div className="hero-location flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          Based in Dhaka, Bangladesh
        </div>

        <div className="hero-buttons flex gap-4 pt-4">
          <a
            href="https://g89awrkuury5wuee.public.blob.vercel-storage.com/Resume-TV0lxxfWTh2mx2AYn8lflwyjLsJDWB.pdf"
            target="_blank"
            className="px-6 py-2 bg-accent text-accent-foreground rounded font-medium hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-2 border border-border text-foreground rounded font-medium hover:border-accent transition-colors"
          >
            View work
          </a>
        </div>
      </div>
    </section>
  );
}
