import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  disabled?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function Button({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md",
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  className = "",
  type = "button"
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100"
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }

  const iconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center space-x-2 font-medium rounded-md transition-colors
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {Icon && iconPosition === "left" && (
        <Icon className={iconSizeClasses[size]} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={iconSizeClasses[size]} />
      )}
    </button>
  )
}
