"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "React Developers", value: 35, color: "#CA52A2" },
  { name: "UI/UX Designers", value: 25, color: "#ec4899" },
  { name: "Back-end Developer", value: 25, color: "#f9a8d4" },
  { name: "Team Lead", value: 15, color: "#fce7f3" },
]

export default function DonutChart() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 h-full">
      <h3 className="text-base font-semibold text-gray-800 mb-2">Recent Active Jobs</h3>
      <div className="w-full h-px bg-gray-200 mb-4"></div>

      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
