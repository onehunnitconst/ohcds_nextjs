"use client"

import { useState } from "react"
import {
  ArrowDownLeftIcon,
  ArrowLeftRightIcon,
  ArrowRightLeftIcon,
  BellIcon,
  BusIcon,
  ChevronRightIcon,
  CoffeeIcon,
  EyeIcon,
  EyeOffIcon,
  FilmIcon,
  GiftIcon,
  HouseIcon,
  LayoutGridIcon,
  type LucideIcon,
  PiggyBankIcon,
  ReceiptIcon,
  SendIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
  UtensilsIcon,
  WalletIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BottomSheet } from "./bottom-sheet"
import {
  accounts,
  CATEGORY_LABEL,
  type Category,
  dateLabel,
  signedWon,
  spending,
  totalAssets,
  type Transaction,
  transactions,
  won,
} from "./data"
import { SendMoneySheet } from "./send-money-sheet"

const CATEGORY_ICON: Record<Category, LucideIcon> = {
  food: UtensilsIcon,
  cafe: CoffeeIcon,
  transport: BusIcon,
  shopping: ShoppingBagIcon,
  culture: FilmIcon,
  income: ArrowDownLeftIcon,
  transfer: ArrowRightLeftIcon,
}

const QUICK_ACTIONS = [
  { title: "송금", icon: SendIcon, action: "send" },
  { title: "결제", icon: ReceiptIcon },
  { title: "환전", icon: ArrowLeftRightIcon },
  { title: "투자", icon: TrendingUpIcon },
] as const

const TABS = [
  { title: "홈", icon: HouseIcon, active: true },
  { title: "혜택", icon: GiftIcon },
  { title: "자산", icon: WalletIcon },
  { title: "저축", icon: PiggyBankIcon },
  { title: "전체", icon: LayoutGridIcon },
]

function CategoryIcon({ category }: { category: Category }) {
  const Icon = CATEGORY_ICON[category]
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full",
        category === "income" ? "bg-primary-subtle text-primary-text" : "bg-bg-subtle text-text-secondary"
      )}
    >
      <Icon className="size-5" />
    </span>
  )
}

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn("rounded-card bg-bg-surface p-5", className)}>{children}</section>
}

