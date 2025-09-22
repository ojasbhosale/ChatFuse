import { PageLayout } from "@/components/layout/page-layout"
import HeroSection from "@/components/sections/hero-section"
import { CostSavingsSection } from "@/components/sections/cost-savings-section"
import { DashboardPreviewSection } from "@/components/sections/dashboard-preview-section"
import { ModelGridSection } from "@/components/sections/model-grid-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { EnterpriseSection } from "@/components/sections/enterprise-section"

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <CostSavingsSection />
      <DashboardPreviewSection />
      <ModelGridSection />
      <FeaturesSection />
      <EnterpriseSection />
    </PageLayout>
  )
}
