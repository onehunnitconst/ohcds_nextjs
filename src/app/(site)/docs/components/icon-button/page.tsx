import type { Metadata } from "next"
import { BellIcon, HeartIcon, MoreHorizontalIcon, SearchIcon, SettingsIcon, Trash2Icon } from "lucide-react"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = { title: "아이콘 버튼 (Icon Button)" }

export default function IconButtonPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Icon Button"
        title="아이콘 버튼 (Icon Button)"
        description="공간이 좁은 툴바·헤더에서 아이콘만으로 동작을 나타냅니다. 화면 낭독기를 위해 aria-label을 반드시 붙입니다."
      />
      <DocSection title="종류 (Variant)">
        <Preview>
          <Button size="icon" aria-label="검색">
            <SearchIcon />
          </Button>
          <Button size="icon" variant="secondary" aria-label="알림">
            <BellIcon />
          </Button>
          <Button size="icon" variant="outline" aria-label="설정">
            <SettingsIcon />
          </Button>
          <Button size="icon" variant="ghost" aria-label="더 보기">
            <MoreHorizontalIcon />
          </Button>
          <Button size="icon" variant="destructive" aria-label="삭제">
            <Trash2Icon />
          </Button>
        </Preview>
      </DocSection>
      <DocSection title="크기 (Size)">
        <Preview>
          <Button size="icon-xs" variant="outline" aria-label="좋아요">
            <HeartIcon />
          </Button>
          <Button size="icon-sm" variant="outline" aria-label="좋아요">
            <HeartIcon />
          </Button>
          <Button size="icon" variant="outline" aria-label="좋아요">
            <HeartIcon />
          </Button>
          <Button size="icon-lg" variant="outline" aria-label="좋아요">
            <HeartIcon />
          </Button>
        </Preview>
      </DocSection>
    </>
  )
}
