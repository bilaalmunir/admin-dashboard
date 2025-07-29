import { ReactNode } from "react"

interface GridProps {
  children: ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
}

export default function Grid({ children, className = "", cols = 1, gap = "md" }: GridProps) {
  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 xl:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4 lg:gap-6",
    lg: "gap-6 lg:gap-8",
  }

  return (
    <div className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
} 