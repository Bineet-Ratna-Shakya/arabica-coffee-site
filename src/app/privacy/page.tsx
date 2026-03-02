import type { Metadata } from "next";
import { KathmanduDate } from "@/components/shared/kathmandu-date";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Arabica Coffee's privacy policy — how we collect, use, and protect your information.",
};

/* ── tiny helper ── */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-coffee-800">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-coffee-600">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-cream-50 min-h-screen">
      {/* ── Header ── */}
      <header className="pt-32 pb-12 md:pt-40 md:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.35em] text-coffee-400 mb-4">
            Legal
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-coffee-900 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-coffee-400 mt-3">
            Last updated — <KathmanduDate />
          </p>
        </div>
      </header>

      <div className="h-px bg-coffee-200/60 max-w-3xl mx-auto" />

      {/* ── Body ── */}
      <div className="px-6 py-14 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          <Section title="1. Introduction">
            <p>
              Welcome to Arabica Coffee (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
              or &ldquo;us&rdquo;). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p className="font-medium text-coffee-700">
              Personal Information
            </p>
            <p>
              We may collect personal information that you voluntarily provide
              when you fill out a contact form, subscribe to our newsletter,
              create an account, make a purchase or reservation, or participate
              in surveys or promotions.
            </p>
            <p>
              This may include your name, email address, phone number, mailing
              address, and payment information.
            </p>
            <p className="font-medium text-coffee-700">
              Automatically Collected Information
            </p>
            <p>
              When you visit our website, we may automatically collect certain
              information about your device, including your IP address, browser
              type and version, operating system, pages visited and time spent,
              and referring website.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </Section>

          <Section title="4. Sharing Your Information">
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with service providers who
              perform services on our behalf (payment processing, email delivery,
              analytics), when required by law or to protect our rights, or in
              connection with a merger, acquisition, or sale of assets.
            </p>
          </Section>

          <Section title="5. Cookies and Tracking">
            <p>
              We use cookies and similar tracking technologies to collect and
              store information about your preferences and activity on our
              website. You can set your browser to refuse cookies, but some
              features may not function properly.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our services are not directed to individuals under 16. We do not
              knowingly collect personal information from children. If we become
              aware that we have collected information from a child, we will take
              steps to delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by the &ldquo;Last updated&rdquo; date
              at the top of this page. We encourage you to review this policy
              periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-1">
              <li>Email — arabicaacademy27@gmail.com</li>
              <li>Phone — 9700128949</li>
              <li>
                Address — Purple House, Bagbazar, Kathmandu 44600, Nepal
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
}
