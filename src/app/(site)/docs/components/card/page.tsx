import type { Metadata } from "next"
import { ChevronRightIcon, MoreHorizontalIcon, TrendingUpIcon } from "lucide-react"
import { DocHeader, DocSection } from "@/components/docs/doc-page"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = { title: "카드·리스트 (Card & List)" }

const MEMBERS = [
  { name: "김하늘", role: "프로덕트 디자이너", status: "온라인" },
  { name: "이도윤", role: "프론트엔드 개발자", status: "자리 비움" },
  { name: "박서준", role: "백엔드 개발자", status: "온라인" },
]

export default function CardPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Card & List"
        title="카드·리스트 (Card & List)"
        description="관련된 정보를 하나의 표면으로 묶습니다. 카드는 radius/card(lg)와 layout/card-padding을 씁니다."
      />
      <DocSection title="카드 (Card)">
        <div className="grid gap-gutter md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>이번 달 매출</CardTitle>
              <CardDescription>2026년 10월 1일 – 26일</CardDescription>
              <CardAction>
                <Button variant="ghost" size="icon-sm" aria-label="더 보기">
                  <MoreHorizontalIcon />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="flex items-end justify-between gap-3">
              <span className="text-numeric-large tabular-nums">₩48,210,000</span>
              <span className="flex items-center gap-1 text-numeric-small text-success-text tabular-nums">
                <TrendingUpIcon className="size-4" />
                +12.4%
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>플랜 업그레이드</CardTitle>
              <CardDescription>팀 플랜으로 바꾸면 멤버를 무제한으로 초대할 수 있습니다.</CardDescription>
            </CardHeader>
            <CardFooter className="gap-2">
              <Button>업그레이드</Button>
              <Button variant="ghost">나중에</Button>
            </CardFooter>
          </Card>
        </div>
      </DocSection>
      <DocSection title="리스트 (List)" description="카드 안에 행을 쌓을 때는 행 사이를 border/default로 구분합니다.">
        <Card className="py-0">
          <ul className="divide-y divide-border-default">
            {MEMBERS.map((m) => (
              <li key={m.name}>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-card-padding py-3 text-left outline-none transition-colors hover:bg-bg-subtle focus-visible:bg-bg-subtle"
                >
                  <Avatar>
                    <AvatarFallback>{m.name.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-title">{m.name}</span>
                    <span className="text-body-small text-text-secondary">{m.role}</span>
                  </div>
                  <Badge variant="secondary">{m.status}</Badge>
                  <ChevronRightIcon className="size-4 text-text-disabled" />
                </button>
              </li>
            ))}
          </ul>
        </Card>
      </DocSection>
    </>
  )
}
