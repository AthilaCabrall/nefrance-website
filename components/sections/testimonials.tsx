import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/container";
import { Eyebrow } from "../ui/eyebrow";
import { Reveal } from "../ui/reveal";
import { TESTIMONIALS } from "@/lib/data/testimonials";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          weight="fill"
          className={i < rating ? "text-[#FBBC04]" : "text-black/10"}
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
              <figure className="flex h-full flex-col rounded-[16px] bg-white p-6 shadow-[0_16px_36px_-12px_rgb(0_0_0/0.35)]">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={`https://i.pravatar.cc/150?u=${t.avatarSeed}`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0">
                    <figcaption className="truncate text-[14px] font-medium text-[#1f1f1f]">
                      {t.author}
                    </figcaption>
                    <p className="text-[12px] text-[#70757a]">{t.role}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <StarRow rating={t.rating} />
                  <span className="text-[12px] text-[#70757a]">{t.timeAgo}</span>
                </div>

                <blockquote className="mt-3 text-[14px] leading-relaxed text-[#3c4043]">
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
