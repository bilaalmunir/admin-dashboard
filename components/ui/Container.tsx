import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  padding?: "sm" | "md" | "lg"
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full"
}

export default function Container({ 
  children, 
  className = "", 
  padding = "md",
  maxWidth = "full" 
}: ContainerProps) {
  const paddingClasses = {
    sm: "p-2",
    md: "p-4 lg:p-8",
    lg: "p-6 lg:p-12",
  }

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full",
  }

  return (
    <div className={`${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
} 