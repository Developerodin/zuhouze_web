"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Privacy() {
  return (
    <div className="flex justify-center py-30 px-4">
      <Card className="w-full max-w-4xl shadow-lg rounded-2xl border border-gray-200">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Privacy Policy
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Effective Date: 11/10/2025
          </p>
        </CardHeader>

        <Separator className="my-2" />

        <CardContent>
        <section className="pt-10 text-sm text-muted-foreground leading-relaxed">
              <p>
                Zuhouze ("we", "us", "our") operates the Zuhouze mobile
                application (“App”) and the website{" "}
                <a
                  href="https://zuhouze.com"
                  className="text-blue-600 hover:underline"
                >
                  https://zuhouze.com
                </a>{" "}
                (together, the “Service”). This Privacy Policy explains how we
                collect, use, disclose, and protect your information when you
                use our Service. By using Zuhouze, you consent to this Policy.
              </p>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  1. Information We Collect
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Personal Information:</strong> such as name, email,
                    phone number, and account credentials.
                  </li>
                  <li>
                    <strong>Property Data:</strong> saved or viewed listings,
                    searches, or filters used.
                  </li>
                  <li>
                    <strong>Device Data:</strong> IP address, device type,
                    operating system, app version, and usage analytics.
                  </li>
                  <li>
                    <strong>Location Data:</strong> when you enable location
                    services for property discovery.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To provide and improve our property discovery Service.</li>
                  <li>To personalize your experience and show relevant results.</li>
                  <li>
                    To send you updates, notifications, or service-related
                    communications.
                  </li>
                  <li>To comply with legal obligations and prevent misuse.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  3. Cookies & Tracking
                </h2>
                <p>
                  We use cookies and similar technologies to track activity and
                  improve user experience. You can control cookie settings
                  through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  4. Data Sharing & Disclosure
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    With service providers who assist us in operations (hosting,
                    analytics, marketing).
                  </li>
                  <li>
                    When required by law or to protect our rights and users.
                  </li>
                  <li>
                    With your explicit consent (for example, when connecting with
                    a property agent).
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  5. Data Retention
                </h2>
                <p>
                  We retain your information only as long as necessary to
                  fulfill the purposes described in this Policy or as required by
                  law. You may request deletion of your account or data anytime
                  by emailing{" "}
                  <a
                    href="mailto:support@zuhouze.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@zuhouze.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  6. Data Security
                </h2>
                <p>
                  We use appropriate technical and organizational measures to
                  safeguard your personal data against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  7. GDPR Compliance (EU Users)
                </h2>
                <p>
                  If you are in the EU/EEA, you have the following rights under
                  the General Data Protection Regulation (GDPR):
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Right to access your data.</li>
                  <li>Right to rectification (correction of inaccuracies).</li>
                  <li>Right to erasure (“right to be forgotten”).</li>
                  <li>Right to restrict or object to processing.</li>
                  <li>Right to data portability.</li>
                </ul>
                <p className="mt-2">
                  To exercise any of these rights, contact us at{" "}
                  <a
                    href="mailto:support@zuhouze.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@zuhouze.com
                  </a>
                  . We may verify your identity before responding.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  8. Children’s Privacy
                </h2>
                <p>
                  Zuhouze is not intended for children under 16. We do not
                  knowingly collect personal data from minors. If you believe a
                  child has provided information, please contact us to remove it.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  9. International Transfers
                </h2>
                <p>
                  Your data may be transferred and processed outside your
                  country. We ensure appropriate safeguards are in place to
                  protect your privacy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  10. Updates to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy periodically. Changes will
                  take effect once posted here with a new effective date. We
                  encourage you to review it regularly.
                </p>
              </div>

              <Separator className="my-4" />

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  11. Contact Us
                </h2>
                <p>
                  For questions about this Privacy Policy or data handling,
                  contact us at{" "}
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
                  </a>
                  .
                </p>
              </div>
            </section>
        </CardContent>
      </Card>
    </div>
  );
}
