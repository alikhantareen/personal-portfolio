"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
