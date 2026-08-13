import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { Reveal } from "../ui/reveal";
import { TESTIMONIALS } from "@/lib/data/testimonials";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          weight="fill"
          className={i < rating ? "text-brand-purple" : "text-hairline"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="border-y border-hairline bg-sunken py-20 md:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Famílias Nefrance</Eyebrow>
          <h2 className="mt-4 max-w-[36ch] text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-4xl">
            O que muda em casa
          </h2>
        </Reveal>

        <div className="mt-12 -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.author}
              delay={i * 0.08}
              className="w-[86%] flex-none snap-start sm:w-[60%] lg:w-[32%]"
            >
              <figure className="flex h-full flex-col rounded-[24px] border border-hairline bg-card p-7">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={`https://i.pravatar.cc/150?u=${t.avatarSeed}`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <figcaption className="text-[13px] font-semibold text-ink">
                      {t.author}
                    </figcaption>
                    <StarRow rating={t.rating} />
                  </div>
                </div>
                <blockquote className="mt-4 text-[16px] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
