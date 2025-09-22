"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Redux", "Tailwind CSS", "TypeScript", "Next.js", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "JWT", "Mongoose"],
  },
  {
    title: "DevOps/Tools",
    skills: ["Docker", "AWS (EC2, S3)", "GitHub Actions", "Git", "Linux", "Nginx", "PM2", "Vercel"],
  },
  {
    title: "Other",
    skills: ["WebSockets", "Socket.IO", "System Design", "Microservices", "Redis", "Stripe API", "Testing", "Agile"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies and tools I use to build scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
