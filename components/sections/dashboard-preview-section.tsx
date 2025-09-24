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
  PenTool, 
  BarChart3, 
  Palette,
  MessageCircle,
  Zap,
  Sparkles,
  ArrowRight
} from "lucide-react"

const aiPersonas = [
  { icon: User, name: "Developer", color: "bg-blue-100 text-blue-700", gradient: "from-blue-500 to-cyan-500" },
  { icon: PenTool, name: "Writer", color: "bg-green-100 text-green-700", gradient: "from-green-500 to-emerald-500" },
  { icon: BarChart3, name: "Analyst", color: "bg-purple-100 text-purple-700", gradient: "from-purple-500 to-pink-500" },
  { icon: Palette, name: "Creative", color: "bg-orange-100 text-orange-700", gradient: "from-orange-500 to-red-500" },
]

const documents = [
  { name: "project_requirements.pdf", size: "2.3 MB", icon: FileText, color: "text-red-500" },
  { name: "sales_data.xlsx", size: "1.1 MB", icon: BarChart3, color: "text-green-500" },
  { name: "meeting_notes.md", size: "45 KB", icon: Code, color: "text-blue-500" },
]

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

export function DashboardPreviewSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50/30 py-16 sm:py-20 lg:py-24">
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
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100/80 to-blue-100/80 backdrop-blur-sm border border-purple-200/60 shadow-lg shadow-purple-200/20 mb-8">
            <MessageCircle className="w-5 h-5 text-purple-600" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              AI Command Center
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Command</span> Center
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need in one powerful dashboard
          </p>
        </div>

        {/* Main Dashboard Card - Better Grid Layout */}
        <div className="group relative max-w-7xl  mx-auto mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          
          <Card className="relative bg-white/95 backdrop-blur-sm border-2 border-purple-200/60 rounded-3xl p-10 hover:bg-white hover:border-purple-300/80 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1">
            
            {/* Improved Grid Layout */}
            <div className="grid grid-cols-12 gap-6 items-end">
              {/* Main Chat Interface - Takes more space */}
              <div className="col-span-12 lg:col-span-8 space-y-6">
                {/* Chat Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="!w-5 !h-5 text-white" />
                    </div>
                    Active Conversation
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200/60 font-semibold px-3 py-1.5">
                      Claude 3.5 Sonnet
                    </Badge>
                    <Button variant="ghost" size="sm" className="hover:bg-purple-50 p-2">
                      <ChevronDown className="!w-4 !h-4" />
                    </Button>
                  </div>
                </div>

                {/* Model Switch Notification */}
                <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm border border-green-200/60 rounded-2xl p-6">
                  <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200/60 font-semibold mb-4 inline-flex items-center gap-2">
                    <Sparkles className="!w-3 !h-3" />
                    Switched to Claude for better debugging
                  </Badge>
                  
                  <div className="space-y-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-gray-200/60">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="!w-5 !h-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-1">You</p>
                          <p className="text-gray-700 leading-relaxed">
                            Can you help me debug this React component?
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl p-5 border border-purple-200/60">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Sparkles className="!w-5 !h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-purple-700 mb-1">Claude</p>
                          <p className="text-gray-700 leading-relaxed">
                            I&apos;d be happy to help you debug your React component. Could you share the code and describe what issue you&apos;re experiencing?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/60 rounded-2xl p-6 hover:border-purple-300/60 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm" className="hover:bg-purple-50 p-2">
                        <Plus className="!w-5 !h-5 text-gray-600" />
                      </Button>
                      
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200/60 font-medium px-3 py-1">
                        Claude 3.5 Haiku
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100 p-2">
                        <Eye className="!w-5 !h-5 text-gray-500 hover:text-purple-600" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100 p-2">
                        <FileText className="!w-5 !h-5 text-gray-500 hover:text-purple-600" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100 p-2">
                        <Code className="!w-5 !h-5 text-gray-500 hover:text-purple-600" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm" className="hover:bg-purple-50 p-2">
                        <Mic className="!w-5 !h-5 text-gray-600" />
                      </Button>

                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                        <Send className="!w-5 !h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Optimized Space Usage */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                

                {/* Conversation History */}
                <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm border border-green-200/60 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageCircle className="!w-5 !h-5 text-green-600" />
                    Recent Chats
                  </h4>
                  
                  <div className="space-y-3">
                    {conversationHistory.map((conversation, index) => (
                      <div key={index} className="group p-4 bg-white/80 hover:bg-white rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <div className="flex items-center gap-2 mb-2">
                          {conversation.colors.map((color, colorIndex) => (
                            <div key={colorIndex} className={`w-3 h-3 ${color} rounded-full group-hover:scale-125 transition-transform duration-300`} style={{animationDelay: `${colorIndex * 0.1}s`}} />
                          ))}
                          <ArrowRight className="!w-3 !h-3 text-gray-400 group-hover:text-green-600 transition-colors ml-1" />
                        </div>
                        
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors mb-1">
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
        <div className="text-center mb-6">
          <button className="group relative px-6 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <div className="relative flex items-center justify-center gap-3">
              <span>Try the Dashboard</span>
              <ArrowRight className="!w-5 !h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
              icon: MessageCircle,
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
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`} />
              
              <Card className={`relative bg-white/90 backdrop-blur-sm border-2 ${feature.borderColor} rounded-2xl p-6 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-white !w-7 !h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-base text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-gray-50/50 to-transparent" />
    </section>
  )
}