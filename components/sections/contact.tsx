"use client"

import type React from "react"
import { useState } from "react"
import { Check, AlertCircle, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import WhatsAppIcon from "@/components/ui/whatsapp-icon"

const COMPANY_EMAIL = "hello@nas-crt.com"
const COMPANY_PHONE = "0547483330"
const WHATSAPP_NUMBER = "+966547483330"
const COMPANY_LOCATION = "Makkah Al-Mukarramah, KSA"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`

export default function Contact() {
  const { language, t } = useLanguage()
  const isArabic = language === "ar"

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", company: "", email: "", phone: "", message: "" })
        setTimeout(() => setStatus("idle"), 4000)
      } else {
        const data = await response.json()
        setStatus("error")
        setErrorMessage(data.error || "Failed to submit form")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("An error occurred. Please try again.")
    }
  }

  return (
    <section id="contact" className={`py-20 md:py-32 ${isArabic ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {isArabic ? "ابدأ مشروعك" : "Get Your Project Started"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isArabic
                ? "أخبرنا عن رؤيتك. قم بملء النموذج أدناه وسيتواصل معك فريقنا في غضون 24 ساعة."
                : "Tell us about your vision. Fill out the form below and our team will get back to you within 24 hours."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{isArabic ? "الهاتف" : "Phone"}</h3>
              </div>
              <a href={`tel:${COMPANY_PHONE}`} className="text-primary hover:underline font-medium">
                {COMPANY_PHONE}
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{isArabic ? "البريد الإلكتروني" : "Email"}</h3>
              </div>
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary hover:underline font-medium">
                {COMPANY_EMAIL}
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{isArabic ? "الموقع" : "Location"}</h3>
              </div>
              <p className="text-muted-foreground">{COMPANY_LOCATION}</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{t("contact.thankYou")}</h3>
                <p className="text-muted-foreground text-center">{t("contact.inquiryReceived")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                  </div>
                )}

                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={isArabic ? "أحمد محمد السعودي" : "Ahmed Al-Saud"}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ahmed@company.sa"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={isArabic ? "شركتك" : "Your Company"}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={isArabic ? "0501234567" : "0501234567"}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.projectDetails")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      isArabic
                        ? "أخبرنا عن مشروعك والجدول الزمني والمتطلبات المحددة..."
                        : "Tell us about your project, timeline, and any specific requirements..."
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit Button - Use MessageCircle icon instead of text for WhatsApp */}
                <div className="flex gap-4 flex-col md:flex-row">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex-1 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (isArabic ? "جاري الإرسال..." : "Sending...") : t("contact.sendInquiry")}
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-8 py-3 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold transition-colors text-center inline-flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    {t("contact.chatWhatsapp")}
                  </a>
                </div>

                <p className="text-xs text-muted-foreground text-center">{t("contact.requiredFields")}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
