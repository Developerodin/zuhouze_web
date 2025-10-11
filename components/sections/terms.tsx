"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Terms() {
  return (
    <div className="flex justify-center py-30 px-4">
      <Card className="w-full max-w-4xl shadow-lg rounded-2xl border border-gray-200">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Terms & Conditions
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Effective Date: 11/10/2025
          </p>
        </CardHeader>

        <Separator className="my-2" />

        <CardContent>
        <section className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                Welcome to <strong>Zuhouze</strong>. Please read these Terms &
                Conditions ("Agreement", "Terms") carefully before using the
                Zuhouze mobile application (“App”) and website{" "}
                <a
                  href="https://zuhouze.com"
                  className="text-blue-600 hover:underline"
                >
                  https://zuhouze.com
                </a>{" "}
                (together, the “Service”). By using our Service, you agree to
                comply with and be bound by these Terms. If you disagree with
                any part, please do not use the Service.
              </p>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  1. Definitions
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>User:</strong> any person who accesses or uses the
                    Service.
                  </li>
                  <li>
                    <strong>Content:</strong> text, images, listings, or data
                    provided through the Service.
                  </li>
                  <li>
                    <strong>Personal Data:</strong> any information related to an
                    identifiable person.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  2. Eligibility
                </h2>
                <p>
                  You must be at least 16 years old (or the legal age in your
                  jurisdiction) to use Zuhouze. By using the Service, you confirm
                  that you meet this requirement.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  3. Accounts & Registration
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide accurate and complete information when registering.</li>
                  <li>
                    You’re responsible for maintaining confidentiality of your
                    login credentials.
                  </li>
                  <li>
                    Notify us immediately at{" "}
                    <a
                      href="mailto:support@zuhouze.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@zuhouze.com
                    </a>{" "}
                    if you suspect unauthorized access.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  4. Use of the Service
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Use the Service only for lawful, personal, and non-commercial
                    purposes.
                  </li>
                  <li>
                    Do not attempt to hack, reverse engineer, or disrupt any part
                    of the Service.
                  </li>
                  <li>
                    Zuhouze reserves the right to suspend access if misuse or
                    violation is detected.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  5. Property Listings
                </h2>
                <p>
                  Zuhouze provides property listings and discovery tools. We do
                  not guarantee accuracy of listings, and users should independently
                  verify property details before making decisions.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  6. Intellectual Property
                </h2>
                <p>
                  All content, design, and branding on Zuhouze are owned or
                  licensed by Zuhouze. You may not reuse, copy, or modify any part
                  without our prior written permission.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  7. Privacy & Data Protection
                </h2>
                <p>
                  Your privacy matters. Please review our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  to understand how we process personal data in compliance with
                  GDPR.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  8. Disclaimers & Limitation of Liability
                </h2>
                <p>
                  The Service is provided “as is” without warranties of any kind.
                  Zuhouze is not liable for any damages or losses resulting from
                  use of the Service.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  9. Termination
                </h2>
                <p>
                  We may suspend or terminate your access at any time if you
                  violate these Terms. All provisions related to intellectual
                  property, disclaimers, and limitation of liability survive
                  termination.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  10. Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of India (Rajasthan
                  jurisdiction). Disputes shall be subject to the courts of
                  Jaipur, Rajasthan.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  11. GDPR Compliance
                </h2>
                <p>
                  EU/EEA users have rights under GDPR, including access,
                  correction, deletion, and portability of data. Contact us at{" "}
                  <a
                    href="mailto:support@zuhouze.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@zuhouze.com
                  </a>{" "}
                  to exercise these rights.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  12. Updates
                </h2>
                <p>
                  We may update these Terms periodically. Continued use of the
                  Service after updates means you accept the revised Terms.
                </p>
              </div>

              <Separator className="my-4" />

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  Contact Us
                </h2>
                <p>
                  For questions, contact us at{" "}
                  <a
                    href="mailto:support@zuhouze.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@zuhouze.com
                  </a>{" "}
                  or visit{" "}
                  <a
                    href="https://zuhouze.com"
                    className="text-blue-600 hover:underline"
                  >
                    https://zuhouze.com
                  </a>.
                </p>
              </div>
            </section>
        </CardContent>
      </Card>
    </div>
  );
}
