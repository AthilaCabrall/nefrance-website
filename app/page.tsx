import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Differentiators } from "@/components/sections/differentiators";
import { About } from "@/components/sections/about";
import { Specialties } from "@/components/sections/specialties";
import { TeamSection } from "@/components/sections/team/team-section";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Differentiators />
        <About />
        <Specialties />
        <TeamSection />
        <Process />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
