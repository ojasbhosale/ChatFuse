import { PageLayout } from "@/components/layout/page-layout"
import { LegalPageLayout } from "@/components/layout/legal-page-layout"

export const metadata = {
  title: "Terms of Service - ChatFuse",
  description: "ChatFuse Terms of Service. Understand your rights and responsibilities when using our AI platform.",
}

export default function TermsPage() {
  return (
    <PageLayout>
      <LegalPageLayout
        title="Terms of Service"
        lastUpdated="December 2024"
        description="These terms govern your use of ChatFuse and outline your rights and responsibilities."
      >
        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Acceptable Use Policy</h2>
          <p className="text-body text-text-secondary mb-4">
            You may use ChatFuse for any lawful purpose. However, you agree not to use our service for:
          </p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>Illegal activities or content that violates applicable laws</li>
            <li>Harassment, abuse, or harmful content targeting individuals or groups</li>
            <li>Generating spam, malware, or other malicious content</li>
            <li>Attempting to reverse engineer or compromise our security measures</li>
            <li>Violating the intellectual property rights of others</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Service Availability</h2>
          <p className="text-body text-text-secondary mb-4">
            We strive to maintain 99.9% uptime for our service. However, we may occasionally need to perform maintenance
            or updates that could temporarily affect service availability.
          </p>
          <p className="text-body text-text-secondary">
            We will provide advance notice of planned maintenance whenever possible and work to minimize any disruption
            to your use of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">User Responsibilities</h2>
          <p className="text-body text-text-secondary mb-4">As a user of ChatFuse, you are responsible for:</p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>Maintaining the security of your account credentials</li>
            <li>Using the service in compliance with these terms</li>
            <li>Respecting the rights and privacy of others</li>
            <li>Providing accurate billing and account information</li>
            <li>Reporting any security vulnerabilities or abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Intellectual Property</h2>
          <p className="text-body text-text-secondary mb-4">
            You retain ownership of all content you create using ChatFuse. We do not claim any rights to your
            conversations, files, or generated content.
          </p>
          <p className="text-body text-text-secondary">
            ChatFuse and its underlying technology remain our intellectual property. You may not copy, modify, or
            distribute our software or attempt to extract our proprietary algorithms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Limitation of Liability</h2>
          <p className="text-body text-text-secondary">
            ChatFuse is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental,
            or consequential damages arising from your use of our service. Our total liability is limited to the amount
            you paid for the service in the preceding 12 months.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Termination</h2>
          <p className="text-body text-text-secondary mb-4">
            You may terminate your account at any time. We may terminate accounts that violate these terms or engage in
            abusive behavior.
          </p>
          <p className="text-body text-text-secondary">
            Upon termination, your access to the service will cease, and your data will be deleted according to our data
            retention policies unless you request otherwise.
          </p>
        </section>
      </LegalPageLayout>
    </PageLayout>
  )
}
