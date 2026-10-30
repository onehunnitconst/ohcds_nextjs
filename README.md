# OHC Design System — Next.js

Next.js(App Router) + Tailwind CSS v4 + shadcn/ui 기반의 OHC 디자인 시스템 쇼케이스·웹 샘플입니다.
디자인 원본(`figcraft/design_system.figcraft`)과 토큰·컴포넌트 설명은 별도 저장소 [`ohcds`](../ohcds)에 있습니다.
토큰이나 컴포넌트 스펙을 바꿀 때는 `ohcds`를 먼저 수정하고 이 저장소의 `src/styles/ohc-tokens.css`에 반영합니다.

## 실행

```bash
pnpm install
pnpm dev     # http://localhost:3000
```

## 페이지 구성

| 경로 | 내용 |
| --- | --- |
| `/` | 소개(히어로)와 컴포넌트 조합 예시 |
| `/docs` | 왼쪽 목차 + 오른쪽 문서. Foundations(토큰)와 Components |
| `/samples` | 실제 화면 샘플 목록 |
| `/samples/dashboard` | SaaS 대시보드 샘플 (KPI, 매출 차트, 채널별 매출, 최근 주문) |
| `/samples/finance` | 모바일 금융 앱 샘플 (잔액, 지출 예산, 거래 내역, 송금 키패드·거래 상세 바텀시트) |

목차 항목은 `src/lib/docs-nav.ts`에서 관리합니다.

## 토큰 구조

| 파일 | 역할 |
| --- | --- |
| `src/styles/ohc-tokens.css` | Figma 변수·스타일을 옮긴 `--ohc-*` CSS 변수 (Primitive → Semantic Light/Dark, Typography, Spacing, Radius, Elevation) |
| `src/app/globals.css` | `--ohc-*`를 Tailwind 유틸리티와 shadcn/ui 변수에 연결 |

- Mobile 값이 기본값이고, Desktop 값은 `48rem`(Tailwind `md`) 이상에서 적용됩니다.
- 다크 모드는 `<html class="dark">`(next-themes)로 전환됩니다.
- Tailwind 기본 색상 팔레트는 제거했습니다. 모든 색은 OHC 토큰에서 옵니다.

## Tailwind 유틸리티 이름

Figma 토큰 경로를 그대로 따릅니다(`/` → `-`).

| Figma | 클래스 예시 |
| --- | --- |
| `bg/canvas`, `text/secondary`, `border/default` | `bg-bg-canvas`, `text-text-secondary`, `border-border-default` |
| `primary/solid`, `danger/subtle`, `success/text` | `bg-primary-solid`, `bg-danger-subtle`, `text-success-text` |
| `primary/500` (Primitive) | `bg-primary-500` |
| 텍스트 스타일 `Heading/H1`, `Body/Small` | `text-heading-1`, `text-body-small` |
| `radius/card`, `radius/md` | `rounded-card`, `rounded-md` |
| `layout/page-margin`, `layout/gutter` | `px-page-margin`, `gap-gutter` |
| `Elevation/2` | `shadow-elevation-2` (`shadow-md`도 동일) |

shadcn/ui 변수(`--primary`, `--muted` 등)는 `globals.css`에서 OHC 시맨틱 토큰을 가리킵니다.
shadcn의 `secondary`는 낮은 강조의 중립색이고, OHC의 오렌지 브랜드 색은 `bg-secondary-solid`입니다.

### `cn()` 주의사항

`src/lib/utils.ts`의 `cn()`은 OHC 커스텀 유틸리티(`text-body-small`, `rounded-card`, `shadow-elevation-1` 등)를 알고 있어서 클래스가 올바르게 병합됩니다.
`pnpm dlx shadcn@latest add`로 컴포넌트를 추가하면 `import { cn } from "cn"`으로 생성되니, `@/lib/utils`로 바꿔 주세요.
