"use client"

import { useState, useEffect } from 'react'
import { Check, Sparkles, Zap, Crown, Star, Gift } from 'lucide-react'
import { PageLayout } from '@/components/layout/page-layout'


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
      className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-sm animate-pulse"
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
        animationDuration: '12s'
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

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const features = [
    "All 30+ AI models included",
    "Unified conversation history", 
    "Mid-chat model switching",
    "Voice I/O capabilities",
    "Custom personas",
    "Advanced file processing",
    "Project folders",
    "Priority support",
    "Beta access to new features"
  ]

  const features2 = [
    "All 30+ AI models included",
    "Unified conversation history", 
    "Mid-chat model switching",
    "Voice I/O capabilities",
    "Custom personas",
    "+ Many more..."
  ]

  const monthlyPrice = 15
  const yearlyPrice = 99
  const originalMonthlyPrice = 20
  const originalYearlyPrice = 240

  const monthlySavings = originalMonthlyPrice - monthlyPrice
  const yearlySavings = originalYearlyPrice - yearlyPrice

  return (
    <PageLayout>
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-orange-50/40">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-pink-500/6 to-orange-500/8" />
        
        {/* Animated gradient orbs */}
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 -top-48 -left-48" 
          delay={0} 
        />
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 top-1/4 -right-40" 
          delay={4} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-orange-500 to-purple-500 bottom-0 left-1/3" 
          delay={8} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.3} 
            duration={15 + Math.random() * 10}
            size={2 + Math.random() * 4}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A855F7' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-3 py-2 mb-6 sm:mb-8">
              <Crown className="!w-5 !h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight">
              <div className="block mb-2 sm:mb-1">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Perfect Plan
                </span>
              </div>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Unlock the power of <span className='text-text-logo1'>Chat</span><span className="text-text-logo">Fuse</span> with our flexible pricing options.
              <br className="hidden sm:block" />
              Start saving money while getting access to 30+ premium AI models.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white border-2 border-purple-100 rounded-2xl p-2 shadow-lg shadow-purple-500/10">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative px-5 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative px-5 py-2 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <span>Yearly</span>
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Save $141
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-5xl mx-3 sm:mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
              
              {/* Monthly Plan */}
              <div className={`relative group transition-all duration-500 ${billingCycle === 'monthly' ? 'scale-105' : 'scale-100 opacity-75'}`}>
                {/* Popular Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Save 25%
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/90 to-purple-50/60 backdrop-blur-sm border-2 border-purple-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 h-full flex flex-col">
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl sm:rounded-3xl'></div>
                  
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Monthly Plan
                    </h3>
                    
                    <div className="relative">
                      <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2">
                        $<AnimatedCounter target={monthlyPrice} duration={1500} />
                      </div>
                      <div className="text-lg text-gray-500 font-medium">/month</div>
                      <div className="text-sm text-gray-400 line-through">was $20/month</div>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <Gift className="w-5 h-5" />
                      Save ${monthlySavings}/month
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow space-y-5 mb-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white w-3 h-3" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 sm:py-3 rounded-2xl shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-[1.02] transition-all duration-300 text-base sm:text-lg">
                    Get Started Monthly
                  </button>
                </div>
              </div>

              {/* Yearly Plan */}
              <div className={`relative group transition-all duration-500 ${billingCycle === 'yearly' ? 'scale-105' : 'scale-100 opacity-75'}`}>
                {/* Best Value Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Save $141
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/90 to-green-50/60 backdrop-blur-sm border-2 border-green-300 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-500 h-full flex flex-col">
                  <div className='absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl sm:rounded-3xl'></div>
                  
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Yearly Plan
                    </h3>
                    
                    <div className="relative">
                      <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text mb-2">
                        $<AnimatedCounter target={yearlyPrice} duration={1800} />
                      </div>
                      <div className="text-lg text-gray-500 font-medium">/year</div>
                      <div className="text-sm text-gray-400 line-through">was $240/year</div>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      <Sparkles className="w-5 h-5" />
                      Save ${yearlySavings}/year
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow space-y-5 mb-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-6">
                      <div className="text-center">
                        <div className="text-green-700 font-bold text-lg mb-1">Everything in Monthly Plan</div>
                        <div className="text-green-600 text-sm">Plus additional yearly savings</div>
                      </div>
                    </div>
                    
                    {features2.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white w-3.5 h-3.5" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-2 sm:py-3   rounded-2xl shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-[1.02] transition-all duration-300 text-bs sm:text-lg">
                    Get Started Yearly
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Trust Indicators */}
          <div className="text-center mt-12 mb-6">
            <div className="inline-flex items-center gap-8 sm:gap-12 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-white via-purple-50/20 to-transparent" />
    </div>
    </PageLayout >
  )
}