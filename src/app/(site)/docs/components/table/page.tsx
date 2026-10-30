import type { Metadata } from "next"
import { DocHeader, DocSection } from "@/components/docs/doc-page"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = { title: "테이블 (Table)" }

const ORDERS = [
  { id: "ORD-2041", customer: "주식회사 하늘", date: "2026.10.26", amount: 1280000, status: "결제 완료", intent: "success" },
  { id: "ORD-2040", customer: "바다상사", date: "2026.10.25", amount: 430000, status: "배송 중", intent: "info" },
  { id: "ORD-2039", customer: "푸른숲", date: "2026.10.25", amount: 89000, status: "입금 대기", intent: "warning" },
  { id: "ORD-2038", customer: "온새미로", date: "2026.10.24", amount: 2150000, status: "환불", intent: "danger" },
] as const

const won = new Intl.NumberFormat("ko-KR")

export default function TablePage() {
  return (
    <>
      <DocHeader
        eyebrow="Components / Table"
        title="테이블 (Table)"
        description="여러 항목을 같은 기준으로 비교할 때 씁니다. 숫자 열은 오른쪽 정렬하고 tabular-nums로 자릿수를 맞춥니다."
      />
      <DocSection title="기본 (Default)">
        <div className="rounded-card border border-border-default bg-bg-surface">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-4">주문번호</TableHead>
                <TableHead>고객</TableHead>
                <TableHead>주문일</TableHead>
                <TableHead className="text-right">금액</TableHead>
                <TableHead className="pr-4">상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ORDERS.map((o) => (
                <TableRow key={o.id}>
                  <TableCell className="pl-4 font-mono text-code-small">{o.id}</TableCell>
                  <TableCell>{o.customer}</TableCell>
                  <TableCell className="text-text-secondary tabular-nums">{o.date}</TableCell>
                  <TableCell className="text-right tabular-nums">₩{won.format(o.amount)}</TableCell>
                  <TableCell className="pr-4">
                    <Badge
                      variant="outline"
                      style={{
                        background: `var(--ohc-${o.intent}-subtle)`,
                        color: `var(--ohc-${o.intent}-text)`,
                        borderColor: `var(--ohc-${o.intent}-border)`,
                      }}
                    >
                      {o.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DocSection>
    </>
  )
}
