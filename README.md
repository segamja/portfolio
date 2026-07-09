# 박홍민 — 개발자 포트폴리오

Next.js 15, TypeScript, Tailwind CSS로 구축한 프로덕션 수준의 개발자 브랜딩 포트폴리오입니다.

**복잡한 문제를 단순한 구조로.**

## 기술 스택

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
- Zustand
- next-themes

## 시작하기

### 사전 요구사항

- Node.js 20+
- pnpm 9+ (권장) 또는 npm

### 설치

```bash
pnpm install
```

### 개발 서버

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

### 빌드

```bash
pnpm build
```

정적 파일이 `out/` 디렉터리에 생성됩니다.

### 린트

```bash
pnpm lint
```

## 프로젝트 구조

```
app/                  # Next.js App Router 페이지 및 레이아웃
components/
  layout/             # Header, Footer
  hero/               # Hero 섹션
  core-value/         # 핵심 역량 카드
  projects/           # 대표 프로젝트 + 상세 모달
  engineering/        # 엔지니어링 스토리
  career/             # 경력 타임라인
  learning/           # 현재 학습 중
  contact/            # 연락하기
  ui/                 # 재사용 UI 컴포넌트
  providers/          # 테마 프로바이더
data/                 # 콘텐츠 데이터 (프로젝트, 경력 등)
lib/                  # 유틸리티, 상수, 스토어
types/                # TypeScript 타입 정의
public/               # 정적 에셋 (이력서, OG 이미지)
docs/                 # 프로젝트 설계 문서
```

## GitHub Pages 배포

push만 하면 GitHub Actions가 자동으로 빌드·배포합니다.

### 1. 최초 1회 설정

1. GitHub에 저장소를 생성하고 push합니다.
2. **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정합니다.

### 2. 자동 배포

`main` 또는 `master` 브랜치에 push하면 `.github/workflows/deploy.yml`이 실행됩니다.

| 저장소 유형 | URL 예시 | basePath (자동 설정) |
|------------|---------|---------------------|
| 프로젝트 사이트 | `https://username.github.io/repo-name/` | `/repo-name` |
| 사용자 사이트 | `https://username.github.io/` | (없음) |

워크플로우가 수행하는 작업:

1. `pnpm install` — 의존성 설치
2. `NEXT_PUBLIC_BASE_PATH` 자동 설정
3. `pnpm build` — `out/` 폴더에 정적 파일 생성
4. GitHub Pages에 `out/` 배포

### 3. 로컬에서 GitHub Pages 경로 테스트

```powershell
# PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/저장소이름"
pnpm build
```

### 4. 주요 설정 파일

| 파일 | 역할 |
|------|------|
| `next.config.ts` | `output: "export"`, `basePath`, `assetPrefix` |
| `.github/workflows/deploy.yml` | push 시 자동 빌드·배포 |
| `public/.nojekyll` | GitHub Pages Jekyll 비활성화 (`_next` 폴더 서빙) |

### 5. 커스텀 도메인 (선택)

`lib/constants.ts`의 `SITE_CONFIG.url`을 실제 배포 URL로 수정합니다.

## 설정

| 파일 | 용도 |
|------|------|
| `lib/constants.ts` | 사이트 이름, URL, 이메일, GitHub |
| `next.config.ts` | 정적 export, basePath |
| `.env.local` | 로컬 환경 변수 |

### 환경 변수

```env
NEXT_PUBLIC_BASE_PATH=
```

로컬 개발 시 비워 둡니다. GitHub Pages 배포 시 `/repo-name`으로 설정합니다.

## 디자인 시스템

| 토큰 | 값 |
|------|-----|
| Background | `#0B1220` |
| Surface | `#111827` |
| Primary | `#3B82F6` |
| Text | `#F8FAFC` |
| Gray | `#94A3B8` |
| Accent | `#22C55E` |

## 라이선스

비공개 프로젝트. All rights reserved.
