"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/docs/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const MAIN_NAV = [
  { href: "/docs", title: "Docs" },
  { href: "/samples", title: "Samples" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const inDocs = pathname.startsWith("/docs")

  return (
    <header className="sticky top-0 z-20 h-14 border-b border-border-default bg-bg-surface/90 backdrop-blur">
      <div className="flex h-full items-center gap-2 px-page-margin">
        {inDocs && <MobileNav />}
        <Link href="/" className="mr-4 flex items-center gap-2 rounded-md outline-none focus-visible:shadow-focus">
          <span className="size-6 rounded-md bg-primary-solid" aria-hidden />
          <span className="text-title">OHC</span>
        </Link>
        <nav aria-label="주요 메뉴" className="flex items-center gap-1">
          {MAIN_NAV.map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-1.5 text-label-medium outline-none transition-colors focus-visible:shadow-focus",
                  active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </nav>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
