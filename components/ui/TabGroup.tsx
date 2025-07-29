import { ReactNode } from "react"

interface Tab {
  id: string
  label: string
  shortLabel?: string
}

interface TabGroupProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

export default function TabGroup({ tabs, activeTab, onTabChange, className = "" }: TabGroupProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 p-0.5 w-full sm:w-auto ${className}`}>
      <div className="flex">
        {tabs.map((tab) => (
          <div key={tab.id} className="flex items-center flex-1 sm:flex-none">
            <button
              onClick={() => onTabChange(tab.id)}
              className={`w-full sm:w-auto px-3 sm:px-4 lg:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === tab.id ? "bg-pink-500 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel || tab.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
} 