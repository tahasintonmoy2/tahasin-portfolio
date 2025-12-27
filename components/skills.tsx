"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "React Query",
        "Kotlin",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "REST APIs",
        "Microservices",
        "Docker",
        "GraphQL",
        "Kafka",
        "Redis Cluster",
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "AWS",
        "GitHub Actions",
        "Vercel",
        "Railway",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-8 md:px-12 py-16 max-w-4xl">
      <h2 className="text-3xl font-bold mb-12">Skills</h2>
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((group) => (
          <motion.div
            key={group.category}
            className="skill-category"
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill, idx) => (
                <motion.li
                  key={skill}
                  className="text-muted-foreground cursor-default"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
