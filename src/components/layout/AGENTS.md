<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# layout

## Purpose
애플리케이션 레이아웃 구성 컴포넌트. 사이드바, 헤더, 프로바이더 등 페이지 구조를 정의하는 컴포넌트들이다.

## Key Files

| File | Description |
|------|-------------|
| `app-sidebar.tsx` | 메인 사이드바 컴포넌트 (네비게이션, 조직 전환, 사용자 메뉴) |
| `header.tsx` | 상단 헤더 (브레드크럼, 검색, 테마 토글) |
| `info-sidebar.tsx` | 우측 정보 사이드바 |
| `page-container.tsx` | 페이지 콘텐츠 래퍼 (스크롤 영역) |
| `providers.tsx` | 클라이언트 프로바이더 래퍼 (ActiveThemeProvider) |
| `user-nav.tsx` | 사용자 드롭다운 메뉴 |
| `cta-github.tsx` | GitHub CTA 버튼 |

## For AI Agents

### Working In This Directory
- `app-sidebar.tsx`는 `nav-config.ts`를 참조하여 네비게이션을 렌더링한다
- `providers.tsx`는 클라이언트 컴포넌트로, ActiveThemeProvider를 감싼다
- 레이아웃 변경 시 대시보드 전체에 영향을 미치므로 주의한다

<!-- MANUAL: -->
