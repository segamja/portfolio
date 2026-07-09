# 09_UI_REDESIGN_MASTER.md
# Premium UI/UX Redesign Master Guide

> 목적
현재 프로젝트의 기능과 구조는 유지하면서 디자인을 Premium SaaS Landing Page 수준으로 리디자인한다.

---

# 절대 변경 금지

- Next.js 구조
- 컴포넌트 계층
- 데이터
- 기능
- 라우팅
- SEO
- 반응형 구조

---

# 디자인 방향

레퍼런스

- Apple
- Stripe
- Linear
- Vercel
- Raycast

키워드

- Premium
- Minimal
- Confident
- Engineering
- Modern

AI 템플릿처럼 보이지 않아야 한다.

---

# 전체 컬러

배경은 단일 색상을 사용하지 않는다.

Section마다 아주 약한 Gradient를 적용한다.

Hero
#0B1220 → #111C34

Projects
#0F172A

Career
#111827

Learning
#0B1220

Footer
#090F1B

---

# Hero

현재 Hero는 삭제 후 재구성한다.

좌측
- Badge (Embedded Software Engineer)
- 강한 Headline
- 2줄 소개
- CTA 2개

우측
- Abstract Architecture Illustration
- Grid
- Glow
- Blur
- Floating Card
- Motion

Hero 높이 100vh

Headline
64~72px

---

# Navigation

Glass Morphism

backdrop-blur

스크롤 시
- Blur
- Border
- Shadow
- Active underline animation

---

# Typography

Headline
Bold

Body
Regular

Section Title
48px

Card Title
26px

Line Height
1.6

---

# Section Layout

Container

max-width 1280px

Section Padding

140px

Grid Gap

40px

---

# Card Design

Border Radius

24px

Border

rgba(255,255,255,.08)

Hover

translateY(-8px)

Shadow

Glass 느낌

Gradient Border

---

# Project Cards

현재 카드 제거

새 구조

썸네일

프로젝트명

한줄 소개

담당 역할

핵심 기술

성과

View Detail →

Hover Animation

---

# Career

Vertical Timeline

회사

직책

기간

주요 프로젝트

주요 성과

Timeline Animation

---

# Learning

아이콘

Badge

진행 상태

Learning Path

추가

---

# Contact

Call To Action

"좋은 팀과 새로운 문제를 기다리고 있습니다."

Email

GitHub

Resume

LinkedIn 자리 확보

---

# Footer

간결하게

Copyright

GitHub

Email

---

# Animation

Framer Motion

Fade

Slide

Scale

Stagger

Scroll Reveal

과한 Motion 금지

---

# Background

Grid Pattern

Noise Texture

Gradient Glow

Blur Circle

Section Divider

---

# Cursor 작업 지시

이 문서를 기준으로 전체 UI를 리디자인한다.

텍스트 내용은 유지한다.

기능은 유지한다.

레이아웃의 큰 흐름은 유지한다.

Premium SaaS Landing Page 수준으로 시각적 완성도를 높인다.

작업 완료 후

- 변경 파일 목록
- 적용한 디자인 개선 사항
- Lighthouse 결과

를 보고한다.
