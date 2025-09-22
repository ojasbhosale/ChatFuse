"use client"

import { useState, useEffect, useRef } from 'react'
import { Card } from "@/components/ui/card"
import { Check, X, TrendingDown, Sparkles, ArrowRight, Star } from "lucide-react"

const withoutChatFuse = [
  { name: "ChatGPT Plus", price: 20, logo: "🤖" },
  { name: "Claude Pro", price: 20, logo: "🧠" },
  { name: "Gemini Advanced", price: 20, logo: "✨" },
  { name: "Perplexity Pro", price: 20, logo: "🔍" },
  { name: "Grok Premium", price: 16, logo: "🚀" },
  { name: "+ 30 more AI services", price: 600, note: "at $20 each", logo: "➕" },
]

const chatFuseFeatures = [
  { name: "30+ AI models included", icon: "🤖", premium: true },
  { name: "Unified conversation history", icon: "📚", premium: false },
  { name: "Mid-chat model switching", icon: "🔄", premium: true },
  { name: "Voice I/O capabilities", icon: "🎙️", premium: false },
  { name: "Custom personas", icon: "👤", premium: true },
  { name: "Advanced file processing", icon: "📁", premium: false },
  { name: "Project folders", icon: "🗂️", premium: false },
  { name: "Priority support", icon: "💬", premium: true },
  { name: "Beta access", icon: "🧪", premium: true },
]

