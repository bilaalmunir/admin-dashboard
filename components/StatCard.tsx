import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  subtitle: string
  icon: LucideIcon
  bgColor: string
  iconColor: string
  isInGroup?: boolean
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  bgColor,
  iconColor,
  isInGroup = false,
}: StatCardProps) {
  const cardClasses = isInGroup ? "p-4 flex-1 min-w-0" : "bg-white rounded-xl p-4 shadow-sm border border-gray-100"

  return (
    <div className={cardClasses}>
      <div className="flex items-center space-x-3 mb-3">
        <div className={`p-2 rounded-lg ${bgColor}`}>
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <p className="text-gray-600 text-xs font-medium">{title}</p>
      </div>

      <div className="flex items-center space-x-2">
        <p className="text-xl font-bold text-gray-800">{value}</p>
        <p className="text-gray-500 text-[10px]">({subtitle})</p>
      </div>
    </div>
  )
}
