"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="w-full px-4 md:px-6 h-16 flex items-center justify-between mx-auto">
        <Link href="/" className="font-bold text-xl text-white">
          Portfolio
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#home"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button stays here */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav stays below */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <nav className="flex flex-col p-4 gap-2">
            {["home", "about", "portfolio", "skills", "contact"].map(
              (section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className="px-2 py-2 rounded hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm{" "}
                <span className="text-emerald-500">Per-Emil Johansson</span>
              </h1>
              <p className="max-w-[800px] text-gray-400 md:text-xl">
                Full-stack developer specializing in building exceptional
                digital experiences
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#portfolio" className="text-black">
                  View my work
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://github.com/chimikoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/per-emil-johansson-1648b0278"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[400px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden border-4 border-emerald-500">
              <Image
                src="/cartoon_selfie.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Get to know me and my background
            </p>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 mt-12">
          <div className="flex items-center justify-center">
            <div className="relative h-[500px] w-full max-w-[500px] rounded-lg overflow-hidden">
              <Image
                src="/photo.jpg"
                alt="About me"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold">
              Full-stack Developer
            </h3>
            <p className="text-gray-400">
              I'm a passionate Junior Full-Stack Web Developer transitioning
              from a decade-long culinary career into tech. With strong
              communication, teamwork, and problem-solving skills developed in
              high-pressure kitchens, I now build scalable, user-friendly web
              applications using the MERN stack and modern tools like React,
              Tailwind, and Node.js.
            </p>
            <p className="text-gray-400">
              Currently freelancing, I focus on building responsive and
              performant applications for web and mobile. My recent project,
              TapTrack, is a Point of Sale system tailored for restaurants and
              small businesses—born from my background in hospitality and a love
              for solving real-world problems through code.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you'll find me gaming, exploring new tech, or
              dabbling in digital art and video editing.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-400">Per-Emil Johansson</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-400">chimikoo@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-gray-400">Schwedt/Oder, Germany</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-gray-400">Freelance / Full-time</p>
              </div>
            </div>
            <div className="pt-4">
              <Button variant="outline" asChild>
                <Link href="/Resume_EN_Per-Emil.pdf" download>
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Point of Sale System",
      category: "Business Tools",
      image: "/logo_taptrack.png",
      description:
        "TapTrack streamlines order management and inventory tracking through an intuitive interface built with the MERN stack. Designed with real-world hospitality experience in mind, it helps restaurant staff handle daily operations more efficiently. Features include real-time order processing, inventory updates, and user role management—all optimized for both desktop and tablet use.",
      link: "https://github.com/chimikoo/TapTrack",
    },
    {
      id: 2,
      title: "Tetris Clone",
      category: "Game",
      image: "/tetris_clone.png",
      description:
        "A modern browser-based Tetris game built with React and JavaScript. This project recreates the classic Tetris experience with smooth controls, scoring, and level progression. It features clean component structure, custom hooks for game logic, and pixel-perfect styling using Tailwind CSS. Great for demonstrating state management, game loops, and animation in React.",
      link: "https://github.com/chimikoo/tetris",
    },
    {
      id: 3,
      title: "Warcraft Logs Fight Extractor",
      category: "Dev Tools",
      image: "/logo_wcl.png",
      description:
        "A Node.js script that fetches and processes combat log data from Warcraft Logs using GraphQL. It identifies boss fights in a given report, extracts key information like player deaths (with timestamps), and generates direct links to event and replay views. The data is saved in a structured JSON file, useful for post-raid analysis or building custom raid review tools. Built with Node.js, GraphQL, and the Warcraft Logs API",
      link: "https://github.com/chimikoo/Eclipse",
    },
  ];

  function ExpandableText({ text }) {
    const [expanded, setExpanded] = useState(false);
    const MAX_CHARS = 117;
    const isLong = text.length > MAX_CHARS;
    const preview = text.slice(0, MAX_CHARS);

    return (
      <p
        onClick={() => isLong && setExpanded((prev) => !prev)}
        className={`
          text-sm text-black-400 cursor-pointer transition-all
          ${!expanded ? "line-clamp-3" : ""}
          hover:text-emerald-400
        `}
        title={expanded ? "Click to collapse" : "Click to expand"}
      >
        {expanded || !isLong ? text : `${preview}...`}
      </p>
    );
  }

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Portfolio
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Check out some of my recent projects
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-5 bg-gray-900/60 backdrop-blur-sm text-white">
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-xs font-medium text-gray-300">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                    <div className="mt-2">
                      <ExpandableText text={project.description} />
                    </div>
                    <div className="mt-4 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.link}
                          className="flex items-center gap-1"
                        >
                          View Project <ExternalLink className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "UI/UX Design", level: 65 },
    { name: "Database Management", level: 65 },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive and performant websites using modern technologies.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications with React Native.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and engaging user interfaces and experiences.",
      icon: "🎨",
    },
    {
      title: "API Development",
      description: "Creating robust and scalable APIs for your applications.",
      icon: "⚙️",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              My technical skills and services I offer
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
          <div className="grid gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-800">
                  <div
                    className="h-2 rounded-full bg-emerald-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Services I Offer</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-gray-800 bg-gray-800 p-6 text-gray-100 shadow-sm"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Have a project in mind? Let's work together!
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 mt-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-gray-400">chimikoo@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-gray-400">(+49)176 862 501 80</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-gray-400">Schwedt/Oder, Germany</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-medium mb-4">Follow Me</h3>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/chimikoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-muted transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/per-emil-johansson-1648b0278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-800 bg-gray-800 p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 py-6">
      <div className="w-full px-4 md:px-6 h-1 flex items-center justify-between mx-auto">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Per-Emil Johansson. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">Designed & Built with ❤️</p>
      </div>
    </footer>
  );
}
