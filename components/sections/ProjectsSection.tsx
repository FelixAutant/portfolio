"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "./SectionWrapper";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FlagshipProjectCard } from "@/components/projects/FlagshipProjectCard";
import { ProjectMiniCard } from "@/components/projects/ProjectMiniCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const COLUMNS = 3;

// Les cartes de la dernière rangée incomplète se partagent la largeur.
function isInIncompleteLastRow(index: number, total: number): boolean {
  const remainder = total % COLUMNS;
  return remainder !== 0 && index >= total - remainder;
}

export function ProjectsSection() {
  const t = useTranslations("projects");

  const flagship = projects.find((project) => project.featured);
  const others = projects.filter((project) => project !== flagship);

  return (
    <SectionWrapper
      id="projects"
      className="bg-ink dark:bg-ink"
      containerClassName="max-w-[1160px]"
    >
      <div className="flex flex-col gap-14">
        <header className="flex flex-col items-center gap-3.5 text-center">
          <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-accent">
            {t("eyebrow")}
          </span>
          <h2 className="m-0 font-display text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-sand">
            {t.rich("headline", {
              accent: (chunks) => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </h2>
          <p className="m-0 max-w-[560px] text-lg leading-relaxed text-sand-muted">
            {t("lead")}
          </p>
        </header>

        {flagship && (
          <ScrollReveal>
            <FlagshipProjectCard project={flagship} />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-6">
          {others.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.06}
              className={cn(
                "h-full min-[900px]:col-span-2",
                isInIncompleteLastRow(index, others.length) &&
                  "min-[900px]:col-span-3"
              )}
            >
              <ProjectMiniCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
