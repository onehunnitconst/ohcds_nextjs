import { cn } from "@/lib/utils"

export function DocHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="flex flex-col gap-2 border-b border-border-default pb-8">
      <p className="text-caption text-text-secondary">{eyebrow}</p>
      <h1 className="text-heading-1 text-text-primary">{title}</h1>
      <p className="max-w-2xl text-body-large text-text-secondary">{description}</p>
    </header>
  )
}

export function DocSection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-stack-gap">
      <div className="flex flex-col gap-1">
        <h2 className="text-heading-3 text-text-primary">{title}</h2>
        {description && <p className="text-body-medium text-text-secondary">{description}</p>}
      </div>
      {children}
    </section>
  )
}

/** 컴포넌트 예시를 담는 미리보기 영역 */
export function Preview({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 rounded-card border border-border-default bg-bg-surface p-card-padding",
        className
      )}
    >
      {children}
    </div>
  )
}

export function TokenLabel({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-code-small text-text-secondary">{children}</span>
}
