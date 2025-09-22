import { Card } from "@/components/ui/card"
import { Brain, Users, Upload, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "FuseMind",
    description: "Smart task routing that automatically selects the best AI model for your specific needs",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: Users,
    title: "Custom Personas",
    description: "Pre-configured AI assistants for different roles: Developer, Writer, Analyst, Creative",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Upload,
    title: "Rich Inputs",
    description: "Upload documents, images, and files. Voice input and output capabilities.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Zap,
    title: "Speed & Performance",
    description: "Lightning-fast responses with optimized model routing and caching",
    color: "bg-yellow-100 text-yellow-700",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="section-spacing bg-gray-50">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-text-primary mb-4">Powerful Features</h2>
          <p className="text-h5 text-text-secondary">Everything you need for productive AI conversations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-h4 font-semibold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-body text-text-secondary">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
