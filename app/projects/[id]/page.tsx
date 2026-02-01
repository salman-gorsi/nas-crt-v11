"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { allProjects } from "@/lib/project-data"
import PageBreadcrumb from "@/components/ui/page-breadcrumb"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import StickyWhatsApp from "@/components/ui/sticky-whatsapp"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const project = useMemo(() => {
    return allProjects.find((p) => p.id === params.id)
  }, [params.id])

  if (!project) {
    return (
      <>
        <Header />
        <main className={`min-h-screen bg-background pt-20 ${isArabic ? "rtl" : "ltr"}`}>
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">{isArabic ? "المشروع غير موجود" : "Project Not Found"}</h1>
            <Link href="/projects" className="text-primary hover:text-primary/80 font-semibold">
              {isArabic ? "العودة إلى المشاريع" : "Back to Projects"}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const breadcrumbItems = [
    { label: "Projects", labelAr: "المشاريع", href: "/projects" },
    { label: project.title, labelAr: project.titleAr },
  ]

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <>
      <Header />
      <main className={`min-h-screen bg-background ${isArabic ? "rtl" : "ltr"}`}>
        {/* Breadcrumb */}
        <PageBreadcrumb items={breadcrumbItems} />

        {/* Project Header */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                {isArabic ? project.titleAr : project.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <span>{project.year}</span>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-12">
              {/* Main Image */}
              <div className="relative bg-muted rounded-lg overflow-hidden mb-6 aspect-video">
                <Image
                  src={project.gallery[selectedImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Navigation Buttons */}
                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {project.gallery.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
                    {selectedImageIndex + 1} / {project.gallery.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {project.gallery.length > 1 && (
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                  {project.gallery.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx ? "border-primary" : "border-transparent hover:border-muted-foreground"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            {(project.description || project.descriptionAr) && (
              <section className="mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {isArabic ? project.descriptionAr : project.description}
                </p>
              </section>
            )}

            {/* Scope of Work */}
            {(project.scope.length > 0 || (project.scopeAr && project.scopeAr.length > 0)) && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  {isArabic ? "نطاق العمل" : "Scope of Work"}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {(isArabic ? project.scopeAr || project.scope : project.scope).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="mt-16 pt-12 border-t border-border">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {isArabic ? "مهتم بهذا المشروع؟" : "Interested in This Project?"}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {isArabic
                    ? "تواصل معنا للحصول على المزيد من المعلومات والتفاصيل حول هذا المشروع الرائع."
                    : "Get in touch with us for more information and details about this amazing project."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#contact"
                    className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    {isArabic ? "تواصل معنا" : "Contact Us"}
                  </Link>
                  <Link
                    href="/projects"
                    className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
                  >
                    {isArabic ? "جميع المشاريع" : "View All Projects"}
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
