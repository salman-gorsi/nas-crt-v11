"use client"
import { useLanguage } from "@/lib/language-context"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import PageBreadcrumb from "@/components/ui/page-breadcrumb"

export default function ScopeOfWorkPage() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  const breadcrumbItems = [
    { label: "Scope of Work", labelAr: "نطاق العمل" },
  ]

  return (
    <div className={isArabic ? "rtl" : "ltr"}>
      <Header />

      {/* Breadcrumb */}
      <PageBreadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/20 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("scopeOfWork.title")}</h1>
            <p className="text-xl text-muted-foreground mb-4">{t("scopeOfWork.subtitle")}</p>
            <p className="text-base text-foreground/80 leading-relaxed">{t("scopeOfWork.description")}</p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/construction-worker-on-site.png"
                alt="Construction expertise"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("scopeOfWork.expertiseTitle")}</h2>
              <ul className="space-y-4">
                {t("scopeOfWork.expertise").map((item: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground/70 mt-8 italic">{t("scopeOfWork.byIntegrating")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12">{t("scopeOfWork.whyChooseTitle")}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t("scopeOfWork.whyChoose").map((item: string, index: number) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border flex gap-4">
                <span className="text-primary text-2xl font-bold flex-shrink-0">✓</span>
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
