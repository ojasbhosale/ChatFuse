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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, AlertCircle, Lightbulb } from "lucide-react"

interface ContactSupportModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const supportOptions = [
  { value: "technical", label: "Technical Support", icon: AlertCircle, color: "bg-red-100 text-red-700" },
  { value: "billing", label: "Billing Questions", icon: Mail, color: "bg-blue-100 text-blue-700" },
  { value: "feature", label: "Feature Requests", icon: Lightbulb, color: "bg-yellow-100 text-yellow-700" },
  { value: "general", label: "General Inquiries", icon: MessageCircle, color: "bg-green-100 text-green-700" },
]

const priorityLevels = [
  { value: "low", label: "Low - General question" },
  { value: "medium", label: "Medium - Need help soon" },
  { value: "high", label: "High - Blocking my work" },
  { value: "urgent", label: "Urgent - Service down" },
]

export function ContactSupportModal({ open, onOpenChange }: ContactSupportModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "",
    priority: "medium",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Support form submitted:", formData)
    onOpenChange(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      category: "",
      priority: "medium",
    })
  }

  const selectedOption = supportOptions.find((option) => option.value === formData.category)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogClose />
        <DialogHeader>
          <DialogTitle>Contact Support</DialogTitle>
          <DialogDescription>Get help from our support team. We typically respond within 24 hours.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Support Category Selection */}
          <div>
            <label className="text-body font-medium text-text-primary mb-3 block">What can we help you with?</label>
            <div className="grid grid-cols-2 gap-3">
              {supportOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: option.value })}
                  className={cn(
                    "p-4 rounded-button border-2 transition-all text-left hover:shadow-sm",
                    formData.category === option.value
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

          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-body font-medium text-text-primary mb-2 block">
                Name *
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-body font-medium text-text-primary mb-2 block">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Subject and Priority */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="subject" className="text-body font-medium text-text-primary mb-2 block">
                Subject *
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief description of your issue"
                required
              />
            </div>
            <div>
              <label htmlFor="priority" className="text-body font-medium text-text-primary mb-2 block">
                Priority Level
              </label>
              <Select
                value={formData.priority}
                onValueChange={(val) => setFormData({ ...formData, priority: val })}
                >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                    {priorityLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                        {level.label}
                    </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-body font-medium text-text-primary mb-2 block">
              Message *
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your issue or question in detail..."
              rows={5}
              required
            />
          </div>

          {/* Selected Category Display */}
          {selectedOption && (
            <div className="flex items-center space-x-2">
              <span className="text-small text-text-secondary">Category:</span>
              <Badge className={selectedOption.color}>{selectedOption.label}</Badge>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-3">
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Send Message
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
