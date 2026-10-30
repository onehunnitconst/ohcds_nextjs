import Link from "next/link"
import { ArrowRightIcon, TrendingUpIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const MEMBERS = [
  { name: "김하늘", email: "haneul@ohc.kr", role: "관리자" },
  { name: "이도윤", email: "doyun@ohc.kr", role: "편집자" },
  { name: "박서준", email: "seojun@ohc.kr", role: "뷰어" },
]

const NOTIFICATIONS = [
  { id: "push", label: "푸시 알림", description: "주문·결제 상태가 바뀌면 알려드려요.", checked: true },
  { id: "email", label: "이메일 리포트", description: "매주 월요일 지난주 요약을 보내드려요.", checked: true },
  { id: "marketing", label: "마케팅 정보", description: "이벤트와 혜택 소식을 받아요.", checked: false },
]

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center gap-6 px-page-margin pt-16 pb-12 text-center md:pt-24 md:pb-16">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1 rounded-badge bg-bg-subtle px-3 py-1 text-label-medium text-text-primary outline-none transition-colors hover:bg-bg-muted focus-visible:shadow-focus"
        >
          Next.js · Tailwind CSS v4 · shadcn/ui
          <ArrowRightIcon className="size-3.5" />
        </Link>
        <h1 className="max-w-3xl text-display-large text-balance">프로젝트의 출발점이 되는 디자인 시스템</h1>
        <p className="max-w-2xl text-body-large text-balance text-text-secondary">
          앱·웹·대시보드에 바로 쓸 수 있는 토큰과 컴포넌트입니다. 라이트/다크 모드를 지원하고, 브랜드 색상만 바꾸면 어떤
          클라이언트 프로젝트에도 맞출 수 있습니다.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button asChild size="lg">
            <Link href="/docs">시작하기</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/docs/components/button">컴포넌트 보기</Link>
          </Button>
        </div>
      </section>

      <section aria-label="컴포넌트 예시" className="mx-auto w-full max-w-6xl px-page-margin pb-section-gap">
        <div className="grid items-start gap-gutter md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-gutter">
            <Card>
              <CardHeader>
                <CardDescription>이번 달 매출</CardDescription>
                <CardTitle className="text-numeric-large">₩48,210,000</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-1 text-numeric-small text-success-text tabular-nums">
                <TrendingUpIcon className="size-4" />
                지난달보다 12.4% 늘었어요
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>결제 수단</CardTitle>
                <CardDescription>정기 결제에 쓸 수단을 고르세요.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="card">
                  {[
                    { value: "card", label: "신용·체크카드" },
                    { value: "bank", label: "계좌이체" },
                    { value: "phone", label: "휴대폰 결제" },
                  ].map((m) => (
                    <Label
                      key={m.value}
                      htmlFor={`pay-${m.value}`}
                      className="flex items-center gap-3 rounded-md border border-border-default p-3 has-data-[state=checked]:border-primary-border has-data-[state=checked]:bg-primary-subtle"
                    >
                      <RadioGroupItem value={m.value} id={`pay-${m.value}`} />
                      {m.label}
                    </Label>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-gutter">
            <Card>
              <CardHeader>
                <CardTitle>팀 멤버</CardTitle>
                <CardDescription>프로젝트에 참여한 사람들입니다.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {MEMBERS.map((m) => (
                  <div key={m.email} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{m.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="text-label-large">{m.name}</span>
                      <span className="truncate text-caption text-text-secondary">{m.email}</span>
                    </div>
                    <Badge variant="secondary">{m.role}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>방문자</CardTitle>
                <Tabs defaultValue="week" className="pt-2">
                  <TabsList>
                    <TabsTrigger value="day">일간</TabsTrigger>
                    <TabsTrigger value="week">주간</TabsTrigger>
                    <TabsTrigger value="month">월간</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="flex h-28 items-end gap-2" aria-hidden>
                  {[40, 64, 52, 80, 72, 96, 60].map((h, i) => (
                    <div
                      key={i}
                      className={i === 5 ? "flex-1 rounded-t-sm bg-primary-solid" : "flex-1 rounded-t-sm bg-primary-200"}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-gutter md:col-span-2 md:grid md:grid-cols-2 lg:col-span-1 lg:flex">
            <Card>
              <CardHeader>
                <CardTitle>알림 설정</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {NOTIFICATIONS.map((n) => (
                  <div key={n.id} className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-0.5">
                      <Label htmlFor={`noti-${n.id}`}>{n.label}</Label>
                      <span className="text-caption text-text-secondary">{n.description}</span>
                    </div>
                    <Switch id={`noti-${n.id}`} defaultChecked={n.checked} />
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>로그인</CardTitle>
                <CardDescription>업무용 계정으로 로그인하세요.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="home-email">이메일</Label>
                  <Input id="home-email" type="email" placeholder="name@company.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="home-password">비밀번호</Label>
                  <Input id="home-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">로그인</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
