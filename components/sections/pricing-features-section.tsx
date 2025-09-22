import { Card } from "@/components/ui/card"
import { Shield, Zap, Users, Brain, Upload, History, Folder, Headphones, Flag as Flask, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "30+ AI Models",
    description: "Access to GPT-5, Claude, Gemini, Llama, DeepSeek, Grok, and more",
  },
  {
    icon: History,
    title: "Unified History",
    description: "Seamless conversation history across all AI models",
  },
  {
    icon: Zap,
    title: "Model Switching",
    description: "Switch between models mid-conversation without losing context",
  },
  {
    icon: Upload,
    title: "Rich Inputs",
    description: "Upload documents, images, voice input and output capabilities",
  },
  {
    icon: Users,
    title: "Custom Personas",
    description: "Pre-configured AI assistants for different roles and tasks",
  },
  {
    icon: Folder,
    title: "Project Folders",
    description: "Organize your conversations and files by project",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Get help when you need it with priority customer support",
  },
  {
    icon: Flask,
    title: "Beta Access",
    description: "Early access to new features and AI models",
  },
  {
    icon: Shield,
    title: "Zero-Access Security",
    description: "Your data is encrypted and never accessible to our employees",
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Complete data privacy with enterprise-grade security",
  },
]

export function PricingFeaturesSection() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-text-primary mb-4">Everything Included</h2>
          <p className="text-h5 text-text-secondary">All features included in both monthly and yearly plans</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-chatfuse-blue-light rounded-full flex items-center justify-center mb-4">
                <feature.icon className="text-chatfuse-blue" size={24} />
              </div>
              <h3 className="text-h5 font-semibold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-body text-text-secondary">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
