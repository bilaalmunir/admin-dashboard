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
    <div className="px-4 lg:px-8 py-4 lg:py-6">
      {/* Heading outside table */}
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-800">Posted Jobs</h3>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="px-2 sm:px-4 py-2 text-left">
                    <button className="flex items-center space-x-1 text-xs font-medium text-gray-600 hover:text-gray-800">
                      <span className="hidden sm:inline">{column.label}</span>
                      <span className="sm:hidden">{column.label.substring(0, 3)}</span>
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {jobsData.map((job, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-3 text-xs font-medium text-gray-800">{job.position}</td>
                  <td className="px-2 sm:px-4 py-3 text-xs text-gray-600">{job.client}</td>
                  <td className="px-2 sm:px-4 py-3 text-xs text-gray-600">{job.availability}</td>
                  <td className="px-2 sm:px-4 py-3 text-xs text-gray-600">{job.location}</td>
                  <td className="px-2 sm:px-4 py-3 text-xs text-gray-600">{job.salary}</td>
                  <td className="px-2 sm:px-4 py-3 text-xs text-gray-600">{job.postedAt}</td>
                  <td className="px-2 sm:px-4 py-3 text-xs text-gray-600">{job.expireAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination outside table */}
      <div className="flex justify-center lg:justify-end mt-4">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-2">
          <div className="flex items-center">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="w-px bg-gray-200 h-6 mx-1"></div>

            {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
              <div key={index} className="flex items-center">
                <button
                  className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    page === currentPage
                      ? "bg-gray-400 text-white"
                      : page === "..."
                        ? "text-gray-400 cursor-default"
                        : "text-gray-600 hover:bg-gray-100"
                  }`}
                  disabled={page === "..."}
                  onClick={() => typeof page === "number" && setCurrentPage(page)}
                >
                  {page}
                </button>
                {index < [1, 2, 3, "...", 8, 9, 10].length - 1 && page !== "..." && (
                  <div className="w-px bg-gray-200 h-6 mx-1"></div>
                )}
              </div>
            ))}

            <div className="w-px bg-gray-200 h-6 mx-1"></div>
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
    </div>
  )
}
