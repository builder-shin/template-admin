<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# styles

## Purpose
글로벌 CSS 스타일과 테마 CSS 파일을 포함하는 디렉토리.

## Key Files

| File | Description |
|------|-------------|
| `globals.css` | 글로벌 스타일 (Tailwind CSS 지시문, CSS 변수 정의) |
| `theme.css` | 기본 테마 CSS 변수 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `themes/` | 커스텀 테마 CSS 파일들 (see `themes/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Tailwind CSS v4를 사용하며, CSS 변수로 테마 색상을 정의한다
- 새 테마 추가 시 `themes/` 하위에 CSS 파일을 생성한다
- `globals.css`는 루트 레이아웃에서 import된다

<!-- MANUAL: -->
