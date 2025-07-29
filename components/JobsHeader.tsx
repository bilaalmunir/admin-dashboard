"use client"

import { useState } from "react"
import { Bell, Search, Plus } from "lucide-react"

export default function JobsHeader() {
  const [activeTab, setActiveTab] = useState("Published Jobs")

  return (
    <div className="mb-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Jobs</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-1.5 bg-white rounded-full shadow-md hover:shadow-md transition-shadow">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-md rounded-full flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/140199898?s=400&u=470190084b66b07a5574be5632ffc4fa2a0c0b93&v=4"
              alt="Sarah's Avatar"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Tabs and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-0.5 w-full sm:w-auto">
          <div className="flex">
            {["Draft Jobs", "Published Jobs"].map((tab, index) => (
              <div key={tab} className="flex items-center flex-1 sm:flex-none">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full sm:w-auto px-3 sm:px-4 lg:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    activeTab === tab ? "bg-pink-500 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="hidden sm:inline">{tab}</span>
                  <span className="sm:hidden">{tab === "Draft Jobs" ? "Draft" : "Published"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-full sm:w-64"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-md text-sm font-medium hover:bg-pink-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Job</span>
          </button>
        </div>
      </div>
    </div>
  )
}
