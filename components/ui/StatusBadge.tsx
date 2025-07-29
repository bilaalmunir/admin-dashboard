interface StatusBadgeProps {
  status: string
  variant?: "success" | "warning" | "danger" | "info" | "default"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function StatusBadge({ 
  status, 
  variant = "default", 
  size = "md",
  className = ""
}: StatusBadgeProps) {
  const variantClasses = {
    success: "bg-green-200 text-green-500",
    warning: "bg-yellow-200 text-yellow-500",
    danger: "bg-red-200 text-red-500",
    info: "bg-blue-200 text-blue-500",
    default: "bg-gray-200 text-gray-500"
  }

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm"
  }

  // Auto-detect variant based on status text
  const getVariant = (statusText: string) => {
    const lowerStatus = statusText.toLowerCase()
    if (lowerStatus.includes('live') || lowerStatus.includes('active') || lowerStatus.includes('success')) {
      return 'success'
    }
    if (lowerStatus.includes('pending') || lowerStatus.includes('waiting')) {
      return 'warning'
    }
    if (lowerStatus.includes('expired') || lowerStatus.includes('failed') || lowerStatus.includes('rejected')) {
      return 'danger'
    }
    if (lowerStatus.includes('draft') || lowerStatus.includes('preview')) {
      return 'info'
    }
    return 'default'
  }

  const finalVariant = variant === "default" ? getVariant(status) : variant

  return (
    <span className={`
      rounded-full font-medium
      ${variantClasses[finalVariant]}
      ${sizeClasses[size]}
      ${className}
    `}>
      {status}
    </span>
  )
} 