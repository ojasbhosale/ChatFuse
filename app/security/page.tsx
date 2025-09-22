import { PageLayout } from "@/components/layout/page-layout"
import { LegalPageLayout } from "@/components/layout/legal-page-layout"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, Server, Award, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Security - ChatFuse",
  description: "Learn about ChatFuse's enterprise-grade security measures, compliance standards, and data protection.",
}

const securityFeatures = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "AES-256 encryption for all data in transit and at rest",
  },
  {
    icon: Lock,
    title: "Zero-Access Architecture",
    description: "No employee can ever access your conversations or data",
  },
  {
    icon: Eye,
    title: "SOC 2 Compliance",
    description: "Independently audited security controls and procedures",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade cloud infrastructure with redundancy",
  },
  {
    icon: Award,
    title: "Regular Audits",
    description: "Quarterly security assessments and penetration testing",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "24/7 monitoring and rapid incident response procedures",
  },
]

export default function SecurityPage() {
  return (
    <PageLayout>
      <LegalPageLayout
        title="Security"
        lastUpdated="December 2024"
        description="ChatFuse is built with enterprise-grade security from the ground up to protect your data and privacy."
      >
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-chatfuse-blue-light rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-chatfuse-blue" size={24} />
                </div>
                <h3 className="text-h5 font-semibold text-text-primary mb-2">{feature.title}</h3>
                <p className="text-body text-text-secondary">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Data Encryption</h2>
          <p className="text-body text-text-secondary mb-4">
            All data is protected with military-grade encryption using AES-256 standards. Your conversations are
            encrypted on your device before transmission and remain encrypted on our servers.
          </p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>Client-side encryption before data leaves your device</li>
            <li>TLS 1.3 for all data in transit</li>
            <li>AES-256 encryption for data at rest</li>
            <li>Hardware security modules for key management</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Infrastructure Security</h2>
          <p className="text-body text-text-secondary mb-4">
            Our infrastructure is hosted on enterprise-grade cloud platforms with multiple layers of security:
          </p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>Multi-region redundancy and failover capabilities</li>
            <li>Network isolation and firewall protection</li>
            <li>DDoS protection and traffic filtering</li>
            <li>Regular security patches and updates</li>
            <li>24/7 monitoring and alerting systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Compliance Standards</h2>
          <p className="text-body text-text-secondary mb-4">
            ChatFuse meets or exceeds industry security and compliance standards:
          </p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>SOC 2 Type II compliance with annual audits</li>
            <li>GDPR compliance for European users</li>
            <li>CCPA compliance for California residents</li>
            <li>HIPAA compliance for healthcare customers</li>
            <li>ISO 27001 security management standards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Data Residency</h2>
          <p className="text-body text-text-secondary mb-4">
            We offer flexible data residency options to meet your compliance requirements:
          </p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>US, EU, and Asia-Pacific data centers available</li>
            <li>Data never leaves your chosen region</li>
            <li>Custom data residency for enterprise customers</li>
            <li>On-premises deployment options available</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Incident Response</h2>
          <p className="text-body text-text-secondary mb-4">
            Our security team maintains comprehensive incident response procedures:
          </p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>24/7 security monitoring and alerting</li>
            <li>Rapid response team for security incidents</li>
            <li>Automated threat detection and mitigation</li>
            <li>Regular incident response drills and testing</li>
            <li>Transparent communication during incidents</li>
          </ul>
        </section>
      </LegalPageLayout>
    </PageLayout>
  )
}
