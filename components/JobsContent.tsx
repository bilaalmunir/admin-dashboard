import JobsHeader from "@/components/JobsHeader"
import JobsTable from "@/components/JobsTable"
import Container from "@/components/ui/Container"

export default function JobsContent() {
  return (
    <Container>
      <JobsHeader />
      <JobsTable />
    </Container>
  )
} 