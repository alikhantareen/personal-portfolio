import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ali - Software Engineer | MERN Stack Developer",
  description:
    "Software Engineer with 3 years of experience building scalable web applications using the MERN stack. Specializing in React, Node.js, and scalable system design.",
  generator: "v0.app",
  keywords: ["Software Engineer", "MERN Stack", "React", "Node.js", "Full Stack Developer", "Ali"],
  authors: [{ name: "Ali" }],
  openGraph: {
    title: "Ali - Software Engineer",
    description: "Software Engineer specializing in MERN stack development",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
