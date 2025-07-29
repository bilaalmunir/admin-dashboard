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
      { icon: Users, label: "Applicants", href: "/" },
      { icon: BarChart3, label: "Reports", href: "/reports" },
      { icon: TrendingUp, label: "Top Candidates", href: "/top-candidates" },
      { icon: Puzzle, label: "Integrations", href: "/" },
      { icon: Calendar, label: "Calendar", href: "/" },
    ]

    const helpItem = { icon: HelpCircle, label: "Help", href: "/" }

    return (
      <div
        ref={ref}
        className={`h-full transition-all duration-300 ease-in-out relative rounded-r-3xl flex flex-col ${
          isExpanded ? "w-64 bg-[#D7DCF7]" : "w-28"
        }`}
      >
        {/* Logo */}
        <div className="p-4">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-blue font-bold text-4xl">N</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-8 pl-6 py-4 flex-1">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <button
                onClick={onItemClick}
                className={`flex items-center transition-all duration-200 ${
                  isExpanded 
                    ? "w-full space-x-3 p-3 text-left justify-start" 
                    : "w-12 h-12 rounded-full p-0 justify-center mt-2"
                } ${
                  item.label === currentPage
                    ? isExpanded 
                      ? "bg-[#F1F1F1] text-gray-800 rounded-l-2xl relative overflow-visible" 
                      : "bg-[#D7DCF7] text-gray-800 shadow-sm"
                    : isExpanded
                      ? "text-gray-700 hover:bg-white hover:bg-opacity-40 rounded-xl"
                      : "text-gray-700 hover:bg-white hover:bg-opacity-40"
                }`}
                style={
                  item.label === currentPage && isExpanded
                    ? {
                        marginRight: '-32px',
                        paddingRight: 'calc(1.25rem + 32px)',
                        borderTopRightRadius: '0',
                        borderBottomRightRadius: '0'
                      }
                    : {}
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
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

        {/* Help Item at Bottom */}
        <div className="pl-8 pb-2">
          <Link href={helpItem.href}>
            <button
              onClick={onItemClick}
              className={`flex items-center transition-all duration-200 ${
                isExpanded 
                  ? "w-full space-x-2 py-5 text-left justify-start" 
                  : "w-14 h-14 rounded-full p-0 justify-center"
              } ${
                helpItem.label === currentPage
                  ? isExpanded 
                    ? "bg-[#F1F1F1] text-gray-800 rounded-l-2xl relative overflow-visible" 
                    : "bg-[#D7DCF7] text-gray-800 shadow-sm"
                  : isExpanded
                    ? "text-gray-700 rounded-xl"
                    : "text-gray-700 hover:bg-white hover:bg-opacity-40"
              }`}
              style={
                helpItem.label === currentPage && isExpanded
                  ? {
                      marginRight: '-32px',
                      paddingRight: 'calc(1.25rem + 32px)',
                      borderTopRightRadius: '0',
                      borderBottomRightRadius: '0'
                    }
                  : {}
              }
            >
              <helpItem.icon className="w-3 h-3 flex-shrink-0 mb-4" />
              <span
                className={`text-base font-medium transition-all duration-300 ${
                  isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 w-0 overflow-hidden"
                }`}
              >
                {helpItem.label}
              </span>
            </button>
          </Link>
        </div>
      </div>
    )
  },
)

Sidebar.displayName = "Sidebar"

export default Sidebar
