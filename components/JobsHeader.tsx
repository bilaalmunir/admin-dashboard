"use client"

import { useState } from "react"
import { Bell, Search, Plus } from "lucide-react"

export default function JobsHeader() {
  const [activeTab, setActiveTab] = useState("Published Jobs")

  return (
    <div className="mb-6">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Jobs</h1>
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

      {/* Tabs and Controls */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-1">
          {["Draft Jobs", "Published Jobs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab ? "bg-pink-500 text-white shadow-sm" : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-64"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Job</span>
          </button>
        </div>
      </div>
    </div>
  )
}
