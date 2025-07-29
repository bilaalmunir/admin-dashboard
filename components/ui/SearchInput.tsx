import { Search } from "lucide-react"

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  width?: "sm" | "md" | "lg" | "full"
}

export default function SearchInput({ 
  placeholder = "Search", 
  value = "", 
  onChange, 
  className = "",
  width = "md"
}: SearchInputProps) {
  const widthClasses = {
    sm: "w-full sm:w-48",
    md: "w-full sm:w-64",
    lg: "w-full sm:w-80",
    full: "w-full"
  }

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${widthClasses[width]}`}
      />
    </div>
  )
} 