export type Category = "food" | "cafe" | "transport" | "shopping" | "culture" | "income" | "transfer"

export type Transaction = {
  id: string
  merchant: string
  category: Category
  /** 입금은 양수, 출금은 음수 */
  amount: number
  date: string
  time: string
  method: string
  approval: string
}

export const CATEGORY_LABEL: Record<Category, string> = {
  food: "식비",
  cafe: "카페·간식",
  transport: "교통",
  shopping: "쇼핑",
  culture: "문화·여가",
  income: "입금",
  transfer: "이체",
}

export const accounts = [
  { id: "main", name: "OHC 입출금통장", number: "3333-12-4567890", balance: 3_284_520 },
  { id: "save", name: "비상금 파킹통장", number: "3333-15-1122334", balance: 5_000_000 },
  { id: "invest", name: "주식 계좌", number: "7020-88-901234", balance: 4_195_800 },
]

export const totalAssets = accounts.reduce((acc, a) => acc + a.balance, 0)

export const spending = {
  month: "10월",
  total: 1_284_500,
  budget: 1_800_000,
  top: [
    { category: "food" as Category, amount: 486_200 },
    { category: "shopping" as Category, amount: 352_900 },
    { category: "transport" as Category, amount: 168_400 },
  ],
}

export const recipients = [
  { id: "r1", name: "김하늘", bank: "OHC뱅크" },
  { id: "r2", name: "이도윤", bank: "국민" },
  { id: "r3", name: "박서준", bank: "신한" },
  { id: "r4", name: "최유나", bank: "카카오뱅크" },
]

export const transactions: Transaction[] = [
  { id: "t1", merchant: "스타벅스 역삼점", category: "cafe", amount: -6_300, date: "2026-10-26", time: "14:12", method: "OHC 체크카드", approval: "30184421" },
  { id: "t2", merchant: "급여", category: "income", amount: 3_420_000, date: "2026-10-26", time: "09:00", method: "주식회사 오에이치씨", approval: "-" },
  { id: "t3", merchant: "카카오T 택시", category: "transport", amount: -12_800, date: "2026-10-26", time: "08:31", method: "OHC 체크카드", approval: "30183977" },
  { id: "t4", merchant: "쿠팡", category: "shopping", amount: -48_900, date: "2026-10-25", time: "21:47", method: "OHC 체크카드", approval: "30179012" },
  { id: "t5", merchant: "이도윤", category: "transfer", amount: -30_000, date: "2026-10-25", time: "19:20", method: "OHC 입출금통장", approval: "-" },
  { id: "t6", merchant: "김밥천국 강남점", category: "food", amount: -9_500, date: "2026-10-25", time: "12:34", method: "OHC 체크카드", approval: "30176655" },
  { id: "t7", merchant: "CGV 용산아이파크몰", category: "culture", amount: -28_000, date: "2026-10-24", time: "18:05", method: "OHC 체크카드", approval: "30170231" },
  { id: "t8", merchant: "서울교통공사", category: "transport", amount: -1_550, date: "2026-10-24", time: "08:12", method: "OHC 체크카드", approval: "30168810" },
]

export const won = new Intl.NumberFormat("ko-KR")

export function signedWon(amount: number) {
  return `${amount > 0 ? "+" : "−"}${won.format(Math.abs(amount))}원`
}

export function dateLabel(iso: string) {
  const today = "2026-10-26"
  const yesterday = "2026-10-25"
  if (iso === today) return "오늘"
  if (iso === yesterday) return "어제"
  const [, m, d] = iso.split("-")
  return `${Number(m)}월 ${Number(d)}일`
}
