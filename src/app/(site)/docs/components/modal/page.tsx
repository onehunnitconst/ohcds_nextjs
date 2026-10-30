import type { Metadata } from "next"
import { DocHeader, DocSection, Preview } from "@/components/docs/doc-page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export const metadata: Metadata = { title: "모달·바텀시트 (Modal & Bottom Sheet)" }

export default function ModalPage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Modal & Bottom Sheet"
        title="모달·바텀시트 (Modal & Bottom Sheet)"
        description="현재 흐름을 잠시 멈추고 확인이나 입력을 받습니다. 배경은 bg/overlay로 덮고, 표면은 Elevation/3을 씁니다."
      />
      <DocSection title="다이얼로그 (Dialog)" description="데스크톱에서 확인·경고를 받을 때 씁니다.">
        <Preview>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">다이얼로그 열기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>프로젝트를 삭제할까요?</DialogTitle>
                <DialogDescription>삭제한 프로젝트와 파일은 복구할 수 없습니다.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">취소</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive">삭제</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Preview>
      </DocSection>
      <DocSection title="바텀시트 (Bottom Sheet)" description="모바일에서 선택지나 짧은 입력을 받을 때 씁니다. 위쪽 모서리만 radius/sheet(2xl)로 둥글립니다.">
        <Preview>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">바텀시트 열기</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-sheet">
              <SheetHeader>
                <SheetTitle>정렬 기준</SheetTitle>
                <SheetDescription>목록을 어떤 순서로 볼지 고르세요.</SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button>적용</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">사이드 시트 열기</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>필터</SheetTitle>
                <SheetDescription>데스크톱에서는 오른쪽 시트로 상세 옵션을 보여줍니다.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Preview>
      </DocSection>
    </>
  )
}
