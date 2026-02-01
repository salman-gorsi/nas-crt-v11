import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Cairo } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _cairo = Cairo({ subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "NAS Creative | Premium Construction Solutions",
  description:
    "NAS Creative - Leading construction company delivering quality residential, commercial, and industrial projects with expertise and innovation across Saudi Arabia.",
  icons: {
    icon: "/nas-creative-logo.png",
    apple: "/nas-creative-logo.png",
    shortcut: "/nas-creative-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
