<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-07 | Updated: 2026-02-07 -->

# config

## Purpose
애플리케이션 설정 파일을 포함하는 디렉토리. 네비게이션 구성, 데이터 테이블 설정, 정보 사이드바 설정 등을 관리한다.

## Key Files

| File | Description |
|------|-------------|
| `nav-config.ts` | 사이드바 네비게이션 항목 정의 (RBAC access 속성 포함, 한국어 라벨) |
| `data-table.ts` | 데이터 테이블 기본 설정 |
| `infoconfig.ts` | 정보 사이드바 설정 |

## For AI Agents

### Working In This Directory
- 네비게이션 항목 추가/수정 시 `nav-config.ts` 수정
- RBAC 접근 제어: `access` 속성으로 `requireOrg`, `permission`, `plan`, `feature`, `role` 지정 가능
- KBar 명령 팔레트도 nav-config를 참조하므로, 네비게이션 변경 시 Cmd+K 검색에도 반영됨

<!-- MANUAL: -->
