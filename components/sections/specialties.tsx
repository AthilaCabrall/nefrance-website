import { clsx } from "clsx";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { Reveal } from "../ui/reveal";
import { SPECIALTIES } from "@/lib/data/specialties";

export function Specialties() {
  return (
    <section id="especialidades" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal className="max-w-[42ch]">
          <Eyebrow>Especialidades</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-4xl">
            Cuidado específico para cada dificuldade de aprendizagem
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map((item, i) => {
            const Icon = item.icon;
            const isBig = item.size === "lg";

            return (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className={clsx("lg:col-span-2", !isBig && "lg:col-span-1")}
              >
                <div className="relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[24px] border border-silver p-6 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.45)] transition-transform duration-300 will-change-transform hover:-translate-y-1">
                  <div className="gradient-flow absolute inset-0" aria-hidden />
                  <div className="absolute inset-0 bg-paper/30 backdrop-blur-[2px]" aria-hidden />

                  <Icon size={26} weight="duotone" className="relative text-ink" />

                  <div className="relative">
                    <h3 className="text-lg font-bold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-2 max-w-[34ch] text-[14px] leading-relaxed text-ink-secondary">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
