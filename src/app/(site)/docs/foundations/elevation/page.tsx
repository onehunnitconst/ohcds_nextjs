import type { Metadata } from "next"
import { DocHeader, DocSection, TokenLabel } from "@/components/docs/doc-page"

export const metadata: Metadata = { title: "그림자 (Elevation)" }

const LEVELS = [
  {
    token: "Elevation/1",
    className: "shadow-elevation-1",
    spec: "y1 b3 + y1 b2",
    role: "목록 행·입력 필드처럼 배경에서 살짝만 떠야 하는 요소",
  },
  {
    token: "Elevation/2",
    className: "shadow-elevation-2",
    spec: "y6 b16 s-2 + y2 b4",
    role: "카드·패널·대시보드 위젯처럼 콘텐츠를 묶어 배경과 분리하는 표면",
  },
  {
    token: "Elevation/3",
    className: "shadow-elevation-3",
    spec: "y16 b40 s-6 + y4 b10",
    role: "바텀시트·모달·팝오버·토스트처럼 다른 콘텐츠 위에 일시적으로 겹치는 레이어",
  },
]

export default function ElevationPage() {
  return (
    <>
      <DocHeader
        eyebrow="Foundations / Elevation"
        title="그림자 (Elevation)"
        description="표면이 배경에서 얼마나 떠 있는지 3단계로 표현합니다. 다크 모드에서는 그림자 색이 더 진해집니다."
      />
      <DocSection title="단계 (Levels)" description="shadcn의 shadow-sm · shadow-md · shadow-lg도 각각 1·2·3단계를 따릅니다.">
        <div className="grid gap-gutter rounded-card bg-bg-canvas p-6 sm:grid-cols-3">
          {LEVELS.map((e) => (
            <div key={e.token} className={`flex min-h-36 flex-col justify-end gap-1 rounded-card bg-bg-surface p-4 ${e.className}`}>
              <span className="text-title">{e.token}</span>
              <TokenLabel>{e.className}</TokenLabel>
              <span className="text-caption text-text-disabled">{e.spec}</span>
            </div>
          ))}
        </div>
        <ul className="flex flex-col gap-2">
          {LEVELS.map((e) => (
            <li key={e.token} className="flex gap-3 text-body-small">
              <span className="w-24 shrink-0 text-label-medium">{e.token}</span>
              <span className="text-text-secondary">{e.role}</span>
            </li>
          ))}
        </ul>
      </DocSection>
      <DocSection title="포커스 링 (Focus Ring)" description="키보드 포커스 표시용 3px 링입니다. border/focus 색을 씁니다.">
        <div className="flex items-center gap-4 rounded-card border border-border-default bg-bg-surface p-card-padding">
          <div className="h-10 w-40 rounded-md border border-border-strong bg-bg-surface shadow-focus" />
          <TokenLabel>shadow-focus</TokenLabel>
        </div>
      </DocSection>
    </>
  )
}
