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
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      title: "Total Applicants",
      value: "+12",
      subtitle: "vs last 7 days",
      icon: Users,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Interviewed",
      value: "+6",
      subtitle: "vs last 7 days",
      icon: UserCheck,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex-1 p-4 bg-gray-50">
        <Header />

        {/* Main Dashboard Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Left Column - Stats Cards and Line Chart */}
          <div className="lg:col-span-2 space-y-4">
            {/* Stats Cards Container */}
            <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {statsData.map((stat, index) => (
                <div key={index} className="flex">
                  <StatCard {...stat} isInGroup={true} />
                  {index < statsData.length - 1 && <div className="w-px bg-gray-200 self-stretch my-4" />}
                </div>
              ))}
            </div>

            {/* Line Chart */}
            <LineChart />
          </div>

          {/* Right Column - Donut Chart */}
          <div className="lg:col-span-1">
            <DonutChart />
          </div>
        </div>

        {/* Job Table */}
        <JobTable />
      </div>
    </DashboardLayout>
  )
}
