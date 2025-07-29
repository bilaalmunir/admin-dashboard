import DashboardLayout from "@/components/layouts/DashboardLayout"
import PageWrapper from "@/components/PageWrapper"
import JobsContent from "@/components/JobsContent"

export default function JobsPage() {
  return (
    <DashboardLayout currentPage="Jobs">
      <PageWrapper showHeader={false}>
        <JobsContent />
      </PageWrapper>
    </DashboardLayout>
  )
}
