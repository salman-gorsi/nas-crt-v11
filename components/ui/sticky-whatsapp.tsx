"use client"
import { useLanguage } from "@/lib/language-context"
import WhatsAppIcon from "@/components/ui/whatsapp-icon"

const WHATSAPP_NUMBER = "+966547483330"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`

export default function StickyWhatsApp() {
  const { t } = useLanguage()

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      title={t("whatsapp.whatsapp")}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  )
}
