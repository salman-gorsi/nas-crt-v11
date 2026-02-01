"use client"
import { useLanguage } from "@/lib/language-context"
import type { Project } from "@/lib/project-data"
import { X } from "lucide-react"
import Image from "next/image"

interface ProjectDetailModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`bg-background rounded-lg max-w-4xl w-full my-8 ${isArabic ? "rtl" : "ltr"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-96 w-full bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={isArabic ? project.titleAr || project.title : project.title}
            fill
            className="object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/90 p-2 rounded-full hover:bg-background"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">{isArabic ? project.titleAr || project.title : project.title}</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {t("projects.year")}: {project.year}
          </p>

          <p className="text-lg text-foreground mb-8">
            {isArabic ? project.descriptionAr || project.description : project.description}
          </p>

          {/* Scope of Work */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">{t("projects.scopeOfWork")}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {(isArabic ? project.scopeAr || project.scope : project.scope).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("projects.gallery")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="relative h-40 bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full mt-8 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("projects.backToProjects")}
          </button>
        </div>
      </div>
    </div>
  )
}
