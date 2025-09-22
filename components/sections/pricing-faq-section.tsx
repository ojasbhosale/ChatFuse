"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "You can cancel anytime with no questions asked. Your subscription remains active until the end of your billing period, and your data is permanently deleted if you choose.",
  },
  {
    question: "Are there any usage limits?",
    answer:
      "No, there are no usage limits on any of our plans. You have unlimited access to all AI models and features.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use zero-access architecture, meaning no employee can ever access your data. All conversations are encrypted and stored securely.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment in full.",
  },
  {
    question: "Can I use this for my business?",
    answer:
      "Our plans work great for individuals and businesses. For larger organizations, check out our Enterprise solutions.",
  },
]

export function PricingFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-spacing">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-h5 text-text-secondary">Everything you need to know about our pricing</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between text-left">
                <h3 className="text-h5 font-semibold text-text-primary pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-chatfuse-blue flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-text-tertiary flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-body text-text-secondary">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
