const steps = [
  {
    step: "1",
    title: "Consultation",
    description: "We meet to understand your vision, requirements, and project timeline.",
  },
  {
    step: "2",
    title: "Planning & Design",
    description: "Our team develops detailed plans and designs aligned with your goals.",
  },
  {
    step: "3",
    title: "Execution",
    description: "High-quality construction with transparent communication throughout.",
  },
  {
    step: "4",
    title: "Delivery",
    description: "Final inspections and handover of your completed project.",
  },
]

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground">
            A streamlined approach to delivering exceptional results every time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
