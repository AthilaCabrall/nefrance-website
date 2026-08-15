import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const WHATSAPP_NUMBER = "5562000000000";
const MESSAGE = "Olá! Vim pelo site e gostaria de agendar uma avaliação.";

export function WhatsappFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-float fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgb(0_0_0/0.5)] transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
