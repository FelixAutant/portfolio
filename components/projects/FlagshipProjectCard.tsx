import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Play } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./BrowserFrame";

const toneClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const VISUAL_BACKGROUND =
  "radial-gradient(120% 90% at 85% 15%, rgba(255,92,147,.35), transparent 55%), radial-gradient(90% 80% at 15% 95%, rgba(255,147,87,.28), transparent 60%), #2A1F1C";

const MAX_TECHNOLOGIES = 5;

interface FlagshipProjectCardProps {
  project: Project;
}

export function FlagshipProjectCard({ project }: FlagshipProjectCardProps) {
  const t = useTranslations("projects");
  const locale = useLocale() === "en" ? "en" : "fr";
  const demoHost = project.demoUrl?.replace(/^https?:\/\//, "") ?? "";

  return (
    <article className="flex flex-col overflow-hidden rounded-[28px] border border-ink-line bg-ink-card shadow-[0_40px_120px_rgba(0,0,0,.45)] min-[900px]:flex-row">
      <div className="flex min-w-0 flex-col gap-6 px-6 py-9 min-[900px]:basis-[46%] min-[900px]:px-12 min-[900px]:py-[52px]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-400/[0.12] px-3 py-1.5 text-[13px] font-semibold text-green-300">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,.18)]" />
            {t("status")}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-sand-dim">
            {t("flagship")}
          </span>
        </div>

        <div className="flex flex-col gap-3.5">
          <h3 className="font-display text-[clamp(38px,6vw,52px)] font-extrabold leading-none tracking-[-0.035em] text-sand">
            {project.title}
          </h3>
          <p className="text-xl leading-normal text-sand-soft">
            {project.description[locale]}
          </p>
        </div>

        {project.stats && (
          <dl className="m-0 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line">
            {project.stats.map((stat) => (
              <div
                key={stat.label.fr}
                className="flex flex-col gap-1 bg-ink-card px-3 py-4 min-[400px]:px-3.5"
              >
                <dd
                  className={cn(
                    "font-display text-[28px] font-bold",
                    toneClasses[stat.tone]
                  )}
                >
                  {stat.value}
                </dd>
                <dt className="break-words text-xs text-sand-dim min-[400px]:text-[13px]">
                  {stat.label[locale]}
                </dt>
              </div>
            ))}
          </dl>
        )}

        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {project.technologies.slice(0, MAX_TECHNOLOGIES).map((tech) => (
            <li
              key={tech}
              className="rounded-lg bg-ink-chip px-3 py-1.5 font-mono text-[12.5px] text-sand-soft"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-primary px-[22px] text-base font-semibold text-[#1A0B12] transition-all hover:-translate-y-px hover:bg-[#FF7AA8]"
            >
              <Play className="h-[18px] w-[18px]" aria-hidden="true" />
              {t("tryDemo")}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-ink-line-strong px-5 text-base font-semibold text-sand transition-all hover:border-sand"
            >
              <Code2 className="h-[18px] w-[18px]" aria-hidden="true" />
              {t("sourceCode")}
            </a>
          )}
          {project.caseStudyPath && (
            <Link
              href={`/${locale}${project.caseStudyPath}`}
              className="group inline-flex min-h-12 items-center gap-2 px-2 text-base font-semibold text-accent transition-colors hover:text-accent-light"
            >
              {t("caseStudy")}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
        <p className="m-0 text-[13px] text-sand-faint">{t("demoNote")}</p>
      </div>

      {project.image && (
        <div
          className="relative min-h-[300px] overflow-hidden min-[900px]:min-h-[560px] min-[900px]:basis-[54%]"
          style={{ background: VISUAL_BACKGROUND }}
        >
          {project.imageBack && (
            <div className="absolute right-[-40px] top-11 hidden w-[78%] -rotate-3 overflow-hidden rounded-[14px] bg-white opacity-90 shadow-[0_30px_80px_rgba(0,0,0,.45)] min-[900px]:block">
              <Image
                src={project.imageBack}
                alt={t("imageBackAlt")}
                width={1400}
                height={1200}
                sizes="(min-width: 900px) 40vw, 0px"
                className="block h-auto w-full"
              />
            </div>
          )}
          <BrowserFrame
            url={demoHost}
            className="absolute bottom-10 left-9 right-12 border border-white/[0.12] shadow-[0_40px_100px_rgba(0,0,0,.55)]"
          >
            <Image
              src={project.image}
              alt={t("imageFrontAlt")}
              width={1400}
              height={875}
              sizes="(min-width: 900px) 45vw, 90vw"
              className="block h-auto w-full"
            />
          </BrowserFrame>
        </div>
      )}
    </article>
  );
}
