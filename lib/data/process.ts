import type { Icon } from "@phosphor-icons/react";
import { ChatCircleDots, ClipboardText, Users, Compass } from "@phosphor-icons/react/dist/ssr";

export const PROCESS_STEPS: { title: string; body: string; icon: Icon }[] = [
  {
    title: "Primeiro contato",
    body: "Você conta o que vem observando em casa e na escola, por telefone ou WhatsApp.",
    icon: ChatCircleDots,
  },
  {
    title: "Avaliação multidisciplinar",
    body: "Sessões conduzidas pela especialista mais indicada para o que a criança está enfrentando.",
    icon: ClipboardText,
  },
  {
    title: "Devolutiva para a família",
    body: "Resultado explicado em linguagem simples, sem jargão, com plano de ação por escrito.",
    icon: Users,
  },
  {
    title: "Plano de intervenção",
    body: "Acompanhamento contínuo, ajustado ao ritmo da criança e revisado a cada etapa.",
    icon: Compass,
  },
];
