<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# table

## Purpose
@tanstack/react-table 기반의 고급 데이터 테이블 컴포넌트 시스템. 서버 사이드 필터링, 정렬, 페이지네이션을 URL 파라미터(nuqs)로 관리한다.

## Key Files

| File | Description |
|------|-------------|
| `data-table.tsx` | 메인 데이터 테이블 컴포넌트 |
| `data-table-toolbar.tsx` | 테이블 상단 툴바 (필터, 뷰 옵션) |
| `data-table-pagination.tsx` | 페이지네이션 컴포넌트 |
| `data-table-column-header.tsx` | 컬럼 헤더 (정렬 토글, 숨기기) |
| `data-table-faceted-filter.tsx` | 패싯 필터 (체크박스 기반) |
| `data-table-date-filter.tsx` | 날짜 범위 필터 |
| `data-table-slider-filter.tsx` | 슬라이더 범위 필터 |
| `data-table-view-options.tsx` | 컬럼 표시/숨기기 옵션 |
| `data-table-skeleton.tsx` | 로딩 스켈레톤 |

## For AI Agents

### Working In This Directory
- 데이터 테이블은 `use-data-table` 훅과 함께 사용한다
- 필터 상태는 nuqs를 통해 URL 파라미터로 동기화된다
- 새 필터 타입 추가 시 `data-table-*-filter.tsx` 패턴을 따른다
- 컬럼 정의는 feature별 `columns.tsx`에서 한다 (예: `features/products/components/product-tables/columns.tsx`)

<!-- MANUAL: -->
