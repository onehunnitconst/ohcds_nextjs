import { SiteHeader } from "@/components/site-header"

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      {children}
    </div>
  )
}
