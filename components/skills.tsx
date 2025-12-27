"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

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

  return (
    <section ref={sectionRef} className="px-8 md:px-12 pt-8 pb-16 max-w-4xl">
      <h2 className="text-3xl font-bold mb-12">Skills</h2>
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((group) => (
          <div
            key={group.category}
          >
            <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-muted-foreground cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
