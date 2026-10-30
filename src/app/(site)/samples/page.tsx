import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon, LayoutDashboardIcon, SettingsIcon, SmartphoneIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = { title: "샘플 (Samples)" }

const SAMPLES = [
  {
    title: "SaaS 대시보드",
    description: "사이드바, KPI 카드, 차트, 데이터 테이블로 구성한 관리자 화면",
    icon: LayoutDashboardIcon,
    href: "/samples/dashboard",
  },
  {
    title: "설정 페이지",
    description: "입력 필드·선택 컨트롤·스위치를 모두 쓰는 계정 설정 화면",
    icon: SettingsIcon,
  },
  {
    title: "모바일 금융 앱",
    description: "잔액 카드, 거래 내역 리스트, 바텀시트로 구성한 모바일 화면",
    icon: SmartphoneIcon,
    href: "/samples/finance",
  },
] satisfies { title: string; description: string; icon: typeof LayoutDashboardIcon; href?: string }[]

export default function SamplesPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-section-gap px-page-margin py-12">
      <header className="flex flex-col gap-2">
        <p className="text-caption text-text-secondary">Samples</p>
        <h1 className="text-heading-1">샘플 (Samples)</h1>
        <p className="max-w-2xl text-body-large text-text-secondary">
          OHC 디자인 시스템으로 만든 실제 화면 예시입니다. 컴포넌트를 조합했을 때의 밀도와 위계를 확인할 수 있습니다.
        </p>
      </header>
      <div className="grid gap-gutter md:grid-cols-3">
        {SAMPLES.map((s) => {
          const card = (
            <Card className={s.href ? "h-full transition-colors group-hover:border-primary-border" : "h-full"}>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-md bg-primary-subtle text-primary-text">
                    <s.icon className="size-5" />
                  </span>
                  {s.href ? (
                    <ArrowRightIcon className="size-4 text-text-disabled transition-colors group-hover:text-primary-text" />
                  ) : (
                    <Badge variant="secondary">준비 중</Badge>
                  )}
                </div>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.description}</CardDescription>
              </CardHeader>
            </Card>
          )
          return s.href ? (
            <Link key={s.title} href={s.href} className="group rounded-card outline-none focus-visible:shadow-focus">
              {card}
            </Link>
          ) : (
            <div key={s.title}>{card}</div>
          )
        })}
      </div>
    </main>
  )
}
