"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const projects = [
    {
      title: "OTT Platform (Currently in Development)",
      description:
        "Full-stack development of a streaming service with user authentication, content management, payment integration, subscription handling, responsive design, custom video player with DRM support and custom video pipeline, offline viewing capabilities, ensuring a seamless user experience across devices, and scalability to handle a large user base.",
      technologies: [
        "Next.js",
        "Spring Boot",
        "PostgreSQL",
        "Stripe",
        "TypeScript",
      ],
      link: "#",
      actionLabel: "View Project",
      actionLabelDisable: false,
      disableButton: true,
      repoLink: "https://github.com/tahasintonmoy2/iqnixtv",
      repoActionLabel: "View source code",
    },
    {
      title: "Issue & Project Tracking Software",
      description:
        "Developed a comprehensive issue and project tracking application featuring task management, real-time collaboration, customizable workflows, and detailed reporting tools to enhance team productivity and project visibility, utilizing a modern tech stack for optimal performance and scalability, ensuring seamless user experience across devices.",
      technologies: ["Next.js", "TypeScript", "Appwrite", "REST APIs"],
      link: "https://noze-one.vercel.app/auth/sign-in",
      actionLabel: "View Project",
      repoLink: "https://github.com/tahasintonmoy2/noze",
      repoActionLabel: "View source code",
      actionLabelDisable: true,
      disableButton: true,
    },
    {
      title: "Learning Management System",
      description:
        "Developed a robust learning management system (LMS) that enables educators to create, manage, and deliver online courses effectively. The platform includes features such as user authentication, course creation tools, multimedia content support, quizzes and assessments, progress tracking, and discussion forums to facilitate interactive learning experiences.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "REST APIs"],
      link: "#",
      actionLabel: "View Project",
      repoLink: "https://github.com/tahasintonmoy2/lms",
      repoActionLabel: "View source code",
      actionLabelDisable: false,
      disableButton: true,
    },
    {
      title: "Content Management System (Currently in Development)",
      description:
        "CMS with intuitive admin interface and powerful API for content management and delivery, featuring role-based access control, versioning, media management, and SEO optimization tools to streamline content workflows and enhance digital presence.",
      technologies: [
        "Next.js",
        "Spring Boot",
        "GraphQL",
        "DynamoDB",
        "TypeScript",
      ],
      link: "#",
      actionLabel: "View Project",
      actionLabelDisable: false,
      disableButton: true,
      repoLink: "https://github.com/tahasintonmoy2/iqnix-cms",
      repoActionLabel: "View source code",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        duration: 0.6,
        opacity: 0,
        y: 40,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-8 md:px-12 py-16 max-w-4xl">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            className="project-card group border border-border rounded bg-card p-6"
            whileHover={{
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              borderColor: "var(--accent)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.h3
              className="text-lg font-semibold text-foreground mb-2"
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="text-xs px-2 py-1 bg-background border border-border rounded text-muted-foreground"
                  whileHover={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--accent)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Link href={project.link} target="_blank">
                <button
                  className="px-2 py-1 bg-accent text-card rounded font-medium cursor-pointer flex items-center gap-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={project.actionLabelDisable !== true}
                >
                  {project.actionLabel}
                  <ExternalLink className="size-4" />
                </button>
              </Link>
              <Link href={project.repoLink} target="_blank">
                <button
                  className="px-2 py-1 bg-accent text-card rounded font-medium cursor-pointer flex items-center gap-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={project.disableButton !== true}
                >
                  {project.repoActionLabel}
                  <ExternalLink className="size-4" />
                </button>
              </Link>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
