import { Briefcase, Users, UserCheck } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  subtitle: string
  bgColor: string
  iconColor: string
  isInGroup?: boolean
}

export default function StatCard({
  title,
  value,
  subtitle,
  bgColor,
  iconColor,
  isInGroup = false,
}: StatCardProps) {
  const cardClasses = isInGroup ? "p-4 flex-1 min-w-0 bg-white" : "bg-white rounded-xl p-4 shadow-sm border border-gray-100"

  const getIcon = () => {
    switch (title.toLowerCase()) {
      case "job posts":
        return <Briefcase className={`w-3 h-3 sm:w-4 sm:h-4 ${iconColor}`} />
      case "total applicants":
        return <Users className={`w-3 h-3 sm:w-4 sm:h-4 ${iconColor}`} />
      case "interviewed":
        return <UserCheck className={`w-3 h-3 sm:w-4 sm:h-4 ${iconColor}`} />
      default:
        return <Briefcase className={`w-3 h-3 sm:w-4 sm:h-4 ${iconColor}`} />
    }
  }

  return (
    <div className={cardClasses}>
      <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
        <div className={`p-1.5 sm:p-2 rounded-lg ${bgColor}`}>
          {getIcon()}
        </div>
        <p className="text-gray-600 text-xs font-medium">{title}</p>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2">
        <p className="text-lg sm:text-xl font-bold text-gray-800">{value}</p>
        <p className="text-gray-500 text-[10px]">({subtitle})</p>
      </div>
    </div>
  )
}
