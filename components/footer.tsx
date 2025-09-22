import Link from "next/link"
import { Logo } from "./logo"
import { Shield, Lock, CheckCircle } from "lucide-react"

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
    <footer className="bg-white border-t border-border">
      <div className="max-container container-padding section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Logo size="md" />
              <span className="text-h5 font-semibold text-text-primary">ChatFuse</span>
            </Link>
            <p className="text-body text-text-secondary mb-6 max-w-md">
              Access GPT-5, Claude, Gemini, and 30+ other AI models with complete privacy and zero-access architecture.
            </p>

            {/* Privacy Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-success">
                <Lock size={16} />
                <span className="text-small font-medium">Your data is encrypted</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Shield size={16} />
                <span className="text-small font-medium">Privacy protected</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <CheckCircle size={16} />
                <span className="text-small font-medium">Zero-access active</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-h5 font-semibold text-text-primary mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body text-text-secondary hover:text-chatfuse-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-small text-text-tertiary">© 2024 ChatFuse. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-small text-text-tertiary hover:text-chatfuse-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-small text-text-tertiary hover:text-chatfuse-blue transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-small text-text-tertiary hover:text-chatfuse-blue transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
