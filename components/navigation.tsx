"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Lock } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Enterprise", href: "/#enterprise" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="px-4 py-3 sm:py-4 md:py-5 max-container flex flex-col">
        {/* Main header row - always visible */}
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo and Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
          >
            <Logo size="md" />
            <span className="text-base sm:text-lg md:text-h5 font-semibold text-text-logo1">
              Chat<span className="text-text-logo">Fuse</span>
            </span>
          </Link>

          {/* Mobile: Menu button + Privacy indicator (compact) */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Privacy indicator - icon only on mobile */}
            <div className="flex items-center text-success">
              <Lock size={14} className="sm:mr-1" />
              <span className="hidden sm:inline text-xs font-medium">Zero-access</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-button hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop: Navigation links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm lg:text-body font-medium transition-colors hover:text-chatfuse-blue",
                  pathname === item.href ? "text-chatfuse-blue" : "text-text-secondary",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop: Privacy Indicator & CTA */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <div className="flex items-center space-x-2 text-success">
              <Lock size={16} />
              <span className="text-xs lg:text-small font-medium">Zero-access active</span>
            </div>
            <Button variant="primary" asChild className="px-3 py-2 text-sm">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - collapsible */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-3">
            <div className="flex flex-col space-y-1">
              {/* Navigation Links */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm sm:text-base font-medium transition-colors hover:text-chatfuse-blue px-3 py-3 rounded-button hover:bg-gray-50",
                    pathname === item.href ? "text-chatfuse-blue bg-blue-50" : "text-text-secondary",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Divider */}
              <div className="border-t border-border my-2"></div>
              
              {/* Privacy indicator - full text in mobile menu */}
              <div className="flex items-center space-x-2 text-success px-3 py-2">
                <Lock size={16} />
                <span className="text-sm font-medium">Zero-access encryption active</span>
              </div>
              
              {/* CTA Button */}
              <div className="px-3 pt-2">
                <Button 
                  variant="primary" 
                  className="w-full py-3 text-sm font-medium" 
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}