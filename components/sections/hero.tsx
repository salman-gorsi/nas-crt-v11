"use client"
import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className={`relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 ${isArabic ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">{t("hero.title")}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              {t("hero.startProject")}
            </button>
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
            >
              {t("hero.viewPortfolio")}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 md:mt-24 md:px-8">
        <img
          src="/modern-construction-site-building-materials.jpg"
          alt="Construction site"
          className="w-full h-96 object-cover rounded-lg border border-border"
        />
      </div>
    </section>
  )
}
