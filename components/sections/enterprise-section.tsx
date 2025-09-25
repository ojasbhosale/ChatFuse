"use client"

import { useState, useEffect } from 'react'
import { Shield, Eye, Lock, ArrowRight, Phone } from 'lucide-react'

// Floating particle component with enterprise colors
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
      className="absolute rounded-full bg-gradient-to-r from-lime-400/30 to-green-400/30 blur-sm animate-pulse"
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

// Animated gradient orb with enterprise colors
function GradientOrb({ className = "", delay = 0 }) {
  return (
    <div 
      className={`absolute rounded-full opacity-35 blur-3xl animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '9s'
      }}
    />
  )
}

export default function EnterpriseSection() {
  const features = [
    {
      icon: Lock,
      title: "Zero-Access Architecture",
      description: "No employee can ever access your data",
      gradient: "from-lime-500 to-green-600",
      bgGradient: "from-lime-100/60 to-green-100/60",
      shadowColor: "shadow-lime-500/15",
      iconBg: "bg-gradient-to-br from-lime-500 to-green-600"
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Full visibility into data handling",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-100/60 to-teal-100/60",
      shadowColor: "shadow-emerald-500/15",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Built for business, government, and institutional use",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-100/60 to-blue-100/60",
      shadowColor: "shadow-cyan-500/15",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600"
    }
  ]

  return (
    <section id='enterprise' className="relative py-12 sm:py-20 lg:py-20 overflow-hidden bg-gradient-to-br from-lime-50 via-white to-emerald-50/60">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/12 via-emerald-500/8 to-teal-500/10" />
        
        {/* Animated gradient orbs with enterprise colors */}
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-lime-500 to-green-500 -top-40 -right-40" 
          delay={0} 
        />
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-emerald-500 to-teal-500 top-1/2 -left-48" 
          delay={3} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-teal-500 to-cyan-500 bottom-0 right-1/4" 
          delay={6} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 22 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.4} 
            duration={16 + Math.random() * 8}
            size={3 + Math.random() * 4}
          />
        ))}
        
        {/* Grid pattern overlay with enterprise color */}
        <div
            className="absolute inset-0 opacity-50"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2365A30D' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
        />
      </div>

      <div className="relative z-10 px-4 pt-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900">
            <span className="bg-gradient-to-r from-lime-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16">
            Custom AI implementations for your organization
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-3 sm:mx-auto mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group relative py-6 px-6 sm:p-8 lg:p-12 bg-white/85 backdrop-blur-sm border border-green-300 rounded-2xl hover:bg-white/95 hover:border-gray-300/90 hover:shadow-2xl hover:${feature.shadowColor} transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl opacity-100 `} />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${feature.iconBg} rounded-xl flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                
                
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-15 rounded-full blur-2xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col justify-center sm:flex-row gap-3 sm:gap-6  mx-3 sm:px-0">
          <button className="group relative px-4 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-lime-600 to-emerald-600 rounded-full text-white font-semibold text-base sm:text-lg shadow-2xl shadow-lime-500/30 hover:shadow-lime-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="relative flex items-center justify-center gap-3">
              <span>Explore Compliance Center</span>
              <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
          
          <button className="group px-8 sm:px-10 py-4 sm:py-5 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-full text-gray-700 font-semibold text-base sm:text-lg hover:bg-white hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-3 h-3 sm:w-5 sm:h-5" />
              <span>Contact Enterprise Team</span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom fade with enterprise color */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white via-lime-50/40 to-transparent" />
    </section>
  )
}