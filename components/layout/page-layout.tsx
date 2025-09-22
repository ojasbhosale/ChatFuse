import type React from "react"
import { Navigation } from "../navigation"
import { Footer } from "../footer"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className={`flex-1 ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}
