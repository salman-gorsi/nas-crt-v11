"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export interface BreadcrumbItemData {
  label: string
  labelAr?: string
  href?: string
}

interface PageBreadcrumbProps {
  items: BreadcrumbItemData[]
}

export default function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  return (
    <div className={`py-3 md:py-4 bg-muted/50 border-b border-border ${isArabic ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            {/* Home */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center gap-1.5 hover:text-primary">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">{t("header.home")}</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Dynamic items */}
            {items.map((item, index) => {
              const isLast = index === items.length - 1
              const label = isArabic && item.labelAr ? item.labelAr : item.label

              return (
                <div key={item.label} className="flex items-center gap-1.5">
                  <BreadcrumbSeparator className={isArabic ? "[&>svg]:rotate-180" : ""} />
                  <BreadcrumbItem>
                    {item.href && !isLast ? (
                      <BreadcrumbLink asChild>
                        <Link href={item.href} className="hover:text-primary">
                          {label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </div>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}
