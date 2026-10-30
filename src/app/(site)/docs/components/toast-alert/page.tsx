import type { Metadata } from "next"
import { CircleAlertIcon, InfoIcon } from "lucide-react"
import { ToastDemo } from "./toast-demo"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = { title: "토스트·알림 (Toast & Alert)" }

export default function ToastAlertPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Toast & Alert"
        title="토스트·알림 (Toast & Alert)"
        description="토스트는 방금 한 동작의 결과를 잠깐 알리고 사라집니다. 알림(Alert)은 화면에 머물면서 꼭 알아야 할 내용을 전달합니다."
      />
      <DocSection title="토스트 (Toast)" description="버튼을 눌러 화면 아래에 나타나는 토스트를 확인하세요.">
        <Preview>
          <ToastDemo />
        </Preview>
      </DocSection>
      <DocSection title="알림 (Alert)">
        <div className="flex flex-col gap-3">
          <Alert>
            <InfoIcon />
            <AlertTitle>정기 점검 안내</AlertTitle>
            <AlertDescription>10월 30일 오전 2시부터 4시까지 일부 기능을 쓸 수 없습니다.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <CircleAlertIcon />
            <AlertTitle>결제에 실패했습니다</AlertTitle>
            <AlertDescription>카드 유효기간을 확인한 뒤 다시 시도하세요.</AlertDescription>
          </Alert>
        </div>
      </DocSection>
    </>
  )
}
