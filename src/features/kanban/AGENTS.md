<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# kanban

## Purpose
칸반 보드 기능 모듈. @dnd-kit 라이브러리를 사용한 드래그 앤 드롭 칸반 보드와 Zustand 기반 상태 관리를 포함한다.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `components/` | 칸반 보드 UI 컴포넌트 |
| `utils/` | 칸반 유틸리티 및 Zustand 스토어 |

## Key Files (components/)

| File | Description |
|------|-------------|
| `kanban-view-page.tsx` | 칸반 보드 메인 뷰 페이지 |
| `kanban-board.tsx` | 칸반 보드 컴포넌트 (DnD 컨텍스트) |
| `board-column.tsx` | 칸반 컬럼 컴포넌트 (드롭 영역) |
| `task-card.tsx` | 태스크 카드 컴포넌트 (드래그 가능) |
| `new-task-dialog.tsx` | 새 태스크 추가 다이얼로그 |
| `new-section-dialog.tsx` | 새 섹션(컬럼) 추가 다이얼로그 |
| `column-action.tsx` | 컬럼 액션 메뉴 (이름 변경, 삭제) |

## Key Files (utils/)

| File | Description |
|------|-------------|
| `store.ts` | Zustand 스토어 (칸반 상태: 컬럼, 태스크, DnD 이벤트 핸들러) |
| `index.ts` | 유틸리티 함수 export |

## For AI Agents

### Working In This Directory
- 상태 관리는 Zustand를 사용한다 (`utils/store.ts`)
- 드래그 앤 드롭은 @dnd-kit/core, @dnd-kit/sortable 사용
- 페이지 라우트: `src/app/dashboard/kanban/page.tsx`

<!-- MANUAL: -->
