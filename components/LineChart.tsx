"use client"

import {
  AreaChart,
  Line,
  Area,
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
        <h3 className="text-small font-semibold text-gray-600">Applicants Trends</h3>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#06b6d4]"></div>
            <span className="text-xs text-gray-600">Candidates</span>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ec4899]"></div>
            <span className="text-xs text-gray-600">Vacancies</span>
          </div>
        </div>
      </div>

      <div className="h-32 sm:h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              domain={[0, 60]}
              ticks={[0, 10, 20, 30, 40, 50, 60]}
            />

            {/* Shaded area for Candidates */}
            <Area
              type="monotone"
              dataKey="candidates"
              stroke="none"
              fill="#06b6d4"
              fillOpacity={0.1}
            />

            {/* Shaded area for Vacancies */}
            <Area
              type="monotone"
              dataKey="vacancies"
              stroke="none"
              fill="#ec4899"
              fillOpacity={0.1}
            />

            <Line
              type="monotone"
              dataKey="candidates"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={false}
              name="Candidates"
            />
            <Line
              type="monotone"
              dataKey="vacancies"
              stroke="#ec4899"
              strokeWidth={2}
              dot={false}
              name="Vacancies"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
