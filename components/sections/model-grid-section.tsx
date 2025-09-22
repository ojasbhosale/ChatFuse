import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredModels = [
  { name: "GPT-4o Mini", description: "Fast & efficient", color: "bg-green-100 text-green-700" },
  { name: "Claude 3.5 Haiku", description: "Balanced performance", color: "bg-purple-100 text-purple-700" },
  { name: "Gemini 2.0 Flash", description: "Latest from Google", color: "bg-blue-100 text-blue-700" },
  { name: "Llama 3.3 70B", description: "Open source power", color: "bg-orange-100 text-orange-700" },
  { name: "Phi-4", description: "Microsoft's latest", color: "bg-cyan-100 text-cyan-700" },
  { name: "DeepSeek-V3", description: "Advanced reasoning", color: "bg-indigo-100 text-indigo-700" },
  { name: "Grok-2", description: "Real-time insights", color: "bg-pink-100 text-pink-700" },
  { name: "Command R+", description: "Cohere's flagship", color: "bg-yellow-100 text-yellow-700" },
  { name: "Mistral Large", description: "European excellence", color: "bg-red-100 text-red-700" },
]

export function ModelGridSection() {
  return (
    <section id="models" className="section-spacing">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-text-primary mb-4">All the best models in one place</h2>
          <p className="text-h5 text-text-secondary">Access GPT-5, Claude, Gemini, and 30+ other AI models</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredModels.map((model, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-h5 font-semibold text-text-primary">{model.name}</h3>
                <Badge className={model.color}>New</Badge>
              </div>
              <p className="text-body text-text-secondary">{model.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-body text-text-secondary">
            + 21 more models including GPT-5, Claude Opus, Gemini Ultra, and specialized models
          </p>
        </div>
      </div>
    </section>
  )
}
