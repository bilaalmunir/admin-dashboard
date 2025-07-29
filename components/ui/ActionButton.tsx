import { LucideIcon } from "lucide-react"

interface ActionButtonProps {
  icon: LucideIcon
  onClick?: () => void
  variant?: "default" | "success" | "danger" | "warning"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  className?: string
  title?: string
}

export default function ActionButton({ 
  icon: Icon, 
  onClick, 
  variant = "default", 
  size = "md",
  disabled = false,
  className = "",
  title
}: ActionButtonProps) {
  const variantClasses = {
    default: "bg-gray-100 hover:bg-gray-200 text-gray-600",
    success: "bg-green-100 hover:bg-green-200 text-green-600",
    danger: "bg-red-100 hover:bg-red-200 text-red-600",
    warning: "bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
  }

  const sizeClasses = {
    sm: "p-1",
    md: "p-1.5 sm:p-2",
    lg: "p-2 sm:p-3"
  }

  const iconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-3 h-3 sm:w-4 sm:h-4",
    lg: "w-4 h-4 sm:w-5 sm:h-5"
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`
        rounded-lg transition-colors
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      <Icon className={iconSizeClasses[size]} />
    </button>
  )
} 