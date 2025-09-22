import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Book } from "lucide-react"
import Link from "next/link"

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Get instant help from our support team",
    action: "Start Chat",
    href: "/contact",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message and we'll respond quickly",
    action: "Send Email",
    href: "/contact",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Browse our comprehensive guides and tutorials",
    action: "View Docs",
    href: "/docs",
    color: "bg-purple-100 text-purple-700",
  },
]

export function FAQContactSection() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="max-container container-padding">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-text-primary mb-4">Still have questions?</h2>
          <p className="text-h5 text-text-secondary">We&apos;re here to help. Choose the best way to get in touch.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {supportOptions.map((option, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${option.color}`}>
                <option.icon size={24} />
              </div>
              <h3 className="text-h5 font-semibold text-text-primary mb-3">{option.title}</h3>
              <p className="text-body text-text-secondary mb-6">{option.description}</p>
              <Button variant="primary" asChild>
                <Link href={option.href}>{option.action}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
