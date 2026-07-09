"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { useUIStore } from "@/lib/store";
import { Badge } from "@/components/ui/Badge";

const detailSections = [
  { key: "challenge", label: "문제" },
  { key: "contribution", label: "내 역할" },
  { key: "architecture", label: "해결" },
  { key: "result", label: "성과" },
] as const;

export function ProjectDetail() {
  const { activeProjectSlug, closeProject } = useUIStore();
  const project = activeProjectSlug ? getProjectBySlug(activeProjectSlug) : null;

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeProject]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          />
          <motion.div
            className="glass-card gradient-border fixed inset-x-4 top-[88px] bottom-4 z-[70] mx-auto max-w-3xl overflow-y-auto shadow-2xl sm:inset-x-8"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.06] bg-background/80 px-7 py-5 backdrop-blur-xl">
              <h2 id="project-detail-title" className="text-xl font-bold text-text">
                {project.title}
              </h2>
              <button
                type="button"
                onClick={closeProject}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-gray transition-colors hover:border-white/15 hover:bg-white/[0.04] hover:text-text"
                aria-label="프로젝트 상세 닫기"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-8 p-7 md:p-8">
              <div>
                <p className="text-sm font-medium text-accent">{project.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} className="text-primary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {detailSections.map((section, i) => (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <h3 className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                    {section.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray">
                    {project[section.key]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
