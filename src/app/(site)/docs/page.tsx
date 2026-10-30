import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { docsNav } from "@/lib/docs-nav"

export default function OverviewPage() {
  const groups = docsNav.filter((group) => group.title !== "시작하기")

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-overline text-primary-text">OHC DESIGN SYSTEM</p>
        <h1 className="text-display-medium">개요 (Overview)</h1>
        <p className="max-w-2xl text-body-large text-text-secondary">
          클라이언트에게 별도 디자인 시스템이 없을 때 기본으로 쓰는 디자인 시스템입니다. Figma 파일
          (ohcds 저장소의 figcraft/design_system.figcraft)의 토큰을 <code className="font-mono text-code-medium">--ohc-*</code> CSS 변수로
          옮기고, shadcn/ui 컴포넌트가 이 토큰을 따르도록 연결했습니다.
        </p>
      </div>

      {groups.map((group) => (
        <section key={group.title} className="flex flex-col gap-stack-gap">
          <h2 className="text-heading-3">{group.title}</h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-3 rounded-card border border-border-default bg-bg-surface p-4 shadow-elevation-1 outline-none transition-colors hover:border-primary-border focus-visible:shadow-focus"
              >
                <div className="flex flex-col">
                  <span className="text-title">{item.title}</span>
                  <span className="text-caption text-text-secondary">{item.en}</span>
                </div>
                <ArrowRightIcon className="size-4 text-text-disabled transition-colors group-hover:text-primary-text" />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
