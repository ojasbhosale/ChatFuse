import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Building } from "lucide-react"

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Zero-Access Architecture",
    description: "No employee can ever access your data",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "Full visibility into data handling",
  },
  {
    icon: Building,
    title: "Enterprise-Grade Security",
    description: "Built for business, government, and institutional use",
  },
]

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="section-spacing">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-text-primary mb-4">Enterprise Solutions</h2>
          <p className="text-h5 text-text-secondary">Custom AI implementations for your organization</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-chatfuse-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-chatfuse-blue" size={24} />
                </div>
                <h3 className="text-h5 font-semibold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-body text-text-secondary">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="/compliance">Explore Compliance Center</Link>
              </Button>
              <Button variant="primary" asChild>
                <Link href="/contact-enterprise">Contact Enterprise Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
