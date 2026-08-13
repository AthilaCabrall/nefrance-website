import { InstagramLogo, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./ui/container";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#equipe", label: "Equipe" },
  { href: "#processo", label: "Como funciona" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-card">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <span className="text-[17px] font-bold brand-gradient-text">
              Instituto Nefrance
            </span>
            <p className="mt-3 max-w-[34ch] text-[14px] leading-relaxed text-ink-secondary">
              Educação com propósito. Avaliação e intervenção em dificuldades de aprendizagem, no Setor Bela Vista.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[14px] text-ink-secondary hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-purple" />
                Setor Bela Vista, Goiânia, GO
              </li>
              <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                <WhatsappLogo size={17} className="mt-0.5 shrink-0 text-brand-purple" />
                <a href="https://wa.me/5562000000000">(62) 00000-0000</a>
              </li>
              <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                <EnvelopeSimple size={17} className="mt-0.5 shrink-0 text-brand-purple" />
                <a href="mailto:contato@institutonefrance.com.br">contato@institutonefrance.com.br</a>
              </li>
              <li className="flex items-start gap-2 text-[14px] text-ink-secondary">
                <InstagramLogo size={17} className="mt-0.5 shrink-0 text-brand-purple" />
                <a href="#">@institutonefrance</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-hairline pt-6 text-[13px] text-ink-muted">
          {year} Instituto Nefrance. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
