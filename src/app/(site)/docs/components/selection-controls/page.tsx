import type { Metadata } from "next"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export const metadata: Metadata = { title: "선택 컨트롤 (Selection Controls)" }

export default function SelectionControlsPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Selection Controls"
        title="선택 컨트롤 (Selection Controls)"
        description="여러 개를 고를 때는 체크박스, 하나만 고를 때는 라디오, 즉시 켜고 끄는 설정에는 스위치를 씁니다."
      />
      <DocSection title="체크박스 (Checkbox)">
        <Preview className="flex-col items-start">
          <div className="flex items-center gap-2">
            <Checkbox id="c1" defaultChecked />
            <Label htmlFor="c1">이용약관 동의 (필수)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="c2" />
            <Label htmlFor="c2">마케팅 정보 수신 동의 (선택)</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="c3" disabled />
            <Label htmlFor="c3">비활성</Label>
          </div>
        </Preview>
      </DocSection>
      <DocSection title="라디오 (Radio)">
        <Preview>
          <RadioGroup defaultValue="card">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="card" id="r1" />
              <Label htmlFor="r1">신용·체크카드</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="bank" id="r2" />
              <Label htmlFor="r2">계좌이체</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="phone" id="r3" disabled />
              <Label htmlFor="r3">휴대폰 결제 (준비 중)</Label>
            </div>
          </RadioGroup>
        </Preview>
      </DocSection>
      <DocSection title="스위치 (Switch)">
        <Preview className="flex-col items-stretch">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="s1">푸시 알림</Label>
            <Switch id="s1" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="s2">이메일 알림</Label>
            <Switch id="s2" />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="s3">SMS 알림</Label>
            <Switch id="s3" disabled />
          </div>
        </Preview>
      </DocSection>
    </>
  )
}
