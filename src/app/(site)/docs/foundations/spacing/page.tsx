import type { Metadata } from "next"
import { DocHeader, DocSection, TokenLabel } from "@/components/docs/doc-page"

export const metadata: Metadata = { title: "간격 (Spacing)" }

const SPACES = [2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

const LAYOUT = [
  { token: "layout/page-margin", className: "px-page-margin", value: "16 / 32", role: "화면 좌우 바깥 여백" },
  { token: "layout/gutter", className: "gap-gutter", value: "16 / 24", role: "그리드 컬럼·카드 사이 간격" },
  { token: "layout/section-gap", className: "gap-section-gap", value: "32 / 64", role: "페이지 안 큰 섹션 사이 간격" },
  { token: "layout/stack-gap", className: "gap-stack-gap", value: "12 / 16", role: "섹션 안 요소를 세로로 쌓을 때 기본 간격" },
  { token: "layout/card-padding", className: "p-card-padding", value: "16 / 24", role: "카드·패널 안쪽 여백" },
]

export default function SpacingPage() {
  return (
    <>
      <DocHeader
        eyebrow="Foundations / Spacing"
        title="간격 (Spacing)"
        description="4px 기반 스케일입니다. Tailwind 숫자 유틸리티와 그대로 맞아떨어집니다(p-4 = space/16)."
      />
      <DocSection title="스케일 (Scale)">
        <div className="flex flex-col gap-2 rounded-card border border-border-default bg-bg-surface p-card-padding">
          {SPACES.map((s) => (
            <div key={s} className="grid grid-cols-[80px_56px_1fr] items-center gap-3">
              <TokenLabel>space/{s}</TokenLabel>
              <span className="text-caption text-text-disabled tabular-nums">p-{s / 4}</span>
              <div className="h-3 rounded-xs bg-primary-400" style={{ width: `var(--ohc-space-${s})` }} />
            </div>
          ))}
        </div>
      </DocSection>
      <DocSection title="레이아웃 (Layout)" description="Mobile / Desktop 값이 48rem(768px)을 기준으로 바뀝니다.">
        <div className="overflow-hidden rounded-card border border-border-default bg-bg-surface">
          {LAYOUT.map((l) => (
            <div
              key={l.token}
              className="grid gap-1 border-b border-border-default px-card-padding py-3 last:border-b-0 sm:grid-cols-[200px_140px_80px_1fr] sm:items-baseline sm:gap-3"
            >
              <TokenLabel>{l.token}</TokenLabel>
              <span className="font-mono text-code-small text-primary-text">{l.className}</span>
              <span className="text-caption text-text-disabled tabular-nums">{l.value}</span>
              <span className="text-body-small text-text-secondary">{l.role}</span>
            </div>
          ))}
        </div>
      </DocSection>
    </>
  )
}
