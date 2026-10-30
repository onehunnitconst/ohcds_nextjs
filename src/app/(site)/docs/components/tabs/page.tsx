import type { Metadata } from "next"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = { title: "탭 (Tabs)" }

export default function TabsPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Tabs"
        title="탭 (Tabs)"
        description="같은 맥락 안에서 관련된 보기를 전환합니다. 페이지 이동이 필요하면 탭 대신 내비게이션을 씁니다."
      />
      <DocSection title="기본 (Default)" description="기간·보기 전환처럼 좁은 범위의 세그먼트 컨트롤로 씁니다.">
        <Preview className="block">
          <Tabs defaultValue="week">
            <TabsList>
              <TabsTrigger value="day">일간</TabsTrigger>
              <TabsTrigger value="week">주간</TabsTrigger>
              <TabsTrigger value="month">월간</TabsTrigger>
            </TabsList>
            <TabsContent value="day" className="pt-3 text-body-small text-text-secondary">
              오늘 데이터를 보여줍니다.
            </TabsContent>
            <TabsContent value="week" className="pt-3 text-body-small text-text-secondary">
              최근 7일 데이터를 보여줍니다.
            </TabsContent>
            <TabsContent value="month" className="pt-3 text-body-small text-text-secondary">
              최근 30일 데이터를 보여줍니다.
            </TabsContent>
          </Tabs>
        </Preview>
      </DocSection>
      <DocSection title="밑줄형 (Line)" description="페이지 상단에서 큰 콘텐츠 영역을 나눌 때 씁니다.">
        <Preview className="block">
          <Tabs defaultValue="overview">
            <TabsList variant="line">
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="orders">주문</TabsTrigger>
              <TabsTrigger value="settings">설정</TabsTrigger>
            </TabsList>
          </Tabs>
        </Preview>
      </DocSection>
    </>
  )
}
