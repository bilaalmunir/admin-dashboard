"use client"

import { forwardRef } from "react"
import Link from "next/link"
import { LayoutDashboard, Briefcase, Users, BarChart3, TrendingUp, Puzzle, Calendar, HelpCircle } from "lucide-react"

interface SidebarProps {
  isExpanded: boolean
  onItemClick: () => void
  currentPage?: string
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ isExpanded, onItemClick, currentPage = "Dashboard" }, ref) => {
    const menuItems = [
      { icon: LayoutDashboard, label: "Dashboard", href: "/" },
      { icon: Briefcase, label: "Jobs", href: "/jobs" },
      { icon: Users, label: "Applicants", href: "/applicants" },
      { icon: BarChart3, label: "Reports", href: "/reports" },
      { icon: TrendingUp, label: "Top Candidates", href: "/top-candidates" },
      { icon: Puzzle, label: "Integrations", href: "/integrations" },
      { icon: Calendar, label: "Calendar", href: "/calendar" },
      { icon: HelpCircle, label: "Help", href: "/help" },
    ]

    return (
      <div
        ref={ref}
        className={`h-full bg-gradient-to-b from-purple-100 to-purple-200 transition-all duration-300 ease-in-out ${
          isExpanded ? "w-64" : "w-16"
        }`}
      >
        {/* Logo */}
        <div className="p-3 border-b border-purple-200">
          <div className="w-7 h-7 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-base">N</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-1.5 space-y-1">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <button
                onClick={onItemClick}
                className={`w-full flex items-center space-x-3 px-2.5 py-2.5 rounded-lg text-left transition-all duration-200 ${
                  item.label === currentPage
                    ? "bg-white bg-opacity-60 text-gray-800 shadow-sm"
                    : "text-gray-700 hover:bg-white hover:bg-opacity-40"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span
                  className={`text-sm font-medium transition-all duration-300 ${
                    isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 w-0 overflow-hidden"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </Link>
          ))}
        </nav>
      </div>
    )
  },
)

Sidebar.displayName = "Sidebar"

export default Sidebar
