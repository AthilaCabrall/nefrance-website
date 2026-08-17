"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Magnetic } from "../ui/magnetic";
import { SplitText } from "../ui/split-text";
import { TiltLogo } from "../ui/tilt-logo";

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
          <h1 className="max-w-[14ch] text-4xl font-semibold leading-[1.15] tracking-tight text-ink md:text-5xl lg:text-6xl">
            <SplitText text="Cada jeito de aprender merece o" />{" "}
            <SplitText
              text="caminho certo"
              startDelay={6 * 0.07}
              className="font-display italic text-brand-purple"
            />
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
          <div
            className="absolute h-[62%] w-[62%] rounded-full opacity-50 blur-[70px]"
            style={{ background: "var(--brand-gradient)" }}
            aria-hidden
          />

          <TiltLogo className="relative h-[300px] w-[300px] md:h-[360px] md:w-[360px]" maxTilt={16}>
            <Image
              src="/logo-3d.png"
              alt="Instituto Nefrance"
              fill
              priority
              className="object-contain drop-shadow-[0_30px_50px_rgba(91,33,182,0.45)]"
              sizes="360px"
            />
          </TiltLogo>

          <div className="glass-panel-dark absolute bottom-2 left-4 z-10 flex items-center gap-3 rounded-[16px] px-4 py-3">
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
