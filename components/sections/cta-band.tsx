import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { CtaForm } from "./cta-form";

export function CtaBand() {
  return (
    <section id="contato" className="bg-paper py-20 md:py-28">
      <Container>
        <Reveal delay={0}>
          <div className="grid overflow-hidden rounded-[24px] border border-hairline lg:grid-cols-2">
            <div className="brand-gradient-bg relative flex flex-col justify-center px-8 py-14 md:px-12 md:py-16">
              <h2 className="max-w-[18ch] text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl">
                Marque uma avaliação e comece com clareza
              </h2>
              <p className="mt-4 max-w-[36ch] text-[15px] text-white/85">
                Atendimento no Setor Bela Vista, Goiânia. Resposta em até um dia útil.
              </p>
            </div>

            <div className="flex flex-col justify-center bg-card px-8 py-14 md:px-12 md:py-16">
              <CtaForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
