"use client";

import { motion } from "framer-motion";
import { Github, ArrowDown, FileDown, Cpu, Layers, Network } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { withBasePath } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

function HeroVisual() {
  const nodes = [
    { x: "20%", y: "25%", delay: 0 },
    { x: "50%", y: "15%", delay: 0.2 },
    { x: "75%", y: "30%", delay: 0.4 },
    { x: "35%", y: "55%", delay: 0.3 },
    { x: "65%", y: "60%", delay: 0.5 },
    { x: "50%", y: "80%", delay: 0.6 },
  ];

  return (
    <div className="relative flex h-full min-h-[360px] items-center justify-center lg:min-h-[520px]">
      <div className="absolute inset-0 rounded-[24px] bg-grid opacity-50" />
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      <div className="absolute top-1/3 left-1/3 h-48 w-48 rounded-full bg-primary/15 blur-[90px]" />
      <div className="absolute right-1/4 bottom-1/4 h-36 w-36 rounded-full bg-accent/10 blur-[70px]" />

      <svg
        className="absolute inset-0 h-full w-full rounded-[24px] opacity-20"
        viewBox="0 0 400 400"
        fill="none"
      >
        <motion.line
          x1="80" y1="100" x2="200" y2="60"
          stroke="rgba(59,130,246,0.4)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line
          x1="200" y1="60" x2="300" y2="120"
          stroke="rgba(59,130,246,0.4)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.line
          x1="140" y1="220" x2="260" y2="240"
          stroke="rgba(34,197,94,0.3)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.line
          x1="200" y1="60" x2="140" y2="220"
          stroke="rgba(255,255,255,0.1)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full border border-primary/40 bg-primary/20"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + node.delay }}
        />
      ))}

      <motion.div
        className="glass-card gradient-border relative w-full max-w-sm p-6 glow-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-4 flex items-center gap-2">
          <Network size={14} className="text-primary" />
          <span className="text-xs font-medium tracking-wider text-gray">
            시스템 구조
          </span>
        </div>

        <div className="space-y-3">
          {[
            { icon: Layers, label: "플랫폼 레이어", width: "85%" },
            { icon: Cpu, label: "임베디드 코어", width: "72%" },
            { icon: Network, label: "데이터 흐름", width: "94%" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
            >
              <item.icon size={16} className="text-primary" />
              <div className="flex-1">
                <p className="text-xs text-gray">{item.label}</p>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                    initial={{ width: 0 }}
                    animate={{ width: item.width }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass absolute -top-4 -right-2 rounded-2xl px-4 py-2.5"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-medium text-accent">양산 검증</span>
      </motion.div>

      <motion.div
        className="glass absolute -bottom-2 -left-2 rounded-2xl px-4 py-2.5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <span className="text-xs font-medium text-primary">구조 설계</span>
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
            <HeroVisual />
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
