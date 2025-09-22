import { PageLayout } from "@/components/layout/page-layout"
import { PricingHeroSection } from "@/components/sections/pricing-hero-section"
import { PricingPlansSection } from "@/components/sections/pricing-plans-section"
import { PricingFeaturesSection } from "@/components/sections/pricing-features-section"
import { PricingFAQSection } from "@/components/sections/pricing-faq-section"

export const metadata = {
  title: "Pricing - ChatFuse",
  description:
    "Get access to GPT-5, Claude, Gemini, Llama, and 30+ other AI models for one low price. Fall Sale: Save 25% - Now $15/month.",
}

export default function PricingPage() {
  return (
    <PageLayout>
      <PricingHeroSection />
      <PricingPlansSection />
      <PricingFeaturesSection />
      <PricingFAQSection />
    </PageLayout>
  )
}
