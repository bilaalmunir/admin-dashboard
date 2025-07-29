import { ReactNode } from "react"

interface Column {
  key: string
  label: string
  shortLabel?: string
  sortable?: boolean
  render?: (value: unknown, row: Record<string, unknown>) => ReactNode
}

interface TableProps {
  columns: Column[]
  data: Record<string, unknown>[]
  onSort?: (columnKey: string) => void
  sortColumn?: string
  sortDirection?: "asc" | "desc"
  className?: string
  minWidth?: string
}

export default function Table({ 
  columns, 
  data, 
  onSort, 
  sortColumn, 
  sortDirection = "asc",
  className = "",
  minWidth = "min-w-[900px]"
}: TableProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className={`w-full ${minWidth}`}>
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-2 sm:px-4 py-3 text-left">
                  {column.sortable ? (
                    <button 
                      className="flex items-center space-x-1 text-xs font-medium text-gray-600 hover:text-gray-800"
                      onClick={() => onSort?.(column.key)}
                    >
                      <span className="hidden sm:inline">{column.label}</span>
                      <span className="sm:hidden">{column.shortLabel || column.label.substring(0, 3)}</span>
                      {sortColumn === column.key && (
                        <span className="text-xs">
                          {sortDirection === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </button>
                  ) : (
                    <span className="text-xs font-medium text-gray-600">
                      <span className="hidden sm:inline">{column.label}</span>
                      <span className="sm:hidden">{column.shortLabel || column.label.substring(0, 3)}</span>
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-2 sm:px-4 py-3 text-xs text-gray-500">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
