"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, Share2, Trash2 } from "lucide-react"

const jobsData = [
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
    salary: "$250.00 /m",
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
    salary: "$150.00 /m",
    position: "Front-End Developer",
    client: "Systems",
    availability: "15 Days",
    location: "Lahore, Punjab, Pakistan",
    postedAt: "2025-06-20",
    expireAt: "2025-06-20",
    received: 50,
    status: "Live",
  },
]

export default function JobsTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: "salary", label: "Salary" },
    { key: "position", label: "Position" },
    { key: "client", label: "Client" },
    { key: "availability", label: "Availability" },
    { key: "location", label: "Location" },
    { key: "postedAt", label: "Posted At" },
    { key: "expireAt", label: "Expire At" },
    { key: "received", label: "Received" },
    { key: "status", label: "Job Status" },
    { key: "action", label: "Action" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-3 text-left">
                  <button className="flex items-center space-x-1 text-xs font-medium text-gray-600 hover:text-gray-800">
                    <span>{column.label}</span>
                    {column.key !== "action" && <ChevronDown className="w-4 h-4" />}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobsData.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-xs font-medium text-gray-800">{job.salary}</td>
                <td className="px-4 py-3 text-xs text-gray-800 font-medium">{job.position}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.client}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.availability}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.location}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.postedAt}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.expireAt}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.received}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    {job.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 bg-pink-100 hover:bg-pink-200 rounded-lg transition-colors">
                      <Share2 className="w-3 h-3 text-pink-600" />
                    </button>
                    <button className="p-1.5 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
                      <Trash2 className="w-3 h-3 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center justify-center space-x-2">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
            <button
              key={index}
              className={`px-2 py-1 rounded-lg text-xs font-medium ${
                page === currentPage
                  ? "bg-purple-600 text-white"
                  : page === "..."
                    ? "text-gray-400 cursor-default"
                    : "text-gray-600 hover:bg-gray-100"
              }`}
              disabled={page === "..."}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
