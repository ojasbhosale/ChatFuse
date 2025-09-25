"use client"

import { useState, useEffect } from 'react'
import {  Sparkles } from 'lucide-react'

// Floating particle component for pricing
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
      className="absolute rounded-full bg-gradient-to-r from-violet-400/25 to-fuchsia-400/25 blur-sm animate-pulse"
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

// Animated gradient orb for pricing
function GradientOrb({ className = "", delay = 0 }) {
  return (
    <div 
      className={`absolute rounded-full opacity-30 blur-3xl animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '12s'
      }}
    />
  )
}

export function PricingHeroSection() {
  return (
    <section className="relative pt-20 pb-16 min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-white to-fuchsia-50/40">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-fuchsia-500/6 to-purple-500/10" />
        
        {/* Animated gradient orbs */}
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-violet-500 to-purple-500 -top-48 -left-48" 
          delay={0} 
        />
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-fuchsia-500 to-pink-500 top-1/3 -right-40" 
          delay={3} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-purple-500 to-indigo-500 bottom-0 left-1/4" 
          delay={6} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.3} 
            duration={18 + Math.random() * 8}
            size={2 + Math.random() * 5}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl mx-auto">
        {/* Fall Sale Banner */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-orange-100/90 to-red-100/90 backdrop-blur-sm border border-orange-200/70 shadow-2xl shadow-orange-200/30">
            <span className="text-2xl sm:text-3xl">🍂</span>
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold text-base sm:text-lg">
              Fall Sale: Save 25%
            </span>
            <span className="text-gray-700 font-medium text-base sm:text-lg">→</span>
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold text-base sm:text-lg">
              Now $15/month
            </span>
            <span className="text-gray-500 line-through text-sm sm:text-base">(was $20)</span>
            
            <button className="ml-2 sm:ml-4 px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm sm:text-base font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 leading-tight text-gray-900">
            <span className="block sm:inline">
              Simple{" "}
            </span>
            <span className="relative block sm:inline mt-2 sm:mt-0">
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                Pricing
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 rounded-full opacity-80" />
            </span>
            <span className="block sm:inline mt-2 sm:mt-0 text-gray-800">
              {" "}for Everyone
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed">
            Get access to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              GPT-5, Claude, Gemini, Llama,
            </span>
            {" "}and 30+ other AI models for one low price.
          </p>

          {/* Value Proposition */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16 sm:mb-20">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/60">
              <Sparkles className="w-5 h-5 text-violet-600" />
              <span className="text-gray-700 font-medium">30+ AI Models</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/60">
              <Sparkles className="w-5 h-5 text-fuchsia-600" />
              <span className="text-gray-700 font-medium">One Simple Price</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200/60">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">No Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-violet-50/50 to-transparent" />
    </section>
  )
}