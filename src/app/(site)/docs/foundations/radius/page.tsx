import type { Metadata } from "next"
import { DocHeader, DocSection, TokenLabel } from "@/components/docs/doc-page"

export const metadata: Metadata = { title: "모서리 (Radius)" }

const SCALE = [
  { token: "radius/none", value: "0", className: "rounded-none", role: "구분선, 꽉 찬 미디어, 표 셀" },
  { token: "radius/xs", value: "2", className: "rounded-xs", role: "체크박스, 진행 막대" },
  { token: "radius/sm", value: "4", className: "rounded-sm", role: "태그, 작은 버튼" },
  { token: "radius/md", value: "8", className: "rounded-md", role: "버튼, 입력 필드, 셀렉트" },
  { token: "radius/lg", value: "12", className: "rounded-lg", role: "카드, 팝오버, 드롭다운" },
  { token: "radius/xl", value: "16", className: "rounded-xl", role: "다이얼로그, 히어로 카드" },
  { token: "radius/2xl", value: "24", className: "rounded-2xl", role: "모바일 바텀시트 (위쪽 모서리)" },
  { token: "radius/full", value: "9999", className: "rounded-full", role: "배지, 아바타, 토글" },
]

const ROLES = [
  { token: "radius/button", ref: "md", className: "rounded-button" },
  { token: "radius/input", ref: "md", className: "rounded-input" },
  { token: "radius/card", ref: "lg", className: "rounded-card" },
  { token: "radius/badge", ref: "full", className: "rounded-badge" },
  { token: "radius/sheet", ref: "2xl", className: "rounded-sheet" },
  { token: "radius/avatar", ref: "full", className: "rounded-avatar" },
]

export default function RadiusPage() {
  return (
    <>
      <DocHeader
        eyebrow="Foundations / Radius"
        title="모서리 (Radius)"
        description="컨트롤은 md, 컨테이너는 lg, 배지·아바타는 full을 기본으로 씁니다. 컴포넌트에서는 역할 이름(rounded-button 등)을 우선 사용합니다."
      />
      <DocSection title="스케일 (Scale)">
        <div className="grid grid-cols-2 gap-gutter sm:grid-cols-4">
          {SCALE.map((r) => (
            <div key={r.token} className="flex flex-col gap-2">
              <div className={`h-20 border-2 border-primary-solid bg-primary-subtle ${r.className}`} />
              <div className="flex items-baseline justify-between">
                <TokenLabel>{r.token}</TokenLabel>
                <span className="text-caption text-text-disabled tabular-nums">{r.value}px</span>
              </div>
              <span className="text-caption text-text-secondary">{r.role}</span>
            </div>
          ))}
        </div>
      </DocSection>
      <DocSection title="역할 (Role)" description="스케일 값을 컴포넌트 역할에 연결한 별칭입니다.">
        <div className="grid grid-cols-2 gap-gutter sm:grid-cols-3">
          {ROLES.map((r) => (
            <div key={r.token} className="flex items-center gap-3 rounded-card border border-border-default bg-bg-surface p-3">
              <div className={`size-12 shrink-0 border-2 border-primary-solid bg-primary-subtle ${r.className}`} />
              <div className="flex flex-col">
                <TokenLabel>{r.token}</TokenLabel>
                <span className="text-caption text-text-disabled">→ radius/{r.ref}</span>
              </div>
            </div>
          ))}
        </div>
      </DocSection>
    </>
  )
}
