import type { Metadata } from "next"
import { DocHeader, DocSection, TokenLabel } from "@/components/docs/doc-page"

export const metadata: Metadata = { title: "타이포그래피 (Typography)" }

const GROUPS = [
  {
    title: "제목 (Display & Heading)",
    description: "48rem(768px) 이상에서 Desktop 크기로 커집니다.",
    styles: [
      { name: "Display/Large", className: "text-display-large", spec: "36/46 → 48/60 · Bold", sample: "오늘의 지표" },
      { name: "Display/Medium", className: "text-display-medium", spec: "32/42 → 40/52 · Bold", sample: "오늘의 지표" },
      { name: "Heading/H1", className: "text-heading-1", spec: "28/38 → 32/42 · Bold", sample: "페이지 제목" },
      { name: "Heading/H2", className: "text-heading-2", spec: "22/30 → 24/32 · Bold", sample: "섹션 제목" },
      { name: "Heading/H3", className: "text-heading-3", spec: "17/24 → 20/28 · SemiBold", sample: "카드·패널 제목" },
    ],
  },
  {
    title: "본문 (Title & Body)",
    styles: [
      { name: "Title", className: "text-title", spec: "15/22 · SemiBold", sample: "리스트 항목 제목" },
      { name: "Body/Large", className: "text-body-large", spec: "17/28 · Regular", sample: "읽기 중심의 긴 본문에 쓰는 크기입니다." },
      { name: "Body/Medium", className: "text-body-medium", spec: "15/24 · Regular", sample: "기본 본문에 쓰는 크기입니다." },
      { name: "Body/Small", className: "text-body-small", spec: "13/20 · Regular", sample: "대시보드 표와 보조 설명에 씁니다." },
    ],
  },
  {
    title: "레이블 (Label & Caption)",
    styles: [
      { name: "Label/Large", className: "text-label-large", spec: "15/20 · SemiBold", sample: "버튼 레이블" },
      { name: "Label/Medium", className: "text-label-medium", spec: "13/18 · Medium", sample: "입력 필드 레이블" },
      { name: "Label/Small", className: "text-label-small", spec: "11/14 · Medium", sample: "작은 레이블" },
      { name: "Caption", className: "text-caption", spec: "12/16 · Regular", sample: "캡션 · 2026.10.26 업데이트" },
      { name: "Overline", className: "text-overline", spec: "11/14 · SemiBold · +2%", sample: "OVERLINE" },
    ],
  },
  {
    title: "숫자·코드 (Numeric & Code)",
    description: "숫자 스타일은 tabular-nums와 함께 써서 자릿수를 맞춥니다.",
    styles: [
      { name: "Numeric/Large", className: "text-numeric-large tabular-nums", spec: "28/36 · Bold", sample: "₩12,480,000" },
      { name: "Numeric/Medium", className: "text-numeric-medium tabular-nums", spec: "15/20 · Medium", sample: "1,234.56" },
      { name: "Numeric/Small", className: "text-numeric-small tabular-nums", spec: "13/20 · Medium", sample: "+12.4%" },
      { name: "Code/Medium", className: "font-mono text-code-medium", spec: "14/22 · JetBrains Mono", sample: "const ohc = tokens()" },
      { name: "Code/Small", className: "font-mono text-code-small", spec: "12/18 · JetBrains Mono", sample: "--ohc-primary-solid" },
    ],
  },
]

export default function TypographyPage() {
  return (
    <>
      <DocHeader
        eyebrow="Foundations / Typography"
        title="타이포그래피 (Typography)"
        description="Pretendard 기반의 텍스트 스타일입니다. 클래스 하나로 크기·행간·굵기·자간이 함께 적용됩니다. 예: text-heading-1"
      />
      {GROUPS.map((group) => (
        <DocSection key={group.title} title={group.title} description={group.description}>
          <div className="flex flex-col divide-y divide-border-default rounded-card border border-border-default bg-bg-surface px-card-padding">
            {group.styles.map((t) => (
              <div key={t.name} className="grid items-baseline gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-4">
                <div className="flex flex-col">
                  <TokenLabel>{t.name}</TokenLabel>
                  <span className="text-caption text-text-disabled">{t.spec}</span>
                </div>
                <span className={`truncate ${t.className}`}>{t.sample}</span>
              </div>
            ))}
          </div>
        </DocSection>
      ))}
    </>
  )
}
