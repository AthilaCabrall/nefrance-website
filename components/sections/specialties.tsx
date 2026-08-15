import { clsx } from "clsx";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { Reveal } from "../ui/reveal";
import { SpecialtyCard } from "./specialty-card";
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
            const isBig = item.size === "lg";
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className={clsx("lg:col-span-2", !isBig && "lg:col-span-1")}
              >
                <SpecialtyCard
                  icon={<Icon size={26} weight="duotone" />}
                  title={item.title}
                  body={item.body}
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
