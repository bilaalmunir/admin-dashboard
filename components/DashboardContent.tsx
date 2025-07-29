import StatsSection from "@/components/StatsSection"
import LineChart from "@/components/LineChart"
import DonutChart from "@/components/DonutChart"
import Grid from "@/components/ui/Grid"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { type StatData } from "@/lib/constants"

interface DashboardContentProps {
  statsData?: StatData[]
}

export default function DashboardContent({ statsData }: DashboardContentProps) {
  return (
    <Container>
      <Grid cols={3} gap="md">
        {/* Left Column - Stats Cards and Line Chart */}
        <div className="xl:col-span-2">
          <Section>
            <StatsSection statsData={statsData} />
            <LineChart />
          </Section>
        </div>

        {/* Right Column - Donut Chart */}
        <div className="xl:col-span-1">
          <DonutChart />
        </div>
      </Grid>
    </Container>
  )
} 