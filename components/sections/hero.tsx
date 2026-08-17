"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Magnetic } from "../ui/magnetic";
import { SplitText } from "../ui/split-text";
import { Brain3D } from "../ui/brain-3d-loader";

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
            className="absolute h-[72%] w-[72%] rounded-full opacity-50 blur-[70px]"
            style={{ background: "var(--brand-gradient)" }}
            aria-hidden
          />

          <Brain3D className="relative h-[420px] w-[420px] md:h-[500px] md:w-[500px]" />
        </motion.div>
      </Container>
    </section>
  );
}
