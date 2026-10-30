import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { FinanceApp } from "./finance-app"

export const metadata: Metadata = { title: "모바일 금융 앱 샘플" }

export default function FinanceSamplePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg-subtle">
      {/* 데스크톱에서만 보이는 바깥 도구 막대. 모바일에서는 앱이 화면 전체를 쓴다. */}
      <header className="hidden h-14 items-center justify-between px-page-margin md:flex">
        <Button asChild variant="ghost" size="sm" className="text-text-secondary">
          <Link href="/samples">
            <ArrowLeftIcon data-icon="inline-start" />
            샘플 목록
          </Link>
        </Button>
        <ThemeToggle />
      </header>

      <main className="flex flex-1 items-center justify-center md:gap-16 md:pb-10">
        <div className="hidden max-w-xs flex-col gap-3 xl:flex">
          <p className="text-overline text-primary-text">SAMPLE</p>
          <h1 className="text-heading-1">모바일 금융 앱</h1>
          <p className="text-body-medium text-text-secondary">
            잔액 카드, 지출 예산 미터, 거래 내역 리스트, 바텀시트, 숫자 키패드로 구성한 화면입니다.
          </p>
          <ul className="flex flex-col gap-1.5 text-body-small text-text-secondary">
            <li>· 송금 버튼을 누르면 키패드 바텀시트가 열립니다.</li>
            <li>· 거래 내역을 누르면 상세 바텀시트가 열립니다.</li>
            <li>· 금액 숨기기로 잔액을 가릴 수 있습니다.</li>
          </ul>
        </div>
        <FinanceApp />
      </main>
    </div>
  )
}
