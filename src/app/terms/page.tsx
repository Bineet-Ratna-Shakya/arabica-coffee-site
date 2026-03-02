import type { Metadata } from "next";
import { KathmanduDate } from "@/components/shared/kathmandu-date";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Arabica Coffee's website and services.",
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

export default function TermsPage() {
  return (
    <main className="bg-cream-50 min-h-screen">
      {/* ── Header ── */}
      <header className="pt-32 pb-12 md:pt-40 md:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.35em] text-coffee-400 mb-4">
            Legal
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-coffee-900 leading-tight">
            Terms &amp; Conditions
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
          <Section title="1. Agreement to Terms">
            <p>
              By accessing or using the Arabica Coffee website and services, you
              agree to be bound by these Terms and Conditions. If you do not
              agree to all the terms and conditions, you may not access or use
              our services.
            </p>
          </Section>

          <Section title="2. Use of Our Services">
            <p className="font-medium text-coffee-700">Eligibility</p>
            <p>
              You must be at least 16 years old to use our services. By using our
              website, you represent that you meet this requirement.
            </p>
            <p className="font-medium text-coffee-700">
              Account Responsibilities
            </p>
            <p>
              If you create an account with us, you are responsible for
              maintaining the confidentiality of your account information and for
              all activities that occur under your account.
            </p>
            <p className="font-medium text-coffee-700">
              Prohibited Activities
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our website</li>
              <li>Upload or transmit viruses or malicious code</li>
              <li>Collect information about other users without consent</li>
              <li>Engage in any activity that disrupts our services</li>
            </ul>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              All content on our website, including text, graphics, logos, images,
              and software, is the property of Arabica Coffee or its licensors
              and is protected by copyright and trademark laws. You may not
              reproduce, distribute, or create derivative works without our
              express written permission.
            </p>
          </Section>

          <Section title="4. Products and Services">
            <p className="font-medium text-coffee-700">Menu and Pricing</p>
            <p>
              Menu items and prices are subject to change without notice. We
              reserve the right to modify or discontinue products at any time.
            </p>
            <p className="font-medium text-coffee-700">Availability</p>
            <p>
              While we strive to keep our menu items in stock, availability may
              vary. We are not responsible for items that become unavailable.
            </p>
            <p className="font-medium text-coffee-700">
              Allergies and Dietary Restrictions
            </p>
            <p>
              Please inform our staff of any allergies or dietary restrictions.
              While we take precautions, we cannot guarantee that our products
              are free from allergens due to shared preparation areas.
            </p>
          </Section>

          <Section title="5. Gift Cards">
            <p>
              Gift cards are non-refundable and cannot be exchanged for cash. We
              are not responsible for lost or stolen gift cards. Gift cards do
              not expire.
            </p>
          </Section>

          <Section title="6. Events and Reservations">
            <p>
              Event bookings and reservations are subject to availability.
              Cancellations must be made at least 48 hours in advance for a full
              refund. We reserve the right to cancel events due to unforeseen
              circumstances.
            </p>
          </Section>

          <Section title="7. User Content">
            <p>
              By submitting content to our website (reviews, comments, photos),
              you grant us a non-exclusive, royalty-free license to use,
              reproduce, and display such content. You represent that you own or
              have the right to submit such content.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              Our website and services are provided &ldquo;as is&rdquo; without
              warranties of any kind. We do not guarantee that our website will
              be uninterrupted, secure, or error-free.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Arabica Coffee shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of our services or products.
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to indemnify and hold harmless Arabica Coffee and its
              employees from any claims, damages, or expenses arising from your
              violation of these terms or misuse of our services.
            </p>
          </Section>

          <Section title="11. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content or practices of these external sites.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms and Conditions are governed by the laws of Nepal. Any
              disputes arising from these terms shall be subject to the exclusive
              jurisdiction of the courts of Kathmandu, Nepal.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting. Your continued use of
              our services constitutes acceptance of the modified terms.
            </p>
          </Section>

          <Section title="14. Severability">
            <p>
              If any provision of these terms is found to be unenforceable, the
              remaining provisions will continue in full force and effect.
            </p>
          </Section>

          <Section title="15. Contact Information">
            <p>
              For questions about these Terms and Conditions, please contact us:
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
