"use client"

import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactSupportModal } from "@/components/modals/contact-support-modal"
import { EnterpriseContactModal } from "@/components/modals/enterprise-contact-modal"
import { MessageCircle, Building, Book, Mail, Phone, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "General Support",
    description: "Get help with your account, billing, or technical issues",
    action: "Contact Support",
    color: "bg-blue-100 text-blue-700",
    modalType: "support" as const,
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Custom AI implementations for your organization",
    action: "Contact Enterprise",
    color: "bg-purple-100 text-purple-700",
    modalType: "enterprise" as const,
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Browse our comprehensive guides and tutorials",
    action: "View Documentation",
    color: "bg-green-100 text-green-700",
    modalType: null,
  },
]

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@chatfuse.com",
    description: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Enterprise Sales",
    value: "+1 (555) 123-4567",
    description: "Monday - Friday, 9 AM - 6 PM PST",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 AI Street, San Francisco, CA 94105",
    description: "Our headquarters",
  },
]

export default function ContactPage() {
  const [supportModalOpen, setSupportModalOpen] = useState(false)
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false)

  const handleContactClick = (modalType: "support" | "enterprise" | null) => {
    if (modalType === "support") {
      setSupportModalOpen(true)
    } else if (modalType === "enterprise") {
      setEnterpriseModalOpen(true)
    }
  }

  return (
    <PageLayout>
      <section className="section-spacing bg-gradient-to-b from-chatfuse-blue-light to-white">
        <div className="max-container container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-h1 font-bold text-text-primary mb-6 text-balance">Get in Touch</h1>
            <p className="text-h5 text-text-secondary text-pretty">
              We&apos;re here to help. Choose the best way to reach us based on your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="max-container container-padding">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${method.color}`}>
                  <method.icon size={24} />
                </div>
                <h3 className="text-h5 font-semibold text-text-primary mb-3">{method.title}</h3>
                <p className="text-body text-text-secondary mb-6">{method.description}</p>
                <Button variant="primary" onClick={() => handleContactClick(method.modalType)} className="w-full">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-text-primary text-center mb-8">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-10 h-10 bg-chatfuse-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-chatfuse-blue" size={20} />
                  </div>
                  <h3 className="text-h5 font-semibold text-text-primary mb-2">{info.title}</h3>
                  <p className="text-body font-medium text-chatfuse-blue mb-2">{info.value}</p>
                  <p className="text-small text-text-secondary">{info.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ContactSupportModal open={supportModalOpen} onOpenChange={setSupportModalOpen} />
      <EnterpriseContactModal open={enterpriseModalOpen} onOpenChange={setEnterpriseModalOpen} />
    </PageLayout>
  )
}
