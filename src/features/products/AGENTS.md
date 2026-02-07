<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# products

## Purpose
상품 관리 기능 모듈. 상품 목록(데이터 테이블), 상품 폼(CRUD), 상세 보기 페이지를 포함한다.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `components/` | 상품 관련 UI 컴포넌트 |

## Key Files (components/)

| File | Description |
|------|-------------|
| `product-listing.tsx` | 상품 목록 페이지 컴포넌트 |
| `product-form.tsx` | 상품 생성/수정 폼 |
| `product-view-page.tsx` | 상품 상세 보기 페이지 |
| `product-tables/` | 상품 데이터 테이블 컴포넌트 (see below) |

## Key Files (components/product-tables/)

| File | Description |
|------|-------------|
| `index.tsx` | 상품 테이블 메인 컴포넌트 |
| `columns.tsx` | 테이블 컬럼 정의 |
| `cell-action.tsx` | 행 액션 메뉴 (수정, 삭제) |
| `options.tsx` | 필터 옵션 정의 |

## For AI Agents

### Working In This Directory
- 데이터 테이블은 `src/components/ui/table/data-table.tsx`를 사용한다
- 컬럼 정의는 `product-tables/columns.tsx`에서 @tanstack/react-table 형식으로 작성
- Mock 데이터는 `src/constants/mock-api.ts`에서 가져온다
- 라우트: `src/app/dashboard/product/page.tsx`, `src/app/dashboard/product/[productId]/page.tsx`

<!-- MANUAL: -->
