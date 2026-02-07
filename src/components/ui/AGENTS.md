<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# ui

## Purpose
shadcn/ui 기반 기본 UI 컴포넌트 라이브러리. `pnpm dlx shadcn@latest add` 명령으로 생성된 컴포넌트들과 커스텀 확장 컴포넌트를 포함한다.

## Key Files

| File | Description |
|------|-------------|
| `button.tsx` | 버튼 컴포넌트 (variant: default, destructive, outline, secondary, ghost, link) |
| `dialog.tsx` | 다이얼로그/모달 |
| `form.tsx` | react-hook-form 통합 폼 컴포넌트 |
| `sidebar.tsx` | 사이드바 컴포넌트 (SidebarProvider, SidebarInset 등) |
| `card.tsx` | 카드 컴포넌트 |
| `chart.tsx` | recharts 래퍼 차트 컴포넌트 |
| `input.tsx` | 입력 필드 |
| `select.tsx` | 셀렉트 드롭다운 |
| `dropdown-menu.tsx` | 드롭다운 메뉴 |
| `tabs.tsx` | 탭 컴포넌트 |
| `sonner.tsx` | 토스트 알림 (sonner 라이브러리 래퍼) |
| `modal.tsx` | 반응형 모달 (데스크톱: Dialog, 모바일: Drawer) |
| `heading.tsx` | 제목 컴포넌트 |
| `info-button.tsx` | 정보 버튼 |
| `infobar.tsx` | 정보 사이드바 컴포넌트 (InfobarProvider) |
| `table.tsx` | 기본 테이블 컴포넌트 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `table/` | 고급 데이터 테이블 컴포넌트 (필터링, 페이지네이션, 정렬) (see `table/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- shadcn/ui 컴포넌트를 직접 수정하기보다 래핑하여 커스터마이징하는 것을 권장한다
- 새 shadcn/ui 컴포넌트 추가: `pnpm dlx shadcn@latest add <name>`
- Radix UI 프리미티브 기반으로 접근성(a11y)이 내장되어 있다
- `new-york` 스타일 변형을 사용한다

<!-- MANUAL: -->
