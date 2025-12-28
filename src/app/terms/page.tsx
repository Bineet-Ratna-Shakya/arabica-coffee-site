import type { Metadata } from "next";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection } from "@/components/shared/animated-section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Arabica Coffee's website and services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-coffee-900">
        <SectionContainer className="text-center">
          <AnimatedSection>
            <Heading as="h1" size="xl" className="text-cream-50 mb-4">
              Terms & Conditions
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
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the Arabica Coffee website and services, you
                agree to be bound by these Terms and Conditions. If you do not
                agree to all the terms and conditions, you may not access or use
                our services.
              </p>

              <h2>2. Use of Our Services</h2>
              <h3>Eligibility</h3>
              <p>
                You must be at least 16 years old to use our services. By using
                our website, you represent that you meet this requirement.
              </p>

              <h3>Account Responsibilities</h3>
              <p>
                If you create an account with us, you are responsible for
                maintaining the confidentiality of your account information and for
                all activities that occur under your account.
              </p>

              <h3>Prohibited Activities</h3>
              <p>You agree not to:</p>
              <ul>
                <li>Use our services for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Collect information about other users without consent</li>
                <li>Engage in any activity that disrupts our services</li>
              </ul>

              <h2>3. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos,
                images, and software, is the property of Arabica Coffee or its
                licensors and is protected by copyright and trademark laws. You may
                not reproduce, distribute, or create derivative works without our
                express written permission.
              </p>

              <h2>4. Products and Services</h2>
              <h3>Menu and Pricing</h3>
              <p>
                Menu items and prices are subject to change without notice. We
                reserve the right to modify or discontinue products at any time.
              </p>

              <h3>Availability</h3>
              <p>
                While we strive to keep our menu items in stock, availability may
                vary. We are not responsible for items that become unavailable.
              </p>

              <h3>Allergies and Dietary Restrictions</h3>
              <p>
                Please inform our staff of any allergies or dietary restrictions.
                While we take precautions, we cannot guarantee that our products
                are free from allergens due to shared preparation areas.
              </p>

              <h2>5. Gift Cards</h2>
              <p>
                Gift cards are non-refundable and cannot be exchanged for cash. We
                are not responsible for lost or stolen gift cards. Gift cards do
                not expire.
              </p>

              <h2>6. Events and Reservations</h2>
              <p>
                Event bookings and reservations are subject to availability.
                Cancellations must be made at least 48 hours in advance for a full
                refund. We reserve the right to cancel events due to unforeseen
                circumstances.
              </p>

              <h2>7. User Content</h2>
              <p>
                By submitting content to our website (reviews, comments, photos),
                you grant us a non-exclusive, royalty-free license to use,
                reproduce, and display such content. You represent that you own or
                have the right to submit such content.
              </p>

              <h2>8. Disclaimer of Warranties</h2>
              <p>
                Our website and services are provided "as is" without warranties of
                any kind. We do not guarantee that our website will be
                uninterrupted, secure, or error-free.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Arabica Coffee shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of our services or products.
              </p>

              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Arabica Coffee and its
                employees from any claims, damages, or expenses arising from your
                violation of these terms or misuse of our services.
              </p>

              <h2>11. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the content or practices of these external sites.
              </p>

              <h2>12. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by the laws of the State of
                California, without regard to its conflict of law provisions. Any
                disputes shall be resolved in the courts of California.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use of
                our services constitutes acceptance of the modified terms.
              </p>

              <h2>14. Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable, the
                remaining provisions will continue in full force and effect.
              </p>

              <h2>15. Contact Information</h2>
              <p>
                For questions about these Terms and Conditions, please contact us
                at:
              </p>
              <ul>
                <li>Email: legal@arabicacoffee.com</li>
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
