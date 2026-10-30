import type { Metadata } from "next"
import { CheckIcon } from "lucide-react"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = { title: "배지·태그 (Badge & Tag)" }

const STATUS = [
  { label: "완료", intent: "success" },
  { label: "진행 중", intent: "info" },
  { label: "검토 필요", intent: "warning" },
  { label: "실패", intent: "danger" },
  { label: "신규", intent: "secondary" },
] as const

export default function BadgePage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Badge & Tag"
        title="배지·태그 (Badge & Tag)"
        description="상태나 분류를 짧게 표시합니다. 클릭할 수 없는 정보 표시용이며, 모서리는 radius/badge(full)를 씁니다."
      />
      <DocSection title="종류 (Variant)">
        <Preview>
          <Badge>기본</Badge>
          <Badge variant="secondary">보조</Badge>
          <Badge variant="outline">외곽선</Badge>
          <Badge variant="ghost">고스트</Badge>
          <Badge variant="destructive">오류</Badge>
          <Badge>
            <CheckIcon data-icon="inline-start" />
            인증됨
          </Badge>
        </Preview>
      </DocSection>
      <DocSection title="상태 배지 (Status)" description="의도별 subtle · text · border 토큰을 조합한 상태 표시입니다.">
        <Preview>
          {STATUS.map((s) => (
            <Badge
              key={s.label}
              variant="outline"
              style={{
                background: `var(--ohc-${s.intent}-subtle)`,
                color: `var(--ohc-${s.intent}-text)`,
                borderColor: `var(--ohc-${s.intent}-border)`,
              }}
            >
              {s.label}
            </Badge>
          ))}
        </Preview>
      </DocSection>
    </>
  )
}
