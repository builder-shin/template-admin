<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# themes

## Purpose
테마 시스템 관련 컴포넌트 및 설정. 다크/라이트 모드 전환, 커스텀 테마 선택, 폰트 설정 등을 관리한다.

## Key Files

| File | Description |
|------|-------------|
| `active-theme.tsx` | ActiveThemeProvider 컨텍스트 (쿠키 기반 테마 상태) |
| `theme-provider.tsx` | next-themes 기반 ThemeProvider 래퍼 |
| `theme-mode-toggle.tsx` | 다크/라이트/시스템 모드 토글 UI |
| `theme-selector.tsx` | 커스텀 테마 선택 UI |
| `theme.config.ts` | 테마 목록 및 기본 테마 설정 (DEFAULT_THEME) |
| `font.config.ts` | 폰트 설정 (fontVariables) |

## For AI Agents

### Working In This Directory
- 테마는 CSS 변수 기반으로 동작하며, `data-theme` HTML 속성으로 활성 테마를 식별한다
- 새 테마 추가: `src/styles/themes/`에 CSS 파일 생성 후 `theme.config.ts`에 등록
- `active-theme.tsx`는 쿠키(`active_theme`)를 사용하여 SSR에서도 테마를 유지한다

<!-- MANUAL: -->
