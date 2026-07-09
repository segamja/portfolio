"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Container, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { learningItems } from "@/data/learning";
import { Card } from "@/components/ui/Card";
import { Container as LayoutContainer } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, staggerContainer, staggerItem } from "@/components/ui/FadeIn";
import type { LearningItem } from "@/types";

const categoryLabels = {
  framework: "프레임워크",
  devops: "인프라",
  ai: "AI",
};

const categoryIcons: Record<LearningItem["category"], LucideIcon> = {
  framework: Code2,
  devops: Container,
  ai: Brain,
};

const categoryColors = {
  framework: "text-primary border-primary/20 bg-primary/10",
  devops: "text-accent border-accent/20 bg-accent/10",
  ai: "text-gray border-white/10 bg-white/[0.04]",
};

const progressValues = [90, 85, 80, 70, 75, 60, 65, 55];

export function LearningNow() {
  return (
    <Section id="learning" className="section-learning relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[350px] w-[350px] translate-x-1/4 rounded-full bg-primary/5 blur-[100px]" />

      <LayoutContainer className="relative">
        <FadeIn>
          <SectionHeader
            title="현재 학습 중"
            subtitle="AI를 활용하여 개발 생산성을 높입니다."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10 flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
            <Sparkles size={18} className="text-primary" />
            <p className="text-sm text-gray">
              <span className="font-medium text-text">학습 경로</span> — AI 도구부터
              인프라까지 단계적으로 학습·적용하고 있습니다.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {learningItems.map((item, index) => {
            const Icon = categoryIcons[item.category];
            const progress = progressValues[index % progressValues.length];

            return (
              <motion.div key={item.name} variants={staggerItem}>
                <Card hover className="group h-full">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${categoryColors[item.category]}`}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-accent">
                      학습 중
                    </span>
                  </div>

                  <span
                    className={`mt-5 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-wider ${categoryColors[item.category]}`}
                  >
                    {categoryLabels[item.category]}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-text">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{item.description}</p>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>진행 상태</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </LayoutContainer>
    </Section>
  );
}
