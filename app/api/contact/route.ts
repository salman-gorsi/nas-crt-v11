import { type NextRequest, NextResponse } from "next/server"

// Company contact details
const COMPANY_NAME = "NAS-CRT"
const COMPANY_EMAIL = "hello@nas-crt.com"
const COMPANY_PHONE = "00966547483330"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, phone, message } = body

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-+()]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 })
    }

    // Log the submission
    console.log("Contact form submission:", {
      name,
      company,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
    })

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const res = await resend.emails.send({
    //   from: 'noreply@nas-crt.com',
    //   to: COMPANY_EMAIL,
    //   subject: `New Project Inquiry from ${name}`,
    //   html: `
    //     <h2>New Project Inquiry</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `
    // })

    return NextResponse.json({ success: true, message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
