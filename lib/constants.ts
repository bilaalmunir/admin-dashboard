import { Briefcase, Users, UserCheck } from "lucide-react"

export interface StatData {
  title: string
  value: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
  iconColor: string
}

export interface CandidateData {
  id: number
  name: string
  title: string
  experience: string
  skills: string[]
  avatar: string
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

export const DEFAULT_CANDIDATES_DATA: CandidateData[] = [
  {
    id: 1,
    name: "John Doe",
    title: "Full stack developer",
    experience: "6+ years of experience",
    skills: ["Figma", "Adobe Illustrator"],
    avatar: "/placeholder.svg?height=60&width=60&text=JD",
  },
  {
    id: 2,
    name: "Adam Smith",
    title: "Full stack Developer",
    experience: "6+ years of experience",
    skills: ["Figma", "Adobe Illustrator"],
    avatar: "/placeholder.svg?height=60&width=60&text=AS",
  },
  {
    id: 3,
    name: "Samuel jen",
    title: "Front-end Developer",
    experience: "6+ years of experience",
    skills: ["Figma", "Adobe Illustrator"],
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    id: 4,
    name: "Wade Warren",
    title: "Back-end Developer",
    experience: "6+ years of experience",
    skills: ["Figma", "Adobe Illustrator"],
    avatar: "/placeholder.svg?height=60&width=60&text=WW",
  },
  {
    id: 5,
    name: "Esther Howard",
    title: "Mern Stack Developer",
    experience: "6+ years of experience",
    skills: ["Figma", "Adobe Illustrator"],
    avatar: "/placeholder.svg?height=60&width=60&text=EH",
  },
  {
    id: 6,
    name: "Leslie Alexander",
    title: "Mean Stack Developer",
    experience: "6+ years of experience",
    skills: ["Figma", "Adobe Illustrator"],
    avatar: "/placeholder.svg?height=60&width=60&text=LA",
  },
] 