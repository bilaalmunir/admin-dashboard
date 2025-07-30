import { Briefcase, Users, UserCheck } from "lucide-react"
import { DEFAULT_STATS_DATA, type StatData } from "@/lib/constants"

interface StatsSectionProps {
  statsData?: StatData[]
}

export default function StatsSection({ statsData }: StatsSectionProps) {
  const data = statsData || DEFAULT_STATS_DATA

  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {/* Job Posts */}
      <div className="flex-1 flex justify-center">
        <div className="p-4 flex-1 min-w-0 bg-white">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 rounded-lg bg-pink-500">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <p className="text-gray-600 text-xs font-medium">Job Posts</p>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <p className="text-lg sm:text-xl font-bold text-gray-800">+20</p>
            <p className="text-gray-500 text-[10px]">(vs last 7 days)</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block w-px bg-gray-200 self-stretch my-4" />

      {/* Total Applicants */}
      <div className="flex-1 flex justify-center">
        <div className="p-4 flex-1 min-w-0 bg-white">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 rounded-lg bg-pink-500">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <p className="text-gray-600 text-xs font-medium">Total Applicants</p>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <p className="text-lg sm:text-xl font-bold text-gray-800">+12</p>
            <p className="text-gray-500 text-[10px]">(vs last 7 days)</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block w-px bg-gray-200 self-stretch my-4" />

      {/* Interviewed */}
      <div className="flex-1 flex justify-center">
        <div className="p-4 flex-1 min-w-0 bg-white">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
            <div className="p-1.5 sm:p-2 rounded-lg bg-pink-500">
              <UserCheck className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <p className="text-gray-600 text-xs font-medium">Interviewed</p>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <p className="text-lg sm:text-xl font-bold text-gray-800">+6</p>
            <p className="text-gray-500 text-[10px]">(vs last 7 days)</p>
          </div>
        </div>
      </div>
    </div>
  )
} 