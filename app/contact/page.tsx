import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-light">Contact</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get in touch for questions about security policies, app development, or collaboration opportunities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-medium mb-3">General Inquiries</h2>
                <p className="text-muted-foreground mb-2">
                  For general questions about UnbakedApple applications and services.
                </p>
                <a href="mailto:hello@unbakedapple.com" className="text-accent hover:underline">
                  hello@unbakedapple.com
                </a>
              </div>

              <div>
                <h2 className="text-xl font-medium mb-3">Security & Privacy</h2>
                <p className="text-muted-foreground mb-2">
                  For questions about security policies, privacy practices, or to report security issues.
                </p>
                <a href="mailto:security@unbakedapple.com" className="text-accent hover:underline">
                  security@unbakedapple.com
                </a>
              </div>

              <div>
                <h2 className="text-xl font-medium mb-3">Business Inquiries</h2>
                <p className="text-muted-foreground mb-2">
                  For partnership opportunities, consulting, or business-related discussions.
                </p>
                <a href="mailto:business@unbakedapple.com" className="text-accent hover:underline">
                  business@unbakedapple.com
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-medium mb-3">Social Media</h2>
                <div className="space-y-3">
                  <div>
                    <span className="text-muted-foreground">X/Twitter: </span>
                    <a href="#" className="text-accent hover:underline">
                      @unbakedapple
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">LinkedIn: </span>
                    <a href="#" className="text-accent hover:underline">
                      UnbakedApple
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">GitHub: </span>
                    <a href="#" className="text-accent hover:underline">
                      unbakedapple
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium mb-3">Response Time</h2>
                <p className="text-muted-foreground">
                  I typically respond to emails within 24-48 hours. For urgent security matters, please mark your email
                  as high priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
