// 샘플용 고정 데이터. 서버/클라이언트 렌더 결과가 같도록 난수 대신 결정적 함수로 만든다.

export type DailyRevenue = { date: string; revenue: number }

const END_DATE = new Date(Date.UTC(2026, 9, 26)) // 2026-10-26
const DAYS = 120

function noise(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

export const dailyRevenue: DailyRevenue[] = Array.from({ length: DAYS }, (_, idx) => {
  const date = new Date(END_DATE)
  date.setUTCDate(END_DATE.getUTCDate() - (DAYS - 1 - idx))
  const weekday = date.getUTCDay()
  const weekend = weekday === 0 || weekday === 6 ? 0.78 : 1
  const trend = 1_150_000 + idx * 4_200
  const revenue = Math.round((trend * weekend * (0.88 + noise(idx) * 0.24)) / 1000) * 1000
  return { date: date.toISOString().slice(0, 10), revenue }
})

function sum(rows: DailyRevenue[]) {
  return rows.reduce((acc, row) => acc + row.revenue, 0)
}

const last30 = dailyRevenue.slice(-30)
const prev30 = dailyRevenue.slice(-60, -30)

export type Kpi = {
  label: string
  value: string
  delta: number
  deltaLabel: string
  /** 값이 오르는 것이 좋은 지표인지 (환불률처럼 내려가야 좋은 지표는 false) */
  upIsGood: boolean
}

const revenueNow = sum(last30)
const revenuePrev = sum(prev30)

/** 1,000만 이상은 만 원 단위로 줄여 쓴다. 예: 44,667,000 → ₩4,467만 */
export function formatManwon(value: number) {
  return `₩${new Intl.NumberFormat("ko-KR").format(Math.round(value / 10_000))}만`
}

export const kpis: Kpi[] = [
  {
    label: "매출",
    value: formatManwon(revenueNow),
    delta: (revenueNow / revenuePrev - 1) * 100,
    deltaLabel: "%",
    upIsGood: true,
  },
  { label: "주문 수", value: "1,284", delta: 8.1, deltaLabel: "%", upIsGood: true },
  { label: "신규 고객", value: "312", delta: -3.2, deltaLabel: "%", upIsGood: true },
  { label: "환불률", value: "1.8%", delta: -0.4, deltaLabel: "%p", upIsGood: false },
]

// 채널 합계가 KPI 매출(최근 30일)과 맞도록 비중으로 나눈다.
const CHANNEL_SHARES = [
  { name: "자사몰", share: 0.446 },
  { name: "네이버 스마트스토어", share: 0.268 },
  { name: "쿠팡", share: 0.168 },
  { name: "카카오 선물하기", share: 0.087 },
  { name: "오프라인 매장", share: 0.031 },
]

export const channels = CHANNEL_SHARES.map((c) => ({
  name: c.name,
  revenue: Math.round((revenueNow * c.share) / 1000) * 1000,
}))

export type OrderStatus = "paid" | "shipping" | "pending" | "refunded"

export const orders: {
  id: string
  customer: string
  product: string
  date: string
  amount: number
  status: OrderStatus
}[] = [
  { id: "ORD-2048", customer: "주식회사 하늘", product: "프리미엄 플랜 (연간)", date: "2026.10.26 14:32", amount: 1_280_000, status: "paid" },
  { id: "ORD-2047", customer: "바다상사", product: "팀 플랜 (월간)", date: "2026.10.26 11:05", amount: 430_000, status: "shipping" },
  { id: "ORD-2046", customer: "푸른숲", product: "추가 좌석 5개", date: "2026.10.25 18:47", amount: 89_000, status: "pending" },
  { id: "ORD-2045", customer: "온새미로", product: "프리미엄 플랜 (연간)", date: "2026.10.25 09:12", amount: 2_150_000, status: "refunded" },
  { id: "ORD-2044", customer: "새벽빛", product: "스타터 플랜 (월간)", date: "2026.10.24 16:20", amount: 29_000, status: "paid" },
  { id: "ORD-2043", customer: "가람테크", product: "팀 플랜 (연간)", date: "2026.10.24 10:41", amount: 4_380_000, status: "paid" },
]
