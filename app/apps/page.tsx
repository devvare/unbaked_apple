import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-light">Applications</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Security policies and documentation for all UnbakedApple applications.
            </p>
          </div>

          <div className="grid gap-6">
            <Link
              href="/apps/randoo"
              className="group p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-medium group-hover:text-accent transition-colors">Randoo</h2>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Randevu yönetim uygulaması. İşletmeler ve müşteriler için akıllı randevu sistemi, personel yönetimi ve
                  premium özellikler ile tam çözüm.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">Mobile App</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">Premium</span>
                </div>
              </div>
            </Link>

            <Link
              href="/apps/mybz"
              className="group p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-medium group-hover:text-accent transition-colors">MyBz</h2>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Business appointment management app. Google Sign-In, Firebase-powered scheduling, push notifications,
                  and analytics for business owners.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">Mobile App</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">Web App</span>
                </div>
              </div>
            </Link>

            <Link
              href="/apps/park-slot"
              className="group p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-medium group-hover:text-accent transition-colors">Park Slot</h2>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Smart parking solution with real-time availability tracking, secure booking system, and integrated
                  payment processing. Built with privacy-first principles.
                </p>
                <div className="flex gap-4 text-sm">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">Mobile App</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">Web Platform</span>
                </div>
              </div>
            </Link>

            <div className="p-8 bg-card/50 border border-border rounded-lg">
              <div className="space-y-4">
                <h2 className="text-2xl font-medium text-muted-foreground">More Applications</h2>
                <p className="text-muted-foreground">
                  Additional applications are currently in development. Check back soon for more apps and their
                  comprehensive security documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
