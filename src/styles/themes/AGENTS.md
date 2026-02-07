<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# themes

## Purpose
커스텀 테마 CSS 파일 모음. 각 파일은 CSS 변수를 재정의하여 고유한 색상 스킴을 제공한다.

## Key Files

| File | Description |
|------|-------------|
| `claude.css` | Claude AI 스타일 테마 |
| `mono.css` | 모노크롬 테마 |
| `neobrutualism.css` | 네오브루탈리즘 디자인 테마 |
| `notebook.css` | 노트북 스타일 테마 |
| `supabase.css` | Supabase 스타일 테마 |
| `vercel.css` | Vercel 스타일 테마 |

## For AI Agents

### Working In This Directory
- 새 테마 추가 시 CSS 파일을 생성하고 `src/components/themes/theme.config.ts`에 등록
- 각 CSS 파일은 `[data-theme="<name>"]` 선택자로 CSS 변수를 재정의한다
- 테마 문서: `docs/themes.md` 참조

<!-- MANUAL: -->
