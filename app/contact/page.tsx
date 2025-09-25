"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Building, Book, Mail, Phone, MapPin, Send, Sparkles, Users, Clock } from "lucide-react"
import { PageLayout } from "@/components/layout/page-layout"

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
      className={`absolute rounded-full opacity-20 blur-3xl animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '15s'
      }}
    />
  )
}

// Contact Support Modal Component
function ContactSupportModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "",
    priority: "medium",
  })

  const supportOptions = [
    { value: "technical", label: "Technical Support", color: "bg-red-100 text-red-700 border-red-200" },
    { value: "billing", label: "Billing Questions", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { value: "feature", label: "Feature Requests", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    { value: "general", label: "General Inquiries", color: "bg-green-100 text-green-700 border-green-200" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Support form submitted:", formData)
    onOpenChange(false)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      category: "",
      priority: "medium",
    })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl mx-3 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-6">
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Support</h3>
                <p className="text-gray-600 mt-1">We typically respond within 24 hours</p>
              </div>
              
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Support Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">What can we help you with?</label>
              <div className="grid grid-cols-2 gap-3">
                {supportOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, category: option.value })}
                    className={` rounded-xl border-2 transition-all  hover:shadow-sm ${
                      formData.category === option.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className={`inline-block w-full py-2 rounded-xl text-xs font-medium ${option.color}`}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Subject *</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of your issue"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Message *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please describe your issue or question in detail..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="px-5 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-normal sm:font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 font-normal sm:font-medium transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Enterprise Contact Modal Component
function EnterpriseContactModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    businessEmail: "",
    companyName: "",
    companySize: "",
    subject: "",
    projectDetails: "",
    contactType: "",
  })

  const contactOptions = [
    { value: "custom", label: "Custom AI Solutions", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { value: "direct", label: "Direct Enterprise Contact", color: "bg-blue-100 text-blue-700 border-blue-200" },
  ]

  const companySizes = [
    { value: "startup", label: "Startup (1-50 employees)" },
    { value: "medium", label: "Medium (51-500 employees)" },
    { value: "large", label: "Large (501-5000 employees)" },
    { value: "enterprise", label: "Enterprise (5000+ employees)" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Enterprise form submitted:", formData)
    onOpenChange(false)
    setFormData({
      fullName: "",
      jobTitle: "",
      businessEmail: "",
      companyName: "",
      companySize: "",
      subject: "",
      projectDetails: "",
      contactType: "",
    })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl mx-3 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Building className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Enterprise Contact</h3>
                <p className="text-gray-600 mt-1">Custom AI solutions for your organization</p>
              </div>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">How can we help your business?</label>
              <div className="grid grid-cols-1 gap-3">
                {contactOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, contactType: option.value })}
                    className={` rounded-xl border-2 transition-all hover:shadow-sm ${
                      formData.contactType === option.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <span className={`inline-block w-full py-1 rounded-xl text-sm font-medium ${option.color}`}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Job Title *</label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your job title"
                  required
                />
              </div>
            </div>

            {/* Business Information */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Business Email *</label>
                <input
                  type="email"
                  value={formData.businessEmail}
                  onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                  required
                />
              </div>
            </div>

            {/* Company Size and Subject */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-mnormal text-gray-700 mb-2">Company Size</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  {companySizes.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of your needs"
                  required
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-normal text-gray-700 mb-2">Project Details *</label>
              <textarea
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please describe your project requirements, timeline, and any specific needs..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="px-5 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 font-normal sm:font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 font-normal sm:font-medium transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Send Enterprise Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [supportModalOpen, setSupportModalOpen] = useState(false)
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false)

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "General Support",
      description: "Get help with your account, billing, or technical issues",
      action: "Contact Support",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      modalType: "support" as const,
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      description: "Custom AI implementations for your organization",
      action: "Contact Enterprise",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      modalType: "enterprise" as const,
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Browse our comprehensive guides and tutorials",
      action: "View Documentation",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      modalType: null,
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@chatfuse.com",
      description: "We typically respond within 24 hours",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Phone,
      title: "Enterprise Sales",
      value: "+1 (555) 123-4567",
      description: "Monday - Friday, 9 AM - 6 PM PST",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: MapPin,
      title: "Our Location",
      value: "San Francisco, CA",
      description: "123 AI Street, San Francisco, CA 94105",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  const handleContactClick = (modalType: "support" | "enterprise" | null) => {
    if (modalType === "support") {
      setSupportModalOpen(true)
    } else if (modalType === "enterprise") {
      setEnterpriseModalOpen(true)
    } else {
      // Handle documentation link
      window.open("#", "_blank")
    }
  }

  return (
    <PageLayout>
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/6 to-pink-500/8" />
        
        {/* Animated gradient orbs */}
        <GradientOrb 
          className="w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 -top-48 -left-48" 
          delay={0} 
        />
        <GradientOrb 
          className="w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 top-1/4 -right-40" 
          delay={5} 
        />
        <GradientOrb 
          className="w-72 h-72 bg-gradient-to-r from-pink-500 to-blue-500 bottom-0 left-1/3" 
          delay={10} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 18 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.4} 
            duration={12 + Math.random() * 8}
            size={2 + Math.random() * 3}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-3 sm:mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-3 py-2 mb-6 sm:mb-8">
              <Send className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Get in Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight">
              <div className="block mb-2 sm:mb-1">
                We&apos;re Here to{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Help You
                </span>
              </div>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the best way to reach our team based on your needs.
              <br className="hidden sm:block" />
              We&apos;re committed to providing you with exceptional support.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-2 sm:px-6 lg:px-8 py-12 ">
          <div className="max-w-6xl mx-3 sm:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-gradient-to-br ${method.bgGradient} backdrop-blur-sm border-2 ${method.borderColor} rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-6 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{method.description}</p>
                    
                    <button 
                      onClick={() => handleContactClick(method.modalType)}
                      className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300`}
                    >
                      {method.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-12">
          <div className="max-w-6xl mx-3 sm:mx-auto">
            <div className="text-center mb-12 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">Multiple ways to reach our team</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className="text-center">
                    <div className={`w-14 h-14 mx-auto mb-6 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-7 h-7 ${info.color}`} />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                    <p className={`font-semibold ${info.color} mb-2 text-lg`}>{info.value}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-12">
          <div className="max-w-4xl mx-3 sm:mx-auto">
            <div className="bg-gradient-to-r from-white/90 to-blue-50/80 backdrop-blur-sm border-2 border-blue-100 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  Our Support Promise
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 ">24hrs</div>
                  <div className="text-gray-600">Average Response Time</div>
                </div>
                
                <div className="group">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 ">99%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
                
                <div className="group">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 ">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-white via-blue-50/20 to-transparent" />

      {/* Modals */}
      <ContactSupportModal open={supportModalOpen} onOpenChange={setSupportModalOpen} />
      <EnterpriseContactModal open={enterpriseModalOpen} onOpenChange={setEnterpriseModalOpen} />
    </div>
    </PageLayout >
  )
}