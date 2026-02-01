const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "BuildCorp transformed our vision into reality. Professional, punctual, and committed to excellence.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "Their commercial expertise and attention to detail set them apart. Highly recommended.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    content:
      "Outstanding renovation work. They brought new life to our heritage building while preserving its character.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Hear from satisfied clients about their experiences working with us.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg border border-border bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
