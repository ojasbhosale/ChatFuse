"use client"

import { useState, useEffect } from 'react'
import { Check, Crown, Zap, ArrowRight } from 'lucide-react'

// Floating particle component
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
      className="absolute rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/20 blur-sm animate-pulse"
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
      className={`absolute rounded-full opacity-25 blur-3xl animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '10s'
      }}
    />
  )
}

export function PricingPlansSection() {
  const features = [
    "All 30+ AI models (GPT-5, Claude, Gemini, Llama)",
    "Unified conversation history",
    "Mid-chat model switching",
    "Voice input and output",
    "Custom personas",
    "Advanced file processing",
    "Project folders",
    "Priority support",
    "Beta access to new features"
  ]

  const plans = [
    {
      name: "Monthly Plan",
      originalPrice: "$20",
      currentPrice: "$15",
      period: "/month",
      badge: "Save 25%",
      badgeColor: "from-orange-500 to-red-500",
      bgGradient: "from-rose-100/50 to-pink-100/50",
      borderGradient: "from-rose-300 to-pink-300",
      ctaGradient: "from-rose-500 to-pink-600",
      popular: false
    },
    {
      name: "Yearly Plan",
      originalPrice: "$240",
      currentPrice: "$99",
      period: "/year",
      badge: "Save $141",
      badgeColor: "from-emerald-500 to-green-500",
      bgGradient: "from-emerald-100/50 to-green-100/50",
      borderGradient: "from-emerald-300 to-green-300",
      ctaGradient: "from-emerald-500 to-green-600",
      popular: true
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-rose-50/30 via-white to-pink-50/40">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/6 via-pink-500/4 to-fuchsia-500/8" />
        
        {/* Animated gradient orbs */}
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-rose-500 to-pink-500 -top-40 -right-40" 
          delay={0} 
        />
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-pink-500 to-fuchsia-500 top-1/2 -left-48" 
          delay={4} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-fuchsia-500 to-purple-500 bottom-0 right-1/4" 
          delay={8} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.5} 
            duration={20 + Math.random() * 8}
            size={2 + Math.random() * 4}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EC4899' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our fall sale pricing and get access to everything
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`group relative p-8 sm:p-10 bg-white/85 backdrop-blur-sm border-2 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                plan.popular 
                  ? `border-gradient-to-r ${plan.borderGradient} shadow-2xl shadow-emerald-500/20` 
                  : 'border-gray-200/60 hover:border-gray-300/80'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute z-10 -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white text-sm font-semibold shadow-lg">
                    <Crown size={20} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-3xl opacity-100  `} />
              
              <div className="relative z-10">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r ${plan.badgeColor} text-white rounded-full text-sm font-semibold mb-6 shadow-lg`}>
                    <Zap size={20} />
                    <span>{plan.badge}</span>
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {plan.currentPrice}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg text-gray-500 line-through">
                        {plan.originalPrice}
                      </span>
                      <span className="text-lg text-gray-600">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  {plan.name === "Yearly Plan" && (
                    <p className="text-sm text-gray-500">
                      That's just $8.25/month billed yearly
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`group/btn relative w-full px-8 py-4 bg-gradient-to-r ${plan.ctaGradient} rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.ctaGradient} rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-xl`} />
                  <div className="relative flex items-center justify-center gap-3">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Everything included:
                  </h4>
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.ctaGradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${plan.ctaGradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-6">
            Not sure which plan is right for you?
          </p>
          <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-full text-gray-700 font-semibold text-lg hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Start Free Trial</span>
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-rose-50/40 to-transparent" />
    </section>
  )
}