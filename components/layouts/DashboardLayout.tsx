"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Sidebar from "@/components/Sidebar"
import { Menu, X } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export default function DashboardLayout({ children, currentPage = "Dashboard" }: DashboardLayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarExpanded(false)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSidebarItemClick = () => {
    setSidebarExpanded(true)
    setMobileMenuOpen(false) // Close mobile menu when item is clicked
  }

  return (
    <div className="flex h-screen bg-[#F1F1F1]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          isExpanded={sidebarExpanded}
          onItemClick={handleSidebarItemClick}
          currentPage={currentPage}
          ref={sidebarRef}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-white bg-opacity-100" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full z-50">
            <Sidebar
              isExpanded={true}
              onItemClick={handleSidebarItemClick}
              currentPage={currentPage}
              ref={sidebarRef}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Mobile Header with Hamburger */}
        <div className="md:hidden bg-white shadow-sm border-b border-gray-200 p-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}
