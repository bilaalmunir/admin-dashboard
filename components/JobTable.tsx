"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

const jobsData = [
  {
    position: "UI / UX Designer",
    client: "Citi Bank",
    availability: "Immediate",
    location: "On Site - Dallas, TX",
    salary: "$50 - $85",
    postedAt: "April 28, 2025",
    expireAt: "February 28, 2026",
  },
  {
    position: "Junior Full Stack Dev",
    client: "Walmart",
    availability: "2 weeks notice",
    location: "Remote - Chicago IL",
    salary: "$35 - $75",
    postedAt: "April 28, 2025",
    expireAt: "December 31, 2025",
  },
  {
    position: "Linux System...",
    client: "BestBuy",
    availability: "Immediate",
    location: "On Site - Plano TX",
    salary: "$20 - $41",
    postedAt: "April 29, 2025",
    expireAt: "June 30, 2025",
  },
  {
    position: "Project Manager",
    client: "BestBuy",
    availability: "4 weeks notice",
    location: "Remote - Tampa FL",
    salary: "$50 - $89",
    postedAt: "April 29, 2025",
    expireAt: "June 30, 2025",
  },
  {
    position: "Senior Java Dev...",
    client: "Wells Fargo",
    availability: "3 weeks notice",
    location: "Hybrid - Columbus",
    salary: "$40 - $65",
    postedAt: "April 28, 2025",
    expireAt: "October 31, 2025",
  },
  {
    position: "Linux System...",
    client: "Citi Bank",
    availability: "Immediate",
    location: "Remote - Chicago IL",
    salary: "$20 - $41",
    postedAt: "April 29, 2025",
    expireAt: "February 28, 2026",
  },
  {
    position: "Linux System...",
    client: "Citi Bank",
    availability: "Immediate",
    location: "Remote - Chicago IL",
    salary: "$20 - $41",
    postedAt: "April 29, 2025",
    expireAt: "February 28, 2026",
  },
]

export default function JobTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const columns = [
    { key: "position", label: "Position" },
    { key: "client", label: "Client" },
    { key: "availability", label: "Availability" },
    { key: "location", label: "Location" },
    { key: "salary", label: "Salary" },
    { key: "postedAt", label: "Posted at" },
    { key: "expireAt", label: "Expire at" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-base font-semibold text-gray-800">Posted Jobs</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-2 text-left">
                  <button className="flex items-center space-x-1 text-xs font-medium text-gray-600 hover:text-gray-800">
                    <span>{column.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {jobsData.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-xs font-medium text-gray-800">{job.position}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.client}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.availability}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.location}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.salary}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.postedAt}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{job.expireAt}</td>
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
