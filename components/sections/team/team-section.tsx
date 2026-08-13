import { Container } from "../../ui/container";
import { Eyebrow } from "../../ui/eyebrow";
import { Reveal } from "../../ui/reveal";
import { TeamCarousel } from "./team-carousel";
import { TEAM } from "@/lib/data/team";
import { getTeamPhotos } from "@/lib/team-photos.server";

export function TeamSection() {
  const members = TEAM.map((member) => ({
    ...member,
    photos: getTeamPhotos(member.slug),
  }));

  return (
    <section id="equipe" className="bg-card py-20 md:py-28">
      <Container>
        <Reveal className="max-w-[46ch]">
          <Eyebrow>Equipe</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-4xl">
            Três olhares, um só plano para o seu filho
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary">
            Use as setas para conhecer cada profissional, sua abordagem e um pouco do trabalho que já vem sendo feito.
          </p>
        </Reveal>

        <div className="mt-12">
          <TeamCarousel members={members} />
        </div>
      </Container>
    </section>
  );
}
