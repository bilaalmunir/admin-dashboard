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

export interface JobData {
  salary: string
  position: string
  client: string
  availability: string
  location: string
  postedAt: string
  expireAt: string
  received: number
  status: string
}

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

export const DEFAULT_JOBS_DATA: JobData[] = [
  {
    salary: "$150.00 /m",
    position: "UI/Ux Designer",
    client: "Nexterse",
    availability: "7 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 150,
    status: "Live",
  },
  {
    salary: "$250.00 /m",
    position: "Full Stack Developer",
    client: "Devsinc",
    availability: "15 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 130,
    status: "Live",
  },
  {
    salary: "$150.00 /m",
    position: "Mern-Stack Developer",
    client: "Nexterse",
    availability: "7 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 110,
    status: "Live",
  },
  {
    salary: "$250.00 /m",
    position: "Mean Stack Developer",
    client: "Nexterse",
    availability: "15 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 220,
    status: "Live",
  },
  {
    salary: "$150.00 /m",
    position: "Back-end Developer",
    client: "Devsinc",
    availability: "7 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 20,
    status: "Live",
  },
  {
    salary: "$250.00 /m",
    position: "Front-End Developer",
    client: "Systems",
    availability: "15 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 50,
    status: "Live",
  },
  {
    salary: "$150.00 /m",
    position: "Back-end Developer",
    client: "Devsinc",
    availability: "7 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 20,
    status: "Live",
  },
  {
    salary: "$250.00 /m",
    position: "Front-End Developer",
    client: "Systems",
    availability: "15 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 50,
    status: "Live",
  },
  {
    salary: "$250.00 /m",
    position: "Full Stack Developer",
    client: "Devsinc",
    availability: "15 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 130,
    status: "Live",
  },
  {
    salary: "$150.00 /m",
    position: "Mern-Stack Developer",
    client: "Nexterse",
    availability: "7 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 110,
    status: "Live",
  },
] 