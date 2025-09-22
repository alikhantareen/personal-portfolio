"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { downloadResume } from "@/lib/utils"

export function HeroSection() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-white">
              AI
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              I'm Ali, a Software Engineer
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              with 3 years of experience designing and delivering scalable,
              user-focused digital solutions.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Specializing in React, Node.js, and scalable system design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto cursor-pointer"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <a href="mailto:alikhantareen09@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent cursor-pointer"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
