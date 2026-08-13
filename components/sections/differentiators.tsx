import { UsersThree, PuzzlePiece, MapPin, HandHeart } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

const ITEMS = [
  { icon: UsersThree, label: "Equipe multidisciplinar sob o mesmo teto" },
  { icon: PuzzlePiece, label: "Plano de intervenção individualizado" },
  { icon: MapPin, label: "Setor Bela Vista, Goiânia" },
  { icon: HandHeart, label: "Acompanhamento próximo da família" },
];

export function Differentiators() {
  return (
    <section className="border-y border-hairline bg-card">
      <Container>
        <Reveal className="grid grid-cols-2 divide-y divide-hairline md:grid-cols-4 md:divide-x md:divide-y-0">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-start gap-3 px-1 py-8 md:px-8">
              <Icon size={22} weight="duotone" className="text-brand-purple" />
              <p className="max-w-[18ch] text-[14px] font-medium leading-snug text-ink-secondary">
                {label}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
