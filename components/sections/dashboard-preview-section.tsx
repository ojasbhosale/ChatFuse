"use client"

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Code, 
  Eye, 
  Mic, 
  Send, 
  Plus, 
  ChevronDown, 
  User, 
  MessageCircleCode,
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react"

const conversationHistory = [
  { models: ["GPT-4o", "Claude 3.5", "Gemini Pro"], colors: ["bg-green-500", "bg-purple-500", "bg-blue-500"], topic: "Code debugging session" },
  { models: ["Claude", "GPT-4", "Llama"], colors: ["bg-purple-500", "bg-green-500", "bg-orange-500"], topic: "Content writing project" },
  { models: ["Gemini", "GPT-4o"], colors: ["bg-blue-500", "bg-green-500"], topic: "Data analysis task" },
]

// Floating particle component
function FloatingParticle({ delay = 0, duration = 20, size = 4 }) {
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
        animationDuration: '15s'
      }}
    />
  )
}

export default function DashboardPreviewSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/30 py-12 sm:py-16 lg:py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/6 via-blue-500/4 to-cyan-500/5" />
        
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 -top-48 -left-48" 
          delay={0} 
        />
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 top-1/3 -right-40" 
          delay={4} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-cyan-500 to-teal-500 bottom-0 left-1/4" 
          delay={8} 
        />
        
        {mounted && Array.from({ length: 18 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.6} 
            duration={16 + Math.random() * 8}
            size={2 + Math.random() * 3}
          />
        ))}
        
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-purple-100/80 to-blue-100/80 backdrop-blur-sm border border-purple-200/60 shadow-lg shadow-purple-200/20 mb-6 sm:mb-8">
            <MessageCircleCode className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              AI Command Center
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Your <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Command</span> Center
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Everything you need in one powerful dashboard
          </p>
        </div>

        {/* Main Dashboard Card */}
        <div className="group relative max-w-7xl mx-2 lg:mx-auto mb-6 sm:mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          
          <Card className="relative bg-white/95 backdrop-blur-sm border-2 border-purple-200/60 rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-8 xl:p-10 hover:bg-white hover:border-purple-300/80 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1">
            
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-6 items-end">
              {/* Main Chat Interface */}
              <div className="xl:col-span-8 space-y-5 sm:space-y-6">
                {/* Chat Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 lg:w-5 lg:h-5 text-white" />
                    </div>
                    <span className="text-lg sm:text-2xl">Active Conversation</span>
                  </h3>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Badge className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200/60 font-semibold p-1 lg:px-3 lg:py-1.5 text-xs lg:text-sm">
                      Claude 3.5 Sonnet
                      <ChevronDown className="!w-3 !h-3" />
                    </Badge>
                  </div>
                </div>

                {/* Model Switch Notification */}
                <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm border border-green-200/60 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <Badge className="bg-gradient-to-r  from-green-100 to-emerald-100 text-green-700 border-green-200/60 font-semibold mb-2 inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-3 py-1 sm:px-3 sm:py-1.5">
                    <Sparkles className="w-3 h-3" />
                    Switched to Claude for better debugging
                  </Badge>
                  
                  <div className="space-y-3 sm:space-y-5">
                    {/* User Message */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-5 shadow-sm border border-gray-200/60">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="h-6 w-6 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-3 w-3 lg:w-5 lg:h-5 text-gray-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">You</p>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Can you help me debug this React component?
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI Response */}
                    <div className="bg-gradient-to-r from-purple-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl p-3 sm:p-5 border border-purple-200/60">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-3 h-3 lg:w-5 lg:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-purple-700 mb-1 text-sm sm:text-base">Claude</p>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            I&apos;d be happy to help you debug your React component. Could you share the code and describe what issue you&apos;re experiencing?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="bg-white/90 backdrop-blur-sm border-2  border-gray-200/60 rounded-xl sm:rounded-2xl  p-3 sm:p-4 lg:p-6 hover:border-purple-300/60 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-row items-start lg:items-center justify-between gap-3 sm:gap-4">
                    {/* Left Controls */}
                    <div className="flex items-center gap-2 sm:gap-3 order-1">
                      <Button variant="ghost" size="lg" className="hover:bg-purple-50 p-2">
                        <Plus className="!w-5 !h-5  text-gray-600" />
                      </Button>
                      
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200/60 font-medium px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                        Claude 3.5 Haiku
                      </Badge>
                    </div>
                    
                    {/* Middle Controls */}
                    <div className="flex items-center gap-1 sm:gap-2 order-2">
                      <Button variant="ghost" size="lg" className="hover:bg-gray-100 p-2">
                        <Eye className="!w-5 !h-5  text-gray-500 hover:text-purple-600" />
                      </Button>
                      <Button variant="ghost" size="lg" className="hover:bg-gray-100 p-1.5 sm:p-2">
                        <FileText className="!w-5 !h-5  text-gray-500 hover:text-purple-600" />
                      </Button>
                      <Button variant="ghost" size="lg" className="hover:bg-gray-100 p-1.5 sm:p-2">
                        <Code className="!w-5 !h-5 text-gray-500 hover:text-purple-600" />
                      </Button>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-2 sm:gap-3 order-3 self-center">
                      <Button variant="ghost" size="lg" className="hover:bg-purple-50 p-1.5 sm:p-2">
                        <Mic className="!w-5 !h-5 text-gray-600" />
                      </Button>

                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-2 py-2 sm:px-6 sm:py-3 rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                        <Send className="!w-5 !h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="xl:col-span-4 space-y-4 sm:space-y-6 ">
                {/* Conversation History */}
                <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm border border-green-200/60 rounded-xl sm:rounded-2xl p-3 sm:p-3">
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 lg:mb-2 flex items-center gap-2">
                    <MessageCircleCode className="!w-5 !h-5 text-green-600" />
                    Recent Chats
                  </h4>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {conversationHistory.map((conversation, index) => (
                      <div key={index} className="group p-3 sm:p-3 bg-white rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <div className="flex items-center gap-1 sm:gap-2 mb-2">
                          {conversation.colors.map((color, colorIndex) => (
                            <div key={colorIndex} className={`w-2 h-2 sm:w-3 sm:h-3 ${color} rounded-full group-hover:scale-125 transition-transform duration-300`} style={{animationDelay: `${colorIndex * 0.1}s`}} />
                          ))}
                          <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 text-gray-400 group-hover:text-green-600 transition-colors ml-1" />
                        </div>
                        
                        <p className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors mb-1">
                          {conversation.models.join(" → ")}
                        </p>
                        
                        <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors mb-2">
                          {conversation.topic}
                        </p>
                        
                        <div className="pt-2 border-t border-gray-200/60">
                          <p className="text-xs text-green-600 font-medium">
                            ✓ History preserved across all models
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-6 sm:mb-12">
          <button className="group relative px-3 py-3 sm:px-6 sm:py-4 lg:py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-base sm:text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="relative flex items-center justify-center gap-2 sm:gap-3">
              <span>Try the Dashboard</span>
              <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {[
            {
              icon: Zap,
              title: "Switch mid-chat",
              description: "Change AI models without losing context",
              gradient: "from-yellow-500 to-orange-500",
              bgGradient: "from-yellow-50/80 to-orange-50/80",
              borderColor: "border-yellow-200/60"
            },
            {
              icon: MessageCircleCode,
              title: "Unified history",
              description: "All conversations in one place",
              gradient: "from-blue-500 to-purple-500",
              bgGradient: "from-blue-50/80 to-purple-50/80",
              borderColor: "border-blue-200/60"
            },
            {
              icon: Sparkles,
              title: "Smart features",
              description: "Voice, files, personas & more",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50/80 to-pink-50/80",
              borderColor: "border-purple-200/60"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-xl sm:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`} />
              
              <Card className={`relative bg-white/90 backdrop-blur-sm border-2 ${feature.borderColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white via-gray-50/50 to-transparent" />
    </section>
  )
}