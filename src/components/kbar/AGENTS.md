<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# kbar

## Purpose
Cmd+K 명령 팔레트(KBar) 컴포넌트. 키보드 단축키를 통한 빠른 네비게이션과 테마 전환 기능을 제공한다.

## Key Files

| File | Description |
|------|-------------|
| `index.tsx` | KBar 프로바이더 및 액션 등록 (nav-config 기반) |
| `render-result.tsx` | 검색 결과 렌더링 컴포넌트 |
| `result-item.tsx` | 개별 결과 항목 컴포넌트 |
| `use-theme-switching.tsx` | 테마 전환 액션 훅 |

## For AI Agents

### Working In This Directory
- KBar 액션은 `src/config/nav-config.ts`의 `navItems`에서 자동 생성된다
- `shortcut` 속성이 있는 네비게이션 항목은 키보드 단축키로도 접근 가능
- 테마 전환은 `use-theme-switching.tsx`에서 별도로 관리

<!-- MANUAL: -->
