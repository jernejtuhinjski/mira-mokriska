import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O Miri",
  description:
    "Mira Mokriška (Anica Omejc, 1875–1922) — slovenska pesnica in pisateljica, ena prvih žensk slovenske moderne. Njena rokopisna zapuščina obsega dvajset zvezkov.",
};

interface TimelineItem {
  period: string;
  title: string;
  content: string;
  postaja?: number;
}

const timelineItems: TimelineItem[] = [
  {
    period: "1875–1899",
    title: "Mladost v Ljubljani",
    content:
      "Rojena 7. novembra 1875 na Poljanski cesti 13/17. Oče Fran Omejc, poštni oficijal; mati Terezija, gospodinja; babica Terezija iz Škofje Loke.",
  },
  {
    period: "1899–1904",
    title: "Prve objave in psevdonim",
    content:
      "Objavlja v revijah Slovenka in Dom in svet. Psevdonim Mira Mokriška po Mokriških planinah nad Iškim Vintgarjem, kjer se je rada sprehajala.",
  },
  {
    period: "1903–1914",
    title: "Poroka in goriška leta",
    content:
      "Poroči se s Francem Žemljo, železniškim uradnikom. Objavlja v Domačem prijatelju, Mohorjevi družbi (Pravljice, 1913). Čez dan gospodinji, ponoči piše in igra klavir.",
    postaja: 1,
  },
  {
    period: "1906–1914",
    title: "Volčja Draga",
    content:
      "Preseli se na Goriško. Brala je Chateaubrianda, Lamartina, Dickensa, Sienkiewicza. Leta 1913 izidejo Pravljice pri Mohorjevi družbi skupaj s pravljicami Utve.",
    postaja: 2,
  },
  {
    period: "1915–1919",
    title: "Vojna in samota",
    content:
      "Med 1. svetovno vojno begunka na Bledu, nato pri materi v Ljubljani. Ločena od moža, ki je služboval drugod. Pesmi postajajo intimnejše.",
    postaja: 3,
  },
  {
    period: "1919–1921",
    title: "Pozna ustvarjalnost",
    content:
      "Oktobra 1920 umre mama. Živi na Karlovški cesti 32. Korespondenca polna bolečine. Odkloni urednikovanje revije Slovenka.",
  },
  {
    period: "1922",
    title: "Smrt in zapuščina",
    content:
      "Umre 12. januarja 1922 v sanatoriju Leonišče (Zaloška 11), stara 47 let. Vzrok: myomatous uterus. Pokopana na Ljubljanskih Žalah ob možu, blizu grobnice slovenske moderne.",
  },
];

const facts = [
  { label: "Pravo ime", value: "Anica Omejc, poročena Žemlja" },
  { label: "Psevdonim", value: "Mira Mokriška" },
  { label: "Rojstvo", value: "7. november 1875, Ljubljana" },
  { label: "Smrt", value: "12. januar 1922, Ljubljana" },
  { label: "Zvrsti", value: "Lirika, proza, pravljice" },
  { label: "Zapuščina", value: "Pesmi, pravljice, potopisi, korespondenca" },
];

