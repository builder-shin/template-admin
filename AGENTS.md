<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# template-admin

## Purpose
Next.js 16 기반 관리자 대시보드 템플릿. shadcn/ui 컴포넌트와 Tailwind CSS v4를 사용하며, 칸반 보드, 상품 관리, 통계 대시보드, RBAC 네비게이션 등의 기능을 포함한다.

## Key Files

| File | Description |
|------|-------------|
| `package.json` | 프로젝트 의존성 및 스크립트 (pnpm 사용) |
| `tsconfig.json` | TypeScript 설정 (strict mode, `@/*` → `./src/*` 경로 별칭) |
| `next.config.ts` | Next.js 설정 (이미지 원격 패턴, geist 트랜스파일) |
| `components.json` | shadcn/ui 설정 (new-york 스타일, RSC 활성화) |
| `eslint.config.mjs` | ESLint 설정 |
| `.prettierrc` | Prettier 코드 포매팅 설정 |
| `postcss.config.js` | PostCSS 설정 (Tailwind CSS v4) |
| `env.example.txt` | 환경 변수 템플릿 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `src/` | 애플리케이션 소스 코드 (see `src/AGENTS.md`) |
| `public/` | 정적 에셋 (이미지, SVG 등) |
| `docs/` | 프로젝트 문서 (see `docs/AGENTS.md`) |
| `__CLEANUP__/` | 제거된 코드 백업 (Clerk, Sentry 등) - 삭제 예정 |
| `.github/` | GitHub 설정 (FUNDING.yml) |
| `.vscode/` | VS Code 설정 (launch.json) |

## For AI Agents

### Working In This Directory
- 패키지 매니저로 **pnpm**을 사용한다 (npm, yarn 사용 금지)
- TypeScript strict mode가 활성화되어 있다
- 경로 별칭: `@/*` → `./src/*`, `~/*` → `./public/*`
- shadcn/ui 컴포넌트는 `new-york` 스타일을 사용한다
- `__CLEANUP__/` 디렉토리는 참조하지 않는다 (tsconfig에서 제외됨)

### Testing Requirements
- `pnpm lint` — ESLint 검사
- `pnpm build` — 빌드 확인
- `pnpm format:check` — 포매팅 확인

### Common Patterns
- Next.js App Router 사용 (Pages Router 아님)
- React Server Components (RSC) 기본 활성화
- 클라이언트 컴포넌트는 `'use client'` 지시문 필요
- CSS 변수 기반 테마 시스템 (다크/라이트 모드 + 커스텀 테마)
- Zustand로 클라이언트 상태 관리 (칸반 보드)
- nuqs로 URL 기반 상태 관리 (데이터 테이블 필터)
- react-hook-form + zod로 폼 검증

## Dependencies

### External (Core)
- `next` ^16.0.7 — 프레임워크
- `react` ^19.2.0 — UI 라이브러리
- `typescript` 5.7.2 — 타입 시스템
- `tailwindcss` ^4.0.0 — CSS 유틸리티
- `@tanstack/react-table` ^8.21.2 — 테이블 컴포넌트
- `@dnd-kit/*` — 드래그 앤 드롭 (칸반)
- `recharts` ^2.15.1 — 차트 라이브러리
- `zustand` ^5.0.2 — 상태 관리
- `nuqs` ^2.4.1 — URL 상태 관리
- `react-hook-form` + `zod` — 폼 검증
- `kbar` — 명령 팔레트 (Cmd+K)

<!-- MANUAL: -->
