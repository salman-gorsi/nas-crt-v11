"use client"
import { Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import StickyWhatsApp from "@/components/ui/sticky-whatsapp"
import WhatsAppIcon from "@/components/ui/whatsapp-icon"
import PageBreadcrumb from "@/components/ui/page-breadcrumb"

export default function TeamPage() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  const whatsappUrl = `https://wa.me/+966547483330`

  const breadcrumbItems = [
    { label: "Team", labelAr: "الفريق" },
  ]

  return (
    <>
      <Header />
      <main className={`min-h-screen bg-background ${isArabic ? "rtl" : "ltr"}`}>
        {/* Breadcrumb */}
        <PageBreadcrumb items={breadcrumbItems} />

        {/* CEO Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={`${isArabic ? "md:order-2" : ""}`}>
                <img
                  src="/ceo.jpg"
                  alt="Nisar Ali"
                  className="w-full rounded-lg shadow-lg border border-border"
                />
              </div>

              {/* Content */}
              <div className={`${isArabic ? "md:order-1" : ""}`}>
                <div className="mb-8">
                  <p className="text-primary font-semibold text-lg mb-2">{t("team.ceo")}</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("team.name")}</h1>
                  <p className="text-xl text-muted-foreground mb-6">{t("team.title")}</p>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t("team.about")}</p>

                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{isArabic ? "البريد الإلكتروني" : "Email"}</p>
                      <a
                        href="mailto:nisar@nas-crt.com"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        nisar@nas-crt.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{isArabic ? "رقم الهاتف" : "Phone"}</p>
                      <a
                        href="tel:0547483330"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        0547483330
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                      <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{isArabic ? "واتساب" : "WhatsApp"}</p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#25D366] hover:text-[#128C7E] transition-colors"
                      >
                        +966547483330
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t("team.contactCEO")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="bg-card border-t border-border py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {isArabic ? "عن ناس كريتيف" : "About NAS Creative"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isArabic
                ? "تأسست شركة ناس كريتيف برؤية واضحة لتقديم حلول بناء عالمية المستوى في المملكة العربية السعودية. تحت قيادة نيسار علي، عملنا على تطوير مشاريع سكنية وتجارية وفندقية متميزة، مع التركيز على الجودة والابتكار والالتزام بالمواعيد."
                : "NAS Creative was established with a clear vision to deliver world-class construction solutions in Saudi Arabia. Under the leadership of Nisar Ali, we have developed outstanding residential, commercial, and hotel projects, with a focus on quality, innovation, and commitment to timelines."}
            </p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  )
}
