<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# auth

## Purpose
인증 기능 모듈. 로그인 및 회원가입 뷰와 인증 폼 컴포넌트를 포함한다. (Clerk 제거 후 자체 인증 UI)

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `components/` | 인증 관련 UI 컴포넌트 |

## Key Files (components/)

| File | Description |
|------|-------------|
| `sign-in-view.tsx` | 로그인 페이지 뷰 컴포넌트 |
| `sign-up-view.tsx` | 회원가입 페이지 뷰 컴포넌트 |
| `user-auth-form.tsx` | 인증 폼 컴포넌트 (이메일/비밀번호, 소셜 로그인) |
| `interactive-grid.tsx` | 인증 페이지 배경 인터랙티브 그리드 애니메이션 |

## For AI Agents

### Working In This Directory
- Clerk가 제거되었으며, 현재 자체 인증 UI만 존재한다
- 실제 인증 로직(API 연동)은 아직 구현되지 않았을 수 있다
- 페이지 라우트: `src/app/auth/sign-in/`, `src/app/auth/sign-up/`

<!-- MANUAL: -->
