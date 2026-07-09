import type { EngineeringStory } from "@/types";

export const engineeringStories: EngineeringStory[] = [
  {
    id: "solve-problems",
    title: "복잡한 문제를 구조로 풀다",
    description: "이슈가 발생하면 데이터 흐름을 추적해 원인을 찾고, 구조를 단순하게 수정합니다.",
    highlights: [
      "검색 응답 병목 구간 분석 및 성능 개선",
      "Cold Boot 불안정 원인 분석 및 초기화 코드 수정",
      "전원 차단 시 데이터 손상 문제 해결",
    ],
  },
  {
    id: "design-systems",
    title: "요구사항을 구조로 정리하다",
    description: "복잡한 요구사항을 데이터 흐름과 인터페이스로 나누어 안정적인 구조를 만듭니다.",
    highlights: [
      "검색 데이터 처리 파이프라인 설계",
      "AVN Media, Bluetooth, AVM 모듈 구조 설계",
      "CAN Simulator 검증 장비 구조 설계",
    ],
  },
  {
    id: "debug",
    title: "양산 품질을 코드로 지키다",
    description: "형상관리와 이슈 대응 절차를 운영하며, 릴리즈 전 품질을 확인합니다.",
    highlights: [
      "Git/Bitbucket 기반 형상관리 운영",
      "검색 인터페이스 장애 분석·개선",
      "양산 품질 기준에 맞는 코드 검증",
    ],
  },
  {
    id: "lead-teams",
    title: "설계와 코드로 팀을 이끌다",
    description: "개발팀장·PM으로 일정과 품질을 함께 관리하며, 기술 의사결정을 주도합니다.",
    highlights: [
      "현대차 검색 플랫폼 개발팀장",
      "르노삼성 AVN Software PM",
      "완성차–협력사–개발 조직 간 기술 조율",
    ],
  },
  {
    id: "use-ai",
    title: "AI로 생산성을 높이다",
    description: "AI 도구를 활용해 설계·구현 속도를 높이고, 결과를 직접 검증해 적용합니다.",
    highlights: [
      "Cursor, MCP를 활용한 코드 작성·구조 설계",
      "ChatGPT, Claude를 활용한 기술 검토",
      "이 포트폴리오 사이트 직접 구현",
    ],
  },
];
