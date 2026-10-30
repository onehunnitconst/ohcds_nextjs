import type { Metadata } from "next"
import { ArrowRightIcon, Loader2Icon, PlusIcon } from "lucide-react"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = { title: "버튼 (Button)" }

export default function ButtonPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Button"
        title="버튼 (Button)"
        description="사용자가 동작을 실행하게 하는 기본 컨트롤입니다. 한 화면의 가장 중요한 동작 하나에만 기본(primary) 버튼을 씁니다."
      />
      <DocSection title="종류 (Variant)" description="강조 순서: default → secondary → outline → ghost. destructive는 되돌리기 어려운 동작에만 씁니다.">
        <Preview>
          <Button>기본</Button>
          <Button variant="secondary">보조</Button>
          <Button variant="outline">외곽선</Button>
          <Button variant="ghost">고스트</Button>
          <Button variant="destructive">삭제</Button>
          <Button variant="link">링크</Button>
        </Preview>
      </DocSection>
      <DocSection title="크기 (Size)">
        <Preview>
          <Button size="xs">아주 작게</Button>
          <Button size="sm">작게</Button>
          <Button>기본</Button>
          <Button size="lg">크게</Button>
        </Preview>
      </DocSection>
      <DocSection title="아이콘 (With Icon)">
        <Preview>
          <Button>
            <PlusIcon data-icon="inline-start" />
            새로 만들기
          </Button>
          <Button variant="outline">
            다음
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </Preview>
      </DocSection>
      <DocSection title="상태 (State)">
        <Preview>
          <Button disabled>비활성</Button>
          <Button disabled>
            <Loader2Icon data-icon="inline-start" className="animate-spin" />
            저장 중
          </Button>
        </Preview>
      </DocSection>
    </>
  )
}
