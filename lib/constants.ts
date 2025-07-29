import { Briefcase, Users, UserCheck } from "lucide-react"

export interface StatData {
  title: string
  value: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
  iconColor: string
}

export const DEFAULT_STATS_DATA: StatData[] = [
  {
    title: "Job Posts",
    value: "+20",
    subtitle: "vs last 7 days",
    icon: Briefcase,
    bgColor: "bg-[#ea669f]",
    iconColor: "text-white",
  },
  {
    title: "Total Applicants",
    value: "+12",
    subtitle: "vs last 7 days",
    icon: Users,
    bgColor: "bg-[#ea669f]",
    iconColor: "text-white",
  },
  {
    title: "Interviewed",
    value: "+6",
    subtitle: "vs last 7 days",
    icon: UserCheck,
    bgColor: "bg-[#ea669f]",
    iconColor: "text-white",
  },
] 