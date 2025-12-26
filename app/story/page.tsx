import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl font-light text-balance">My Story</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The journey from a curious beginner to a security-focused solopreneur.
            </p>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium">The Beginning</h2>
              <p className="text-muted-foreground leading-relaxed">
                It all started in a small room with nothing but a laptop and an insatiable curiosity about how websites
                work. I remember spending countless nights trying to understand why some sites felt smooth and intuitive
                while others felt clunky and confusing. That curiosity led me down the rabbit hole of web development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My first "Hello World" was a revelation. The idea that I could create something from nothing, that I
                could build digital experiences that people would actually use, was intoxicating. I was hooked.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Learning & Growing</h2>
              <p className="text-muted-foreground leading-relaxed">
                The early days were filled with tutorials, documentation, and a lot of trial and error. I learned HTML,
                CSS, JavaScript, and eventually moved into modern frameworks. But more importantly, I learned about the
                responsibility that comes with building applications that people trust with their data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Security wasn't just an afterthought—it became a core principle. Every line of code I wrote, every
                feature I implemented, I asked myself: "How can this be exploited? How can I protect my users?"
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">The Solopreneur Path</h2>
              <p className="text-muted-foreground leading-relaxed">
                After years of working with teams and learning from others, I decided to go solo. Not because I didn't
                enjoy collaboration, but because I wanted the freedom to build applications exactly the way I envisioned
                them— with security and user privacy at the forefront.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Being a solopreneur means wearing many hats: developer, designer, product manager, and security officer.
                It's challenging, but it allows me to maintain the high standards I've set for myself and my
                applications.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Park Slot & Beyond</h2>
              <p className="text-muted-foreground leading-relaxed">
                Park Slot represents everything I've learned about building secure, user-friendly applications. It's not
                just a parking app—it's a testament to the idea that you can create powerful software without
                compromising on security or user privacy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every feature in Park Slot has been carefully designed with security in mind. From encrypted data
                storage to secure payment processing, I've applied years of experience to create something I'm truly
                proud of.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">The Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                My mission is simple: build applications that people can trust. In a world where data breaches and
                privacy violations make headlines daily, I want to be part of the solution. I want to show that it's
                possible to create innovative, useful software while respecting user privacy and maintaining the highest
                security standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This website exists to be transparent about my practices. Every application I build will have its
                security policies clearly documented here. Because trust isn't just earned through good software—it's
                earned through transparency and accountability.
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground">
                Want to know more about my work or discuss a potential collaboration?{" "}
                <Link href="/contact" className="text-accent hover:underline">
                  Get in touch
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
