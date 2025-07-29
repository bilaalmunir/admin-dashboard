import { Bell } from "lucide-react"

export default function TopCandidatesHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Top Candidates</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
          <Bell className="w-4 h-4 text-gray-600" />
        </button>

        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Sarah's Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
