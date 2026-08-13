"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { clsx } from "clsx";
import { pickRandom, portraitUrl, type TeamMember } from "@/lib/data/team";

type MemberWithPhotos = TeamMember & { photos: string[] };

const springTransition = { type: "spring" as const, stiffness: 260, damping: 30, mass: 0.9 };

function usePortrait(member: MemberWithPhotos) {
  const fallback = portraitUrl(member.portraitSeeds[0]);
  const [src, setSrc] = useState(member.photos[0] ?? fallback);

  useEffect(() => {
    if (member.photos.length > 0) {
      setSrc(pickRandom(member.photos, 1)[0]);
    } else {
      setSrc(portraitUrl(pickRandom(member.portraitSeeds, 1)[0]));
    }
  }, [member]);

  return { src, fallback };
}

function PortraitImage({ src, fallback, alt }: { src: string; fallback: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const resolved = failed ? fallback : src;

  return (
    <Image
      key={resolved}
      src={resolved}
      alt={alt}
      fill
      className="object-cover"
      sizes="320px"
      onError={() => setFailed(true)}
    />
  );
}

function MemberPanel({ member, direction }: { member: MemberWithPhotos; direction: number }) {
  const { src, fallback } = usePortrait(member);
  const reduce = useReducedMotion();

  return (
    <motion.div
      key={member.slug}
      initial={reduce ? false : { opacity: 0, x: direction * 48 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction * -48 }}
      transition={springTransition}
      className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14"
    >
      <div className="mx-auto w-full max-w-[320px] lg:mx-0">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-sunken">
          <PortraitImage
            src={src}
            fallback={fallback}
            alt={`Retrato de ${member.name}, ${member.role} do Instituto Nefrance`}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
          {member.name}
        </h3>
        <p className="mt-1 text-[15px] font-medium text-brand-purple">{member.role}</p>
        {member.credential && (
          <p className="mt-0.5 text-[13px] text-ink-muted">{member.credential}</p>
        )}

        <p className="mt-6 max-w-[54ch] text-[16px] leading-relaxed text-ink-secondary">
          {member.bio}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hairline px-3 py-1.5 text-[12px] font-medium text-ink-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function TeamCarousel({ members }: { members: MemberWithPhotos[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const member = useMemo(() => members[index], [members, index]);

  function go(next: number) {
    setDirection(next > index || (index === members.length - 1 && next === 0) ? 1 : -1);
    setIndex(((next % members.length) + members.length) % members.length);
  }

  return (
    <div>
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <MemberPanel key={member.slug} member={member} direction={direction} />
        </AnimatePresence>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {members.map((m, i) => (
            <button
              key={m.slug}
              type="button"
              onClick={() => go(i)}
              className={clsx(
                "relative rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
                i === index ? "text-white" : "text-ink-secondary hover:bg-sunken"
              )}
            >
              {i === index && (
                <motion.span
                  layoutId="team-pill-active"
                  className="absolute inset-0 rounded-full brand-gradient-bg"
                  transition={springTransition}
                />
              )}
              <span className="relative">{m.firstName}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Profissional anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-transform duration-200 hover:bg-sunken active:scale-95"
          >
            <CaretLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Próxima profissional"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-transform duration-200 hover:bg-sunken active:scale-95"
          >
            <CaretRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
