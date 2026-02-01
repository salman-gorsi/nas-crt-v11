"use client"

import type React from "react"

import { useState } from "react"

export default function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: "Request for quote" }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail("")
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-lg opacity-90 mb-8">
            Get in touch today and let's discuss how we can bring your project to life.
          </p>

          {submitted ? (
            <div className="p-4 rounded-lg bg-primary-foreground/20 text-primary-foreground">
              Thank you! We'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 border border-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Get Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
