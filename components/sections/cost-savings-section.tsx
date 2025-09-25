"use client"

import { useState, useEffect } from 'react'
import { Check, X, Sparkles } from 'lucide-react'

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
      className="absolute rounded-full bg-gradient-to-r from-red-400/20 to-orange-400/20 blur-sm animate-pulse"
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
        animationDuration: '10s'
      }}
    />
  )
}

// Animated counter component
function AnimatedCounter({ target, duration = 2000, prefix = "", suffix = "" }: { target: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration])

  return <span>{prefix}{count}{suffix}</span>
}

export default function CostSavingsSection() {
  const withoutChatFuseServices = [
    { name: "ChatGPT Plus", cost: 20 },
    { name: "Claude Pro", cost: 20 },
    { name: "Gemini Advanced", cost: 20 },
    { name: "Perplexity Pro", cost: 20 },
    { name: "Grok Premium", cost: 16 },
    { name: "+ 30 more services", cost: 600, isHighlight: true }
  ]

  const chatFuseFeatures = [
    "30+ AI models included",
    "Unified conversation history", 
    "Mid-chat model switching",
    "Voice I/O capabilities",
    "Custom personas",
    "Advanced file processing"
  ]

  const bonusFeatures = [
    "Project folders",
    "Priority support", 
    "Beta access"
  ]

  const totalWithoutChatFuse = 696
  const chatFuseCost = 15
  const monthlySavings = totalWithoutChatFuse - chatFuseCost

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-red-50/30 via-orange-50/20 to-yellow-50/30">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/6 via-orange-500/4 to-yellow-500/6" />
        
        {/* Animated gradient orbs */}
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-red-500 to-orange-500 -top-48 -left-48" 
          delay={0} 
        />
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-orange-500 to-yellow-500 top-1/4 -right-40" 
          delay={3} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-yellow-500 to-red-500 bottom-0 left-1/3" 
          delay={6} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.4} 
            duration={12 + Math.random() * 8}
            size={2 + Math.random() * 3}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-8 text-gray-900 leading-tight">
            <div className="block mb-1 sm:mb-0">
              Why overpay for separate{" "}
            </div>
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              AI subscriptions?
            </span>
          </h2>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <div className="block sm:inline">
              <span className='text-text-logo1'>Chat</span><span className="text-text-logo">Fuse</span> replaces multiple tools that add up to{" "}
            </div>
            <div className="block sm:inline lg:mt-2 sm:mt-0">
              <span className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                $380+ every month
              </span>
              {" "}with one{" "}
              <span className="text-green-600 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                $15 plan
              </span>.
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-6xl mx-2 lg:mx-auto mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Without ChatFuse Card */}
            <div className="relative group order-2 lg:order-1">
              {/* Status Badge */}
              <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 z-10">
                <div className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-1.5">
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Expensive Way</span>
                </div>
              </div>

              <div className="bg-white border-2 border-red-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-red-500/5 hover:shadow-red-500/10 transition-shadow duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Without <span className='text-text-logo1'>Chat</span><span className="text-text-logo">Fuse</span>
                  </h3>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-red-600">
                    $<AnimatedCounter target={totalWithoutChatFuse} duration={2000} />
                    <span className="text-base sm:text-lg lg:text-2xl text-gray-500 font-semibold">/month</span>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-2 sm:space-y-3 flex-grow">
                  {withoutChatFuseServices.map((service, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base ${
                        service.isHighlight 
                          ? 'bg-red-50 border border-red-200' 
                          : 'bg-gray-50'
                      }`}
                    >
                      <span className="font-medium text-gray-700">{service.name}</span>
                      <span className="font-bold text-gray-900">${service.cost}</span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-red-100">
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">Total:</span>
                    <span className="text-2xl sm:text-3xl font-black text-red-600">
                      $<AnimatedCounter target={totalWithoutChatFuse} duration={2000} />/mo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* With ChatFuse Card */}
            <div className="relative group order-1 lg:order-2">
              {/* Status Badge */}
              <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 z-10">
                <div className="bg-green-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-1.5">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Smart Choice</span>
                </div>
              </div>

              <div className="bg-white border-2 border-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-green-500/5 hover:shadow-green-500/10 transition-all duration-300 h-full flex flex-col hover:scale-[1.01]">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center justify-center">
                    <span className='text-text-logo1'>Chat</span><span className="text-text-logo">Fuse</span>
                  </h3>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-green-600">
                    $<AnimatedCounter target={chatFuseCost} duration={1500} />
                    <span className="text-base sm:text-lg lg:text-2xl text-gray-500 font-semibold">/month</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 line-through mt-1">normally $20/month</div>
                </div>

                {/* Core Features */}
                <div className="space-y-4 sm:space-y-6 flex-grow">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Core Features</h4>
                    <div className="space-y-2">
                      {chatFuseFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 sm:gap-3 py-1">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="text-white w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bonus Features */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Bonus Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-2">
                      {bonusFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Sparkles className="text-white w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Savings */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-green-100">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Monthly Savings</div>
                    <div className="text-2xl sm:text-3xl font-black text-green-600">
                      $<AnimatedCounter target={monthlySavings} duration={2500} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-32 bg-gradient-to-t from-white via-gray-50/30 to-transparent" />
    </section>
  )
}