import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, Code2, Play } from "lucide-react";
import { BrowserFrame } from "@/components/projects/BrowserFrame";
import { cn } from "@/lib/utils";

const DEMO_URL = "https://gestiondevis.onrender.com";
const REPO_URL = "https://github.com/FelixAutant/GestionDevis-Client";
const SITE_URL = "https://felixautant.com";

const HERO_PANEL_BACKGROUND =
  "radial-gradient(90% 120% at 90% 0%, rgba(255,92,147,.32), transparent 60%), radial-gradient(80% 100% at 0% 100%, rgba(255,147,87,.24), transparent 60%), #241C19";
const CLOSING_PANEL_BACKGROUND =
  "radial-gradient(100% 140% at 100% 0%, rgba(255,92,147,.38), transparent 60%), radial-gradient(80% 120% at 0% 100%, rgba(232,184,68,.22), transparent 60%), #241C19";

type Tone = "primary" | "secondary" | "accent" | "plain";

const toneClasses: Record<Tone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  plain: "text-sand",
};

interface Fact {
  label: string;
  value: string;
  live?: boolean;
}

interface Figure {
  alt: string;
  lead: string;
  caption: string;
}

interface InternalCard {
  title: string;
  body: string;
  code?: string;
}

interface QualityStat {
  value: string;
  label: string;
  tone: Tone;
}

interface FlowStep {
  name: string;
  detail: string;
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "caseStudy" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: [{ url: "/projects/gestiondevis/dashboard.webp" }],
    },
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-secondary">
      {children}
    </span>
  );
}