// Enhanced floating particle component
function FloatingParticle({ delay = 0, duration = 20, size = 4, color = "blue" }) {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  
  useEffect(() => {
    setMounted(true)
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }, [])

  if (!mounted) return null

  const colorClasses = {
    blue: "from-blue-400/20 to-purple-400/20",
    red: "from-red-400/20 to-orange-400/20",
    green: "from-green-400/20 to-emerald-400/20"
  }

  return (
    <div 
      className={`absolute rounded-full bg-gradient-to-r ${colorClasses[color]} blur-sm animate-pulse`}
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

// Enhanced gradient orb
function GradientOrb({ className = "", delay = 0, intensity = 0.2 }) {
  return (
    <div 
      className={`absolute rounded-full blur-3xl animate-pulse ${className}`}
      style={{
        opacity: intensity,
        animationDelay: `${delay}s`,
        animationDuration: '15s'
      }}
    />
  )
}

// Animated counter
function AnimatedCounter({ value, duration = 2000, prefix = "$", suffix = "" }) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [inView])

  useEffect(() => {
    if (!inView) return

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    const timeout = setTimeout(animate, 100)
    return () => clearTimeout(timeout)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function CostSavingsSection() {
  const [mounted, setMounted] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const totalWithout = withoutChatFuse.reduce((sum, item) => sum + item.price, 0)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50/30 py-20 lg:py-32">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/8 via-orange-500/4 to-yellow-500/6" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-100/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-100/30 via-transparent to-transparent" />
        
        {/* Enhanced animated gradient orbs */}
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-red-500 to-orange-500 -top-48 -left-48" 
          delay={0} intensity={0.15}
        />
        <GradientOrb 
          className="w-[28rem] h-[28rem] bg-gradient-to-r from-orange-500 to-yellow-500 top-1/4 -right-56" 
          delay={4} intensity={0.12}
        />
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-green-500 to-emerald-500 bottom-20 left-1/3" 
          delay={8} intensity={0.18}
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 top-1/2 right-1/4" 
          delay={12} intensity={0.1}
        />
        
        {/* Enhanced floating particles */}
        {mounted && Array.from({ length: 25 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.8} 
            duration={20 + Math.random() * 10}
            size={1 + Math.random() * 4}
            color={['blue', 'red', 'green'][i % 3]}
          />
        ))}
        
        {/* Sophisticated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.6'%3E%3Cpath d='M40 40c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-20 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm40 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHJlc3VsdD0ibm9pc2UiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC41Ii8+PC9zdmc+')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-gradient-to-r from-red-50/90 to-orange-50/90 backdrop-blur-lg border border-red-200/50 shadow-xl shadow-red-200/25 mb-8 hover:shadow-red-200/40 transition-all duration-500">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
              <TrendingDown className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent font-bold text-lg tracking-tight">
              Cost Analysis
            </span>
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[0.95] tracking-tight">
            Why <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-600 bg-clip-text text-transparent">overpay</span>
            <br />
            for multiple{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                subscriptions
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
            </span>
            ?
          </h2>
          
          <p className="text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Replace <span className="font-bold text-red-600">30+ separate tools</span> costing{" "}
            <span className="relative inline-block font-black text-red-600 text-3xl lg:text-4xl">
              <AnimatedCounter value={totalWithout} prefix="$" suffix="+"/>
              <div className="absolute  -right-14 text-lg font-bold text-red-500 animate-bounce">
                /month
              </div>
            </span>
            <br className="hidden sm:block" />
            with one powerful{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-black text-3xl lg:text-4xl">
              $15 solution
            </span>
          </p>
        </div>

        {/* Premium Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch mb-20">
          {/* Without ChatFuse - Enhanced */}
          <div 
            className="group relative h-full"
            onMouseEnter={() => setHoveredCard('without')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 via-orange-500/15 to-red-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 group-hover:scale-110" />
            
            <Card className="relative bg-white/95 backdrop-blur-xl border-2 border-red-200/60 rounded-3xl p-8 lg:p-12 hover:bg-white hover:border-red-300/80 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3 h-full flex flex-col group-hover:border-red-400/80">
              
              {/* Header with enhanced styling */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <X size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                      Multiple Tools
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 font-medium">The expensive way</p>
                </div>
                
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full border-2 border-red-200/60 shadow-lg">
                  <X size={18} className="flex-shrink-0" />
                  <span className="font-bold text-lg">Costly & Complex</span>
                </div>
              </div>

              {/* Enhanced service list */}
              <div className="flex-1 space-y-4 mb-10">
                {withoutChatFuse.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-5 px-6 border border-gray-100 hover:border-red-200/60 hover:bg-red-50/30 rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-lg group/item"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="text-2xl flex-shrink-0">
                        {item.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-lg font-bold text-gray-900 block truncate">
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="text-sm text-gray-500 font-medium block mt-1">
                            ({item.note})
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-6 flex-shrink-0">
                      <span className="text-2xl font-black text-red-600">
                        ${item.price}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">/mo</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced total section */}
              <div className="border-t-2 border-red-200/60 pt-8 mt-auto">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl lg:text-3xl font-black text-gray-900">
                    Monthly Total:
                  </span>
                  <div className="text-right">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-black text-red-600">
                        <AnimatedCounter value={totalWithout} prefix="$" suffix="+"/>
                      </span>
                      <span className="text-lg text-gray-500 font-medium">/month</span>
                    </div>
                  </div>
                </div>
                <div className="text-center py-4 px-6 bg-red-50/80 rounded-2xl border border-red-100">
                  <span className="text-lg font-bold text-red-700">
                    💸 That's <AnimatedCounter value={totalWithout * 12} prefix="$" suffix="+"/> per year!
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* With ChatFuse - Premium Enhanced */}
          <div 
            className="group relative h-full"
            onMouseEnter={() => setHoveredCard('with')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Spectacular glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-br from-green-400/25 via-blue-400/20 to-emerald-400/25 rounded-3xl blur-3xl group-hover:blur-[40px] transition-all duration-700 group-hover:scale-110" />
            
            <Card className="relative bg-gradient-to-br from-green-50/90 via-white/95 to-blue-50/90 backdrop-blur-xl border-2 border-green-300/60 rounded-3xl p-8 lg:p-12 hover:from-green-50 hover:to-blue-50 hover:border-green-400/80 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3 h-full flex flex-col group-hover:border-green-500/80">
              
              {/* Premium header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <Sparkles size={24} className="text-white" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent tracking-tight">
                      ChatFuse
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 font-medium">The smart solution</p>
                </div>
                
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full border-2 border-green-200/60 shadow-lg">
                  <Check size={18} className="flex-shrink-0" />
                  <span className="font-bold text-lg">All-in-One</span>
                </div>
              </div>

              {/* Spectacular price display */}
              <div className="text-center py-8 mb-10 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-emerald-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-8 border-2 border-green-200/60 shadow-xl">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="w-5 h-5 text-green-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                  <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    $15
                  </div>
                  <div className="text-xl text-gray-600 font-bold">per month</div>
                  <div className="mt-4 px-4 py-2 bg-green-100/80 text-green-700 rounded-full inline-block">
                    <span className="font-bold">🎯 Everything included</span>
                  </div>
                </div>
              </div>

              {/* Premium features grid */}
              <div className="flex-1 grid grid-cols-1 gap-3 mb-10">
                {chatFuseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 hover:bg-white/80 rounded-2xl transition-all duration-300 group/feature hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-green-200/60">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-all duration-300 ${
                      feature.premium 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg' 
                        : 'bg-gradient-to-r from-blue-500 to-green-500 shadow-lg'
                    }`}>
                      <Check size={14} className="text-white font-bold" />
                    </div>
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-lg font-semibold text-gray-800">
                        {feature.name}
                      </span>
                      {feature.premium && (
                        <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full text-xs font-bold">
                          PRO
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Spectacular savings display */}
              <div className="border-t-2 border-green-200/60 pt-8 mt-auto">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl lg:text-3xl font-black text-gray-900">
                    You Save:
                  </span>
                  <div className="text-right">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        <AnimatedCounter value={totalWithout - 15} prefix="$" suffix="+"/>
                      </span>
                      <span className="text-lg text-gray-500 font-medium">/month</span>
                    </div>
                  </div>
                </div>
                <div className="text-center py-6 px-8 bg-gradient-to-r from-green-100/80 to-emerald-100/80 rounded-2xl border-2 border-green-200/60">
                  <span className="text-xl font-black bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                    🚀 Save <AnimatedCounter value={(totalWithout - 15) * 12} prefix="$" suffix="+"/> annually!
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 via-blue-500/30 to-emerald-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
            <button className="relative px-12 py-6 bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 rounded-full text-white font-black text-xl shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-2 border-white/20">
              <div className="flex items-center justify-center gap-4">
                <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
                <span className="tracking-tight">Start Saving $681+ Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-500" />
              </div>
            </button>
          </div>
          
          <p className="mt-6 text-lg text-gray-600 font-medium">
            ✨ Join 10,000+ users saving thousands annually
          </p>
        </div>
      </div>

      {/* Enhanced bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 lg:h-40 bg-gradient-to-t from-white via-gray-50/80 to-transparent" />
    </section>
  )
}