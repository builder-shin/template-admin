<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# src

## Purpose
애플리케이션의 전체 소스 코드를 포함하는 루트 디렉토리. Next.js App Router 기반으로 페이지, 컴포넌트, 기능 모듈, 훅, 유틸리티 등이 체계적으로 분류되어 있다.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router 라우트 및 페이지 (see `app/AGENTS.md`) |
| `components/` | 재사용 가능한 UI 컴포넌트 (see `components/AGENTS.md`) |
| `features/` | 도메인별 기능 모듈 (see `features/AGENTS.md`) |
| `hooks/` | 커스텀 React 훅 (see `hooks/AGENTS.md`) |
| `lib/` | 유틸리티 함수 및 헬퍼 (see `lib/AGENTS.md`) |
| `config/` | 앱 설정 (네비게이션, 데이터 테이블 등) (see `config/AGENTS.md`) |
| `constants/` | 정적 데이터 및 Mock API (see `constants/AGENTS.md`) |
| `styles/` | 글로벌 CSS 및 테마 (see `styles/AGENTS.md`) |
| `types/` | TypeScript 타입 정의 (see `types/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- `@/*` 경로 별칭이 이 디렉토리를 가리킨다 (`@/components` = `src/components`)
- 새 기능은 `features/` 디렉토리에 도메인별로 생성한다
- 공유 UI 컴포넌트는 `components/`에, 도메인별 컴포넌트는 `features/*/components/`에 배치한다
- 새 페이지는 `app/` 디렉토리에 Next.js App Router 규칙을 따라 생성한다

### Common Patterns
- Feature-based architecture: 관련 코드를 `features/` 하위에 그룹화
- Shared-first: 2개 이상의 feature에서 사용하는 코드는 `components/`, `hooks/`, `lib/`로 승격

<!-- MANUAL: -->
