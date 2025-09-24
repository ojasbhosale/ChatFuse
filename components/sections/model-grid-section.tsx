"use client"

import { useState, useEffect } from 'react'
import { Brain, Zap, Globe, Shield, Sparkles, Trophy, Eye, Cpu, Star } from 'lucide-react'

// Floating particle component for background
function FloatingParticle({ delay = 0, duration = 20, size = 4 }) {
  const [position, setPosition] = useState<{ x: number, y: number } | null>(null)

  useEffect(() => {
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }, [])

  if (!position) return null

  return (
    <div 
      className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-sm animate-pulse"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  )
}

// Model data with icons and gradients
const featuredModels = [
  {
    name: "GPT-4o Mini",
    description: "Fast & efficient",
    icon: Zap,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50/50 to-emerald-50/50",
    shadowColor: "shadow-green-500/20"
  },
  {
    name: "Claude 3.5 Haiku",
    description: "Balanced performance",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50/50 to-cyan-50/50",
    shadowColor: "shadow-blue-500/20"
  },
  {
    name: "Gemini 2.0 Flash",
    description: "Latest from Google",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50/50 to-pink-50/50",
    shadowColor: "shadow-purple-500/20"
  },
  {
    name: "Llama 3.3 70B",
    description: "Open source power",
    icon: Shield,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50/50 to-red-50/50",
    shadowColor: "shadow-orange-500/20"
  },
  {
    name: "Phi-4",
    description: "Microsoft's latest",
    icon: Cpu,
    gradient: "from-indigo-500 to-purple-600",
    bgGradient: "from-indigo-50/50 to-purple-50/50",
    shadowColor: "shadow-indigo-500/20"
  },
  {
    name: "DeepSeek-V3",
    description: "Advanced reasoning",
    icon: Eye,
    gradient: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-50/50 to-cyan-50/50",
    shadowColor: "shadow-teal-500/20"
  },
  {
    name: "Grok-2",
    description: "Real-time insights",
    icon: Globe,
    gradient: "from-slate-500 to-gray-600",
    bgGradient: "from-slate-50/50 to-gray-50/50",
    shadowColor: "shadow-slate-500/20"
  },
  {
    name: "Command R+",
    description: "Cohere's flagship",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50/50 to-orange-50/50",
    shadowColor: "shadow-amber-500/20"
  },
  {
    name: "Mistral Large",
    description: "European excellence",
    icon: Star,
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50/50 to-pink-50/50",
    shadowColor: "shadow-rose-500/20"
  }
]

// Logo strip data - using text logos for better compatibility
const aiModels = [
  "OpenAI", "Anthropic", "Google", "Meta", "Microsoft", "DeepSeek", 
  "xAI", "Cohere", "Mistral", "Perplexity", "Together", "Replicate",
  "Hugging Face", "Stability AI", "Fireworks", "Groq", "Anyscale", "Cloudflare"
]

export default function ModelGridSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/4" />
        
        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.8} 
            duration={20 + Math.random() * 10}
            size={2 + Math.random() * 3}
          />
        ))}
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
            All the best models{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                in one place
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80" />
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Access GPT-5, Claude, Gemini, and 30+ other AI models
          </p>
        </div>

        {/* Featured Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 sm:gap-8 mb-16 sm:mb-20">
          {featuredModels.map((model, index) => {
            const IconComponent = model.icon
            return (
              <div
                key={model.name}
                className={`group relative lg:p-6 sm:p-8 bg-${model.gradient}  border-gray-200/60 rounded-2xl sm:rounded-3xl  hover:border-gray-300/80 hover:shadow-xl ${model.shadowColor} transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${model.bgGradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`!w-12 !h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${model.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${model.shadowColor}`}>
                    <IconComponent className="text-white !w-6 !h-6 sm:w-8 sm:h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                    {model.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base">
                    {model.description}
                  </p>
                </div>

                {/* Subtle border glow on hover */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${model.gradient} blur-xl -z-10`} 
                     style={{ padding: '2px' }} />
              </div>
            )
          })}
        </div>

        {/* Moving Logo Strip */}
        <div className="relative">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-500 font-medium">
              Powered by industry leaders
            </p>
          </div>
          
          {/* Logo strip container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center space-x-8 sm:space-x-12 shrink-0">
                {aiModels.map((company, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg sm:rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      {company}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-8 sm:space-x-12 shrink-0 ml-8 sm:ml-12">
                {aiModels.map((company, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg sm:rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-blue-50/30 to-transparent" />
      
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}