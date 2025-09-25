"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Brain, Shield } from 'lucide-react'

// Floating particle component
function FloatingParticle({ delay = 0, duration = 20, size = 4 }) {
  const [position, setPosition] = useState<{ x: number, y: number } | null>(null)

  useEffect(() => {
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    })
  }, [])

  // Only render on client
  if (!position) return null

  return (
    <div 
      className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm animate-pulse"
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
      className={`absolute rounded-full opacity-30 blur-3xl animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '8s'
      }}
    />
  )
}

export default function HeroSection() {
  return (
    <section className="relative pb-6 sm:pb-10 min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/4 to-pink-500/6" />
        
        {/* Animated gradient orbs */}
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 -top-48 -left-48" 
          delay={0} 
        />
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 top-1/3 -right-40" 
          delay={2} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-indigo-500 to-blue-500 bottom-0 left-1/4" 
          delay={4} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.5} 
            duration={15 + Math.random() * 10}
            size={2 + Math.random() * 4}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div
            className="absolute inset-0 opacity-40"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
        />
      </div>

      <div className="relative z-10 px-2 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 max-w-7xl mx-auto">
        {/* Fall Sale Banner */}
        <div className="text-center mb-12 mt-6 sm:mb-12">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-full bg-gradient-to-r from-orange-100/90 to-red-100/90 backdrop-blur-sm border border-orange-200/60 shadow-lg shadow-orange-200/20 max-w-full">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-md sm:text-xl lg:text-2xl">🍂</span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent font-medium text-sm sm:text-base">Fall Sale:</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold text-sm sm:text-base">$20/month → $15/month</span>
            </div>
            <span className="text-red-600 font-semibold text-sm sm:text-base">Limited time offer</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12  leading-tight text-gray-900">
            <div className="block mb-2 sm:mb-1">
              <span className='text-text-logo1'>Chat</span><span className="text-text-logo">Fuse</span> brings{" "}
            </div>
            <div className="relative block mb-2 sm:mb-1">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                GPT-5, Claude, Gemini, Llama,
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full opacity-80" />
            </div>
            <div className="block mb-2 sm:mb-1 text-gray-800">
              and 30+ others together for just{" "}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-extrabold">
                $15/month
              </span>
              <span className="text-gray-500 line-through text-lg sm:text-xl md:text-2xl lg:text-3xl">
                (normally $20)
              </span>
            </div>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-20 lg:mb-4 max-w-4xl mx-auto leading-relaxed">
            Still paying for separate AI tools? Replace multiple AI subscriptions that easily add up to over{" "}
            <span className="text-red-600 font-semibold">$300/month</span>{" "}
            with one simple plan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center pt-8 lg:pt-12 mb-20  lg:mb-20">
            <button className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-sm sm:text-base lg:text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                <span>Start Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            
            <button className="group px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-full text-gray-700 font-semibold text-sm sm:text-base lg:text-lg hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              See how it works
            </button>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-3 sm:mx-auto">
            {/* Save Money Card */}
            <div className="group relative p-6 sm:p-8 lg:p-10 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-2xl lg:rounded-3xl hover:bg-white/90 hover:border-gray-400 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                  <Sparkles className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-5 text-gray-900">
                  Save money instantly
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Replace multiple AI subscriptions that easily add up to over $300/month with one simple plan.
                </p>
              </div>
            </div>

            {/* All Models Card */}
            <div className="group relative p-6 sm:p-8 lg:p-10 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-2xl lg:rounded-3xl hover:bg-white/90 hover:border-gray-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <Brain className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-5 text-gray-900">
                  All the best models
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Use GPT-5, Claude, Gemini, Llama, DeepSeek, Grok, and more without losing history.
                </p>
              </div>
            </div>

            {/* Familiar & Simple Card */}
            <div className="group relative p-6 sm:p-8 lg:p-10 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-2xl lg:rounded-3xl hover:bg-white/90 hover:border-gray-400 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                  <Shield className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-5 text-gray-900">
                  Familiar & simple
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Same chat experience you already know, but with all the models in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-32 bg-gradient-to-t from-white via-gray-50/50 to-transparent" />
    </section>
  )
}