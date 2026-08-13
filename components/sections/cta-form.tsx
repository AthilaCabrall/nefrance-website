"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const WHATSAPP_NUMBER = "5562000000000";

export function CtaForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Preencha nome e WhatsApp para continuar.");
      return;
    }
    setError("");

    const text = [
      `Olá! Meu nome é ${name}.`,
      message.trim() ? message.trim() : "Gostaria de agendar uma avaliação.",
      `Meu WhatsApp: ${phone}`,
    ].join(" ");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cta-name" className="text-[13px] font-medium text-ink-secondary">
          Nome
        </label>
        <input
          id="cta-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-11 rounded-[12px] border border-hairline bg-paper px-3.5 text-[14px] text-ink outline-none placeholder:text-ink-muted focus:border-brand-purple"
          placeholder="Seu nome"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cta-phone" className="text-[13px] font-medium text-ink-secondary">
          WhatsApp
        </label>
        <input
          id="cta-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="h-11 rounded-[12px] border border-hairline bg-paper px-3.5 text-[14px] text-ink outline-none placeholder:text-ink-muted focus:border-brand-purple"
          placeholder="(62) 90000-0000"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cta-message" className="text-[13px] font-medium text-ink-secondary">
          Mensagem <span className="text-ink-muted">(opcional)</span>
        </label>
        <textarea
          id="cta-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="resize-none rounded-[12px] border border-hairline bg-paper px-3.5 py-2.5 text-[14px] text-ink outline-none placeholder:text-ink-muted focus:border-brand-purple"
          placeholder="Conte rapidamente o que está observando"
        />
      </div>

      {error && <p className="text-[13px] text-red-400">{error}</p>}

      <button
        type="submit"
        className="mt-1 inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full brand-gradient-bg px-7 text-[15px] font-semibold text-white transition-transform duration-200 active:scale-[0.98]"
      >
        <WhatsappLogo size={19} weight="fill" />
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
