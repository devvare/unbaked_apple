import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function MyBzAccountDeletionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <Link
              href="/apps/mybz"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to MyBz
            </Link>
            <h1 className="text-4xl font-light">MyBz</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Account & Data Deletion</p>
          </div>

          <div className="space-y-8">
            <section className="space-y-6">
              <div className="prose prose-invert max-w-none space-y-8">

                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-4">How to Delete Your Account</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To delete your account and all associated data, follow these steps:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-medium shrink-0">1</span>
                      <p className="text-muted-foreground">Open the MyBz app</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-medium shrink-0">2</span>
                      <p className="text-muted-foreground">Go to <strong className="text-foreground">Settings</strong> from the bottom tab bar</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-medium shrink-0">3</span>
                      <p className="text-muted-foreground">Scroll down and tap <strong className="text-foreground">&quot;Hesab&#x131; Sil&quot;</strong> (Delete Account)</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-medium shrink-0">4</span>
                      <p className="text-muted-foreground">Tap <strong className="text-foreground">&quot;Hesab&#x131;m&#x131; Sil&quot;</strong> (Delete My Account) to confirm</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-medium shrink-0">5</span>
                      <p className="text-muted-foreground">Tap <strong className="text-foreground">&quot;Evet, Sil&quot;</strong> (Yes, Delete) on the second confirmation</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-4">Data That Will Be Permanently Deleted</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you delete your account, the following data will be permanently removed:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                      <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="text-muted-foreground">Your Google account connection</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                      <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="text-muted-foreground">Business information (name, address, working hours)</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                      <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="text-muted-foreground">All service definitions</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                      <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="text-muted-foreground">All appointment records</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                      <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="text-muted-foreground">Notification settings and tokens</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 font-medium leading-relaxed">
                    This action is irreversible. All data will be permanently deleted and cannot be recovered.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-3">Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about account deletion, please contact us at:{" "}
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
