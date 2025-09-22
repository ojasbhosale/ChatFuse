import { PageLayout } from "@/components/layout/page-layout"
import { LegalPageLayout } from "@/components/layout/legal-page-layout"

export const metadata = {
  title: "Privacy Policy - ChatFuse",
  description: "ChatFuse Privacy Policy. Learn how we protect your data with zero-access architecture and encryption.",
}

export default function PrivacyPage() {
  return (
    <PageLayout>
      <LegalPageLayout
        title="Privacy Policy"
        lastUpdated="December 2024"
        description="Your privacy is our top priority. Learn how we protect your data with zero-access architecture."
      >
        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Zero-Access Architecture</h2>
          <p className="text-body text-text-secondary mb-4">
            ChatFuse is built with a zero-access architecture, which means that no employee, administrator, or third
            party can ever access your conversations, files, or personal data. This is not just a policy—it&apos;s built into
            the technical foundation of our platform.
          </p>
          <p className="text-body text-text-secondary">
            Your data is encrypted with your own unique keys that only you control. Even if compelled by law enforcement
            or government agencies, we cannot access your data because we simply don&apos;t have the technical ability to do
            so.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Data Encryption</h2>
          <p className="text-body text-text-secondary mb-4">
            All data is encrypted both in transit and at rest using industry-standard AES-256 encryption. Your
            conversations are encrypted on your device before being sent to our servers, and they remain encrypted at
            all times.
          </p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>End-to-end encryption for all conversations</li>
            <li>Client-side encryption before data leaves your device</li>
            <li>Encrypted storage with unique per-user keys</li>
            <li>Secure key management with hardware security modules</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Data Collection</h2>
          <p className="text-body text-text-secondary mb-4">
            We collect only the minimum data necessary to provide our service:
          </p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>Account information (email address, encrypted password)</li>
            <li>Billing information (processed by our payment providers)</li>
            <li>Usage analytics (anonymized and aggregated)</li>
            <li>Technical logs for security and performance monitoring</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">No Data Selling</h2>
          <p className="text-body text-text-secondary">
            We never sell, rent, or share your personal data with third parties for marketing purposes. Your data is
            yours, and we respect that. We don&apos;t use your conversations to train AI models or for any other purpose
            beyond providing you with our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">User Control</h2>
          <p className="text-body text-text-secondary mb-4">You have complete control over your data:</p>
          <ul className="list-disc list-inside text-body text-text-secondary space-y-2">
            <li>Delete individual conversations or your entire chat history</li>
            <li>Export your data in standard formats</li>
            <li>Request complete account deletion</li>
            <li>Control data retention settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-semibold text-text-primary mb-4">Compliance</h2>
          <p className="text-body text-text-secondary">
            ChatFuse complies with major privacy regulations including GDPR, CCPA, and other applicable data protection
            laws. We undergo regular security audits and maintain SOC 2 Type II compliance.
          </p>
        </section>
      </LegalPageLayout>
    </PageLayout>
  )
}
