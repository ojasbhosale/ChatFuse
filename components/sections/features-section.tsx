"use client"

import { useState, useEffect } from 'react'
import { Zap, Users, FileText, Gauge } from 'lucide-react'

// Floating particle component with different colors
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
      className="absolute rounded-full bg-gradient-to-r from-orange-400/30 to-pink-400/30 blur-sm animate-pulse"
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

// Animated gradient orb with different colors
function GradientOrb({ className = "", delay = 0 }) {
  return (
    <div 
      className={`absolute rounded-full opacity-35 blur-3xl animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '8s'
      }}
    />
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "FuseMind",
      description: "Smart task routing that automatically selects the best AI model for your specific needs",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-100/60 to-red-100/60",
      shadowColor: "shadow-orange-500/15",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Custom Personas",
      description: "Pre-configured AI assistants for different roles: Developer, Writer, Analyst, Creative",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-100/60 to-rose-100/60",
      shadowColor: "shadow-pink-500/15",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      icon: FileText,
      title: "Rich Inputs",
      description: "Upload documents, images, and files. Voice input and output capabilities.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-100/60 to-violet-100/60",
      shadowColor: "shadow-purple-500/15",
      iconBg: "bg-gradient-to-br from-purple-500 to-violet-600"
    },
    {
      icon: Gauge,
      title: "Speed & Performance",
      description: "Lightning-fast responses with optimized model routing and caching",
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-100/60 to-blue-100/60",
      shadowColor: "shadow-indigo-500/15",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-600"
    }
  ]

  return (
    <section id='features' className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50/60">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/12 via-pink-500/8 to-purple-500/10" />
        
        {/* Animated gradient orbs with different colors */}
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-orange-500 to-red-500 -top-40 -right-40" 
          delay={0} 
        />
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 top-1/2 -left-48" 
          delay={3} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-purple-500 to-indigo-500 bottom-0 right-1/4" 
          delay={6} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.4} 
            duration={16 + Math.random() * 8}
            size={3 + Math.random() * 4}
          />
        ))}
        
        {/* Grid pattern overlay with different color */}
        <div
            className="absolute inset-0 opacity-50"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 mb-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center pt-12 mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <span className="block sm:inline mt-2 sm:mt-0 text-gray-800">
              {" "}Built for Excellence
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need for productive AI conversations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-3 sm:mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-5 sm:p-10 lg:p-12 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl hover:bg-white/90 hover:border-gray-300/80 hover:shadow-2xl ${feature.shadowColor} transition-all duration-500 hover:scale-105 hover:-translate-y-3 
                          flex flex-col items-center md:items-start`} // <-- center only on mobile
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                {/* Icon container */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="text-white w-10 h-10" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

      </div>

      {/* Bottom fade with different color */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white via-emerald-50/30 to-transparent" />
    </section>
  )
}