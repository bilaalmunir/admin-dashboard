import DashboardLayout from "@/components/layouts/DashboardLayout"
import JobsHeader from "@/components/JobsHeader"
import JobsTable from "@/components/JobsTable"

export default function JobsPage() {
  return (
    <DashboardLayout currentPage="Jobs">
      <div className="flex-1 p-4 bg-gray-50">
        <JobsHeader />
        <JobsTable />
      </div>
    </DashboardLayout>
  )
}
