import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const features = [
  "All 30+ AI models",
  "Unified conversation history",
  "Mid-chat model switching",
  "Voice I/O capabilities",
  "Custom personas",
  "Advanced file processing",
  "Project folders",
  "Priority support",
  "Beta access",
  "Zero-access architecture",
  "Enterprise-grade security",
  "Unlimited conversations",
]

export function PricingPlansSection() {
  return (
    <section className="section-spacing">
      <div className="max-container container-padding">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <Card className="p-8 relative">
            <Badge
              variant="warning"
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-100 text-orange-700"
            >
              Save 25%
            </Badge>

            <div className="text-center mb-6">
              <h3 className="text-h3 font-bold text-text-primary mb-2">Monthly Plan</h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-h1 font-bold text-chatfuse-blue">$15</span>
                <span className="text-h4 text-text-secondary line-through">$20</span>
              </div>
              <p className="text-body text-text-secondary">per month</p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check size={16} className="text-success flex-shrink-0" />
                  <span className="text-body">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="w-full" size="lg" asChild>
              <Link href="/signup?plan=monthly">Start Monthly Plan</Link>
            </Button>
          </Card>

          {/* Yearly Plan */}
          <Card className="p-8 relative border-2 border-chatfuse-blue bg-chatfuse-blue-light">
            <Badge
              variant="success"
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700"
            >
              Save $141
            </Badge>

            <div className="text-center mb-6">
              <h3 className="text-h3 font-bold text-text-primary mb-2">Yearly Plan</h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-h1 font-bold text-chatfuse-blue">$99</span>
                <span className="text-h4 text-text-secondary line-through">$240</span>
              </div>
              <p className="text-body text-text-secondary">per year</p>
              <p className="text-small text-success font-medium mt-1">That&apos;s $8.25/month</p>
            </div>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check size={16} className="text-success flex-shrink-0" />
                  <span className="text-body">{feature}</span>
                </div>
              ))}
              <div className="flex items-center space-x-3 pt-2 border-t border-chatfuse-blue">
                <Check size={16} className="text-success flex-shrink-0" />
                <span className="text-body font-medium">Additional yearly savings</span>
              </div>
            </div>

            <Button variant="primary" className="w-full" size="lg" asChild>
              <Link href="/signup?plan=yearly">Start Yearly Plan</Link>
            </Button>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-body text-text-secondary mb-4">
            Both plans include access to all current and future AI models, with no usage limits or hidden fees.
          </p>
          <p className="text-small text-text-tertiary">
            Cancel anytime. No questions asked. Your data remains private with our zero-access architecture.
          </p>
        </div>
      </div>
    </section>
  )
}
