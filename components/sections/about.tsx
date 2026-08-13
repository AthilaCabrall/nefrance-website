import Image from "next/image";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function About() {
  return (
    <section id="sobre" className="bg-paper py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
            <Image
              src="https://picsum.photos/seed/nefrance-espaco-clinica/1000/800"
              alt="Sala de atendimento do Instituto Nefrance, ambiente acolhedor para crianças"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </div>
          <div
            className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-[24px]"
            style={{ background: "var(--brand-gradient-soft)" }}
            aria-hidden
          />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <h2 className="max-w-[16ch] text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-4xl">
            Onde avaliação e pedagogia caminham juntas
          </h2>
          <div className="mt-6 space-y-4 max-w-[52ch]">
            <p className="text-[16px] leading-relaxed text-ink-secondary">
              O Instituto Nefrance nasceu para encurtar a distância entre o diagnóstico e a sala de aula, no Setor Bela Vista.
            </p>
            <p className="text-[16px] leading-relaxed text-ink-secondary">
              Reunimos neuropsicopedagogia, psicologia e neuropsicologia sob o mesmo teto, para entender como cada criança aprende e transformar isso em um plano que a família acompanha em casa.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
