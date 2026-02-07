<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# app

## Purpose
Next.js App Router 기반의 라우트 및 페이지 디렉토리. 파일 시스템 기반 라우팅으로 인증 페이지와 대시보드 페이지를 정의한다.

## Key Files

| File | Description |
|------|-------------|
| `layout.tsx` | 루트 레이아웃 (ThemeProvider, NuqsAdapter, Toaster 설정) |
| `page.tsx` | 루트 페이지 (`/` 경로) |
| `not-found.tsx` | 404 페이지 |
| `global-error.tsx` | 글로벌 에러 바운더리 |
| `favicon.ico` | 파비콘 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `auth/` | 인증 페이지 (로그인, 회원가입) |
| `dashboard/` | 대시보드 페이지 및 레이아웃 (see `dashboard/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- 루트 레이아웃에는 ThemeProvider, NuqsAdapter, ActiveThemeProvider가 중첩되어 있다
- 새 라우트 추가 시 Next.js App Router 규칙을 따른다 (page.tsx, layout.tsx, loading.tsx, error.tsx)
- `lang='ko'`로 한국어 기본 설정됨
- 쿠키로 테마(`active_theme`)와 사이드바 상태(`sidebar_state`)를 저장한다

### Common Patterns
- 동적 라우트: `[param]` (단일), `[[...param]]` (catch-all 옵션)
- 병렬 라우트: `@slot` 패턴 (overview 페이지에서 사용)
- Server Components가 기본, 클라이언트 필요 시 `'use client'` 추가

<!-- MANUAL: -->
