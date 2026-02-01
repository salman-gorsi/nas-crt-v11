"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { allProjects } from "@/lib/project-data"
import PageBreadcrumb from "@/components/ui/page-breadcrumb"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import StickyWhatsApp from "@/components/ui/sticky-whatsapp"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  const breadcrumbItems = [{ label: "Projects", labelAr: "المشاريع" }]

  return (
    <>
      <Header />
      <main className={`min-h-screen bg-background ${isArabic ? "rtl" : "ltr"}`}>
        {/* Breadcrumb */}
        <PageBreadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-r from-slate-900 via-primary/80 to-slate-900">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('/modern-construction-site-with-building-materials.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{t("projects.title")}</h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">{t("projects.description")}</p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12 text-center">
              <p className="text-muted-foreground text-lg">
                {isArabic
                  ? `عرض ${allProjects.length} مشروع`
                  : `Showing ${allProjects.length} project${allProjects.length !== 1 ? "s" : ""}`}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {allProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group h-full"
                >
                  <div className="relative h-72 rounded-xl overflow-hidden bg-muted mb-6 hover:shadow-lg transition-shadow duration-300">
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
                          <h3 className="text-xl font-bold mb-2 text-balance group-hover:text-primary transition-colors">
                            {isArabic ? project.titleAr || project.title : project.title}
                          </h3>
                          <p className="text-sm text-gray-200">{project.year}</p>
                        </div>
                        <ArrowRight
                          size={20}
                          className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  {project.description && (
                    <p className="text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
                      {isArabic ? project.descriptionAr || project.description : project.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
