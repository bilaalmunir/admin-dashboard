"use client"

interface AvatarProps {
  src?: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  fallback?: string
  className?: string
}

export default function Avatar({ 
  src, 
  alt, 
  size = "md", 
  fallback,
  className = ""
}: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10 sm:w-12 sm:h-12",
    lg: "w-12 h-12 sm:w-16 sm:h-16",
    xl: "w-16 h-16 sm:w-20 sm:h-20"
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl",
    xl: "text-xl sm:text-2xl"
  }

  if (!src && !fallback) {
    return (
      <div className={`
        rounded-full bg-gray-200 flex items-center justify-center
        ${sizeClasses[size]}
        ${textSizeClasses[size]}
        ${className}
      `}>
        <span className="text-gray-500 font-medium">
          {alt.charAt(0).toUpperCase()}
        </span>
      </div>
    )
  }

  return (
    <div className={`
      rounded-full overflow-hidden flex-shrink-0
      ${sizeClasses[size]}
      ${className}
    `}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`
          w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 
          flex items-center justify-center text-white font-medium
          ${textSizeClasses[size]}
        `}>
          {fallback || alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  )
}
