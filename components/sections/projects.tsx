"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { allProjects } from "@/lib/project-data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Projects() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"
  const [selectedProject, setSelectedProject] = useState(null)

  // Show first 3 projects on home page
  const displayedProjects = allProjects.slice(0, 3)

  return (
    <section id="projects" className={`py-20 md:py-32 bg-muted/30 ${isArabic ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t("projects.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("projects.description")}</p>
        </div>

        {/* Projects Grid - Shows 3 featured projects */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {displayedProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group h-full">
              <div className="relative h-64 rounded-xl overflow-hidden bg-muted mb-6 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={isArabic ? project.titleAr || project.title : project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-balance group-hover:text-primary transition-colors">
                        {isArabic ? project.titleAr || project.title : project.title}
                      </h3>
                      <p className="text-sm text-gray-200">{project.year}</p>
                    </div>
                    <ArrowRight size={20} className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              {project.description && (
                <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
                  {isArabic ? project.descriptionAr || project.description : project.description}
                </p>
              )}
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            {isArabic ? "عرض جميع المشاريع" : "View All Projects"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
