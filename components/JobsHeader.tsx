"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import PageHeader from "@/components/ui/PageHeader"
import TabGroup from "@/components/ui/TabGroup"
import SearchInput from "@/components/ui/SearchInput"
import Button from "@/components/ui/button"

export default function JobsHeader() {
  const [activeTab, setActiveTab] = useState("Published Jobs")
  const [searchValue, setSearchValue] = useState("")

  const tabs = [
    { id: "Draft Jobs", label: "Draft Jobs", shortLabel: "Draft" },
    { id: "Published Jobs", label: "Published Jobs", shortLabel: "Published" }
  ]

  return (
    <div className="mb-6">
      <PageHeader title="Jobs" />

      {/* Tabs and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <TabGroup 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <SearchInput 
            value={searchValue}
            onChange={setSearchValue}
            width="md"
          />
          <Button icon={Plus}>
            New Job
          </Button>
        </div>
      </div>
    </div>
  )
}
