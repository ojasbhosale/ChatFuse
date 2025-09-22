import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingHeroSection() {
  return (
    <section className="section-spacing bg-gradient-to-b from-chatfuse-blue-light to-white">
      <div className="max-container container-padding">
        {/* Fall Sale Banner */}
        <div className="text-center mb-8">
          <Badge variant="warning" className="text-body px-6 py-2 bg-orange-100 text-orange-700">
            🍂 Fall Sale: Save 25% → Now $15/month (was $20)
          </Badge>
          <div className="mt-4">
            <Button variant="primary" asChild>
              <Link href="/signup">Upgrade Now</Link>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-h1 font-bold text-text-primary mb-6 text-balance">Simple, Transparent Pricing</h1>
          <p className="text-h5 text-text-secondary mb-8 text-pretty">
            Get access to GPT-5, Claude, Gemini, Llama, and 30+ other AI models for one low price.
          </p>
        </div>
      </div>
    </section>
  )
}
