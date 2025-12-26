import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function ParkSlotPage() {
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
            <h1 className="text-4xl font-light">Park Slot</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Security policies and privacy documentation for the Park Slot application.
            </p>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Privacy Policy</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Park Slot is a parking spot sharing application that helps you find and share available parking
                  spaces. We are committed to transparency about what data we collect and how we use it.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">What We Collect</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Location data:</strong> Only the GPS coordinates of available parking spots
                  </li>
                  <li>
                    • <strong>Timestamp:</strong> When the parking spot becomes available
                  </li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">What We DON'T Collect</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• No personal information about who shared the parking spot</li>
                  <li>• No user accounts or registration required</li>
                  <li>• No payment information</li>
                  <li>• No tracking of individual users</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">How We Use Your Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Location and time data is shared publicly with all app users</li>
                  <li>• Information is automatically deleted after exactly 5 minutes</li>
                  <li>• No data is stored permanently or used for any other purpose</li>
                </ul>

                <div className="p-4 bg-card border border-border rounded-lg mt-6">
                  <h4 className="font-medium text-foreground mb-2">🕐 5-Minute Rule</h4>
                  <p className="text-sm text-muted-foreground">
                    All parking spot data is completely deleted from our servers after 5 minutes. This ensures your
                    location information has minimal exposure and maximum privacy.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Security Measures</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Since Park Slot collects minimal data and deletes it quickly, our security approach focuses on
                  protecting the limited information we temporarily handle.
                </p>

                <div className="grid gap-4 mt-6">
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Automatic Data Deletion</h4>
                    <p className="text-sm text-muted-foreground">
                      All location data is automatically purged after 5 minutes with no manual intervention required.
                    </p>
                  </div>

                  <div className="p-4 bg-card border border-border rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Anonymous Sharing</h4>
                    <p className="text-sm text-muted-foreground">
                      No user identification is linked to shared parking spots, ensuring complete anonymity.
                    </p>
                  </div>

                  <div className="p-4 bg-card border border-border rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Minimal Data Collection</h4>
                    <p className="text-sm text-muted-foreground">
                      We only collect what's absolutely necessary: location coordinates and timestamp.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Terms of Service</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  By using Park Slot, you agree to these simple terms. Our goal is to create a helpful community tool
                  for sharing parking information.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Acceptable Use</h3>
                <p className="text-muted-foreground">
                  Please only share legitimate available parking spots. Sharing false information disrupts the community
                  and defeats the purpose of the app.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">Liability</h3>
                <p className="text-muted-foreground">
                  Park Slot is a community tool for sharing parking information. We are not responsible for parking
                  regulations, fees, or the accuracy of shared parking spot information.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Contact</h2>
              <p className="text-muted-foreground">
                For questions about these policies or Park Slot security practices, contact us at{" "}
                <a href="mailto:security@unbakedapple.com" className="text-accent hover:underline">
                  security@unbakedapple.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
