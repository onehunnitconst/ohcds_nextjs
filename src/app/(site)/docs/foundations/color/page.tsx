import type { Metadata } from "next"
import { DocHeader, DocSection, TokenLabel } from "@/components/docs/doc-page"

export const metadata: Metadata = { title: "색상 (Color)" }

const PALETTES = ["primary", "secondary", "neutral", "danger", "warning", "info", "success"] as const
const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
const INTENTS = ["primary", "secondary", "danger", "warning", "info", "success"] as const

const SURFACES = [
  { token: "bg/canvas", className: "bg-bg-canvas", role: "페이지 바탕" },
  { token: "bg/surface", className: "bg-bg-surface", role: "카드·패널 표면" },
  { token: "bg/subtle", className: "bg-bg-subtle", role: "호버·보조 영역" },
  { token: "bg/muted", className: "bg-bg-muted", role: "비활성·구분 영역" },
  { token: "bg/inverse", className: "bg-bg-inverse", role: "반전 표면 (툴팁 등)" },
]

const TEXTS = [
  { token: "text/primary", className: "text-text-primary" },
  { token: "text/secondary", className: "text-text-secondary" },
  { token: "text/disabled", className: "text-text-disabled" },
]

const BORDERS = [
  { token: "border/default", className: "border-border-default" },
  { token: "border/strong", className: "border-border-strong" },
  { token: "border/focus", className: "border-border-focus" },
]

export default function ColorPage() {
  return (
    <>
      <DocHeader
        eyebrow="Foundations / Color"
        title="색상 (Color)"
        description="원시 팔레트(Primitive)를 역할별 시맨틱 토큰(Semantic)으로 감싸서 씁니다. 화면에서는 시맨틱 토큰만 사용하면 라이트/다크 모드가 자동으로 맞춰집니다."
      />

      <DocSection
        title="원시 색상 (Primitive)"
        description="역할 이름으로 정한 11단계 팔레트입니다. 클라이언트 브랜드에 맞출 때는 primary 팔레트만 교체합니다."
      >
        <div className="flex flex-col gap-3">
          {PALETTES.map((palette) => (
            <div key={palette} className="grid grid-cols-[80px_1fr] items-center gap-3">
              <span className="text-label-medium text-text-secondary">{palette}</span>
              <div className="grid grid-cols-11 overflow-hidden rounded-md border border-border-default">
                {STEPS.map((step) => (
                  <div
                    key={step}
                    className="h-10"
                    style={{ background: `var(--ohc-${palette}-${step})` }}
                    title={`${palette}/${step}`}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="grid grid-cols-[80px_1fr] gap-3">
            <span />
            <div className="grid grid-cols-11 text-center text-caption text-text-secondary tabular-nums">
              {STEPS.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="배경 (Background)" description="표면의 층위를 나타냅니다.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {SURFACES.map((s) => (
            <div key={s.token} className="flex flex-col gap-1.5">
              <div className={`h-16 rounded-md border border-border-default ${s.className}`} />
              <TokenLabel>{s.token}</TokenLabel>
              <span className="text-caption text-text-secondary">{s.role}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="텍스트·테두리 (Text & Border)">
        <div className="grid gap-gutter md:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-card border border-border-default bg-bg-surface p-card-padding">
            {TEXTS.map((t) => (
              <div key={t.token} className="flex items-baseline justify-between gap-4">
                <span className={`text-body-large ${t.className}`}>다람쥐 헌 쳇바퀴</span>
                <TokenLabel>{t.token}</TokenLabel>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 rounded-md bg-bg-inverse px-3 py-1">
              <span className="text-body-large text-text-inverse">다람쥐 헌 쳇바퀴</span>
              <span className="font-mono text-code-small text-text-inverse">text/inverse</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-card border border-border-default bg-bg-surface p-card-padding">
            {BORDERS.map((b) => (
              <div key={b.token} className="flex items-center justify-between gap-4">
                <div className={`h-10 flex-1 rounded-md border-2 bg-bg-surface ${b.className}`} />
                <TokenLabel>{b.token}</TokenLabel>
              </div>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection
        title="의도별 색상 (Intent)"
        description="각 의도는 solid · solid-hover · on-solid · subtle · subtle-hover · text · border 7개 역할을 가집니다."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {INTENTS.map((intent) => (
            <div
              key={intent}
              className="flex items-center gap-3 rounded-md border p-3"
              style={{ background: `var(--ohc-${intent}-subtle)`, borderColor: `var(--ohc-${intent}-border)` }}
            >
              <span
                className="inline-flex h-8 items-center rounded-md px-3 text-label-medium"
                style={{ background: `var(--ohc-${intent}-solid)`, color: `var(--ohc-${intent}-on-solid)` }}
              >
                solid
              </span>
              <span className="text-label-large" style={{ color: `var(--ohc-${intent}-text)` }}>
                {intent}
              </span>
              <span className="ml-auto font-mono text-code-small" style={{ color: `var(--ohc-${intent}-text)` }}>
                {`${intent}/*`}
              </span>
            </div>
          ))}
        </div>
      </DocSection>
    </>
  )
}
