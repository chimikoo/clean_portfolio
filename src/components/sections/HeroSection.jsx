import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm <span className="text-emerald-500">Per-Emil Johansson</span>
              </h1>
              <p className="max-w-[800px] text-gray-400 md:text-xl">
                Full-stack developer specializing in building exceptional digital experiences
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild><Link href="#contact">Get in touch</Link></Button>
              <Button variant="outline" asChild>
                <Link href="#portfolio" className="text-black">View my work</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link href="https://github.com/chimikoo" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" /><span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/per-emil-johansson-1648b0278" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[400px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden border-4 border-emerald-500">
              <Image src="/cartoon_selfie.png" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}