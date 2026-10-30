"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { DailyRevenue } from "./data"

const RANGES = [
  { value: "7", label: "7일" },
  { value: "30", label: "30일" },
  { value: "90", label: "90일" },
]

// 단일 계열: primary-500은 라이트(#FFF)·다크(#0F172A) 표면 모두에서 검증을 통과한 단계
const chartConfig = {
  revenue: { label: "매출", color: "var(--ohc-primary-500)" },
} satisfies ChartConfig

const won = new Intl.NumberFormat("ko-KR")
const compact = new Intl.NumberFormat("ko-KR", { notation: "compact", maximumFractionDigits: 1 })

function shortDate(iso: string) {
  const [, m, d] = iso.split("-")
  return `${Number(m)}.${Number(d)}`
}

function longDate(iso: string) {
  const [y, m, d] = iso.split("-")
  return `${y}년 ${Number(m)}월 ${Number(d)}일`
}

export function RevenueChart({ data }: { data: DailyRevenue[] }) {
  const [range, setRange] = useState("30")
  const rows = data.slice(-Number(range))
  const total = rows.reduce((acc, row) => acc + row.revenue, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>일별 매출</CardTitle>
        <CardDescription>
          최근 {range}일 합계 <span className="text-text-primary tabular-nums">₩{won.format(total)}</span>
        </CardDescription>
        <CardAction>
          <Tabs value={range} onValueChange={setRange}>
            <TabsList aria-label="기간">
              {RANGES.map((r) => (
                <TabsTrigger key={r.value} value={r.value}>
                  {r.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-64 w-full">
          <AreaChart data={rows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--ohc-border-default)" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={24}
              tickFormatter={shortDate}
              className="tabular-nums"
            />
            <YAxis
              width={48}
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickCount={4}
              tickFormatter={(v: number) => compact.format(v)}
              className="tabular-nums"
            />
            <ChartTooltip
              cursor={{ stroke: "var(--ohc-border-strong)", strokeWidth: 1 }}
              content={
                <ChartTooltipContent
                  indicator="line"
                  labelFormatter={(_, payload) => longDate(String(payload?.[0]?.payload?.date ?? ""))}
                  formatter={(value) => (
                    <div className="flex w-full items-center justify-between gap-4">
                      <span className="text-text-secondary">매출</span>
                      <span className="font-semibold text-text-primary tabular-nums">₩{won.format(Number(value))}</span>
                    </div>
                  )}
                />
              }
            />
            <Area
              dataKey="revenue"
              type="monotone"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              fill="var(--color-revenue)"
              fillOpacity={0.1}
              activeDot={{ r: 4, stroke: "var(--ohc-bg-surface)", strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ChartContainer>

        <table className="sr-only">
          <caption>최근 {range}일 일별 매출</caption>
          <thead>
            <tr>
              <th scope="col">날짜</th>
              <th scope="col">매출</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.date}>
                <td>{longDate(row.date)}</td>
                <td>₩{won.format(row.revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
