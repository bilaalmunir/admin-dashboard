import TopCandidatesHeader from "@/components/TopCandidatesHeader"
import CandidateCard from "@/components/CandidateCard"
import Container from "@/components/ui/Container"
import Section from "@/components/ui/Section"
import { DEFAULT_CANDIDATES_DATA, type CandidateData } from "@/lib/constants"

interface TopCandidatesContentProps {
  candidatesData?: CandidateData[]
}

export default function TopCandidatesContent({ candidatesData }: TopCandidatesContentProps) {
  const data = candidatesData || DEFAULT_CANDIDATES_DATA

  return (
    <Container>
      <TopCandidatesHeader />
      <Section>
        {data.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </Section>
    </Container>
  )
} 