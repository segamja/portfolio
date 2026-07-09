import type { NextConfig } from "next";

/**
 * GitHub Pages 배포 설정
 *
 * - 로컬 개발: NEXT_PUBLIC_BASE_PATH 미설정 (빈 문자열)
 * - 프로젝트 사이트: NEXT_PUBLIC_BASE_PATH=/저장소이름
 * - 사용자 사이트 (username.github.io): NEXT_PUBLIC_BASE_PATH 미설정
 *
 * GitHub Actions에서 자동으로 설정됩니다.
 */
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? basePath : "",
  assetPrefix: isProd && basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
