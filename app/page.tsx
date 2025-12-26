import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-light text-balance">I am UnbakedApple</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From crafting my first web application in a small room to building polished digital experiences, I'm on a
              mission to create apps that are both functional and delightful. As a solopreneur, I focus on web
              development with attention to security and user experience.
            </p>
            <p className="text-muted-foreground">
              Read my{" "}
              <Link href="/story" className="text-accent hover:underline">
                story
              </Link>
              .
            </p>
          </div>

          <div className="pt-16">
            <h2 className="text-2xl font-light mb-8">Applications</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/apps/park-slot"
                className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-medium group-hover:text-accent transition-colors">Park Slot</h3>
                  <p className="text-muted-foreground">
                    Smart parking solution with real-time availability tracking and secure booking system.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <span>View Security Policy</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link
                href="/apps/randoo"
                className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-medium group-hover:text-accent transition-colors">Randoo</h3>
                  <p className="text-muted-foreground">
                    Appointment management system with calendar sync and automated reminders for seamless scheduling.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <span>View Security Policy</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="pt-16 border-t border-border">
            <h2 className="text-2xl font-light mb-8">Contact</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-4">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:hello@unbakedapple.com" className="text-accent hover:underline">
                    hello@unbakedapple.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Social Media</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    X/Twitter:{" "}
                    <a href="#" className="text-accent hover:underline">
                      @unbakedapple
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    LinkedIn:{" "}
                    <a href="#" className="text-accent hover:underline">
                      UnbakedApple
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
