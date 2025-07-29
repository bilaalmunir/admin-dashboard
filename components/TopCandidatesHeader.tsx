import { Bell } from "lucide-react"

export default function TopCandidatesHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Top Candidates</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-1.5 bg-white rounded-full shadow-md hover:shadow-md transition-shadow">
          <Bell className="w-6 h-6 text-gray-600" />
        </button>

        <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/140199898?s=400&u=470190084b66b07a5574be5632ffc4fa2a0c0b93&v=4"
            alt="Sarah's Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
