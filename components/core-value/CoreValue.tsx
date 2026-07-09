"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Lightbulb,
  Users,
  ShieldCheck,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { coreValues } from "@/data/core-values";
import { SITE_CONFIG } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, staggerContainer, staggerItem } from "@/components/ui/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  lightbulb: Lightbulb,
  users: Users,
  "shield-check": ShieldCheck,
  "book-open": BookOpen,
};

export function CoreValue() {
  return (
    <Section id="values" className="relative overflow-hidden">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />

      <Container className="relative">
        <FadeIn>
          <SectionHeader
            title="핵심 역량"
            subtitle={SITE_CONFIG.brandMessage}
          />
        </FadeIn>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {coreValues.map((value) => {
            const Icon = iconMap[value.icon] || Layers;
            return (
              <motion.div key={value.id} variants={staggerItem}>
                <Card hover className="group h-full">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/15">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-[26px] leading-tight font-semibold text-text">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
