<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# lib

## Purpose
프로젝트 전반에서 사용되는 유틸리티 함수 및 헬퍼 모듈.

## Key Files

| File | Description |
|------|-------------|
| `utils.ts` | `cn()` 클래스 병합 유틸리티, `formatBytes()` 파일 크기 포맷 |
| `data-table.ts` | 데이터 테이블 헬퍼 (필터링, 정렬 등) |
| `format.ts` | 데이터 포맷팅 유틸리티 |
| `parsers.ts` | URL 파라미터 파서 (nuqs용) |
| `searchparams.ts` | 검색 파라미터 관리 유틸리티 |

## For AI Agents

### Working In This Directory
- `cn()` 함수는 `clsx` + `tailwind-merge` 조합으로 Tailwind 클래스 충돌을 해결한다
- 새 유틸리티 함수는 용도에 맞는 기존 파일에 추가하거나, 독립적 주제면 새 파일을 생성한다
- 순수 함수(side-effect 없는)만 이 디렉토리에 배치한다

<!-- MANUAL: -->
