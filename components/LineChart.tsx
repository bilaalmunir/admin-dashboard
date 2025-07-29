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
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-small font-semibold text-gray-600">Applicants Trends</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#06b6d4]"></div>
            <span className="text-xs text-gray-600">Candidates</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ec4899]"></div>
            <span className="text-xs text-gray-600">Vacancies</span>
          </div>
        </div>
      </div>

      <div className="h-40">
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

            <Line
              type="monotone"
              dataKey="candidates"
              stroke="#06b6d4"
              strokeWidth={1}
              dot={false}
              name="Candidates"
            />
            <Line
              type="monotone"
              dataKey="vacancies"
              stroke="#ec4899"
              strokeWidth={1}
              dot={false}
              name="Vacancies"
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
