"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "@/components/ui/language-toggle"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, t } = useLanguage()
  const isArabic = language === "ar"
  const router = useRouter()
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleContactClick = () => {
    setIsOpen(false)
    if (pathname === "/") {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push("/#contact")
    }
  }

  const handleGetQuoteClick = () => {
    if (pathname === "/") {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push("/#contact")
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isArabic ? "rtl" : "ltr"}`}
    >
      <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 md:gap-2 flex-shrink-0"
        >
          <img src="/nas-creative-logo.png" alt="NAS Creative" className="h-8 md:h-10 w-auto" />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-foreground whitespace-nowrap">
            NAS Creative
          </span>
        </Link>

        {/* Desktop Navigation - shows on xl screens */}
        <nav className="hidden xl:flex items-center gap-5">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("header.home")}
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("header.about")}
          </Link>
          <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("header.services")}
          </Link>
          <Link href="/scope-of-work" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("header.scopeOfWork")}
          </Link>
          <Link href="/projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("header.projects")}
          </Link>
          <Link href="/team" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t("header.team")}
          </Link>
          <button 
            onClick={handleContactClick}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {t("header.contact")}
          </button>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-3">
          <LanguageToggle />
          
          {/* Get Quote - hidden on mobile, visible on md+ */}
          <button
            onClick={handleGetQuoteClick}
            className="hidden md:block px-3 lg:px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-xs lg:text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t("header.getQuote")}
          </button>

          {/* Hamburger Menu - visible below xl */}
          <button 
            className="xl:hidden p-1.5 md:p-2 rounded-md hover:bg-muted transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - slides down */}
      <div 
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] border-t border-border" : "max-h-0"
        }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        <nav className={`flex flex-col bg-background ${isArabic ? "rtl" : "ltr"}`}>
          <Link 
            href="/" 
            className="px-4 py-3.5 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50 text-center"
          >
            {t("header.home")}
          </Link>
          <Link 
            href="/about" 
            className="px-4 py-3.5 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50 text-center"
          >
            {t("header.about")}
          </Link>
          <Link 
            href="/services" 
            className="px-4 py-3.5 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50 text-center"
          >
            {t("header.services")}
          </Link>
          <Link 
            href="/scope-of-work" 
            className="px-4 py-3.5 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50 text-center"
          >
            {t("header.scopeOfWork")}
          </Link>
          <Link 
            href="/projects" 
            className="px-4 py-3.5 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50 text-center"
          >
            {t("header.projects")}
          </Link>
          <Link 
            href="/team" 
            className="px-4 py-3.5 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50 text-center"
          >
            {t("header.team")}
          </Link>
          <button
            onClick={handleContactClick}
            className="px-4 py-3.5 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50 text-center"
          >
            {t("header.contact")}
          </button>
          {/* Get Quote button in mobile menu */}
          <div className="p-4 flex justify-center">
            <button
              onClick={handleContactClick}
              className="px-8 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {t("header.getQuote")}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
