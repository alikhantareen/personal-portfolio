"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Ropstam Solutions Inc.",
    role: "Software Engineer",
    period: "2024 - Present",
    projects: [
      {
        project: "Enterprise Management Platform",
        description:
          "Architected and developed a C-level business management platform serving 500+ executives with real-time KPI tracking and analytics.",
        contributions: [
          "Delivered project management, team oversight, and financial performance analytics modules",
          "Implemented real-time data visualization with React, Node.js, and MongoDB",
          "Optimized performance and scalability for enterprise-level use",
        ],
      },
      {
        project: "Subscription Management System",
        description:
          "Built an end-to-end subscription platform ensuring secure payments and seamless role-based user experience.",
        contributions: [
          "Implemented authentication and role-based access control",
          "Integrated Stripe payment system, processing $50K+ in monthly transactions",
          "Achieved 99.9% uptime with robust backend architecture",
        ],
      },
      {
        project: "Real Estate Application (Reventure)",
        description:
          "Enhanced a React/Next.js and Python-based real estate app with advanced mapping and CMS features.",
        contributions: [
          "Integrated advanced mapping functionality for property visualization",
          "Optimized data pipelines, improving user engagement by 40%",
          "Upgraded CMS features for scalable content management",
        ],
      },
      {
        project: "Admin Dashboard Development",
        description:
          "Designed and delivered a pixel-perfect admin dashboard for a parking platform with API integrations.",
        contributions: [
          "Built responsive UI with React and Sass",
          "Integrated multiple third-party APIs for data synchronization",
          "Reduced administrative processing time by 60%",
        ],
      },
    ],
  },
  {
    company: "Spot N Paste LLC",
    role: "JavaScript Developer",
    period: "2022 - 2023",
    projects: [
      {
        project: "Browser Extension Development",
        description:
          "Developed a productivity-focused browser extension serving 1,000+ drop-shipping professionals.",
        contributions: [
          "Implemented core features using vanilla JavaScript, DOM APIs, and AJAX",
          "Reduced manual task completion time by 50%",
          "Maintained direct client relationships ensuring 100% requirement satisfaction",
        ],
      },
    ],
  },
  {
    company: "WebNukes Software House",
    role: "Software Engineer",
    period: "2020 - 2021",
    projects: [
      {
        project: "Full-Stack Development Projects",
        description:
          "Led complete software development lifecycle for multiple web applications at a software house.",
        contributions: [
          "Developed dashboards and end-to-end web applications",
          "Collaborated with design and product teams to deliver user-centric solutions",
          "Maintained high-quality code standards and provided customer support",
        ],
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Key projects and contributions that demonstrate my technical
            expertise
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {exp.projects.map((proj, idx) => (
                    <div key={idx} className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {proj.project}
                        </h3>
                        <p className="text-muted-foreground text-pretty">
                          {proj.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">
                          Key Contributions:
                        </h4>
                        <ul className="space-y-2">
                          {proj.contributions.map((contribution, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {contribution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
