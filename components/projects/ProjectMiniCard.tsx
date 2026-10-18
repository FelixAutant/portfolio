import { useLocale } from "next-intl";
import type { Project } from "@/data/projects";

const MAX_STACK_ITEMS = 3;

interface ProjectMiniCardProps {
  project: Project;
}

export function ProjectMiniCard({ project }: ProjectMiniCardProps) {
  const locale = useLocale() === "en" ? "en" : "fr";
  const kicker = project.kicker?.[locale] ?? project.role?.[locale];
  const stackLine =
    project.stackLine ??
    project.technologies.slice(0, MAX_STACK_ITEMS).join(" · ");

  return (
    <article className="flex h-full flex-col gap-3 rounded-[20px] border border-ink-line-soft bg-ink-panel p-7 transition-all hover:-translate-y-0.5 hover:border-primary/55">
      {kicker && (
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-secondary">
          {kicker}
        </span>
      )}
      <h4 className="m-0 font-display text-2xl font-bold text-sand">
        {project.title}
      </h4>
      <p className="m-0 text-[15px] leading-[1.55] text-sand-muted">
        {project.description[locale]}
      </p>
      <p className="mb-0 mt-1.5 font-mono text-xs text-sand-faint">
        {stackLine}
      </p>
    </article>
  );
}
