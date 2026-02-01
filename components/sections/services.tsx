import ServiceCard from "@/components/ui/service-card"

const services = [
  {
    title: "Residential",
    description: "From single-family homes to multi-unit residential complexes, we build quality spaces for living.",
    icon: "🏠",
  },
  {
    title: "Commercial",
    description: "Office buildings, retail spaces, and industrial facilities designed for modern business needs.",
    icon: "🏢",
  },
  {
    title: "Renovation",
    description: "Transform existing structures with our expert renovation and modernization services.",
    icon: "🔨",
  },
  {
    title: "Consulting",
    description: "Expert guidance for project planning, feasibility studies, and construction management.",
    icon: "📋",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive construction solutions tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
