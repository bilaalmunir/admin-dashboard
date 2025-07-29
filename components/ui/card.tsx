import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  padding?: "sm" | "md" | "lg"
  shadow?: "none" | "sm" | "md" | "lg"
  border?: boolean
  rounded?: "sm" | "md" | "lg" | "xl"
}

export default function Card({ 
  children, 
  className = "", 
  padding = "md",
  shadow = "sm",
  border = true,
  rounded = "lg"
}: CardProps) {
  const paddingClasses = {
    sm: "p-3",
    md: "p-4 sm:p-6",
    lg: "p-6 sm:p-8"
  }

  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg"
  }

  const roundedClasses = {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl"
  }

  return (
    <div className={`
      bg-white
      ${paddingClasses[padding]}
      ${shadowClasses[shadow]}
      ${border ? "border border-gray-300" : ""}
      ${roundedClasses[rounded]}
      ${className}
    `}>
      {children}
    </div>
  )
}
