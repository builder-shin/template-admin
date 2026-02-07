<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# components

## Purpose
프로젝트 전반에서 재사용되는 공유 UI 컴포넌트. shadcn/ui 기반 기본 컴포넌트, 폼 컴포넌트, 레이아웃, 테마, 명령 팔레트(KBar) 등을 포함한다.

## Key Files

| File | Description |
|------|-------------|
| `breadcrumbs.tsx` | 브레드크럼 네비게이션 컴포넌트 |
| `file-uploader.tsx` | 파일 업로드 컴포넌트 (react-dropzone 기반) |
| `form-card-skeleton.tsx` | 폼 카드 로딩 스켈레톤 |
| `icons.tsx` | 프로젝트 아이콘 정의 |
| `nav-main.tsx` | 메인 네비게이션 컴포넌트 |
| `nav-projects.tsx` | 프로젝트 네비게이션 컴포넌트 |
| `nav-user.tsx` | 사용자 네비게이션 컴포넌트 |
| `org-switcher.tsx` | 조직 전환 컴포넌트 |
| `search-input.tsx` | 검색 입력 컴포넌트 |
| `user-avatar-profile.tsx` | 사용자 아바타/프로필 컴포넌트 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `forms/` | 폼 관련 컴포넌트 (입력, 체크박스, 날짜 등) (see `forms/AGENTS.md`) |
| `kbar/` | 명령 팔레트 (Cmd+K) 컴포넌트 (see `kbar/AGENTS.md`) |
| `layout/` | 레이아웃 컴포넌트 (사이드바, 헤더 등) (see `layout/AGENTS.md`) |
| `modal/` | 모달/다이얼로그 컴포넌트 |
| `themes/` | 테마 관련 컴포넌트 (see `themes/AGENTS.md`) |
| `ui/` | shadcn/ui 기본 컴포넌트 (see `ui/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- shadcn/ui 컴포넌트를 추가할 때 `pnpm dlx shadcn@latest add <component>` 명령을 사용한다
- 새 공유 컴포넌트는 이 디렉토리에, 도메인 전용 컴포넌트는 `features/*/components/`에 배치
- `ui/` 하위 파일은 shadcn/ui에서 생성된 것이므로 직접 수정보다 래핑을 권장

### Common Patterns
- shadcn/ui new-york 스타일 사용
- CSS 변수 + Tailwind CSS 클래스 조합
- `cn()` 유틸리티로 조건부 클래스 병합

<!-- MANUAL: -->
