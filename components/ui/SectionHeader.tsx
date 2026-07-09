import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      <h2 className="text-4xl font-bold tracking-tight text-text md:text-[48px] md:leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray">{subtitle}</p>
      )}
    </div>
  );
}
