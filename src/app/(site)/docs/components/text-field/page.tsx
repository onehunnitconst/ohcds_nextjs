import type { Metadata } from "next"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = { title: "입력 필드 (Text Field)" }

export default function TextFieldPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Text Field"
        title="입력 필드 (Text Field)"
        description="텍스트를 입력받거나 목록에서 값을 고릅니다. 항상 레이블과 함께 쓰고, 오류는 필드 아래에 문장으로 안내합니다."
      />
      <DocSection title="기본 (Default)">
        <Preview className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="홍길동" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="name@company.com" />
            <span className="text-caption text-text-secondary">업무용 이메일을 입력하세요.</span>
          </div>
        </Preview>
      </DocSection>
      <DocSection title="상태 (State)">
        <Preview className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone">휴대폰 번호</Label>
            <Input id="phone" defaultValue="010-1234" aria-invalid aria-describedby="phone-error" />
            <span id="phone-error" className="text-caption text-danger-text">
              휴대폰 번호 11자리를 입력하세요.
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="company">회사</Label>
            <Input id="company" defaultValue="OHC" disabled />
          </div>
        </Preview>
      </DocSection>
      <DocSection title="셀렉트·여러 줄 입력 (Select & Textarea)">
        <Preview className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="period">기간</Label>
            <Select defaultValue="30d">
              <SelectTrigger id="period" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">최근 7일</SelectItem>
                <SelectItem value="30d">최근 30일</SelectItem>
                <SelectItem value="90d">최근 90일</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="memo">메모</Label>
            <Textarea id="memo" placeholder="내용을 입력하세요" />
          </div>
        </Preview>
      </DocSection>
    </>
  )
}
