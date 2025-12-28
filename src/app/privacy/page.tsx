import type { Metadata } from "next";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection } from "@/components/shared/animated-section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Arabica Coffee's privacy policy - how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-coffee-900">
        <SectionContainer className="text-center">
          <AnimatedSection>
            <Heading as="h1" size="xl" className="text-cream-50 mb-4">
              Privacy Policy
            </Heading>
            <p className="text-cream-300">Last updated: December 27, 2024</p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Content */}
      <section className="py-16">
        <SectionContainer size="narrow">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-coffee-800 prose-p:text-coffee-600 prose-li:text-coffee-600">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Arabica Coffee ("we," "our," or "us"). We are committed
                to protecting your personal information and your right to privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Fill out a contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account</li>
                <li>Make a purchase or reservation</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Payment information</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain
                information about your device, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>

              <h2>4. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information in the following situations:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> With third-party vendors who
                  perform services on our behalf (payment processing, email
                  delivery, analytics)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to
                  protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger,
                  acquisition, or sale of assets
                </li>
              </ul>

              <h2>5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to collect and
                store information about your preferences and activity on our
                website. You can set your browser to refuse cookies, but some
                features may not function properly.
              </p>

              <h2>6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information. However, no method of
                transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>

              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>

              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices of these external sites. We
                encourage you to review their privacy policies.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 16. We do not
                knowingly collect personal information from children. If we become
                aware that we have collected information from a child, we will take
                steps to delete it.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated
                version will be indicated by the "Last updated" date at the top of
                this page. We encourage you to review this policy periodically.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please
                contact us at:
              </p>
              <ul>
                <li>Email: privacy@arabicacoffee.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Coffee Lane, Brewville, CA 90210</li>
              </ul>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </section>
    </>
  );
}
