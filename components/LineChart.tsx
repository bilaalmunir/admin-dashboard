"use client"

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { day: "Mon", candidates: 15, vacancies: 8 },
  { day: "Tue", candidates: 22, vacancies: 12 },
  { day: "Wed", candidates: 45, vacancies: 25 },
  { day: "Thu", candidates: 28, vacancies: 18 },
  { day: "Fri", candidates: 52, vacancies: 35 },
  { day: "Sat", candidates: 38, vacancies: 28 },
  { day: "Sun", candidates: 42, vacancies: 32 },
]

export default function LineChart() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="text-base font-semibold text-gray-800 mb-4">Applicants Trends</h3>

      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              domain={[0, 60]}
              ticks={[0, 10, 20, 30, 40, 50, 60]}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
            <Line
              type="monotone"
              dataKey="candidates"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ fill: "#06b6d4", strokeWidth: 2, r: 4 }}
              name="Candidates"
            />
            <Line
              type="monotone"
              dataKey="vacancies"
              stroke="#ec4899"
              strokeWidth={2}
              dot={{ fill: "#ec4899", strokeWidth: 2, r: 4 }}
              name="Vacancies"
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
