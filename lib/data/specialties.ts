import type { Icon } from "@phosphor-icons/react";
import { Brain, PuzzlePiece, BookOpen, TextAa, Target, NotePencil } from "@phosphor-icons/react/dist/ssr";

export type Specialty = {
  title: string;
  body: string;
  icon: Icon;
  size: "lg" | "md";
};

export const SPECIALTIES: Specialty[] = [
  {
    title: "TDAH",
    body: "Avaliação e manejo de atenção, impulsividade e hiperatividade no dia a dia escolar.",
    icon: Brain,
    size: "lg",
  },
  {
    title: "TEA (Autismo)",
    body: "Intervenção pedagógica sensível à comunicação, ao comportamento e à rotina de cada criança.",
    icon: PuzzlePiece,
    size: "lg",
  },
  {
    title: "Dislexia",
    body: "Métodos específicos para decodificação, fluência e compreensão leitora.",
    icon: BookOpen,
    size: "md",
  },
  {
    title: "Atraso na Alfabetização",
    body: "Retomada do processo de leitura e escrita no ritmo da criança.",
    icon: TextAa,
    size: "md",
  },
  {
    title: "Concentração e Memória",
    body: "Estratégias de foco e retenção para render mais em menos tempo de estudo.",
    icon: Target,
    size: "md",
  },
  {
    title: "Organização dos Estudos",
    body: "Rotina, método e reforço escolar para estudar com mais autonomia.",
    icon: NotePencil,
    size: "md",
  },
];
