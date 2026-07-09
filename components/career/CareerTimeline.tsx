"use client";

import { motion } from "framer-motion";
import { careerEntries } from "@/data/career";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function CareerTimeline() {
  return (
    <Section id="career" className="section-career relative overflow-hidden">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-30" />

      <Container className="relative">
        <FadeIn>
          <SectionHeader
            title="경력"
            subtitle="프로젝트 중심으로 쌓아온 실무 경험입니다."
          />
        </FadeIn>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute top-0 bottom-0 left-[11px] w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {careerEntries.map((entry, index) => (
              <FadeIn key={entry.company} delay={index * 0.08}>
                <div className="relative pl-12">
                  <motion.div
                    className="absolute left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/50 bg-background"
                    whileInView={{ scale: [0, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </motion.div>

                  <motion.div
                    className="glass-card gradient-border p-7"
                    whileInView={{ opacity: [0, 1], x: [16, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <span className="text-xs font-medium text-gray">{entry.period}</span>
                    <h3 className="mt-2 text-xl font-semibold text-text">{entry.role}</h3>
                    <p className="mt-1 text-sm text-primary">{entry.company}</p>
                    <p className="mt-4 text-sm leading-relaxed text-gray">
                      {entry.projects[0]}
                    </p>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
