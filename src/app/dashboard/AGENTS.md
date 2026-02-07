<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# dashboard

## Purpose
대시보드 영역의 라우트 및 페이지. 사이드바, 헤더, KBar 명령 팔레트를 포함하는 레이아웃을 공유하는 보호된 페이지들이다.

## Key Files

| File | Description |
|------|-------------|
| `layout.tsx` | 대시보드 레이아웃 (AppSidebar, Header, KBar, InfoSidebar, 쿠키 기반 사이드바 상태 유지) |
| `page.tsx` | 대시보드 메인 페이지 (`/dashboard`) |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `overview/` | 통계 대시보드 (병렬 라우트로 4개 차트 패널) (see `overview/AGENTS.md`) |
| `product/` | 상품 관리 페이지 (목록, 상세) |
| `kanban/` | 칸반 보드 페이지 |
| `billing/` | 결제 관리 페이지 |
| `exclusive/` | 프리미엄 전용 페이지 |
| `workspaces/` | 워크스페이스 및 팀 관리 페이지 |

## For AI Agents

### Working In This Directory
- 대시보드 레이아웃은 SidebarProvider + InfobarProvider를 중첩 사용한다
- 새 대시보드 페이지 추가 시 이 디렉토리 하위에 폴더를 만들고 `page.tsx` 생성
- 네비게이션에도 반영하려면 `src/config/nav-config.ts`를 함께 수정한다

### Common Patterns
- 페이지 컴포넌트는 주로 feature 컴포넌트를 import하여 렌더링
- 병렬 라우트(`@slot`)는 overview에서 활용

<!-- MANUAL: -->
