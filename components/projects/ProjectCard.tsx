import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/types";

const thumbnailGradients: Record<string, string> = {
  "hyundai-search-platform": "from-blue-600/40 via-primary/30 to-indigo-900/40",
  "can-simulator": "from-emerald-600/30 via-accent/20 to-teal-900/30",
  "avn-platform": "from-violet-600/30 via-purple-500/20 to-indigo-900/30",
  "ars-server": "from-orange-600/25 via-amber-500/15 to-red-900/25",
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const gradient = thumbnailGradients[project.slug] || "from-primary/30 to-surface";

  return (
    <Card hover onClick={onClick} className="group flex h-full flex-col overflow-hidden p-0">
      <div
        className={`relative h-36 bg-gradient-to-br ${gradient} border-b border-white/[0.06]`}
      >
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="text-[26px] leading-tight font-semibold tracking-tight text-text transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray">{project.summary}</p>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-xs font-medium tracking-wider text-primary">내 역할</p>
            <p className="mt-1 text-sm text-text/90">{project.role}</p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wider text-gray">해결한 문제</p>
            <p className="mt-1 text-sm leading-relaxed text-gray">{project.challenge}</p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-wider text-accent">결과</p>
            <p className="mt-1 text-sm leading-relaxed text-gray">{project.result}</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
          상세 보기
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Card>
  );
}
