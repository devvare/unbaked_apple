import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function MyBzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Apps
            </Link>
            <h1 className="text-4xl font-light">MyBz</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Privacy Policy</p>
            <div className="flex gap-4 pt-2">
              <Link
                href="/apps/mybz/account-deletion"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline transition-colors"
              >
                Account & Data Deletion
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Privacy Policy</h2>
              <p className="text-sm text-muted-foreground">Last updated: February 18, 2026</p>

              <div className="prose prose-invert max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  MyBz (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the MyBz mobile application and web application (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">1. Information We Collect</h3>
                  <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                    <li>
                      <strong className="text-foreground">Account Information:</strong> When you sign in with Google, we collect your name, email address, and profile photo.
                    </li>
                    <li>
                      <strong className="text-foreground">Business Information:</strong> Business name, address, working hours, services, and pricing.
                    </li>
                    <li>
                      <strong className="text-foreground">Appointment Information:</strong> Customer name, phone number, appointment date, time, and service details.
                    </li>
                    <li>
                      <strong className="text-foreground">Device Information:</strong> Push notification tokens (FCM tokens) for sending appointment notifications.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">2. How We Use Your Information</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>To provide and maintain the Service.</li>
                    <li>To manage appointments between businesses and customers.</li>
                    <li>To send push notifications for appointment confirmations, cancellations, and reminders.</li>
                    <li>To display analytics and reports to business owners.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">3. Data Storage and Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data is stored securely on Google Firebase (Firestore) servers. We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">4. Data Sharing</h3>
                  <p className="text-muted-foreground mb-3">
                    We do not sell, trade, or share your personal information with third parties, except:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>With the business you book an appointment with (your name and phone number).</li>
                    <li>When required by law or legal process.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">5. Push Notifications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use Firebase Cloud Messaging to send push notifications. You can opt out of notifications at any time through your device or browser settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">6. Third-Party Services</h3>
                  <p className="text-muted-foreground mb-3">We use the following third-party services:</p>
                  <div className="space-y-3">
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">Google Sign-In</h5>
                      <p className="text-sm text-muted-foreground">For authentication</p>
                    </div>
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h5 className="font-medium text-foreground mb-1">Google Firebase</h5>
                      <p className="text-sm text-muted-foreground">For data storage, cloud functions, and push notifications</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-3">
                    These services have their own privacy policies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">7. Data Retention</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data is retained as long as your account is active. You may request deletion of your data by contacting us.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">8. Children&apos;s Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Service is not intended for children under 13. We do not knowingly collect personal information from children.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">9. Changes to This Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">10. Contact Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:{" "}
                    <a href="mailto:info@mybz.app" className="text-accent hover:underline">
                      info@mybz.app
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
