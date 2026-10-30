"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <>
      <Button variant="outline" onClick={() => toast("변경 사항을 저장했습니다")}>
        기본
      </Button>
      <Button variant="outline" onClick={() => toast.success("결제가 완료되었습니다")}>
        성공
      </Button>
      <Button variant="outline" onClick={() => toast.info("새 버전이 있습니다")}>
        정보
      </Button>
      <Button variant="outline" onClick={() => toast.warning("저장 공간이 10% 남았습니다")}>
        경고
      </Button>
      <Button variant="outline" onClick={() => toast.error("업로드에 실패했습니다")}>
        오류
      </Button>
    </>
  )
}
