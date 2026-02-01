"use client"

import type React from "react"
import { LanguageProvider } from "@/lib/language-context"

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}
