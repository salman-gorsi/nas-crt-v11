"use client"
import { useLanguage } from "@/lib/language-context"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import PageBreadcrumb from "@/components/ui/page-breadcrumb"

export default function ServicesPage() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  const services = [
    { key: "residential", image: "/modern-residential-green.png" },
    { key: "commercial", image: "/modern-commercial-office-building.jpg" },
    { key: "industrial", image: "/large-industrial-warehouse-facility.jpg" },
    { key: "hospitality", image: "/luxury-hotel-building-architecture.jpg" },
    { key: "renovation", image: "/interior-renovation-with-modern-design.jpg" },
    { key: "consulting", image: "/professionals-consulting-in-meeting.jpg" },
  ]

  const breadcrumbItems = [
    { label: "Services", labelAr: "الخدمات" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("services.title")}</h1>
            <p className="text-xl text-muted-foreground mb-4">{t("services.subtitle")}</p>
            <p className="text-base text-foreground/80 leading-relaxed">{t("services.description")}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          {services.map((service, index) => (
            <div
              key={service.key}
              className={`mb-16 md:mb-24 ${index % 2 === 1 && !isArabic ? "md:flex-row-reverse" : ""}`}
            >
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${isArabic && index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 && !isArabic ? "md:order-2" : ""}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={t(`services.${service.key}.title`)}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
                <div className={index % 2 === 1 && !isArabic ? "md:order-1" : ""}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{t(`services.${service.key}.title`)}</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{t(`services.${service.key}.description`)}</p>
                  <div className="space-y-3 mb-6">
                    {t(`services.${service.key}.benefits`).map((benefit: string, i: number) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <p className="text-sm text-foreground/80">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium">
                    {t(`services.${service.key}.explore`)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
