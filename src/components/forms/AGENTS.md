<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# forms

## Purpose
react-hook-form 기반의 재사용 가능한 폼 필드 컴포넌트 모음. 각 컴포넌트는 FormField와 통합되어 검증 및 에러 처리를 자동으로 수행한다.

## Key Files

| File | Description |
|------|-------------|
| `demo-form.tsx` | 모든 폼 컴포넌트를 시연하는 데모 폼 |
| `form-input.tsx` | 텍스트 입력 필드 |
| `form-textarea.tsx` | 텍스트 영역 필드 |
| `form-select.tsx` | 셀렉트(드롭다운) 필드 |
| `form-checkbox.tsx` | 단일 체크박스 필드 |
| `form-checkbox-group.tsx` | 체크박스 그룹 필드 |
| `form-radio-group.tsx` | 라디오 그룹 필드 |
| `form-date-picker.tsx` | 날짜 선택 필드 |
| `form-file-upload.tsx` | 파일 업로드 필드 |
| `form-slider.tsx` | 슬라이더 필드 |
| `form-switch.tsx` | 토글 스위치 필드 |

## For AI Agents

### Working In This Directory
- 모든 폼 컴포넌트는 react-hook-form의 `useFormContext`와 통합된다
- 새 폼 필드 타입 추가 시 기존 컴포넌트의 패턴을 따른다
- zod 스키마로 폼 검증을 정의한다

<!-- MANUAL: -->
