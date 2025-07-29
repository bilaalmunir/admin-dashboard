import StatCard from "@/components/StatCard"
import { DEFAULT_STATS_DATA, type StatData } from "@/lib/constants"

interface StatsSectionProps {
  statsData?: StatData[]
}

export default function StatsSection({ statsData }: StatsSectionProps) {
  const data = statsData || DEFAULT_STATS_DATA

  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {data.map((stat, index) => (
        <div key={index} className="flex-1 flex justify-center">
          <StatCard {...stat} isInGroup={true} />
          {index < data.length - 1 && (
            <div className="hidden sm:block w-px bg-gray-200 self-stretch my-4" />
          )}
        </div>
      ))}
    </div>
  )
} 