import { PageLayout } from "@/components/layout/page-layout"
import { FAQHeroSection } from "@/components/sections/faq-hero-section"
import { FAQContentSection } from "@/components/sections/faq-content-section"
import { FAQContactSection } from "@/components/sections/faq-contact-section"

export const metadata = {
  title: "FAQ - ChatFuse",
  description: "Frequently asked questions about ChatFuse. Learn about our AI models, pricing, security, and more.",
}

export default function FAQPage() {
  return (
    <PageLayout>
      <FAQHeroSection />
      <FAQContentSection />
      <FAQContactSection />
    </PageLayout>
  )
}
