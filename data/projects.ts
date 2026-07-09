import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "hyundai-search-platform",
    title: "현대차 검색 플랫폼",
    summary: "차량 검색 데이터 처리 구조를 설계하고 양산 품질을 안정화했습니다.",
    role: "검색 플랫폼 개발팀장",
    tech: ["C++", "Qt", "STL", "Git", "Bitbucket", "HMI"],
    overview: "",
    challenge:
      "다차종 환경에서 검색 응답 성능과 HMI 연동 품질을 동시에 맞춰야 했습니다.",
    contribution:
      "검색 데이터 처리 구조를 설계했습니다. HMI 인터페이스를 개발했습니다. 검색 품질 개선과 양산 안정화를 담당했습니다.",
    architecture:
      "STL(Vector) 기반 성능 최적화를 적용했습니다. 검색 엔진–서비스–HMI 구간 구조를 정리했습니다.",
    result:
      "검색 품질을 개선하고 양산 안정화 기준을 충족했습니다. 현대·기아·제네시스 차량에 적용했습니다.",
    lessons: "",
  },
  {
    slug: "can-simulator",
    title: "CAN Simulator",
    summary: "실차 없이 CAN 기능을 검증할 수 있는 시뮬레이터를 개발했습니다.",
    role: "설계 · 개발",
    tech: ["C++", "VC++", "CAN Protocol", "Windows"],
    overview: "",
    challenge:
      "양산 검증에 실차가 필요해 공정 시간이 길었고, 반복 검증 환경이 필요했습니다.",
    contribution:
      "VC++ 기반 CAN 통신 시뮬레이터를 설계·개발했습니다. AVN 연동 검증을 수행했습니다.",
    architecture:
      "CAN 통신 패턴 에뮬레이션 구조를 구현했습니다. 양산 검증 공정에 맞게 장비 형태로 구성했습니다.",
    result:
      "실차 없이 CAN 기능 검증이 가능해졌습니다. 양산 검증 표준 장비로 채택됐습니다.",
    lessons: "",
  },
  {
    slug: "avn-platform",
    title: "AVN Platform",
    summary: "르노삼성 차량용 AVN 플랫폼을 설계하고 양산까지 이끌었습니다.",
    role: "Software PM",
    tech: ["C/C++", "Embedded C++", "Bluetooth", "iAP1/iAP2", "Android", "Windows CE"],
    overview: "",
    challenge:
      "다차종 AVN 개발과 양산 일정을 맞추며 Media, Bluetooth, AVM을 하나의 구조로 통합해야 했습니다.",
    contribution:
      "일정·품질·기술 의사결정을 담당했습니다. Media, Bluetooth, AVM 기능 통합을 수행했습니다.",
    architecture:
      "차량용 AVN 모듈 구조를 설계했습니다. 초기화·예외처리·성능 최적화를 적용했습니다.",
    result:
      "르노삼성 MFD, B98, LFD 등 차종을 양산했습니다. AVN 플랫폼 안정성을 확보했습니다.",
    lessons: "",
  },
  {
    slug: "ars-server",
    title: "ARS Server",
    summary: "콜센터용 ARS·TTS·FAX 서버를 설계하고 금융·통신 분야에 구축했습니다.",
    role: "서버 개발 · PM",
    tech: ["C/C++", "TCP/IP", "UDP", "FTP", "Multithreading", "TTS"],
    overview: "",
    challenge:
      "동시 접속 환경에서 ARS, TTS, FAX 서비스를 안정적으로 운영해야 했습니다.",
    contribution:
      "TCP/IP 멀티스레드 서버를 설계·구현했습니다. ARS, TTS, FAX 응용 프로그램을 개발했습니다.",
    architecture:
      "ARS, TTS, FAX 처리를 모듈 단위로 분리했습니다. 동시 접속 환경에 맞게 서버 구조를 설계했습니다.",
    result:
      "하나증권, SKT, 은행권 ARS·TTS·팩스 서버를 구축했습니다.",
    lessons: "",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
