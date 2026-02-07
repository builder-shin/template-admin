<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# hooks

## Purpose
프로젝트 전반에서 사용되는 커스텀 React 훅 모음.

## Key Files

| File | Description |
|------|-------------|
| `use-breadcrumbs.tsx` | 브레드크럼 경로 생성 훅 |
| `use-callback-ref.ts` | 콜백 참조 안정화 훅 |
| `use-callback-ref.tsx` | 콜백 참조 안정화 훅 (TSX 버전) |
| `use-controllable-state.tsx` | 제어/비제어 상태 통합 훅 |
| `use-data-table.ts` | 데이터 테이블 상태 관리 훅 (nuqs 기반 URL 상태) |
| `use-debounce.tsx` | 디바운스 값 훅 |
| `use-debounced-callback.ts` | 디바운스된 콜백 훅 |
| `use-media-query.ts` | 미디어 쿼리 감지 훅 |
| `use-mobile.tsx` | 모바일 화면 감지 훅 |
| `use-multistep-form.tsx` | 다단계 폼 상태 관리 훅 |
| `use-nav.ts` | 네비게이션 상태 및 RBAC 접근 제어 훅 |

## For AI Agents

### Working In This Directory
- 새 훅 추가 시 `use-<name>.ts` 또는 `use-<name>.tsx` 명명 규칙을 따른다
- 훅은 `'use client'` 환경에서만 동작한다
- 2개 이상의 컴포넌트에서 공유되는 로직만 훅으로 추출한다

### Common Patterns
- React 19 호환
- nuqs를 활용한 URL 기반 상태 관리 패턴 (`use-data-table`)

<!-- MANUAL: -->
