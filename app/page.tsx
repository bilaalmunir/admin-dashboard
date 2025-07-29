import DashboardLayout from "@/components/layouts/DashboardLayout"
import PageWrapper from "@/components/PageWrapper"
import DashboardContent from "@/components/DashboardContent"
import JobTable from "@/components/JobTable"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PageWrapper>
        <DashboardContent />
        <JobTable />
      </PageWrapper>
    </DashboardLayout>
  )
}
