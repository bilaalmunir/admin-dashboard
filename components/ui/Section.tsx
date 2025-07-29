import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  spacing?: "sm" | "md" | "lg"
}

export default function Section({ children, className = "", spacing = "md" }: SectionProps) {
  const spacingClasses = {
    sm: "space-y-2",
    md: "space-y-4 lg:space-y-6",
    lg: "space-y-6 lg:space-y-8",
  }

  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  )
} 