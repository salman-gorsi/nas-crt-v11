// Utility functions for API calls
export async function sendContactEmail(data: {
  email: string
  message: string
  name?: string
  phone?: string
}) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return await response.json()
  } catch (error) {
    console.error("Error sending contact email:", error)
    throw error
  }
}

export async function getProjects(category?: string) {
  try {
    const url = category ? `/api/projects?category=${category}` : "/api/projects"

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Failed to fetch projects")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching projects:", error)
    throw error
  }
}
