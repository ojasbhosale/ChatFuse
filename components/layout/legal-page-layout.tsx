import type React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  description: string
  children: React.ReactNode
}

export function LegalPageLayout({ title, lastUpdated, description, children }: LegalPageLayoutProps) {
  return (
    <div className="section-spacing">
      <div className="max-container container-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-h1 font-bold text-text-primary mb-4">{title}</h1>
          <p className="text-h5 text-text-secondary mb-4">{description}</p>
          <Badge variant="default" className="bg-gray-100 text-text-secondary">
            Last updated: {lastUpdated}
          </Badge>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">{children}</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
