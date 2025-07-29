"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Sidebar from "@/components/Sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export default function DashboardLayout({ children, currentPage = "Dashboard" }: DashboardLayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        isExpanded={sidebarExpanded}
        onItemClick={() => setSidebarExpanded(true)}
        currentPage={currentPage}
        ref={sidebarRef}
      />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
