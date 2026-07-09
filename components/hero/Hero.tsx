"use client";

import { motion } from "framer-motion";
import { Github, ArrowDown, FileDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { withBasePath } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

function HeroProfile() {
  const profileSrc = withBasePath("/picture.jpg");

  return (
    <div className="flex h-full min-h-[360px] items-center justify-center lg:min-h-[520px]">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute h-[240px] w-[240px] rounded-full bg-primary/25 blur-2xl"
          aria-hidden="true"
        />
        <img
          src={profileSrc}
          alt={`${SITE_CONFIG.name} 프로필 사진`}
          width={240}
          height={240}
          className="relative h-[240px] w-[240px] rounded-full border border-white/25 object-cover shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_40px_rgba(59,130,246,0.2)]"
        />
      </motion.div>
    </div>
  );
}

export function Hero() {
  const resumePath = withBasePath("/resume/resume.pdf");

  return (
    <section
      id="hero"
      className="section-hero relative flex min-h-screen items-center overflow-hidden scroll-mt-0 pt-[72px]"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-[72px]">
                <span className="block text-gradient-primary">{SITE_CONFIG.headlineLine1}</span>
                <span className="block text-text">{SITE_CONFIG.headlineLine2}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-gray">
                {SITE_CONFIG.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Button href="#projects">대표 프로젝트</Button>
                <Button href={resumePath} variant="secondary" external>
                  <FileDown size={18} />
                  이력서
                </Button>
                <Button href={SITE_CONFIG.github} variant="secondary" external>
                  <Github size={18} />
                  GitHub
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="right">
            <HeroProfile />
          </FadeIn>
        </div>
      </Container>

      <motion.a
        href="#values"
        className="absolute bottom-10 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray backdrop-blur-sm transition-colors hover:border-white/20 hover:text-text"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-label="핵심 역량 섹션으로 이동"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
