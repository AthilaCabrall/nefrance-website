"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Magnetic } from "../ui/magnetic";

// Placeholder for the transparent PNG cutout the client is producing in Photoshop
// ("fundo fixo + png saindo dele"). Swap this emoji for an <Image> once it lands.
const HERO_CUTOUT_PLACEHOLDER = "🧠";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mb-5 flex h-[92px] w-[92px] items-center justify-center lg:hidden">
            <div
              className="absolute h-full w-full rounded-full opacity-60 blur-[36px]"
              style={{ background: "var(--brand-gradient)" }}
              aria-hidden
            />
            <span className="relative text-[52px] leading-none drop-shadow-[0_14px_24px_rgba(91,33,182,0.55)]" aria-hidden>
              {HERO_CUTOUT_PLACEHOLDER}
            </span>
          </div>

          <h1 className="max-w-[14ch] text-4xl font-semibold leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Cada jeito de aprender merece o{" "}
            <em className="font-display italic text-brand-purple">caminho certo</em>
          </h1>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink-secondary">
            Avaliação neuropsicopedagógica e reforço escolar individualizado para TDAH, TEA, dislexia e outras dificuldades de aprendizagem, no Bela Vista, Goiânia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic strength={0.18} className="w-full sm:w-auto">
              <Button href="#contato" className="w-full sm:w-auto">
                Agendar Avaliação
              </Button>
            </Magnetic>
            <Button href="#equipe" variant="ghost" className="w-full sm:w-auto">
              Conhecer a Equipe
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto hidden aspect-square w-full max-w-[420px] items-center justify-center lg:flex lg:max-w-none"
        >
          {/* Solid geometric block (Rio Negro reference): a photo card the cutout
              breaks out of, not an organic blob. Swap the photo src for a real
              one whenever it lands. */}
          <div className="absolute inset-x-8 inset-y-6 overflow-hidden rounded-[32px]">
            <Image
              src="https://picsum.photos/seed/nefrance-hero-block/760/760"
              alt=""
              fill
              className="object-cover"
              sizes="360px"
            />
            <div className="absolute inset-0 brand-gradient-bg opacity-40" aria-hidden />
          </div>

          <motion.span
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-2 z-10 text-[220px] leading-none drop-shadow-[0_40px_70px_rgba(91,33,182,0.5)]"
            aria-hidden
          >
            {HERO_CUTOUT_PLACEHOLDER}
          </motion.span>

          <div className="glass-panel absolute bottom-2 left-4 z-10 flex items-center gap-3 rounded-[16px] px-4 py-3">
            <span className="font-mono text-xl font-medium brand-gradient-text">+180</span>
            <span className="max-w-[9ch] text-[12px] font-medium leading-tight text-ink-secondary">
              avaliações concluídas em Goiânia
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
