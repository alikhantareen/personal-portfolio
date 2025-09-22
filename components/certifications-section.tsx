"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const certifications = [
  {
    name: "Cisco Networking Essentials",
    issuer: "Cisco",
    logo: "/cisco-logo.png",
  },
  {
    name: "IBM Cloud Application Developer",
    issuer: "IBM",
    logo: "/ibm-logo.png",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional certifications that validate my technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <img src={cert.logo || "/placeholder.svg"} alt={`${cert.issuer} logo`} className="h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