export default function OMiriPage() {
  return (
    <>
      {/* ── HERO — identical to homepage ─────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ backgroundColor: "#faf7f2" }}
      >
        {/* Lipa texture */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{ opacity: 0.38 }}
        >
          <Image
            src="/images/Vezje lipa.png"
            alt=""
            fill
            className="object-cover object-center"
            aria-hidden="true"
          />
        </div>

        {/* Left gradient overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/80 to-[#faf7f2]/10" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-4 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent opacity-70" />
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                  Biografija
                </span>
              </div>
              <h1
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-4"
                style={{ color: "#1a3a2a" }}
              >
                Mira Mokriška
              </h1>
              <p
                className="font-serif text-xl italic mb-6"
                style={{ color: "#1a3a2a", opacity: 0.6 }}
              >
                Anica Omejc, poročena Žemlja
              </p>
              <p
                className="text-lg leading-relaxed max-w-md"
                style={{ color: "#1a3a2a", opacity: 0.7 }}
              >
                1875–1922 · Pesnica in pisateljica, ena prvih žensk slovenske
                moderne. Njena rokopisna zapuščina obsega dvajset zvezkov,
                popisanih z drobno, lepo pisavo.
              </p>
            </div>

            {/* Portrait */}
            <div className="hidden lg:flex items-end justify-center flex-shrink-0">
              <div className="relative" style={{ width: "320px", height: "420px" }}>
                <Image
                  src="/images/Mira_Mokriska_portret_Background_Removed.webp"
                  alt="Portret Mire Mokriške (Anice Omejc)"
                  fill
                  className="object-contain object-bottom"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 70% 85% at center, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 70% 85% at center, black 60%, transparent 100%)",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      </section>

      {/* ── DEKORATIVNI PREHOD ─────────────────────────────────────── */}
      <div className="bg-background py-7">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-5">
          <div className="flex-1 h-px bg-accent/25" />
          <span className="text-accent/55 text-xs select-none" aria-hidden="true">✦</span>
          <div className="flex-1 h-px bg-accent/25" />
        </div>
      </div>

      {/* ── UVOD + BIOGRAFSKI PODATKI ────────────────────────────── */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">

            {/* Left: intro text + buttons */}
            <div className="prose-literary">
              <p className="text-xl leading-[1.85] text-foreground/80">
                Mira Mokriška (pravo ime Anica Omejc, poročena Žemlja,
                1875–1922) je bila slovenska pesnica in pisateljica, ena prvih
                žensk slovenske moderne. Njena rokopisna zapuščina obsega
                dvajset zvezkov, popisanih z drobno, lepo pisavo.
              </p>
              <p className="text-lg leading-[1.8] text-foreground/70 mt-5">
                Na prelomu 20. stoletja je drzno vstopila v slovensko literarno
                pokrajino v obdobju, ko so bili ženski glasovi na samem robu
                literarnega prizorišča. Pisala je pod psevdonimom, ki je
                združeval njeno ime Mira in Mokriške planine nad Iškim
                Vintgarjem, kjer se je rada sprehajala.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://cdn.shopify.com/s/files/1/1011/3348/4370/files/KDO_JE_BILA_MIRA_MOKRISKA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-sm text-sm font-medium transition-colors duration-200 cursor-pointer hover:opacity-90"
                  style={{
                    backgroundColor: "#1a3a2a",
                    color: "#ffffff",
                    padding: "12px 24px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Preberi več o življenju →
                </a>
                <Link
                  href="/knjiga"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground/70 text-sm font-medium rounded-sm hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Knjiga Razgaljeno srce →
                </Link>
              </div>
            </div>

            {/* Right: biographical card */}
            <div
              className="rounded-sm border overflow-hidden"
              style={{ backgroundColor: "#f0ebe0", borderColor: "#c9a96e" }}
            >
              <div
                className="px-5 py-3 border-b"
                style={{ borderColor: "rgba(201, 169, 110, 0.35)" }}
              >
                <p
                  className="text-xs uppercase tracking-[0.2em] font-medium"
                  style={{ color: "#9a7a3a" }}
                >
                  Biografski podatki
                </p>
              </div>
              <div
                className="grid grid-cols-2 gap-px"
                style={{ backgroundColor: "rgba(201, 169, 110, 0.25)" }}
              >
                {facts.map(({ label, value }) => (
                  <div
                    key={label}
                    className="px-5 py-4"
                    style={{ backgroundColor: "#f0ebe0" }}
                  >
                    <p
                      className="text-xs uppercase tracking-[0.12em] font-medium mb-1.5"
                      style={{ color: "#9a7a3a" }}
                    >
                      {label}
                    </p>
                    <p className="font-serif text-sm font-medium text-foreground leading-snug">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ŽIVLJENJSKA POT — TIMELINE ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-foreground mb-16">
            Življenjska pot Mire Mokriške
          </h2>

          <div className="relative">
            {/* Desktop vertical center line */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
              style={{ backgroundColor: "#d4b896" }}
            />

            {timelineItems.map((item, index) => {
              const textLeft = index % 2 === 0;
              return (
                <div key={item.period}>
                  {/* Mobile */}
                  <div
                    className="md:hidden pb-10 pl-6 border-l"
                    style={{ borderColor: "#d4b896" }}
                  >
                    <span
                      className="font-serif italic text-sm block mb-1.5"
                      style={{ color: "#9a7a3a" }}
                    >
                      {item.period}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/60">
                      {item.content}
                    </p>
                  </div>

                  {/* Desktop alternating */}
                  <div
                    className="hidden md:grid grid-cols-2"
                    style={{ minHeight: "180px" }}
                  >
                    {textLeft ? (
                      <>
                        <div className="pr-16 pb-6 text-right flex flex-col justify-start pt-6">
                          <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-foreground/60">
                            {item.content}
                          </p>
                        </div>
                        <div className="pl-16 pb-6 flex flex-col justify-start pt-6">
                          <span
                            className="font-serif italic text-base"
                            style={{ color: "#9a7a3a" }}
                          >
                            {item.period}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="pr-16 pb-6 text-right flex flex-col justify-start pt-6">
                          <span
                            className="font-serif italic text-base"
                            style={{ color: "#9a7a3a" }}
                          >
                            {item.period}
                          </span>
                        </div>
                        <div className="pl-16 pb-6 flex flex-col justify-start pt-6">
                          <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-foreground/60">
                            {item.content}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* End quote */}
          <div className="text-center mt-10 mb-10">
            <blockquote className="font-serif text-xl sm:text-2xl italic text-foreground/65 leading-relaxed">
              "Saj mi je poezija pol življenja – prva ljubezen."
            </blockquote>
          </div>

          {/* Ornament image */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/okras1.png"
              alt=""
              width={400}
              height={180}
              className="object-contain opacity-75"
              aria-hidden="true"
            />
          </div>

          {/* PDF button */}
          <div className="flex justify-center">
            <a
              href="https://cdn.shopify.com/s/files/1/1011/3348/4370/files/KDO_JE_BILA_MIRA_MOKRISKA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm text-sm transition-colors duration-200 cursor-pointer hover:opacity-90"
              style={{
                backgroundColor: "#1a3a2a",
                color: "#ffffff",
                padding: "12px 28px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Še več o življenju Mire Mokriške
            </a>
          </div>
        </div>
      </section>

      {/* ── EPITAF ───────────────────────────────────────────────── */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-10 h-px bg-accent mx-auto mb-10 opacity-70" />
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-primary-foreground leading-[1.55] mb-8">
            "Ah da mi žive v svetu duša blaga,
            <br />
            ki bi umela me, kot brata brat..."
          </blockquote>
          <cite className="text-primary-foreground/50 text-sm tracking-widest uppercase not-italic">
            — Epitaf, 1919
          </cite>
          <div className="w-10 h-px bg-accent mx-auto mt-10 opacity-70" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-1">
              Spoznajte njeno delo
            </h2>
            <p className="text-muted-foreground text-sm">
              Knjiga <em>Razgaljeno srce</em> — izbrane pesmi, 108 strani, 20 €
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://cdn.shopify.com/s/files/1/1011/3348/4370/files/KDO_JE_BILA_MIRA_MOKRISKA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground/70 text-sm font-medium rounded-sm hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Preberi PDF
            </a>
            <Link
              href="/knjiga"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
            >
              Knjiga Razgaljeno srce
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── OBJAVE V SLOVENKI ────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-center text-foreground mb-10">
            Objave v Slovenki
          </h2>

          <div className="flex flex-col gap-6">
            {/* Kartica 1: besedilo levo, slika desno */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[400px] overflow-hidden rounded-sm shadow-sm">
              <div className="flex flex-col justify-center px-10 py-12 bg-primary">
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-primary-foreground leading-snug">
                  "In vendar ..."
                </h3>
                <p className="text-primary-foreground/60 mt-4 text-base italic font-serif">
                  SLOVENKA, letnik III., 1899.
                </p>
              </div>
              <div className="relative h-72 md:h-full">
                <Image
                  src="/images/Slovenka_Mokriška.png"
                  alt="Objava Mire Mokriške v reviji Slovenka, letnik III., 1899"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Kartica 2: slika levo, besedilo desno */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[400px] overflow-hidden rounded-sm shadow-sm">
              <div className="relative h-72 md:h-full order-2 md:order-1">
                <Image
                  src="/images/Slovenka_Še letos tudi....png"
                  alt="Objava Mire Mokriške v reviji Slovenka — Še letos tudi"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-center px-10 py-12 order-1 md:order-2 bg-primary">
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-primary-foreground leading-snug">
                  "Še letos tudi ..."
                </h3>
                <p className="text-primary-foreground/60 mt-4 text-base italic font-serif">
                  SLOVENKA, letnik III., 1899.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
