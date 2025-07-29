import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  showPageNumbers?: boolean
  maxVisiblePages?: number
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className = "",
  showPageNumbers = true,
  maxVisiblePages = 5
}: PaginationProps) {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = []
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pages.push(i)
        }
        pages.push("...")
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push("...")
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push("...")
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push("...")
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  const pageNumbers = generatePageNumbers()

  return (
    <div className={`flex justify-center lg:justify-end ${className}`}>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-2">
        <div className="flex items-center">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="w-px bg-gray-200 h-6 mx-1"></div>

          {showPageNumbers && pageNumbers.map((page, index) => (
            <div key={index} className="flex items-center">
              <button
                className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  page === currentPage
                    ? "bg-gray-400 text-white"
                    : page === "..."
                      ? "text-gray-400 cursor-default"
                      : "text-gray-600 hover:bg-gray-100"
                }`}
                disabled={page === "..."}
                onClick={() => typeof page === "number" && onPageChange(page)}
              >
                {page}
              </button>
              {index < pageNumbers.length - 1 && page !== "..." && (
                <div className="w-px bg-gray-200 h-6 mx-1"></div>
              )}
            </div>
          ))}

          <div className="w-px bg-gray-200 h-6 mx-1"></div>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
