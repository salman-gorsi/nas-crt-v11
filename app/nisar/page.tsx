"use client"
import { Mail, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import WhatsAppIcon from "@/components/ui/whatsapp-icon"

const WHATSAPP_NUMBER = "00966547483330"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`
const COMPANY_EMAIL = "hello@nas-crt.com"
const COMPANY_PHONE = "00966547483330"

export default function NisarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded bg-primary"></div>
            <span className="font-bold text-foreground">NAS-CRT</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Profile/Company Card */}
          <div className="bg-card border border-border rounded-2xl p-12 mb-12 shadow-lg hover:shadow-xl transition-shadow">
            {/* Logo/Image */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">NC</span>
                </div>
              </div>
            </div>

            {/* Company Name */}
            <h1 className="text-4xl font-bold text-center text-foreground mb-2">NAS-CRT</h1>
            <p className="text-center text-muted-foreground mb-8">Premium Construction & Development Services</p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <a href={`tel:${COMPANY_PHONE}`} className="text-lg font-semibold text-primary hover:underline">
                    {COMPANY_PHONE}
                  </a>
                </div>
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
                >
                  Call
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-lg font-semibold text-primary hover:underline">
                    {COMPANY_EMAIL}
                  </a>
                </div>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
                >
                  Mail
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-lg hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/30">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#128C7E]">WhatsApp</p>
                  <p className="text-lg font-semibold text-[#25D366]">{WHATSAPP_NUMBER}</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors font-medium text-sm"
                >
                  Chat
                </a>
              </div>
            </div>

            {/* Back to Main Site */}
            <div className="border-t border-border pt-8">
              <Link
                href="/"
                className="w-full block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Visit Main Website
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Responsive</h3>
              <p className="text-sm text-muted-foreground">Works on all devices</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Quick Access</h3>
              <p className="text-sm text-muted-foreground">Direct contact options</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-foreground mb-2">Available</h3>
              <p className="text-sm text-muted-foreground">24/7 support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
