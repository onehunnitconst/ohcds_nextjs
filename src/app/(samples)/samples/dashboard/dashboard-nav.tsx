"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3Icon,
  BoxIcon,
  LayoutDashboardIcon,
  MenuIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV = [
  { title: "대시보드", icon: LayoutDashboardIcon, active: true },
  { title: "주문", icon: ShoppingCartIcon, badge: "12" },
  { title: "상품", icon: BoxIcon },
  { title: "고객", icon: UsersIcon },
  { title: "리포트", icon: BarChart3Icon },
  { title: "설정", icon: SettingsIcon },
]

function Brand() {
  return (
    <Link href="/samples" className="flex items-center gap-2 rounded-md px-2 outline-none focus-visible:shadow-focus">
      <span className="size-7 rounded-md bg-primary-solid" aria-hidden />
      <span className="text-title">OHC Commerce</span>
    </Link>
  )
}

function NavList() {
  return (
    <nav aria-label="대시보드 메뉴">
      <ul className="flex flex-col gap-0.5">
        {NAV.map((item) => (
          <li key={item.title}>
            {/* 샘플 화면이라 대시보드 외 메뉴는 실제로 이동하지 않는다 */}
            <button
              type="button"
              aria-current={item.active ? "page" : undefined}
              className={cn(
                "flex w-full items-center gap-3 rounded-md px-3 py-2 text-label-large outline-none transition-colors focus-visible:shadow-focus",
                item.active ? "bg-primary-subtle text-primary-text" : "text-text-secondary hover:bg-bg-subtle hover:text-text-primary"
              )}
            >
              <item.icon className="size-4.5" />
              <span className="flex-1 text-left">{item.title}</span>
              {item.badge && (
                <span className="rounded-badge bg-bg-muted px-2 text-label-small leading-5 text-text-primary tabular-nums">
                  {item.badge}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function DashboardSidebar() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col gap-6 border-r border-border-default bg-bg-surface px-3 py-4 lg:flex">
      <Brand />
      <NavList />
      <div className="mt-auto rounded-card bg-bg-subtle p-4">
        <p className="text-label-medium">팀 플랜 체험 중</p>
        <p className="mt-1 text-caption text-text-secondary">체험 기간이 9일 남았습니다.</p>
        <Button size="sm" className="mt-3 w-full">
          업그레이드
        </Button>
      </div>
    </aside>
  )
}

export function DashboardMobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="메뉴 열기">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 gap-6 px-3 py-4">
        <SheetHeader className="p-0">
          <SheetTitle className="sr-only">메뉴</SheetTitle>
          <Brand />
        </SheetHeader>
        <NavList />
      </SheetContent>
    </Sheet>
  )
}
