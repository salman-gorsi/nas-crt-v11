"use client"
import { useLanguage } from "@/lib/language-context"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import PageBreadcrumb from "@/components/ui/page-breadcrumb"

export default function AboutPage() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  const principles = [
    { key: "innovation", icon: "🚀" },
    { key: "integrity", icon: "✓" },
    { key: "excellence", icon: "⭐" },
    { key: "sustainability", icon: "🌱" },
    { key: "collaboration", icon: "🤝" },
    { key: "commitment", icon: "💼" },
  ]

  const breadcrumbItems = [
    { label: "About", labelAr: "من نحن" },
  ]

  return (
    <div className={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Breadcrumb */}
      <PageBreadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h1>
            <p className="text-xl text-muted-foreground mb-2">{t("about.subtitle")}</p>
            <p className="text-base text-foreground/80 leading-relaxed">{t("about.description")}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t("about.projectsCount")}</div>
              <p className="text-sm md:text-base text-muted-foreground">{t("about.stats.projects")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t("about.experienceCount")}</div>
              <p className="text-sm md:text-base text-muted-foreground">{t("about.stats.experience")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t("about.clientsCount")}</div>
              <p className="text-sm md:text-base text-muted-foreground">{t("about.stats.clients")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{t("about.teamCount")}</div>
              <p className="text-sm md:text-base text-muted-foreground">{t("about.stats.team")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👁️</span>
                <h2 className="text-2xl font-bold">{t("about.vision")}</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">{t("about.visionText")}</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <h2 className="text-2xl font-bold">{t("about.mission")}</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">{t("about.missionText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("about.principles")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.key}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-lg font-bold mb-2">{t(`about.${principle.key}`)}</h3>
                <p className="text-sm text-foreground/70">{t(`about.${principle.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
