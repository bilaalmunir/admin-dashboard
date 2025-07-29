interface SkillTagProps {
  skill: string
  variant?: "default" | "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function SkillTag({ 
  skill, 
  variant = "default", 
  size = "md",
  className = ""
}: SkillTagProps) {
  const variantClasses = {
    default: "bg-purple-200 text-blue-400",
    primary: "bg-blue-200 text-blue-600",
    secondary: "bg-gray-200 text-gray-600",
    accent: "bg-pink-200 text-pink-600"
  }

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2 sm:px-3 py-1 text-xs",
    lg: "px-3 sm:px-4 py-1.5 text-sm"
  }

  return (
    <span className={`
      rounded-md font-medium
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `}>
      {skill}
    </span>
  )
} 