"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { engineeringStories } from "@/data/engineering-stories";
import { SITE_CONFIG } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, staggerContainer, staggerItem } from "@/components/ui/FadeIn";

export function EngineeringStory() {
  return (
    <Section id="story" className="relative overflow-hidden bg-white/[0.01]">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <Container className="relative">
        <FadeIn>
          <SectionHeader
            title="엔지니어링 스토리"
            subtitle={SITE_CONFIG.brandMessage}
          />
        </FadeIn>

        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {engineeringStories.map((story, index) => (
            <motion.div key={story.id} variants={staggerItem}>
              <Card className="overflow-hidden">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-primary/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[26px] leading-tight font-semibold text-text">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray">{story.description}</p>
                    <ul className="mt-6 space-y-3">
                      {story.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-sm text-gray">
                          <CheckCircle2
                            size={16}
                            className="mt-1 flex-shrink-0 text-accent"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
