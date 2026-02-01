import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Projects from "@/components/sections/projects"
import Process from "@/components/sections/process"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import StickyWhatsApp from "@/components/ui/sticky-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </main>
  )
}
