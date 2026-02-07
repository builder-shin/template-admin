<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# features

## Purpose
도메인별 기능 모듈을 포함하는 디렉토리. 각 기능은 자체 컴포넌트와 유틸리티를 갖는 독립적인 모듈로 구성된다.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `auth/` | 인증 기능 (로그인/회원가입 뷰) (see `auth/AGENTS.md`) |
| `kanban/` | 칸반 보드 기능 (드래그 앤 드롭) (see `kanban/AGENTS.md`) |
| `overview/` | 대시보드 개요 차트 (see `overview/AGENTS.md`) |
| `products/` | 상품 관리 기능 (CRUD, 테이블) (see `products/AGENTS.md`) |
| `profile/` | 사용자 프로필 기능 (see `profile/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- 새 기능 모듈 추가 시 `features/<feature-name>/` 디렉토리 생성
- 각 기능 모듈은 `components/` 하위 디렉토리에 UI 컴포넌트를 배치
- 기능별 유틸리티는 `utils/` 하위 디렉토리에 배치
- 2개 이상의 feature에서 공유하는 코드는 `src/components/` 또는 `src/lib/`로 이동

### Common Patterns
- Feature module 구조: `components/`, `utils/` (선택적)
- 페이지에서 feature 컴포넌트를 import하여 사용 (`@/features/<name>/components/<Component>`)

<!-- MANUAL: -->
