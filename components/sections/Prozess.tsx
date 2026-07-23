import { Reveal } from "@/components/Reveal";
import { ProcessTrack } from "@/components/ProcessTrack";
import { SectionHeading } from "@/components/ui/section-heading";
import { prozess } from "@/lib/content";

export function Prozess() {
  return (
    <section
      id="prozess"
      aria-labelledby="prozess-heading"
      className="section-y scroll-mt-24 bg-muted/50"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow={prozess.eyebrow}
          title={prozess.heading}
          intro={prozess.intro}
        />

        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ProcessTrack />
          {prozess.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 80}
              className="relative flex flex-col gap-3 rounded-lg border border-border bg-card p-6"
            >
              <span className="font-display text-4xl font-bold text-brand/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
              {index < prozess.steps.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute -right-3 top-10 hidden h-px w-6 bg-border-strong lg:block"
                />
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
