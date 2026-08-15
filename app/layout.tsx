import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import { AuroraBackground } from "@/components/aurora/aurora-background";
import { WhatsappFloat } from "@/components/whatsapp-float";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Instituto Nefrance | Avaliação e Reforço para TDAH, TEA e Dislexia em Goiânia",
  description:
    "Clínica multidisciplinar no Setor Bela Vista, Goiânia. Avaliação neuropsicopedagógica, psicologia e reforço escolar especializado para crianças e adolescentes com TDAH, TEA, dislexia e dificuldades de aprendizagem. Agende uma avaliação.",
  keywords: [
    "neuropsicopedagoga Goiânia",
    "psicóloga infantil Goiânia",
    "neuropsicóloga Goiânia",
    "TDAH Goiânia",
    "TEA autismo Goiânia",
    "dislexia Goiânia",
    "reforço escolar Bela Vista",
    "avaliação neuropsicopedagógica",
  ],
  openGraph: {
    title: "Instituto Nefrance | Educação com Propósito",
    description:
      "Avaliação e intervenção especializada em dificuldades de aprendizagem, no Setor Bela Vista, Goiânia.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${cormorant.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <AuroraBackground className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70" />
        <div className="relative flex min-h-full flex-1 flex-col">{children}</div>
        <WhatsappFloat />
      </body>
    </html>
  );
}
