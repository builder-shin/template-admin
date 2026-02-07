<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# overview

## Purpose
대시보드 개요 페이지의 차트 및 통계 컴포넌트 모듈. recharts 라이브러리 기반의 영역/바/파이 차트와 최근 판매 내역을 표시한다.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `components/` | 차트 및 통계 UI 컴포넌트 |

## Key Files (components/)

| File | Description |
|------|-------------|
| `overview.tsx` | 개요 메인 컴포넌트 |
| `area-graph.tsx` | 영역 차트 컴포넌트 |
| `area-graph-skeleton.tsx` | 영역 차트 로딩 스켈레톤 |
| `bar-graph.tsx` | 바 차트 컴포넌트 |
| `bar-graph-skeleton.tsx` | 바 차트 로딩 스켈레톤 |
| `pie-graph.tsx` | 파이 차트 컴포넌트 |
| `pie-graph-skeleton.tsx` | 파이 차트 로딩 스켈레톤 |
| `recent-sales.tsx` | 최근 판매 내역 컴포넌트 |
| `recent-sales-skeleton.tsx` | 판매 내역 로딩 스켈레톤 |

## For AI Agents

### Working In This Directory
- recharts 라이브러리를 사용하며, `src/components/ui/chart.tsx` 래퍼를 활용한다
- 각 차트에는 대응하는 skeleton 컴포넌트가 있다
- 병렬 라우트(@slot)로 로딩되므로 각 차트는 독립적으로 로드/에러 처리된다
- 라우트: `src/app/dashboard/overview/@area_stats/`, `@bar_stats/`, `@pie_stats/`, `@sales/`

<!-- MANUAL: -->
