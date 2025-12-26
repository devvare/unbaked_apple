import Link from "next/link"

export function Navigation() {
  return (
    <nav className="flex items-center justify-between py-8 px-6 max-w-6xl mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-6 h-6 bg-accent rounded-full"></div>
        <span className="text-xl font-medium text-foreground">UnbakedApple</span>
      </Link>

      <div className="flex items-center gap-8">
        <Link href="/apps" className="text-muted-foreground hover:text-foreground transition-colors">
          Apps
        </Link>
        <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  )
}
