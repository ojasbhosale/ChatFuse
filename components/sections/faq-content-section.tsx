"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, MessageCircle, Shield, CreditCard, Building, Zap, Users } from "lucide-react"

const faqCategories = [
  {
    title: "General",
    icon: MessageCircle,
    color: "bg-blue-100 text-blue-700",
    faqs: [
      {
        question: "How many AI models are included?",
        answer:
          "ChatFuse includes access to 30+ AI models including GPT-5, Claude, Gemini, Llama, DeepSeek, Grok, and many more. We continuously add new models as they become available.",
      },
      {
        question: "Can I switch between models mid-conversation?",
        answer:
          "Yes! ChatFuse preserves your conversation history across all models, so you can switch seamlessly without losing context. This is one of our most popular features.",
      },
      {
        question: "What file types can I upload?",
        answer:
          "You can upload documents (PDF, DOC, TXT), images (JPG, PNG, GIF), spreadsheets (XLS, CSV), and more. Our AI models can analyze and work with various file formats.",
      },
    ],
  },
  {
    title: "Security & Privacy",
    icon: Shield,
    color: "bg-green-100 text-green-700",
    faqs: [
      {
        question: "Is my data private?",
        answer:
          "Absolutely. ChatFuse uses zero-access architecture, meaning no employee can ever access your data. All conversations are encrypted end-to-end and stored securely.",
      },
      {
        question: "How do you protect my conversations?",
        answer:
          "We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. Your data is encrypted both in transit and at rest, with multiple layers of security protection.",
      },
      {
        question: "Can I delete my data?",
        answer:
          "Yes, you have complete control over your data. You can delete individual conversations, entire chat history, or request complete account deletion at any time.",
      },
    ],
  },
  {
    title: "Billing & Plans",
    icon: CreditCard,
    color: "bg-purple-100 text-purple-700",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes, you can cancel your subscription at any time with no questions asked. Your subscription remains active until the end of your billing period.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 30-day money-back guarantee. If you're not satisfied with ChatFuse, we'll refund your payment in full within the first 30 days.",
      },
    ],
  },
  {
    title: "Enterprise",
    icon: Building,
    color: "bg-orange-100 text-orange-700",
    faqs: [
      {
        question: "Do you offer enterprise solutions?",
        answer:
          "Yes, we provide custom AI implementations for organizations with enterprise-grade security, compliance features, and dedicated support. Contact our enterprise team for details.",
      },
      {
        question: "What compliance standards do you meet?",
        answer:
          "We meet SOC 2 Type II, GDPR, CCPA, and HIPAA compliance standards. We also offer data residency options and custom compliance solutions for enterprise customers.",
      },
      {
        question: "Can I get a custom deployment?",
        answer:
          "Yes, we offer on-premises and private cloud deployments for enterprise customers with specific security or compliance requirements.",
      },
    ],
  },
  {
    title: "Features",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-700",
    faqs: [
      {
        question: "What are AI Personas?",
        answer:
          "AI Personas are pre-configured assistants optimized for specific roles like Developer, Writer, Analyst, and Creative. Each persona has specialized knowledge and communication style for their domain.",
      },
      {
        question: "How does FuseMind work?",
        answer:
          "FuseMind is our smart routing system that automatically selects the best AI model for your specific task, ensuring optimal performance and accuracy for different types of queries.",
      },
      {
        question: "Can I use voice input and output?",
        answer:
          "Yes, ChatFuse supports voice input and output capabilities. You can speak your questions and have responses read aloud, making it perfect for hands-free use.",
      },
    ],
  },
  {
    title: "Support",
    icon: Users,
    color: "bg-pink-100 text-pink-700",
    faqs: [
      {
        question: "How can I get help?",
        answer:
          "We offer multiple support channels: in-app chat support, email support, and comprehensive documentation. Premium subscribers get priority support with faster response times.",
      },
      {
        question: "Do you have tutorials or guides?",
        answer:
          "Yes, we have extensive documentation, video tutorials, and getting started guides to help you make the most of ChatFuse's features.",
      },
      {
        question: "Can I request new features?",
        answer:
          "We love hearing from our users. You can submit feature requests through our support channels, and we regularly implement the most requested features.",
      },
    ],
  },
]

export function FAQContentSection() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section className="section-spacing">
      <div className="max-container container-padding">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${category.color}`}>
                  <category.icon size={20} />
                </div>
                <h2 className="text-h3 font-bold text-text-primary">{category.title}</h2>
                <Badge variant="default" className="bg-gray-100 text-text-secondary">
                  {category.faqs.length} questions
                </Badge>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`
                  const isOpen = openItems[key]

                  return (
                    <Card key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3 className="text-h5 font-semibold text-text-primary pr-4">{faq.question}</h3>
                        {isOpen ? (
                          <ChevronUp className="text-chatfuse-blue flex-shrink-0" size={20} />
                        ) : (
                          <ChevronDown className="text-text-tertiary flex-shrink-0" size={20} />
                        )}
                      </button>
                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-body text-text-secondary">{faq.answer}</p>
                        </div>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
