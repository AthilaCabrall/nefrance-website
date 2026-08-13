import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { PROCESS_STEPS } from "@/lib/data/process";

export function Process() {
  return (
    <section id="processo" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="max-w-[42ch]">
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-4xl">
            Como funciona o acompanhamento
          </h2>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] md:block"
            style={{ background: "var(--brand-gradient-soft)" }}
            aria-hidden
          />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.08} className="relative">
                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card"
                >
                  <Icon size={20} weight="duotone" className="text-brand-purple" />
                </div>
                <h3 className="mt-5 text-[16px] font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[30ch] text-[14px] leading-relaxed text-ink-secondary">
                  {step.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
