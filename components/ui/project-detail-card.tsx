"use client"

import { useLanguage } from "@/lib/language-context"
import type { Project } from "@/lib/project-data"
import { ChevronRight } from "lucide-react"

interface ProjectDetailCardProps {
  project: Project
  imagePosition: "left" | "right"
}

export default function ProjectDetailCard({ project, imagePosition }: ProjectDetailCardProps) {
  const { language } = useLanguage()
  const isArabic = language === "ar"
  const title = isArabic ? project.titleAr || project.title : project.title
  const description = isArabic ? project.descriptionAr || project.description : project.description
  const scope = isArabic ? project.scopeAr || project.scope : project.scope

  const textSection = (
    <div className="space-y-6">
      <div className="bg-muted/50 p-6 rounded-lg border border-border">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-primary rounded-full" />
          Year: {project.year}
        </p>
      </div>

      <div className="bg-muted/50 p-6 rounded-lg border border-border">
        <h4 className="text-lg font-semibold text-foreground mb-3">
          {isArabic ? "نظرة عامة على المشروع" : "Project Overview"}
        </h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="bg-muted/50 p-6 rounded-lg border border-border">
        <h4 className="text-lg font-semibold text-foreground mb-3">{isArabic ? "نطاق العمل" : "Scope of Work"}</h4>
        <ul className="space-y-2">
          {scope.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
              <ChevronRight className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-muted/50 p-6 rounded-lg border border-border">
        <h4 className="text-lg font-semibold text-foreground mb-3">{isArabic ? "مساهمتنا" : "Our Contribution"}</h4>
        <p className="text-muted-foreground leading-relaxed">
          {isArabic
            ? "قدمنا خبرتنا الشاملة في تنفيذ هذا المشروع بجودة عالية ومراعاة لكل التفاصيل."
            : "We delivered our comprehensive expertise in executing this project with premium quality and attention to detail."}
        </p>
      </div>
    </div>
  )

  const imageSection = (
    <div className="relative">
      <div className="border-4 border-dashed border-primary rounded-lg overflow-hidden bg-muted aspect-video">
        <img src={project.image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  )

  return (
    <div className={`grid md:grid-cols-2 gap-8 items-start ${isArabic ? "md:direction-rtl" : ""}`}>
      {imagePosition === "right" ? (
        <>
          {textSection}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {textSection}
        </>
      )}
    </div>
  )
}
