"use client"

import { useState } from "react"
import { CheckIcon, DeleteIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BottomSheet } from "./bottom-sheet"
import { accounts, recipients, won } from "./data"

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0", "back"] as const
const MAX_DIGITS = 9

export function SendMoneySheet({
  open,
  onOpenChange,
  container,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  container: HTMLElement | null
}) {
  const [recipientId, setRecipientId] = useState(recipients[0].id)
  const [digits, setDigits] = useState("")
  const [sent, setSent] = useState(false)

  const balance = accounts[0].balance
  const amount = Number(digits || "0")
  const recipient = recipients.find((r) => r.id === recipientId)!
  const overBalance = amount > balance

  function press(key: (typeof KEYS)[number]) {
    if (key === "back") {
      setDigits((d) => d.slice(0, -1))
      return
    }
    setDigits((d) => {
      const next = (d + key).replace(/^0+/, "")
      return next.length > MAX_DIGITS ? d : next
    })
  }

  function handleOpenChange(next: boolean) {
    onOpenChange(next)
    if (!next) {
      // 닫힌 뒤 다음에 열 때는 처음 상태로
      setTimeout(() => {
        setDigits("")
        setSent(false)
      }, 200)
    }
  }

  return (
    <BottomSheet
      open={open}
      onOpenChange={handleOpenChange}
      container={container}
      title={sent ? "송금 완료" : "송금하기"}
      description={sent ? undefined : `출금 계좌 · ${accounts[0].name}`}
      hideHeader={sent}
    >
      {sent ? (
        <div className="flex flex-col items-center gap-4 pt-6 pb-2 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-primary-solid text-primary-on-solid">
            <CheckIcon className="size-7" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-heading-3">
              {recipient.name}님에게
              <br />
              {won.format(amount)}원을 보냈어요
            </p>
            <p className="text-body-small text-text-secondary">
              남은 잔액 {won.format(balance - amount)}원
            </p>
          </div>
          <Button size="lg" className="mt-4 w-full" onClick={() => handleOpenChange(false)}>
            확인
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div role="radiogroup" aria-label="받는 사람" className="flex gap-3">
            {recipients.map((r) => {
              const selected = r.id === recipientId
              return (
                <button
                  key={r.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setRecipientId(r.id)}
                  className="flex flex-1 flex-col items-center gap-1.5 rounded-md py-1 outline-none focus-visible:shadow-focus"
                >
                  <Avatar size="lg" className={cn("ring-2 ring-offset-2 ring-offset-bg-surface", selected ? "ring-primary-solid" : "ring-transparent")}>
                    <AvatarFallback className={selected ? "bg-primary-subtle text-primary-text" : undefined}>
                      {r.name.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <span className={cn("text-label-small", selected ? "text-text-primary" : "text-text-secondary")}>{r.name}</span>
                </button>
              )
            })}
          </div>

          <div className="flex flex-col items-center gap-1 py-2" aria-live="polite">
            <p className={cn("text-numeric-large", amount ? "text-text-primary" : "text-text-disabled")}>
              {amount ? `${won.format(amount)}원` : "얼마를 보낼까요?"}
            </p>
            <p className={cn("text-caption", overBalance ? "text-danger-text" : "text-text-secondary")}>
              {overBalance ? "잔액이 부족해요" : `잔액 ${won.format(balance)}원`}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1">
            {KEYS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => press(key)}
                aria-label={key === "back" ? "지우기" : key}
                className="flex h-13 items-center justify-center rounded-md text-heading-3 outline-none transition-colors active:bg-bg-muted hover:bg-bg-subtle focus-visible:shadow-focus"
              >
                {key === "back" ? <DeleteIcon className="size-6" /> : key}
              </button>
            ))}
          </div>

          <Button size="lg" className="w-full" disabled={!amount || overBalance} onClick={() => setSent(true)}>
            {recipient.name}님에게 보내기
          </Button>
        </div>
      )}
    </BottomSheet>
  )
}
