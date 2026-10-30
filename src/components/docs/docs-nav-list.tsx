"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsNav } from "@/lib/docs-nav"

export function DocsNavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav aria-label="문서 목차" className="flex flex-col gap-6">
      {docsNav.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <p className="px-3 pb-1 text-overline text-text-secondary">{group.title}</p>
          <ul className="flex flex-col gap-0.5">
            {group.items.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-baseline justify-between gap-2 rounded-md px-3 py-1.5 text-body-small transition-colors",
                      "outline-none focus-visible:shadow-focus",
                      active
                        ? "bg-primary-subtle font-semibold text-primary-text"
                        : "text-text-primary hover:bg-bg-subtle"
                    )}
                  >
                    <span>{item.title}</span>
                    <span className={cn("text-caption", active ? "text-primary-text" : "text-text-disabled")}>
                      {item.en}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
