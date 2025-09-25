"use client"

import { useState, useEffect } from 'react'
import { Zap, Brain, Sparkles, Globe, Code, Cpu, Eye, MessageSquare, Star } from 'lucide-react'

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
      className="absolute rounded-full bg-gradient-to-r from-emerald-400/25 to-cyan-400/25 blur-sm animate-pulse"
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
        animationDuration: '12s'
      }}
    />
  )
}

// Model card component
interface ModelCardProps {
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  gradient: string
  iconBg: string
  cardBg: string
  borderGlow: string
}

function ModelCard({ name, description, icon: Icon, gradient, iconBg, cardBg, borderGlow }: ModelCardProps) {
  return (
    <div className="group relative">
      {/* Outer glow effect */}
      <div className={`absolute -inset-0.5 ${borderGlow} rounded-[28px] opacity-20 blur-sm group-hover:opacity-40 transition-all duration-500`} />
      
      {/* Main card */}
      <div className={`relative ${cardBg} backdrop-blur-xl border border-white/20 rounded-[26px] p-6 shadow-2xl shadow-black/5 transition-all duration-500 `}>
        {/* Subtle gradient overlay */}
        <div className={`absolute inset-0 ${gradient} opacity-[0.1] rounded-[26px]`} />
        
        {/* Inner highlight */}
        <div className="absolute inset-px bg-gradient-to-b from-white/10 to-transparent rounded-[25px] pointer-events-none" />
        
        <div className="relative z-10">
          {/* Icon container */}
          <div className="relative mb-6">
            <div className={`w-12 h-12 ${iconBg} rounded-[16px] flex items-center justify-center shadow-2xl shadow-black/10 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
              {/* Icon shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              <Icon className="text-white w-6 h-6 relative z-10" />
            </div>
            
            {/* Icon glow */}
            <div className={`absolute inset-0 w-20 h-20 ${iconBg} rounded-[20px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
          </div>
          
          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {name}
            </h3>
            
            <p className="text-gray-600 text-base  leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Logo strip component with continuous movement
function LogoStrip() {
  const logos = [
    { name: 'OpenAI', accent: 'text-emerald-600' },
    { name: 'Anthropic', accent: 'text-cyan-600' },
    { name: 'Google', accent: 'text-teal-600' },
    { name: 'Meta', accent: 'text-blue-600' },
    { name: 'Microsoft', accent: 'text-indigo-600' },
    { name: 'Cohere', accent: 'text-purple-600' },
    { name: 'Mistral AI', accent: 'text-pink-600' },
    { name: 'xAI', accent: 'text-red-600' },
    { name: 'DeepSeek', accent: 'text-orange-600' }
  ]

  // Duplicate logos for seamless loop
  

    return (
    <div className="relative overflow-hidden py-8">
  {/* wrapper for both strips */}
  <div className="relative flex items-center">
    {/* first strip */}
    <div className="flex w-max animate-scroll-infinite whitespace-nowrap">
      {logos.map((logo, index) => (
        <div key={index} className="flex-shrink-0 px-12 py-6">
          <div
            className={`${logo.accent} font-bold text-lg lg:text-xl tracking-wide transition-all duration-300 hover:scale-110`}
          >
            {logo.name}
          </div>
        </div>
      ))}
    </div>

    {/* second strip */}
    <div className="flex w-max animate-scroll-infinite whitespace-nowrap absolute inset-y-0 left-full items-center">
      {logos.map((logo, index) => (
        <div key={index} className="flex-shrink-0 px-12 py-6">
          <div
            className={`${logo.accent} font-bold text-lg lg:text-xl tracking-wide transition-all duration-300 hover:scale-110`}
          >
            {logo.name}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* gradient overlays */}
  <div className="absolute left-0 top-0 w-32 lg:w-48 h-full bg-gradient-to-r from-white via-white/95 to-transparent z-10" />
  <div className="absolute right-0 top-0 w-32 lg:w-48 h-full bg-gradient-to-l from-white via-white/95 to-transparent z-10" />
</div>


      
  )
}

export default function ModelGridSection() {
  const models = [
    {
      name: "GPT-4o Mini",
      description: "Lightning-fast efficiency / powerful intelligence",
      icon: Zap,
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-600",
      cardBg: "bg-gradient-to-br from-yellow-50/80 to-orange-50/60",
      borderGlow: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      name: "Claude 3.5 Haiku",
      description: "Perfect balance of speed / sophisticated reasoning",
      icon: Brain,
      gradient: "bg-gradient-to-br from-purple-400 to-pink-500",
      iconBg: "bg-gradient-to-br from-purple-600 to-pink-600",
      cardBg: "bg-gradient-to-br from-purple-50/80 to-pink-50/60",
      borderGlow: "bg-gradient-to-br from-purple-400 to-pink-500"
    },
    {
      name: "Gemini 2.0 Flash",
      description: "Google's cutting-edge multimodal capabilities",
      icon: Sparkles,
      gradient: "bg-gradient-to-br from-blue-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-600 to-cyan-600",
      cardBg: "bg-gradient-to-br from-blue-50/80 to-cyan-50/60",
      borderGlow: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    {
      name: "Llama 3.3 70B",
      description: "Open-source innovation / enterprise-grade power",
      icon: Globe,
      gradient: "bg-gradient-to-br from-green-400 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-600 to-emerald-600",
      cardBg: "bg-gradient-to-br from-green-50/80 to-emerald-50/60",
      borderGlow: "bg-gradient-to-br from-green-400 to-emerald-500"
    },
    {
      name: "Phi-4",
      description: "Microsoft's breakthrough in compact intelligence",
      icon: Code,
      gradient: "bg-gradient-to-br from-indigo-400 to-purple-500",
      iconBg: "bg-gradient-to-br from-indigo-600 to-purple-600",
      cardBg: "bg-gradient-to-br from-indigo-50/80 to-purple-50/60",
      borderGlow: "bg-gradient-to-br from-indigo-400 to-purple-500"
    },
    {
      name: "DeepSeek-V3",
      description: "Next-generation reasoning and problem-solving",
      icon: Cpu,
      gradient: "bg-gradient-to-br from-teal-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-teal-600 to-cyan-600",
      cardBg: "bg-gradient-to-br from-teal-50/80 to-cyan-50/60",
      borderGlow: "bg-gradient-to-br from-teal-400 to-cyan-500"
    },
    {
      name: "Grok-2",
      description: "Real-time intelligence with unfiltered insights",
      icon: Eye,
      gradient: "bg-gradient-to-br from-red-400 to-pink-500",
      iconBg: "bg-gradient-to-br from-red-600 to-pink-600",
      cardBg: "bg-gradient-to-br from-red-50/80 to-pink-50/60",
      borderGlow: "bg-gradient-to-br from-red-400 to-pink-500"
    },
    {
      name: "Command R+",
      description: "Cohere's flagship model for enterprise solutions",
      icon: MessageSquare,
      gradient: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconBg: "bg-gradient-to-br from-violet-600 to-purple-600",
      cardBg: "bg-gradient-to-br from-violet-50/80 to-purple-50/60",
      borderGlow: "bg-gradient-to-br from-violet-400 to-purple-500"
    },
    {
      name: "Mistral Large",
      description: "European excellence in AI with privacy-first design",
      icon: Star,
      gradient: "bg-gradient-to-br from-amber-400 to-yellow-500",
      iconBg: "bg-gradient-to-br from-amber-600 to-yellow-600",
      cardBg: "bg-gradient-to-br from-amber-50/80 to-yellow-50/60",
      borderGlow: "bg-gradient-to-br from-amber-400 to-yellow-500"
    }
  ]

  return (
    <>
      <section className="relative py-20 lg:py-34 overflow-hidden bg-gradient-to-br from-emerald-50/40 via-white to-cyan-50/50">
        {/* Premium Animated Background */}
        <div className="absolute inset-0">
          {/* Primary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-cyan-500/4 to-teal-500/6" />
          
          {/* Animated gradient orbs - more vibrant */}
          <GradientOrb 
            className="w-[500px] h-[500px] bg-gradient-to-r from-emerald-400 to-teal-400 -top-60 -right-60" 
            delay={0} 
          />
          <GradientOrb 
            className="w-[400px] h-[400px] bg-gradient-to-r from-cyan-400 to-blue-400 top-1/4 -left-52" 
            delay={4} 
          />
          <GradientOrb 
            className="w-[350px] h-[350px] bg-gradient-to-r from-teal-400 to-emerald-400 bottom-0 right-1/3" 
            delay={8} 
          />
          
          {/* Enhanced floating particles */}
          {Array.from({ length: 25 }, (_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.6} 
              duration={20 + Math.random() * 10}
              size={2 + Math.random() * 5}
            />
          ))}
          
          {/* Premium grid pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.6'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 px-6 lg:px-8 max-w-8xl mx-auto">
          {/* Premium Header */}
          <div className="text-center max-w-5xl mx-auto mb-20 lg:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl   font-bold mb-8 text-gray-900 leading-[0.9] tracking-tight">
              All the best models{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  in one place
                </span>
                {/* Enhanced animated underline */}
                <div className="absolute -bottom-2 lg:-bottom-4 left-0 right-0 h-1 lg:h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full opacity-90" />
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl lg:text-2xl pt-4 text-gray-600 leading-relaxed font-medium">
              Access GPT-5, Claude, Gemini, and 30+ other AI models
            </p>
          </div>

          {/* Premium Model Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mb-32 mt-32 mx-auto max-w-6xl">
            {models.map((model, index) => (
              <ModelCard
                key={index}
                name={model.name}
                description={model.description}
                icon={model.icon}
                gradient={model.gradient}
                iconBg={model.iconBg}
                cardBg={model.cardBg}
                borderGlow={model.borderGlow}
              />
            ))}
          </div>

          {/* Premium Logo Strip Section */}
          <div className="relative">
            <div className="text-center mt-20">
              <p className="text-gray-500 text-lg lg:text-xl font-semibold tracking-wide">
                Powered by leading AI companies
              </p>
            </div>
            
            <LogoStrip />
          </div>
        </div>

        {/* Premium bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-t from-white via-gray-50/40 to-transparent" />
      </section>

      {/* Premium Animation Styles */}
      
    </>
  )
}