import DashboardLayout from "@/components/layouts/DashboardLayout"
import TopCandidatesHeader from "@/components/TopCandidatesHeader"
import CandidateCard from "@/components/CandidateCard"

const candidatesData = [
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

export default function TopCandidatesPage() {
  return (
    <DashboardLayout currentPage="Top Candidates">
      <div className="flex-1 p-4 lg:p-8">
        <TopCandidatesHeader />

        <div className="space-y-4 lg:space-y-6">
          {candidatesData.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
