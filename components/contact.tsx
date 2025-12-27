"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  return (
    <div className="gap-4 mx-4 mb-4">
      <section className="px-8 md:px-12 max-w-4xl">
        <h2 className="contact-title text-3xl font-bold mb-4">
          Let&apos;s Connect
        </h2>
        <p className="contact-text text-muted-foreground max-w-2xl leading-relaxed">
          I&apos;m always interested in discussing new projects, creative ideas,
          and opportunities. Fill out the form below and I&apos;ll get back to
          you as soon as possible.
        </p>
      </section>
      <div className="flex items-center gap-4 mx-8 md:mx-12 mb-8 mt-4">
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
            href: "https://instagram.com/tahasin_x72",
            Icon: FaInstagram,
            label: "Instagram",
          },
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
      <div className="my-4 flex justify-center items-center">
        ©<p className="ml-1">{new Date().getFullYear()} Tahasin Tonmoy</p>
      </div>
    </div>
  );
}
