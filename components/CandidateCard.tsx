import { FileText, Menu, Check, X } from "lucide-react"
import Card from "@/components/ui/card"
import Avatar from "@/components/ui/avatar"
import SkillTag from "@/components/ui/SkillTag"
import ActionButton from "@/components/ui/ActionButton"
import { type CandidateData } from "@/lib/constants"

interface CandidateCardProps {
  candidate: CandidateData
}

export default function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Left side - Avatar and Info */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Avatar 
            src={candidate.avatar}
            alt={candidate.name}
            size="md"
          />

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
                <SkillTag key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Action Buttons */}
        <div className="flex items-center justify-center lg:justify-end space-x-1 sm:space-x-2">
          <ActionButton 
            icon={FileText} 
            title="View Resume"
          />
          <ActionButton 
            icon={Menu} 
            title="More Options"
          />
          <ActionButton 
            icon={Check} 
            variant="success"
            title="Approve Candidate"
          />
          <ActionButton 
            icon={X} 
            variant="danger"
            title="Reject Candidate"
          />
        </div>
      </div>
    </Card>
  )
}
