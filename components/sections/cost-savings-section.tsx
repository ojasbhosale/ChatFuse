"use client"

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Check, X, TrendingDown, Sparkles } from "lucide-react"

const withoutChatFuse = [
  { name: "ChatGPT Plus", price: 20 },
  { name: "Claude Pro", price: 20 },
  { name: "Gemini Advanced", price: 20 },
  { name: "Perplexity Pro", price: 20 },
  { name: "Grok Premium", price: 16 },
  { name: "+ 30 more AI services", price: 600, note: "at $20 each" },
]

const chatFuseFeatures = [
  "30+ AI models included",
  "Unified conversation history",
  "Mid-chat model switching",
  "Voice I/O capabilities",
  "Custom personas",
  "Advanced file processing",
  "Project folders",
  "Priority support",
  "Beta access",
]

// Floating particle component
function FloatingParticle({ delay = 0, duration = 20, size = 4 }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }, [])

  return (
    <div 
      className="absolute rounded-lg bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-sm animate-pulse"
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

// Animated gradient orb
function GradientOrb({ className = "", delay = 0 }) {
  return (
    <div 
      className={`absolute rounded-full opacity-20 blur-3xl animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '12s'
      }}
    />
  )
}

export function CostSavingsSection() {
  const totalWithout = withoutChatFuse.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/30 py-16 sm:py-20 lg:py-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/6 via-orange-500/3 to-yellow-500/4" />
        
        {/* Animated gradient orbs */}
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-red-500 to-orange-500 -top-40 -left-40" 
          delay={0} 
        />
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-orange-500 to-yellow-500 top-1/4 -right-48" 
          delay={3} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-green-500 to-emerald-500 bottom-10 left-1/3" 
          delay={6} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.7} 
            duration={18 + Math.random() * 8}
            size={2 + Math.random() * 3}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-red-100/80 to-orange-100/80 backdrop-blur-sm border border-red-200/60 shadow-lg shadow-red-200/20 mb-6 sm:mb-8">
            <TrendingDown className="w-5 h-5 text-red-600" />
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              Cost Comparison
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Why <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">overpay</span> for 
            <br className="hidden sm:block" />
            <span className="block sm:inline mt-2 sm:mt-0"> separate AI subscriptions?</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ChatFuse replaces multiple tools that add up to{" "}
            <span className="text-red-600 font-bold">${totalWithout}+</span> every month with one{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">
              $15 plan
            </span>
            .
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Without ChatFuse */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <Card className="relative bg-white/90 backdrop-blur-sm border-2 border-red-200/60 rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-white hover:border-red-300/80 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  Without ChatFuse
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100/80 text-red-700 rounded-full border border-red-200/60">
                  <X size={16} className="flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Expensive</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {withoutChatFuse.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-200/60 last:border-0 group/item hover:bg-red-50/50 rounded-lg px-2 sm:px-4 transition-all duration-200"
                  >
                    <div className="flex-1">
                      <span className="text-base sm:text-lg font-semibold text-gray-900 block">
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="text-sm text-gray-500 block mt-1">
                          ({item.note})
                        </span>
                      )}
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-red-600 ml-4">
                      ${item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-red-200/60 pt-4 sm:pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    Total:
                  </span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 block">
                      ${totalWithout}+
                    </span>
                    <span className="text-sm sm:text-base text-gray-500">per month</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* With ChatFuse */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 to-blue-500/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            <Card className="relative bg-gradient-to-br from-green-50/80 to-blue-50/80 backdrop-blur-sm border-2 border-green-300/60 rounded-3xl p-6 sm:p-8 lg:p-10 hover:from-green-50 hover:to-blue-50 hover:border-green-400/80 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  With ChatFuse
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 text-green-700 rounded-full border border-green-200/60">
                  <Check size={16} className="flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Smart Choice</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="text-center py-6 sm:py-8 lg:py-12 mb-6 sm:mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-lg" />
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-4 sm:py-6 border border-green-200/60">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        $15
                      </div>
                    </div>
                    <div className="text-base sm:text-lg text-gray-600 font-medium">per month</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {chatFuseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 hover:bg-white/60 rounded-lg transition-all duration-200 group/feature">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-base sm:text-lg font-medium text-gray-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-green-200/60 pt-4 sm:pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                    You Save:
                  </span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                      ${totalWithout - 15}+
                    </span>
                    <span className="text-sm sm:text-base text-gray-500">per month</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-white font-bold text-lg sm:text-xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="relative flex items-center justify-center gap-3">
              <span>Start Saving Today</span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white via-gray-50/50 to-transparent" />
    </section>
  )
}