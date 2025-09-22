"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Building, Cog, Phone } from "lucide-react"

interface EnterpriseContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const contactOptions = [
  { value: "custom", label: "Custom AI Solutions", icon: Cog, color: "bg-purple-100 text-purple-700" },
  { value: "direct", label: "Direct Enterprise Contact", icon: Phone, color: "bg-blue-100 text-blue-700" },
]

const companySizes = [
  { value: "startup", label: "Startup (1-50 employees)" },
  { value: "medium", label: "Medium (51-500 employees)" },
  { value: "large", label: "Large (501-5000 employees)" },
  { value: "enterprise", label: "Enterprise (5000+ employees)" },
]

export function EnterpriseContactModal({ open, onOpenChange }: EnterpriseContactModalProps) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Enterprise form submitted:", formData)
    onOpenChange(false)
    // Reset form
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

  const selectedOption = contactOptions.find((option) => option.value === formData.contactType)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogClose />
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Building className="text-chatfuse-blue" size={24} />
            <span>Enterprise Contact</span>
          </DialogTitle>
          <DialogDescription>
            Get in touch with our enterprise team for custom AI solutions and dedicated support.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Contact Type Selection */}
          <div>
            <label className="text-body font-medium text-text-primary mb-3 block">How can we help your business?</label>
            <div className="grid grid-cols-1 gap-3">
              {contactOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, contactType: option.value })}
                  className={cn(
                    "p-4 rounded-button border-2 transition-all text-left hover:shadow-sm",
                    formData.contactType === option.value
                      ? "border-chatfuse-blue bg-chatfuse-blue-light"
                      : "border-border hover:border-gray-300",
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${option.color}`}>
                      <option.icon size={16} />
                    </div>
                    <span className="text-body font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="text-body font-medium text-text-primary mb-2 block">
                Full Name *
              </label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="jobTitle" className="text-body font-medium text-text-primary mb-2 block">
                Job Title *
              </label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                placeholder="Your job title"
                required
              />
            </div>
          </div>

          {/* Business Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="businessEmail" className="text-body font-medium text-text-primary mb-2 block">
                Business Email *
              </label>
              <Input
                id="businessEmail"
                type="email"
                value={formData.businessEmail}
                onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                placeholder="your@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="companyName" className="text-body font-medium text-text-primary mb-2 block">
                Company Name *
              </label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Your company name"
                required
              />
            </div>
          </div>

          {/* Company Size and Subject */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="companySize" className="text-body font-medium text-text-primary mb-2 block">
                Company Size
              </label>
              <Select
                value={formData.companySize}
                onValueChange={(val) => setFormData({ ...formData, companySize: val })}
                >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                    {companySizes.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                        {size.label}
                    </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="subject" className="text-body font-medium text-text-primary mb-2 block">
                Subject *
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief description of your needs"
                required
              />
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="projectDetails" className="text-body font-medium text-text-primary mb-2 block">
              Project Details *
            </label>
            <Textarea
              id="projectDetails"
              value={formData.projectDetails}
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
              placeholder="Please describe your project requirements, timeline, and any specific needs..."
              rows={5}
              required
            />
          </div>

          {/* Selected Category Display */}
          {selectedOption && (
            <div className="flex items-center space-x-2">
              <span className="text-small text-text-secondary">Contact Type:</span>
              <Badge className={selectedOption.color}>{selectedOption.label}</Badge>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-3">
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Send Enterprise Inquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
