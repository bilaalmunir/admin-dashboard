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
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-300">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Left side - Avatar and Info */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={ "https://avatars.githubusercontent.com/u/140199898?s=400&u=470190084b66b07a5574be5632ffc4fa2a0c0b93&v=4"}
              alt={candidate.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">{candidate.name}</h3>
            <p className="text-sm text-gray-600">{candidate.title}</p>
          </div>
        </div>

        {/* Middle - Experience and Skills */}
        <div className="flex flex-col sm:flex-row sm:space-x-28 space-y-3 sm:space-y-0">
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-1">Experience</p>
            <p className="text-sm text-gray-700">{candidate.experience}</p>
          </div>

          <div className="text-left">
            <p className="text-xs text-gray-500 mb-2">Skills</p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {candidate.skills.map((skill, index) => (
                <span key={index} className="px-2 sm:px-3 py-1 bg-purple-200 text-blue-400 text-xs rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Action Buttons */}
        <div className="flex items-center justify-center lg:justify-end space-x-1 sm:space-x-2">
          <button className="p-1.5 sm:p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
          <button className="p-1.5 sm:p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <Menu className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
          <button className="p-1.5 sm:p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
          </button>
          <button className="p-1.5 sm:p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
            <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  )
}
