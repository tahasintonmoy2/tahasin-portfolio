"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({
  activeSection,
  setActiveSection,
}: SidebarProps) {
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-background border-r border-border flex-col justify-between p-8 sticky top-0 h-screen">
      <div>
        {/* Navigation with enhanced active state styling */}
        <nav className="space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                `block text-sm font-medium transition-all duration-200 cursor-pointer`,
                activeSection === item.id
                  ? "text-accent border-l-2 border-accent pl-3"
                  : "text-muted-foreground hover:text-foreground pl-3"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <div className="contact-actions flex gap-4 mb-4">
          <motion.a
            href="https://g89awrkuury5wuee.public.blob.vercel-storage.com/Resume.pdf"
            target="_blank"
            download="Resume_Tahasin_Tonmoy.pdf"
            className="px-6 py-3 border border-border text-foreground rounded font-medium"
            whileHover={{
              borderColor: "var(--accent)",
              backgroundColor: "var(--card)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            Download Resume
          </motion.a>
        </div>
        <div className="flex gap-4">
          {[
            {
              href: "https://github.com/tahasintonmoy2",
              Icon: LuGithub,
              label: "GitHub",
            },
            // {
            //   href: "https://linkedin.com/tahasin-tonmoy-730129392",
            //   Icon: Linkedin,
            //   label: "LinkedIn",
            // },
            {
              href: "https://x.com/tahasintonmoy",
              Icon: FaXTwitter,
              label: "Twitter",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              aria-label={social.label}
            >
              <social.Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
