import type { Metadata } from "next"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"

export const metadata: Metadata = { title: "아바타 (Avatar)" }

const PEOPLE = ["김하늘", "이도윤", "박서준", "최유나"]

export default function AvatarPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Avatar"
        title="아바타 (Avatar)"
        description="사람이나 팀을 나타냅니다. 이미지가 없으면 이름의 첫 글자를 보여주고, 모서리는 radius/avatar(full)를 씁니다."
      />
      <DocSection title="크기 (Size)">
        <Preview>
          <Avatar size="sm">
            <AvatarFallback>김</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>김</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>김</AvatarFallback>
          </Avatar>
        </Preview>
      </DocSection>
      <DocSection title="그룹 (Group)" description="여러 사람을 겹쳐 보여주고, 넘치는 인원은 숫자로 줄입니다.">
        <Preview>
          <AvatarGroup>
            {PEOPLE.map((p) => (
              <Avatar key={p}>
                <AvatarFallback>{p.slice(0, 1)}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
        </Preview>
      </DocSection>
    </>
  )
}
