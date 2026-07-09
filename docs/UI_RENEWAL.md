# UI_RENEWAL.md
# Portfolio UI/UX 리뉴얼 가이드 (v2)

## 목적
현재 구조와 기능은 유지한다.
디자인만 'AI 기본 포트폴리오' 수준에서 '프리미엄 SaaS 랜딩페이지' 수준으로 개선한다.

절대 변경 금지
- 컴포넌트 구조
- 라우팅
- 데이터
- 기능
- 반응형 구조

변경 대상
- 색상
- 여백
- 타이포그래피
- 카드 디자인
- 버튼
- 애니메이션
- 아이콘
- 배경

---

# 디자인 컨셉

키워드

- Apple
- Linear
- Vercel
- Raycast
- Stripe

느낌

- Premium
- Modern
- Clean
- Professional

---

# Color

배경

기존
#0F172A

변경

배경에 아주 약한 Radial Gradient 적용

Hero 상단 Glow 추가

Section마다 명암을 조금씩 다르게 사용한다.

카드는 배경보다 5~8% 밝게 한다.

카드 Border

rgba(255,255,255,0.08)

Hover

rgba(255,255,255,0.15)

---

# Hero

현재 Hero는 너무 단조롭다.

추가

- Grid Pattern
- Gradient Glow
- Blur Circle
- Scroll Indicator
- 마우스에 반응하는 Glow 효과

Headline

현재보다 20% 크게

행간 증가

Subtitle 최대폭 680px

버튼은 Primary / Secondary 구분

---

# Navigation

스크롤 시

- Blur
- Glass Effect
- Border Bottom
- 그림자 약하게

Active 메뉴는 파란색 밑줄 애니메이션.

---

# Cards

모든 카드 공통

Border Radius 20px

Padding 28px

Hover

translateY(-6px)

Shadow 추가

상단에 Category Badge 추가

오른쪽 아래 Arrow 아이콘 추가

---

# Featured Projects

프로젝트 카드는

- 프로젝트명
- 한줄 설명
- Tech Stack Badge
- 주요 성과
- View Detail 버튼

을 표시한다.

가능하면 프로젝트 썸네일 Placeholder 추가.

---

# Career Timeline

단순 목록 대신

Vertical Timeline

회사 로고 Placeholder

기간

직책

핵심 역할

---

# Learning

카드마다

Framework / AI / DevOps 등의 Badge

아이콘 추가

---

# Animation

Framer Motion 사용

Section Fade

Card Stagger

Hover Scale 1.02

Duration 0.35s

과한 Animation 금지

---

# Spacing

Section Top Bottom

120px

Card Gap

32px

Container Width

1280px

---

# Cursor 작업 지시

이 문서를 기준으로 UI만 리뉴얼한다.

절대 변경 금지

- 텍스트 내용
- 컴포넌트 구조
- 데이터 구조
- 라우팅

변경

- 색상
- 여백
- 타이포그래피
- 카드
- 버튼
- 배경
- 애니메이션

작업 후 Lighthouse 성능을 유지한다.
