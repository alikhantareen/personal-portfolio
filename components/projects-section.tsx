"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ClientLane",
    subtitle: "Project Management Platform",
    description:
      "ClientLane is a shared client portal system for freelancers and agencies to organize files, updates, and conversations in one link — no more messy Google Docs or emails",
    features: [
      "Implemented authentication and role-based access control (Freelancer, Client)",
      "Built client portals for structured communication, file sharing, and updates in one place",
      "Added project deadline tracking with automated reminders and notifications",
      "Integrated subscription plans with dynamic usage limits and Stripe billing",
      "Developed real-time notifications for portal activity without page refresh",
      "Designed a clean, responsive dashboard UI with analytics and insights for freelancers",
    ],
    techStack: [
      "React/Next",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
      "NextAuth",
      "Stripe",
      "Vercel",
    ],
    liveDemo: "https://clientlane.vercel.app/",
    github: "https://github.com/alikhantareen/clientlane",
    image: "/Client_Lane_Dashboard.png",
  },
  {
    title: "LuckyArts",
    subtitle: "Invoice Management Platform",
    description:
      "A multi-tenant invoice management system where admins can create, manage, and print invoices and bills with secure authentication and a clean UI.",
    features: [
      "Implemented authentication and authorization using JWT",
      "Added full invoice lifecycle management",
      "Designed multi-tenancy architecture to support multiple businesses securely",
      "Integrated Drizzle ORM with SQLite for efficient and type-safe data handling",
      "Built a responsive and modern UI with Tailwind CSS and Flowbite UI library",
    ],
    techStack: ["React", "Remix", "SQLite", "Drizzle ORM", "TailwindCSS", "JWT"],
    liveDemo: "https://luckyarts.co/login",
    github: "https://github.com/alikhantareen/luckyarts-admin",
    image: "/Lucky_arts_dashboard.png",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcasing my expertise in full-stack development and system design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground">
                        {project.subtitle}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
