"use client"

import { useState } from "react"
import { Share2, Trash2 } from "lucide-react"
import Table from "@/components/ui/table"
import Pagination from "@/components/ui/pagination"
import ActionButton from "@/components/ui/ActionButton"
import StatusBadge from "@/components/ui/StatusBadge"
import { DEFAULT_JOBS_DATA, type JobData } from "@/lib/constants"

interface JobsTableContentProps {
  jobsData?: JobData[]
}

export default function JobsTableContent({ jobsData }: JobsTableContentProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortColumn, setSortColumn] = useState<string>("")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  
  const data = jobsData || DEFAULT_JOBS_DATA
  const totalPages = 10

  const columns = [
    { key: "salary", label: "Salary", sortable: true },
    { key: "position", label: "Position", sortable: true },
    { key: "client", label: "Client", sortable: true },
    { key: "availability", label: "Availability", sortable: true },
    { key: "location", label: "Location", sortable: true },
    { key: "postedAt", label: "Posted At", sortable: true },
    { key: "expireAt", label: "Expire At", sortable: true },
    { key: "received", label: "Received", sortable: true },
    { 
      key: "status", 
      label: "Job Status", 
      sortable: false,
      render: (value: string) => <StatusBadge status={value} />
    },
    { 
      key: "action", 
      label: "Action", 
      sortable: false,
      render: () => (
        <div className="flex items-center space-x-1 sm:space-x-2">
          <ActionButton 
            icon={Share2} 
            variant="default"
            title="Share Job"
          />
          <ActionButton 
            icon={Trash2} 
            variant="danger"
            title="Delete Job"
          />
        </div>
      )
    },
  ]

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(columnKey)
      setSortDirection("asc")
    }
  }

  return (
    <div className="px-2 sm:px-4 lg:px-8 py-4 lg:py-6">
      <Table 
        columns={columns}
        data={data}
        onSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
      
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className="mt-4"
      />
    </div>
  )
} 