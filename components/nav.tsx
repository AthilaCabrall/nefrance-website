"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { TiltLogo } from "./ui/tilt-logo";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#equipe", label: "Equipe" },
  { href: "#processo", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight">
          <TiltLogo className="relative h-9 w-9 shrink-0">
            <Image src="/logo-3d.png" alt="" fill className="object-contain" sizes="36px" priority />
          </TiltLogo>
          <span className="brand-gradient-text font-display">Instituto Nefrance</span>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-ink-secondary transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contato" className="h-11 px-5 text-[14px]">
            Agendar Avaliação
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-hairline bg-paper lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink-secondary hover:bg-sunken hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contato" onClick={() => setOpen(false)} className="mt-2 w-full">
              Agendar Avaliação
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
