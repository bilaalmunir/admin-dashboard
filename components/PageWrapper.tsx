import Header from "@/components/Header"

interface PageWrapperProps {
  children: React.ReactNode
  showHeader?: boolean
}

export default function PageWrapper({ children, showHeader = true }: PageWrapperProps) {
  return (
    <div className="flex-1">
      {showHeader && <Header />}
      {children}
    </div>
  )
} 