import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
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
              Full-stack Developer & Backend Enthusiast
            </h3>
            <p className="text-gray-400">
              {" "}
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
