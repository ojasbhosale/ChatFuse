"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Shield, Lock, CheckCircle, ArrowUpRight } from "lucide-react"
import { useState, useEffect } from 'react'

// Subtle floating particle for footer
function SubtleParticle({ delay = 0, duration = 25, size = 2 }) {
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
      className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-sm animate-pulse"
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

const footerSections = {
  Product: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Models", href: "/#models" },
  ],
  Company: [
    { name: "About", href: "/#about" },
    { name: "Enterprise", href: "/#enterprise" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/20 border-t border-gray-200/60 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/2 to-gray-500/1" />
        
        {/* Subtle particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <SubtleParticle 
            key={i} 
            delay={i * 2} 
            duration={20 + Math.random() * 10}
            size={1 + Math.random() * 2}
          />
        ))}
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B7280' fill-opacity='1'%3E%3Ccircle cx='40' cy='40' r='0.8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-3 sm:mx-auto px-2 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center space-x-3 mb-6 w-fit">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Logo size="md" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-text-logo1">Chat</span>
                <span className="text-text-logo">Fuse</span>
              </span>
            </Link>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
              Access GPT-5, Claude, Gemini, and 30+ other AI models with complete privacy and zero-access architecture.
            </p>

            {/* Enhanced Privacy Features */}
            <div className="space-y-4">
              <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border hover:border-gray hover:bg-white/80 -300/60 transition-all duration-300">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Your data is encrypted</span>
              </div>
              
              <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-300/60 hover:bg-white/80  transition-all duration-300">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Privacy protected</span>
              </div>
              
              <div className="group flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-300/60 hover:bg-white/80  transition-all duration-300">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Zero-access active</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-3 lg:col-span-3 gap-8 mx-2">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title} className="space-y-5">
                <h3 className="text-lg font-bold text-gray-900 relative">
                  {title}
                  <div className="absolute -bottom-1 left-0 sm:w-1/2 w-4/5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300"
                      >
                        <span className="text-sm sm:text-base">{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200/60">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright with enhanced styling */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-sm text-gray-500">© 2025 ChatFuse. All rights reserved.</p>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
              <p className="text-sm text-gray-500">Made with ❤️ for AI enthusiasts</p>
            </div>
            
            {/* Enhanced Footer Links */}
            <div className="flex items-center space-x-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Security", href: "/security" }
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="group relative text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  {link.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Bottom gradient line */}
          <div className="mt-8 h-1 w-full bg-gradient-to-r from-blue-500/20 via-purple-500/40 to-pink-500/20 rounded-full" />
        </div>
      </div>
    </footer>
  )
}