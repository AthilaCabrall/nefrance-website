export type TeamMember = {
  slug: string;
  name: string;
  firstName: string;
  role: string;
  credential?: string;
  tags: string[];
  bio: string;
  /** Picsum seed used only until a real photo exists in /public/team/{slug}/. */
  portraitSeeds: string[];
};

export const TEAM: TeamMember[] = [
  {
    slug: "andrea",
    name: "Dra. Andrea Cabral",
    firstName: "Andrea",
    role: "Fonoaudióloga, Especialista em Linguagem",
    credential: "CRFa 5ª 1453",
    tags: ["Fala e Linguagem", "Dislexia", "Motricidade Orofacial"],
    bio: "Com mais de 25 anos de experiência em Fonoaudiologia, atua no desenvolvimento da fala, da linguagem, da leitura e da escrita de crianças e adolescentes de 1 ano e 6 meses a 14 anos. Acompanha transtornos do neurodesenvolvimento, dislexia, gagueira e alterações da motricidade orofacial, unindo conhecimento técnico e um olhar cuidadoso para cada família.",
    portraitSeeds: ["nefrance-andrea-1"],
  },
  {
    slug: "ingrid",
    name: "Ingrid",
    firstName: "Ingrid",
    role: "Neuropsicopedagoga Clínica e Psicopedagoga",
    tags: ["Avaliação", "Aprendizagem", "Desenvolvimento Humano"],
    bio: "Neuropsicopedagoga Clínica, Psicopedagoga e graduanda em Psicologia, apaixonada pelo desenvolvimento humano e pela aprendizagem. Atua no acompanhamento de crianças, adolescentes, adultos e instituições de ensino, com avaliações especializadas e intervenções baseadas em evidências científicas. Acredita que compreender como o cérebro aprende é o primeiro passo para transformar vidas.",
    portraitSeeds: ["nefrance-ingrid-1"],
  },
  {
    slug: "luciene",
    name: "Luciene Perillo",
    firstName: "Luciene",
    role: "Pedagoga, Psicopedagoga Clínica",
    credential: "Especialista em ABA e Educação Inclusiva",
    tags: ["TEA", "TDAH", "Alfabetização Inclusiva"],
    bio: "Pedagoga formada pela UFG e psicopedagoga clínica com mais de 13 anos dedicados a crianças e adolescentes neurodivergentes. Atuo com Análise do Comportamento Aplicada (ABA), alfabetização inclusiva e avaliação psicopedagógica, unindo prática baseada em evidências a um olhar acolhedor para TEA, TDAH, deficiência intelectual e outras condições que impactam a aprendizagem.",
    portraitSeeds: ["nefrance-luciene-1"],
  },
];

export function pickRandom<T>(items: T[], count: number): T[] {
  const pool = [...items];
  const picked: T[] = [];
  while (picked.length < count && pool.length > 0) {
    const i = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }
  return picked;
}

export function portraitUrl(seed: string) {
  return `https://picsum.photos/seed/${seed}/760/920`;
}
