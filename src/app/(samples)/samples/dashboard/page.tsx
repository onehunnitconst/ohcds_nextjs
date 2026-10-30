import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDownRightIcon, ArrowLeftIcon, ArrowUpRightIcon, BellIcon, DownloadIcon, SearchIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { channels, dailyRevenue, kpis, orders, type Kpi, type OrderStatus } from "./data"
import { DashboardMobileNav, DashboardSidebar } from "./dashboard-nav"
import { RevenueChart } from "./revenue-chart"

export const metadata: Metadata = { title: "SaaS 대시보드 샘플" }

const won = new Intl.NumberFormat("ko-KR")

const STATUS: Record<OrderStatus, { label: string; intent: "success" | "info" | "warning" | "danger" }> = {
  paid: { label: "결제 완료", intent: "success" },
  shipping: { label: "처리 중", intent: "info" },
  pending: { label: "입금 대기", intent: "warning" },
  refunded: { label: "환불", intent: "danger" },
}

function StatTile({ kpi }: { kpi: Kpi }) {
  const up = kpi.delta >= 0
  const good = up === kpi.upIsGood
  const Arrow = up ? ArrowUpRightIcon : ArrowDownRightIcon
  const delta = `${up ? "+" : "−"}${Math.abs(kpi.delta).toFixed(1)}${kpi.deltaLabel}`

  return (
    <Card className="gap-3">
      <CardHeader>
        <CardDescription className="text-label-medium">{kpi.label}</CardDescription>
        <CardTitle className="text-numeric-large">{kpi.value}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-1.5 text-caption">
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-badge px-1.5 py-0.5 text-label-small tabular-nums",
            good ? "bg-success-subtle text-success-text" : "bg-danger-subtle text-danger-text"
          )}
        >
          <Arrow className="size-3.5" aria-hidden />
          {delta}
        </span>
        <span className="text-text-secondary">지난 30일 대비</span>
      </CardContent>
    </Card>
  )
}

function ChannelCard() {
  const total = channels.reduce((acc, c) => acc + c.revenue, 0)
  const max = Math.max(...channels.map((c) => c.revenue))

  return (
    <Card>
      <CardHeader>
        <CardTitle>채널별 매출</CardTitle>
        <CardDescription>최근 30일</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {channels.map((c) => {
            const share = (c.revenue / total) * 100
            return (
              <li key={c.name} className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="truncate text-body-small">{c.name}</span>
                  <span className="shrink-0 text-numeric-small tabular-nums">
                    ₩{won.format(c.revenue)}
                    <span className="ml-1.5 text-caption text-text-secondary">{share.toFixed(1)}%</span>
                  </span>
                </div>
                <div className="h-2 rounded-r-[4px] bg-primary-500" style={{ width: `${(c.revenue / max) * 100}%` }} aria-hidden />
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}

function OrdersCard() {
  return (
    <Card className="gap-0 pb-0">
      <CardHeader className="pb-4">
        <CardTitle>최근 주문</CardTitle>
        <CardDescription>오늘과 어제 들어온 주문입니다.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            <DownloadIcon data-icon="inline-start" />
            내보내기
          </Button>
        </CardAction>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-card-padding">주문번호</TableHead>
            <TableHead>고객</TableHead>
            <TableHead className="hidden md:table-cell">상품</TableHead>
            <TableHead className="hidden sm:table-cell">주문 일시</TableHead>
            <TableHead className="text-right">금액</TableHead>
            <TableHead className="pr-card-padding">상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((o) => {
            const s = STATUS[o.status]
            return (
              <TableRow key={o.id}>
                <TableCell className="pl-card-padding font-mono text-code-small">{o.id}</TableCell>
                <TableCell className="text-label-medium">{o.customer}</TableCell>
                <TableCell className="hidden text-text-secondary md:table-cell">{o.product}</TableCell>
                <TableCell className="hidden text-text-secondary tabular-nums sm:table-cell">{o.date}</TableCell>
                <TableCell className="text-right tabular-nums">₩{won.format(o.amount)}</TableCell>
                <TableCell className="pr-card-padding">
                  <Badge
                    variant="outline"
                    style={{
                      background: `var(--ohc-${s.intent}-subtle)`,
                      color: `var(--ohc-${s.intent}-text)`,
                      borderColor: `var(--ohc-${s.intent}-border)`,
                    }}
                  >
                    {s.label}
                  </Badge>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}

export default function DashboardSamplePage() {
  return (
    <div className="flex min-h-dvh bg-bg-canvas">
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b border-border-default bg-bg-surface/90 px-page-margin backdrop-blur">
          <DashboardMobileNav />
          <Button asChild variant="ghost" size="sm" className="text-text-secondary">
            <Link href="/samples">
              <ArrowLeftIcon data-icon="inline-start" />
              샘플 목록
            </Link>
          </Button>
          <div className="relative ml-auto hidden w-64 md:block">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-text-disabled" />
            <Input type="search" placeholder="주문, 고객 검색" aria-label="검색" className="pl-8" />
          </div>
          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <Button variant="ghost" size="icon" aria-label="알림">
              <BellIcon />
            </Button>
            <ThemeToggle />
            <Avatar className="ml-1">
              <AvatarFallback>김</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex flex-col gap-gutter px-page-margin py-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-heading-2">대시보드</h1>
            <p className="text-body-small text-text-secondary">2026년 10월 26일 기준 · 최근 30일</p>
          </div>

          <section aria-label="핵심 지표" className="grid grid-cols-2 gap-gutter xl:grid-cols-4">
            {kpis.map((kpi) => (
              <StatTile key={kpi.label} kpi={kpi} />
            ))}
          </section>

          <div className="grid gap-gutter xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RevenueChart data={dailyRevenue} />
            </div>
            <ChannelCard />
          </div>

          <OrdersCard />
        </main>
      </div>
    </div>
  )
}