export default async function GestionDevisCaseStudyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "caseStudy" });
  const accent = (chunks: React.ReactNode) => (
    <span className="text-primary">{chunks}</span>
  );

  const facts = t.raw("facts") as Fact[];
  const answerItems = t.raw("answer.items") as string[];
  const figures = [
    {
      key: "form",
      src: "/projects/gestiondevis/quote-form.webp",
      height: 1200,
      ...(t.raw("images.form") as Figure),
    },
    {
      key: "detail",
      src: "/projects/gestiondevis/quote-detail.webp",
      height: 998,
      ...(t.raw("images.detail") as Figure),
    },
  ];
  const cards = t.raw("internals.cards") as InternalCard[];
  const stats = t.raw("quality.stats") as QualityStat[];
  const flow = t.raw("quality.flow") as FlowStep[];

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "GestionDevis",
    description: t("metaDescription"),
    url: `${SITE_URL}/${locale}/projects/gestiondevis`,
    image: `${SITE_URL}/projects/gestiondevis/dashboard.webp`,
    author: { "@type": "Person", name: "Félix AUTANT" },
    sameAs: [DEMO_URL, REPO_URL],
  };

  const primaryButton =
    "inline-flex min-h-[52px] items-center gap-2.5 rounded-xl bg-primary px-6 text-base font-semibold text-[#1A0B12] transition-colors hover:bg-[#FF7AA8]";
  const ghostButton =
    "inline-flex min-h-[52px] items-center gap-2.5 rounded-xl border border-ink-line-strong px-[22px] text-base font-semibold text-sand transition-colors hover:border-sand";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }}
      />

      {/* Bande aux couleurs du thème : la barre de navigation fixe y reste lisible */}
      <div className="h-20 bg-background-light dark:bg-background-dark" />

      <div className="bg-ink px-6 pb-28 pt-10 text-sand">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-28">
          <section className="flex flex-col gap-10">
            <Link
              href={`/${locale}#projects`}
              className="inline-flex min-h-11 items-center gap-2 self-start text-[15px] text-sand-muted transition-colors hover:text-sand"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t("back")}
            </Link>

            <div className="flex max-w-[860px] flex-col gap-5">
              <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-accent">
                {t("eyebrow")}
              </span>
              <h1 className="m-0 break-words font-display text-[clamp(40px,9vw,104px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
                {t("title")}
              </h1>
              <p className="m-0 text-[clamp(20px,2.4vw,26px)] leading-[1.45] text-sand-soft">
                {t.rich("lead", { accent })}
              </p>
            </div>

            <dl className="m-0 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-ink-line bg-ink-line min-[900px]:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1.5 bg-ink-panel px-[22px] py-5"
                >
                  <dt className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-sand-faint">
                    {fact.label}
                  </dt>
                  <dd className="m-0 flex items-center gap-2 text-base font-medium">
                    {fact.live && (
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    )}
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButton}
              >
                <Play className="h-[18px] w-[18px]" aria-hidden="true" />
                {t("ctaDemo")}
              </a>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={ghostButton}
              >
                <Code2 className="h-[18px] w-[18px]" aria-hidden="true" />
                {t("ctaCode")}
              </a>
            </div>

            <div
              className="rounded-[28px] p-4 sm:p-7"
              style={{ background: HERO_PANEL_BACKGROUND }}
            >
              <BrowserFrame
                url="gestiondevis.onrender.com"
                size="lg"
                className="shadow-[0_40px_100px_rgba(0,0,0,.5)]"
              >
                <Image
                  src="/projects/gestiondevis/dashboard.webp"
                  alt={t("dashboardAlt")}
                  width={1400}
                  height={875}
                  sizes="(min-width: 1200px) 1064px, 92vw"
                  priority
                  className="block h-auto w-full"
                />
              </BrowserFrame>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-12 min-[900px]:grid-cols-2">
            <div className="flex flex-col gap-4">
              <Label>{t("need.label")}</Label>
              <h2 className="m-0 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em]">
                {t("need.title")}
              </h2>
              <p className="m-0 text-lg leading-[1.65] text-sand-muted">
                {t("need.body")}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Label>{t("answer.label")}</Label>
              <h2 className="m-0 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em]">
                {t("answer.title")}
              </h2>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-[17px] leading-normal text-sand-soft">
                {answerItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-bold text-primary" aria-hidden="true">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <Label>{t("images.label")}</Label>
            <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-2">
              {figures.map((figure) => (
                <figure
                  key={figure.key}
                  className="group m-0 flex flex-col gap-3.5"
                >
                  <div className="overflow-hidden rounded-2xl border border-ink-line bg-white">
                    <Image
                      src={figure.src}
                      alt={figure.alt}
                      width={1400}
                      height={figure.height}
                      sizes="(min-width: 1200px) 548px, (min-width: 900px) 46vw, 92vw"
                      className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="text-[15px] text-sand-muted">
                    <strong className="text-sand">{figure.lead}</strong>{" "}
                    {figure.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <div className="flex max-w-[720px] flex-col gap-3">
              <Label>{t("internals.label")}</Label>
              <h2 className="m-0 font-display text-[clamp(30px,5vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
                {t("internals.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-2">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col gap-3.5 rounded-[20px] border border-ink-line-soft bg-ink-panel p-[30px]"
                >
                  <h3 className="m-0 font-display text-[22px] font-bold">
                    {card.title}
                  </h3>
                  <p className="m-0 text-base leading-[1.6] text-sand-muted">
                    {card.body}
                  </p>
                  {card.code && (
                    <pre className="m-0 overflow-x-auto whitespace-pre-wrap rounded-[10px] bg-ink-code px-4 py-3.5 font-mono text-[13px] leading-[1.6] text-accent">
                      <code>{card.code}</code>
                    </pre>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <Label>{t("quality.label")}</Label>
            <div className="grid grid-cols-2 gap-4 min-[900px]:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1.5 rounded-[18px] border border-ink-line-soft bg-ink-panel px-6 py-[26px]"
                >
                  <span
                    className={cn(
                      "font-display text-[44px] font-extrabold leading-none",
                      toneClasses[stat.tone]
                    )}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[15px] text-sand-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <ol className="m-0 flex list-none flex-col items-stretch gap-3.5 rounded-[20px] border border-ink-line-soft bg-ink-panel p-7 min-[900px]:flex-row min-[900px]:items-center">
              {flow.map((step, index) => (
                <li
                  key={step.name}
                  className="flex flex-col gap-3.5 min-[900px]:contents"
                >
                  {index > 0 && (
                    <ArrowRight
                      className="h-4 w-7 shrink-0 rotate-90 self-center text-primary min-[900px]:rotate-0"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex flex-1 flex-col gap-1 rounded-[14px] bg-ink-raised p-[18px]">
                    <span className="font-display text-[17px] font-bold">
                      {step.name}
                    </span>
                    <span className="text-sm text-sand-dim">{step.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="flex flex-col items-start gap-[22px] rounded-[28px] px-6 py-14 min-[900px]:px-12"
            style={{ background: CLOSING_PANEL_BACKGROUND }}
          >
            <h2 className="m-0 max-w-[720px] font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              {t("closing.title")}
            </h2>
            <p className="m-0 text-[17px] text-sand-soft">
              {t("closing.body")}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButton}
              >
                {t("closing.ctaDemo")}
              </a>
              <Link
                href={`/${locale}#projects`}
                className="inline-flex min-h-[52px] items-center rounded-xl border border-[#7A6A5C] px-[22px] text-base font-semibold text-sand transition-colors hover:border-sand"
              >
                {t("closing.ctaProjects")}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
