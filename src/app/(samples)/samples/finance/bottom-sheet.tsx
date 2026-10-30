"use client"

import { Dialog as DialogPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

/**
 * 폰 프레임 안에서 열리는 바텀시트.
 * shadcn Sheet는 body에 포털되어 화면 전체 하단에서 열리므로, 프레임 요소를 container로 받아 그 안에 띄운다.
 */
export function BottomSheet({
  open,
  onOpenChange,
  container,
  title,
  description,
  hideHeader = false,
  children,
  className,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  container: HTMLElement | null
  title: string
  description?: string
  hideHeader?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal container={container}>
        <DialogPrimitive.Overlay className="absolute inset-0 z-40 bg-bg-overlay duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <DialogPrimitive.Content
          className={cn(
            "absolute inset-x-0 bottom-0 z-50 flex max-h-[90%] flex-col rounded-t-sheet bg-bg-surface pb-[max(env(safe-area-inset-bottom),16px)] shadow-elevation-3 outline-none",
            "duration-200 data-open:animate-in data-open:slide-in-from-bottom data-closed:animate-out data-closed:slide-out-to-bottom",
            className
          )}
        >
          <div className="flex justify-center pt-2 pb-1" aria-hidden>
            <span className="h-1 w-10 rounded-full bg-bg-muted" />
          </div>
          <div className={cn("flex flex-col gap-1 px-5 pt-3 pb-4", hideHeader && "sr-only")}>
            <DialogPrimitive.Title className="text-heading-3">{title}</DialogPrimitive.Title>
            {description ? (
              <DialogPrimitive.Description className="text-body-small text-text-secondary">{description}</DialogPrimitive.Description>
            ) : (
              <DialogPrimitive.Description className="sr-only">{title}</DialogPrimitive.Description>
            )}
          </div>
          <div className="min-h-0 overflow-y-auto px-5">{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
