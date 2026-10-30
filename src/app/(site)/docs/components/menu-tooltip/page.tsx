import type { Metadata } from "next"
import { CopyIcon, MoreHorizontalIcon, PencilIcon, Trash2Icon } from "lucide-react"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export const metadata: Metadata = { title: "메뉴·툴팁 (Menu & Tooltip)" }

export default function MenuTooltipPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Menu & Tooltip"
        title="메뉴·툴팁 (Menu & Tooltip)"
        description="메뉴는 공간을 아끼려고 동작을 접어 둘 때, 툴팁은 아이콘 버튼처럼 이름이 보이지 않는 요소를 설명할 때 씁니다."
      />
      <DocSection title="드롭다운 메뉴 (Dropdown Menu)">
        <Preview>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                작업
                <MoreHorizontalIcon data-icon="inline-end" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>프로젝트</DropdownMenuLabel>
              <DropdownMenuItem>
                <PencilIcon />
                이름 바꾸기
                <DropdownMenuShortcut>F2</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                복제
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                삭제
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Preview>
      </DocSection>
      <DocSection title="툴팁 (Tooltip)" description="툴팁은 bg/inverse 표면을 씁니다.">
        <Preview>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" aria-label="복사">
                <CopyIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>클립보드에 복사</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" aria-label="수정">
                <PencilIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">수정</TooltipContent>
          </Tooltip>
        </Preview>
      </DocSection>
    </>
  )
}
