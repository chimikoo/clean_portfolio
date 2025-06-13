"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const techIconMap = {
    react: "devicon-react-original",
    nodejs: "devicon-nodejs-plain",
    express: "devicon-express-original",
    mongodb: "devicon-mongodb-plain",
    javascript: "devicon-javascript-plain",
    tailwindcss: "devicon-tailwindcss-plain",
    graphql: "devicon-graphql-plain",
    threejs: "devicon-threejs-original",
    typescript: "devicon-typescript-plain",
    sanity: "devicon-sanity-plain colored",
    nextjs: "devicon-nextjs-plain",
  };

  const projects = [
    {
      id: 1,
      title: "Point of Sale System",
      category: "Business Tools",
      image: "/logo_taptrack.png",
      description:
        "TapTrack streamlines order management and inventory tracking through an intuitive interface built with the MERN stack. Designed with real-world hospitality experience in mind, it helps restaurant staff handle daily operations more efficiently. Features include real-time order processing, inventory updates, and user role management—all optimized for both desktop and tablet use.",
      link: "https://github.com/chimikoo/TapTrack",
      videoLink: "https://www.youtube.com/watch?v=CY5McmNfGuM",
      techStack: ["react", "nodejs", "mongodb", "express", "tailwindcss"],
    },
    {
      id: 2,
      title: "Tetris Clone",
      category: "Game",
      image: "/tetris_clone.png",
      description:
        "A modern browser-based Tetris game built with React and JavaScript. This project recreates the classic Tetris experience with smooth controls, scoring, and level progression. It features clean component structure, custom hooks for game logic, and pixel-perfect styling using Tailwind CSS. Great for demonstrating state management, game loops, and animation in React.",
      link: "https://tetris-three-brown.vercel.app/",
      techStack: ["react", "javascript", "tailwindcss", "threejs"],
    },
    {
      id: 3,
      title: "Warcraft Logs Fight Extractor",
      category: "Dev Tools",
      image: "/logo_wcl.png",
      description:
        "A Node.js script that fetches and processes combat log data from Warcraft Logs using GraphQL. It identifies boss fights in a given report, extracts key information like player deaths (with timestamps), and generates direct links to event and replay views. The data is saved in a structured JSON file, useful for post-raid analysis or building custom raid review tools. Built with Node.js, GraphQL, and the Warcraft Logs API.",
      link: "https://github.com/chimikoo/Eclipse",
      techStack: ["nodejs", "graphql", "javascript"],
    },
    {
      id: 4,
      title: "Handyman Pro Website",
      category: "Web Development",
      image: "/handyman.png",
      description:
        "A professional services website built to showcase handyman services. Developed with Next.js for fast and optimized rendering, styled using Tailwind CSS for a clean and responsive design. Sanity.io serves as the headless CMS, allowing dynamic content updates without redeploying the site. Deployed and hosted seamlessly on Vercel.",
      videoLink: "https://handyman-pro-sand.vercel.app/",
      techStack: ["nextjs", "react", "tailwindcss", "sanity", "typescript"],
    },
    {
      id: 5,
      title: "CoinSpin App",
      category: "Web Development",
      image: "/coinspin.png",
      description:
        "An interactive web app featuring smooth spritesheet animation rendered with the Canvas. Built with Vite and TypeScript for fast and efficient development. Styled using Tailwind CSS for a clean and minimal look. Demonstrates frame-by-frame animation techniques typically used in web games. Deployed and hosted seamlessly on Vercel.",
      videoLink: "https://coinspin-app.vercel.app/",
      techStack: ["vite", "tailwindcss", "react", "typescript"],
    },
    {
      id: 6,
      title: "Cultura",
      category: "Web Development",
      image: "/cultura.png",
      description:
        "A sleek, user-friendly web app focused on fostering a positive customer‑centric mindset within organizations. This project showcases an interactive digital resource that presents key concepts, guidelines, and best practices for building a strong customer service culture. Built with TypeScript for fast and efficient development. Styled using Tailwind CSS for a clean and minimal look. Sanity to serve as the headless CMS, allowing dynamic content updates without redeploying the site. Deployed and hosted seamlessly on Vercel.",
      videoLink: "https://culturaclient.vercel.app",
      techStack: ["tailwindcss", "react", "typescript", "sanity"],
    },
        {
      id: 7,
      title: "PC BuilderShop",
      category: "Web Development",
      image: "/pc_builder.png",
      description:
        "A modern web application that allows users to configure and customize their own PC builds from a curated selection of components. Users can choose compatible parts across categories like CPU, GPU, RAM, and storage, simulating a real-world PC-building experience. The site features a responsive design, real-time compatibility checks, and an intuitive user interface. Built with Next.js and TypeScript for fast and efficient development. Styled using Tailwind CSS for a clean and minimal look. Deployed and hosted seamlessly on Vercel.",
      videoLink: "https://pc-builder-shop-t3x4.vercel.app/",
      techStack: ["tailwindcss", "react", "typescript", "mongodb", "nextjs"],
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
        className={`text-sm text-gray-300 cursor-pointer transition-all ${
          !expanded ? "line-clamp-3" : ""
        } hover:text-emerald-400`}
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
                className="group overflow-hidden rounded-lg border border-gray-800 bg-gray-900 flex flex-col"
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-3 bg-gray-900/60 backdrop-blur-sm text-white">
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-xs font-medium text-gray-300">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="mt-2">
                    <ExpandableText text={project.description} />
                  </div>

                  <div className="mt-4 pt-2 flex flex-col gap-3 flex-grow justify-end">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex gap-2">
                        {project.link && (
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href={project.link}
                              className="flex items-center gap-1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Code{" "}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        )}
                        {project.videoLink && (
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href={project.videoLink}
                              className="flex items-center gap-1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Watch Demo{" "}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        )}
                      </div>

                      <div className="flex items-center gap-3 flex-wrap">
                        {project.techStack?.map((tech) => (
                          <i
                            key={tech}
                            className={`${
                              techIconMap[tech] ?? ""
                            } colored text-xl`}
                            title={tech.toUpperCase()}
                          />
                        ))}
                      </div>
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