export function FinanceApp() {
  const [frame, setFrame] = useState<HTMLDivElement | null>(null)
  const [hidden, setHidden] = useState(false)
  const [sendOpen, setSendOpen] = useState(false)
  const [selected, setSelected] = useState<Transaction | null>(null)

  const main = accounts[0]
  const spentRatio = spending.total / spending.budget
  const grouped = Object.entries(
    transactions.reduce<Record<string, Transaction[]>>((acc, t) => {
      ;(acc[t.date] ??= []).push(t)
      return acc
    }, {})
  )

  const money = (value: number) => (hidden ? "••••••원" : `${won.format(value)}원`)

  return (
    <div
      ref={setFrame}
      className="relative isolate flex h-dvh w-full flex-col overflow-hidden bg-bg-canvas md:h-[844px] md:w-[390px] md:rounded-[48px] md:border-[10px] md:border-neutral-900 md:shadow-elevation-3 dark:md:border-neutral-700"
    >
      <div className="flex-1 overflow-y-auto pb-24">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between bg-bg-canvas/90 px-5 backdrop-blur md:pt-2">
          <span className="flex items-center gap-2">
            <span className="size-6 rounded-md bg-primary-solid" aria-hidden />
            <span className="text-title">OHC 뱅크</span>
          </span>
          <Button variant="ghost" size="icon" aria-label="알림 3개" className="relative">
            <BellIcon />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-danger-solid ring-2 ring-bg-canvas" />
          </Button>
        </header>

        <div className="flex flex-col gap-3 px-4 pt-2">
          <Section>
            <div className="flex items-center justify-between">
              <span className="text-label-medium text-text-secondary">총 자산</span>
              <button
                type="button"
                onClick={() => setHidden((h) => !h)}
                aria-pressed={hidden}
                className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-caption text-text-secondary outline-none hover:bg-bg-subtle focus-visible:shadow-focus"
              >
                {hidden ? <EyeIcon className="size-3.5" /> : <EyeOffIcon className="size-3.5" />}
                {hidden ? "금액 보기" : "금액 숨기기"}
              </button>
            </div>
            <p className="mt-1 text-display-medium">{money(totalAssets)}</p>
            <p className="text-caption text-text-secondary">계좌 {accounts.length}개 · 10월 26일 기준</p>
          </Section>

          <Section className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-label-medium">{main.name}</span>
                <span className="text-caption text-text-secondary tabular-nums">{main.number}</span>
              </div>
              <ChevronRightIcon className="size-5 text-text-disabled" />
            </div>
            <p className="text-numeric-large">{money(main.balance)}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary" size="lg">
                채우기
              </Button>
              <Button size="lg" onClick={() => setSendOpen(true)}>
                송금
              </Button>
            </div>
          </Section>

          <Section className="grid grid-cols-4 gap-2 py-4">
            {QUICK_ACTIONS.map((q) => (
              <button
                key={q.title}
                type="button"
                onClick={"action" in q ? () => setSendOpen(true) : undefined}
                className="flex flex-col items-center gap-1.5 rounded-md py-2 outline-none transition-colors hover:bg-bg-subtle focus-visible:shadow-focus"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-primary-subtle text-primary-text">
                  <q.icon className="size-5" />
                </span>
                <span className="text-label-medium">{q.title}</span>
              </button>
            ))}
          </Section>

          <Section className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <h2 className="text-label-large">{spending.month} 지출</h2>
              <span className="text-caption text-text-secondary">예산 {won.format(spending.budget)}원</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-numeric-large">{money(spending.total)}</p>
              <div
                role="meter"
                aria-label="예산 사용률"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(spentRatio * 100)}
                className="h-2 overflow-hidden rounded-full bg-primary-subtle-hover"
              >
                <div
                  className={cn("h-full rounded-full", spentRatio > 0.9 ? "bg-danger-solid" : spentRatio > 0.75 ? "bg-warning-solid" : "bg-primary-500")}
                  style={{ width: `${Math.min(spentRatio, 1) * 100}%` }}
                />
              </div>
              <p className="text-caption text-text-secondary">
                예산의 {Math.round(spentRatio * 100)}%를 썼어요 · {won.format(spending.budget - spending.total)}원 남음
              </p>
            </div>
            <ul className="flex flex-col gap-3 border-t border-border-default pt-4">
              {spending.top.map((s) => (
                <li key={s.category} className="flex items-center gap-3">
                  <CategoryIcon category={s.category} />
                  <span className="flex-1 text-body-medium">{CATEGORY_LABEL[s.category]}</span>
                  <span className="text-numeric-medium tabular-nums">{money(s.amount)}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section className="px-0 pb-2">
            <h2 className="px-5 text-label-large">최근 거래</h2>
            {grouped.map(([date, rows]) => (
              <div key={date} className="mt-3">
                <p className="px-5 pb-1 text-caption text-text-secondary">{dateLabel(date)}</p>
                <ul>
                  {rows.map((t) => (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => setSelected(t)}
                        className="flex w-full items-center gap-3 px-5 py-2.5 text-left outline-none transition-colors hover:bg-bg-subtle focus-visible:bg-bg-subtle"
                      >
                        <CategoryIcon category={t.category} />
                        <span className="flex min-w-0 flex-1 flex-col">
                          <span className="truncate text-body-medium">{t.merchant}</span>
                          <span className="text-caption text-text-secondary">
                            {t.time} · {CATEGORY_LABEL[t.category]}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "text-numeric-medium tabular-nums",
                            t.amount > 0 ? "text-primary-text" : "text-text-primary"
                          )}
                        >
                          {hidden ? "••••원" : signedWon(t.amount)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>
        </div>
      </div>

      <nav
        aria-label="하단 탭"
        className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-border-default bg-bg-surface/95 px-2 pt-2 pb-[max(env(safe-area-inset-bottom),12px)] backdrop-blur md:pb-5"
      >
        {TABS.map((tab) => (
          <button
            key={tab.title}
            type="button"
            aria-current={tab.active ? "page" : undefined}
            className={cn(
              "flex flex-col items-center gap-1 rounded-md py-1 text-label-small outline-none focus-visible:shadow-focus",
              tab.active ? "text-text-primary" : "text-text-disabled"
            )}
          >
            <tab.icon className="size-6" />
            {tab.title}
          </button>
        ))}
      </nav>

      <SendMoneySheet open={sendOpen} onOpenChange={setSendOpen} container={frame} />

      <BottomSheet
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
        container={frame}
        title={selected?.merchant ?? "거래 상세"}
        hideHeader
      >
        {selected && (
          <div className="flex flex-col gap-5 pb-2">
            <div className="flex flex-col items-center gap-2 pt-2 text-center">
              <CategoryIcon category={selected.category} />
              <p className="text-body-medium text-text-secondary">{selected.merchant}</p>
              <p className={cn("text-display-medium", selected.amount > 0 && "text-primary-text")}>{signedWon(selected.amount)}</p>
            </div>
            <dl className="flex flex-col gap-3 rounded-card bg-bg-subtle p-4 text-body-small">
              {[
                ["거래 일시", `${selected.date.replaceAll("-", ".")} ${selected.time}`],
                ["카테고리", CATEGORY_LABEL[selected.category]],
                [selected.amount > 0 ? "보낸 곳" : "결제 수단", selected.method],
                ["승인 번호", selected.approval],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-text-secondary">{label}</dt>
                  <dd className="text-right tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary" size="lg">
                카테고리 변경
              </Button>
              <Button size="lg" onClick={() => setSelected(null)}>
                확인
              </Button>
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  )
}
