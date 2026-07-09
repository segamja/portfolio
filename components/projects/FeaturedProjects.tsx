"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useUIStore } from "@/lib/store";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn, staggerContainer, staggerItem } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

export function FeaturedProjects() {
  const openProject = useUIStore((s) => s.openProject);

  return (
    <Section id="projects" className="section-projects relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[400px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <Container className="relative">
        <FadeIn>
          <SectionHeader
            title="대표 프로젝트"
            subtitle="기술 목록이 아닌, 문제와 결과 중심으로 소개합니다."
          />
        </FadeIn>

        <motion.div
          className="grid gap-10 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={staggerItem}>
              <ProjectCard project={project} onClick={() => openProject(project.slug)} />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <ProjectDetail />
    </Section>
  );
}
