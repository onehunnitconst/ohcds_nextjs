import { DocsNavList } from "@/components/docs/docs-nav-list"

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="flex flex-1">
      <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-border-default bg-bg-surface px-3 py-6 lg:block">
        <DocsNavList />
      </aside>
      <main className="min-w-0 flex-1">
        <div className="mx-auto flex max-w-4xl flex-col gap-section-gap px-page-margin py-10 lg:py-12">{children}</div>
      </main>
    </div>
  )
}
