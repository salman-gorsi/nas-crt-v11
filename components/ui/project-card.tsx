interface ProjectCardProps {
  title: string
  category: string
  image: string
  year: number
}

export default function ProjectCard({ title, category, image, year }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
      <div className="overflow-hidden h-64">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary">{category}</span>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
    </div>
  )
}
