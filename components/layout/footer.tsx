"use client"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const COMPANY_NAME = "NAS Creative"
const COMPANY_EMAIL = "hello@nas-crt.com"
const COMPANY_PHONE = "0547483330"
const COMPANY_LOCATION = "Makkah Al-Mukarramah, KSA"

export default function Footer() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  return (
    <footer className={`border-t border-border bg-foreground/5 ${isArabic ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/nas-creative-logo.png" alt="NAS Creative" className="h-8 w-auto" />
              <span className="font-bold text-foreground">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  {t("header.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  {t("header.services")}
                </Link>
              </li>
              <li>
                <Link href="/scope-of-work" className="hover:text-primary transition-colors">
                  {t("header.scopeOfWork")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  {t("header.projects")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/team" className="hover:text-primary transition-colors">
                  {t("header.team")}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors opacity-50 cursor-not-allowed">
                  {t("footer.careers")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-primary transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </p>
              <p>
                <a href={`tel:${COMPANY_PHONE}`} className="hover:text-primary transition-colors">
                  {COMPANY_PHONE}
                </a>
              </p>
              <p>{COMPANY_LOCATION}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 {COMPANY_NAME}. {isArabic ? t("footer.allRights") : t("footer.allRights")}.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
