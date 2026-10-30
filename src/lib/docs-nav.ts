export type DocsNavItem = {
  href: string
  title: string
  en: string
}

export type DocsNavGroup = {
  title: string
  items: DocsNavItem[]
}

export const docsNav: DocsNavGroup[] = [
  {
    title: "시작하기",
    items: [{ href: "/docs", title: "개요", en: "Overview" }],
  },
  {
    title: "Foundations",
    items: [
      { href: "/docs/foundations/color", title: "색상", en: "Color" },
      { href: "/docs/foundations/typography", title: "타이포그래피", en: "Typography" },
      { href: "/docs/foundations/radius", title: "모서리", en: "Radius" },
      { href: "/docs/foundations/elevation", title: "그림자", en: "Elevation" },
      { href: "/docs/foundations/spacing", title: "간격", en: "Spacing" },
    ],
  },
  {
    title: "Components",
    items: [
      { href: "/docs/components/button", title: "버튼", en: "Button" },
      { href: "/docs/components/icon-button", title: "아이콘 버튼", en: "Icon Button" },
      { href: "/docs/components/badge", title: "배지·태그", en: "Badge & Tag" },
      { href: "/docs/components/text-field", title: "입력 필드", en: "Text Field" },
      { href: "/docs/components/selection-controls", title: "선택 컨트롤", en: "Selection Controls" },
      { href: "/docs/components/tabs", title: "탭", en: "Tabs" },
      { href: "/docs/components/card", title: "카드·리스트", en: "Card & List" },
      { href: "/docs/components/table", title: "테이블", en: "Table" },
      { href: "/docs/components/modal", title: "모달·바텀시트", en: "Modal & Bottom Sheet" },
      { href: "/docs/components/toast-alert", title: "토스트·알림", en: "Toast & Alert" },
      { href: "/docs/components/menu-tooltip", title: "메뉴·툴팁", en: "Menu & Tooltip" },
      { href: "/docs/components/avatar", title: "아바타", en: "Avatar" },
    ],
  },
]
