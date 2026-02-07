<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# overview

## Purpose
대시보드 통계 개요 페이지. Next.js 병렬 라우트(@slot)를 사용하여 4개의 독립적인 차트 패널을 동시에 렌더링한다.

## Key Files

| File | Description |
|------|-------------|
| `layout.tsx` | 병렬 라우트 레이아웃 (4개 슬롯을 그리드로 배치) |
| `error.tsx` | 에러 바운더리 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `@sales/` | 최근 판매 내역 패널 (default.tsx, page.tsx, loading.tsx, error.tsx) |
| `@area_stats/` | 영역 차트 통계 패널 |
| `@bar_stats/` | 바 차트 통계 패널 |
| `@pie_stats/` | 파이 차트 통계 패널 |

## For AI Agents

### Working In This Directory
- 각 `@*` 디렉토리는 Next.js 병렬 라우트 슬롯이다
- 각 슬롯에는 `default.tsx`(기본 렌더링), `page.tsx`(페이지), `loading.tsx`(로딩), `error.tsx`(에러) 파일이 있다
- 새 통계 패널 추가 시 `@new_slot/` 디렉토리를 만들고 `layout.tsx`의 props에 추가
- 실제 차트 컴포넌트는 `src/features/overview/components/`에 정의되어 있다

<!-- MANUAL: -->
