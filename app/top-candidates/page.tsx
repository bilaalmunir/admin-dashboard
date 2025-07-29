import DashboardLayout from "@/components/layouts/DashboardLayout"
import PageWrapper from "@/components/PageWrapper"
import TopCandidatesContent from "@/components/TopCandidatesContent"

export default function TopCandidatesPage() {
  return (
    <DashboardLayout currentPage="Top Candidates">
      <PageWrapper showHeader={false}>
        <TopCandidatesContent />
      </PageWrapper>
    </DashboardLayout>
  )
}
