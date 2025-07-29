import { FileText, Menu, Check, X } from "lucide-react"

interface Candidate {
  id: number
  name: string
  title: string
  experience: string
  skills: string[]
  avatar: string
}

interface CandidateCardProps {
  candidate: Candidate
}

export default function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        {/* Left side - Avatar and Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={candidate.avatar || "/placeholder.svg"}
              alt={candidate.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{candidate.name}</h3>
            <p className="text-sm text-gray-600">{candidate.title}</p>
          </div>
        </div>

        {/* Middle - Experience and Skills */}
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">Experience</p>
            <p className="text-sm text-gray-700">{candidate.experience}</p>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">Skills</p>
            <div className="flex space-x-2">
              {candidate.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Action Buttons */}
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <FileText className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <Menu className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
            <Check className="w-4 h-4 text-green-600" />
          </button>
          <button className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
            <X className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  )
}
