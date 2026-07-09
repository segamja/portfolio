# Park Hong Min Portfolio - Master PRD v1.0

## 1. Product Vision

### Product Name

Park Hong Min -- Developer Branding Portfolio

### Goal

이 프로젝트는 이력서를 웹으로 옮기는 것이 아니라 채용담당자가 30초 안에
전문성을 느끼고 프로젝트를 탐색하도록 만드는 제품 수준의 포트폴리오를
구축한다.

### Target

-   Embedded Software Engineer
-   Automotive Software Engineer
-   Software Architect
-   Technical Lead
-   IT Instructor(기업/대학/국비)

------------------------------------------------------------------------

## 2. Brand Identity

### Core Message

**Designing Reliable Software. Solving Real Problems.**

### Brand Keywords

-   Reliable
-   Architecture
-   Problem Solving
-   Production Quality
-   Leadership
-   Continuous Learning
-   AI-assisted Development

### Do Not

-   "20년 경력"을 전면에 노출하지 않는다.
-   생년월일/나이 강조 금지
-   긴 자기소개 금지
-   기술 나열 중심 금지
-   이력서를 HTML로 복사하지 않는다.

------------------------------------------------------------------------

## 3. Technology Stack

-   Next.js 15 (App Router)
-   React 19
-   TypeScript
-   Tailwind CSS
-   Framer Motion
-   Lucide Icons
-   Zustand
-   next-themes
-   pnpm
-   GitHub Pages

------------------------------------------------------------------------

## 4. UX Principles

1.  Show, Don't Tell
2.  Projects First
3.  Story First
4.  Minimal UI
5.  Fast Loading
6.  Mobile First
7.  Accessibility First

------------------------------------------------------------------------

## 5. Information Architecture

1.  Hero
2.  Core Value
3.  Featured Projects
4.  Engineering Story
5.  Career Timeline
6.  Learning Now
7.  Contact
8.  Footer

------------------------------------------------------------------------

## 6. Hero

Headline: \> Designing Reliable Software. \> Solving Real Problems.

Subtitle: - Software Engineer - Embedded Systems - System Architecture -
AI-assisted Development

Buttons: - View Projects - GitHub

------------------------------------------------------------------------

## 7. Core Value

Cards: - Architecture - Problem Solving - Leadership - Production
Quality - Continuous Learning

Hover animation only.

------------------------------------------------------------------------

## 8. Featured Projects

Projects: 1. Hyundai Search Platform 2. CAN Simulator 3. AVN Platform 4.
ARS Server

Project Detail Template: - Overview - Challenge - Architecture - My
Contribution - Tech Stack - Result - Lessons Learned

------------------------------------------------------------------------

## 9. Engineering Story

Sections: - How I Solve Problems - How I Design Systems - How I Debug -
How I Lead Teams - How I Use AI

------------------------------------------------------------------------

## 10. Career

Vertical Timeline.

회사 설명 최소. 프로젝트 중심.

------------------------------------------------------------------------

## 11. Learning Now

Cards: - Next.js - FastAPI - Docker - Kubernetes - Cursor - ChatGPT -
Claude - MCP

------------------------------------------------------------------------

## 12. Contact

-   GitHub
-   Email
-   Resume Download

------------------------------------------------------------------------

## 13. Design System

Colors: - Background: #0F172A - Surface: #111827 - Primary: #2563EB -
Text: #F8FAFC - Gray: #94A3B8 - Accent: #22C55E

Typography: - Pretendard - Inter

Spacing: 8pt Grid

Radius: 16px

------------------------------------------------------------------------

## 14. Responsive

Desktop: 1440+ Tablet: 768+ Mobile: 390+

------------------------------------------------------------------------

## 15. Folder Structure

``` text
app/
components/
  hero/
  projects/
  engineering/
  career/
  learning/
  contact/
public/
styles/
types/
lib/
```

------------------------------------------------------------------------

## 16. Development Rules

-   Atomic Components
-   Strict TypeScript
-   Reusable Components
-   No Inline Styles
-   Tailwind Utility First
-   ESLint
-   Prettier

------------------------------------------------------------------------

## 17. Cursor Build Order

1.  Initialize project
2.  Configure Tailwind
3.  Configure Theme
4.  Build Layout
5.  Build Header
6.  Build Hero
7.  Build Core Value
8.  Build Projects
9.  Build Engineering Story
10. Build Career
11. Build Learning
12. Build Contact
13. SEO
14. Deploy GitHub Pages

------------------------------------------------------------------------

## 18. Cursor Master Prompt

Read this PRD completely before writing code.

Build a production-quality developer portfolio that feels comparable to
Vercel, Linear, and Stripe.

Requirements: - One-page application - Dark theme - Professional visual
hierarchy - Responsive - Accessible - Lighthouse score 95+ - SEO
optimized - Reusable component architecture - Framer Motion animations -
GitHub Pages ready

Never generate placeholder portfolio sections. Use reusable components
and prepare the project for future expansion.
