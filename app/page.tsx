import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { AcademicSection } from "@/components/academic-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="space-y-20">
      {/* About Section */}
      <section className="grid md:grid-cols-[400px_1fr] gap-12 items-start">
        <div className="space-y-6">
          <div className="relative w-full aspect-square rounded-full overflow-hidden">
            <Image src="/placeholder.svg" alt="Profile picture" fill className="object-cover" priority />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Thales Vignoli</h1>
            <p className="text-xl text-muted-foreground mb-4">Data Science Researcher</p>
            <p className="text-muted-foreground mb-6">UW-Madison</p>
            <div className="flex justify-center gap-4">
              <Link href="https://linkedin.com" target="_blank">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn profile</span>
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub profile</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold mb-6">About me</h2>
            <p className="text-lg text-muted-foreground">
              As a highly skilled data scientist with a PhD in bioinformatics and over ten years of working on relevant
              projects, I developed a strong data science and analytics foundation. I have spent the last few years
              working at world-renowned companies, developing end-to-end machine learning applications. Additionally,
              driven by my passion for knowledge, I've taught specialized courses in various data science topics.
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            Download simplified resumé
          </Button>
        </div>
      </section>

      {/* Interests & Education Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Interests</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">📊</div>
              Data Science
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">🤖</div>
              Machine Learning
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">🧠</div>
              Deep Learning
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4">🔬</div>
              Artificial Intelligence
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">MBA in Data Science & Analytics, 2023</h3>
              <p className="text-muted-foreground">Universidade de São Paulo</p>
            </div>
            <div>
              <h3 className="font-semibold">PhD in Science, 2021</h3>
              <p className="text-muted-foreground">Universidade de São Paulo</p>
            </div>
            <div>
              <h3 className="font-semibold">MSc in Science, 2016</h3>
              <p className="text-muted-foreground">Universidade de São Paulo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Sections */}
      <ExperienceSection />
      <AcademicSection />

      {/* Contact Section */}
      <section id="contact" className="space-y-6">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <ContactForm />
      </section>
    </div>
  )
}

