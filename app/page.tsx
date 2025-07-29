import DashboardLayout from "@/components/layouts/DashboardLayout"
import Header from "@/components/Header"
import StatCard from "@/components/StatCard"
import LineChart from "@/components/LineChart"
import DonutChart from "@/components/DonutChart"
import JobTable from "@/components/JobTable"
import { Briefcase, Users, UserCheck } from "lucide-react"

export default function Dashboard() {
  const statsData = [
    {
      title: "Job Posts",
      value: "+20",
      subtitle: "vs last 7 days",
      icon: Briefcase,
      bgColor: "bg-[#ea669f]",
      iconColor: "text-white",
    },
    {
      title: "Total Applicants",
      value: "+12",
      subtitle: "vs last 7 days",
      icon: Users,
      bgColor: "bg-[#ea669f]",
      iconColor: "text-white",
    },
    {
      title: "Interviewed",
      value: "+6",
      subtitle: "vs last 7 days",
      icon: UserCheck,
      bgColor: "bg-[#ea669f]",
      iconColor: "text-white",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex-1">
        <Header />

        {/* Main Dashboard Content - Responsive Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6 p-4 lg:p-8">
          {/* Left Column - Stats Cards and Line Chart */}
          <div className="xl:col-span-2 space-y-4 lg:space-y-6">
            {/* Stats Cards Container */}
            <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              {statsData.map((stat, index) => (
                <div key={index} className="flex-1 flex justify-center">
                  <StatCard {...stat} isInGroup={true} />
                  {index < statsData.length - 1 && (
                    <div className="hidden sm:block w-px bg-gray-200 self-stretch my-4" />
                  )}
                </div>
              ))}
            </div>

            {/* Line Chart */}
            <LineChart />
          </div>

          {/* Right Column - Donut Chart */}
          <div className="xl:col-span-1">
            <DonutChart />
          </div>
        </div>

        {/* Job Table */}
        <JobTable />
      </div>
    </DashboardLayout>
  )
}
