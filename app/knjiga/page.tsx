import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knjiga",
  description:
    "Razgaljeno srce — Izbrane pesmi Mire Mokriške. Cena: 20 €. Naročite po e-pošti ali telefonu.",
};

const themes = [
  {
    numeral: "I",
    title: "Romantična ljubezen",
    description:
      "Pesmi o hrepenenju, predanosti in bolečini ljubezni, ki presega telesno.",
  },
  {
    numeral: "II",
    title: "Narava",
    description:
      "Gora, gozd, reka — narava kot zrcalo notranjega sveta pesnice.",
  },
  {
    numeral: "III",
    title: "Duhovnost",
    description:
      "Iskanje višjega smisla, dialog z večnostjo, duhovna intimnost.",
  },
  {
    numeral: "IV",
    title: "Osamljenost",
    description:
      "Gorski molk, tišina doline, bivanje na robu skupnosti in časa.",
  },
  {
    numeral: "V",
    title: "Trpljenje",
    description:
      "Pogum soočiti se z bolečino in jo pretvoriti v ustvarjalno moč.",
  },
];

const colophon = [
  { label: "Avtorica", value: "Mira Mokriška (Anica Omejc)" },
  { label: "Urednici / Predgovor", value: "Lucija Baša, Nataša Hribar" },
  { label: "Strani", value: "108" },
  { label: "Vezava", value: "Trda" },
  { label: "Izdajatelj", value: "Inštitut Mire Mokriške" },
  { label: "Leto izida", value: "2025" },
  { label: "ISBN", value: "978-961-97210-0-1" },
  { label: "Cena", value: "20 €" },
];

const partners = [
  { name: "Občina Kamnik", short: "Kamnik" },
  { name: "Frančiškanski samostan Kamnik", short: "Fr. samostan" },
  { name: "Gimnazija in SŠ Rudolfa Maistra Kamnik", short: "Gimnazija Kamnik" },
  { name: "KUD Franc Jelovšek Mengeš", short: "KUD Mengeš" },
  { name: "Studio Primer", short: "Primer" },
];

const archivePhotos = [
  {
    src: "/images/Slovenka_Mokriška.png",
    alt: "Mira Mokriška v reviji Slovenka — arhivski posnetek",
    caption: "Mira Mokriška v reviji Slovenka",
  },
  {
    src: "/images/Slovenka_Še letos tudi....png",
    alt: "Prispevek o Miri Mokriški v reviji Slovenka",
    caption: "Iz revije Slovenka",
  },
  {
    src: "/images/MM1.png",
    alt: "Arhivska fotografija Mire Mokriške",
    caption: "Arhivska fotografija",
  },
  {
    src: "/images/MM3.png",
    alt: "Arhivska fotografija iz zapuščine Mire Mokriške",
    caption: "Iz zapuščine",
  },
];

export default function KnjigaPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent opacity-70" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
              Publikacija
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-tight mb-3">
            Razgaljeno srce
          </h1>
          <p className="font-serif text-2xl italic text-primary-foreground/70">
            Izbrane pesmi
          </p>
        </div>
      </section>

      {/* ── COVER + COLOPHON + DESCRIPTION ──────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Cover + colophon */}
            <div>
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div
                    className="rounded-sm overflow-hidden shadow-2xl"
                    style={{
                      boxShadow:
                        "10px 10px 0 oklch(0.665 0.115 70 / 0.12), 0 24px 70px oklch(0.152 0.012 50 / 0.25)",
                    }}
                  >
                    <Image
                      src="/images/Naslovnica MM.png"
                      alt="Naslovnica knjige Razgaljeno srce — Izbrane pesmi Mire Mokriške"
                      width={320}
                      height={430}
                      className="w-56 sm:w-72 h-auto object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent opacity-60" />
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent opacity-60" />
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <a
                  href="#narocilo"
                  className="inline-flex items-center rounded-sm text-sm font-medium transition-opacity duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: "#1a3a2a",
                    color: "#ffffff",
                    padding: "12px 28px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Naroči knjigo →
                </a>
              </div>

              <div className="bg-card border border-border rounded-sm overflow-hidden">
                {colophon.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`flex justify-between items-center px-6 py-3.5 text-sm ${
                      i < colophon.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-muted-foreground">{label}</span>
                    <span
                      className={`font-medium text-foreground text-right ${
                        label === "Cena" ? "font-serif text-lg" : ""
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="prose-literary">
              <h2>O knjigi</h2>
              <p>
                <em>Razgaljeno srce</em> je prva zbirka izbranih del pesnice
                Mire Mokriške — Anice Omejc — ki je v zgodnjem 20. stoletju
                drzno vstopila v slovensko literarno pokrajino v času, ko so
                bili ženski glasovi na samem robu.
              </p>
              <p>
                Zbirka združuje pesmi, ki so desetletja čakale na svojo
                publiko. Urednici Lucija Baša in Nataša Hribar sta skrbno
                izbrali in uredili dela, ki pričajo o izjemnem pesniškem daru
                in pogumu ženske, ki je pisala iz srca — razgaljenega, a
                neustrašnega.
              </p>
              <blockquote>
                "Saj mi je poezija pol življenja — prva ljubezen."
                <cite>— Mira Mokriška, pismo Lei Fatur, 1911</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEMATSKI SKLOPI — 2×2 + 1 GRID ─────────────────────── */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ornament mb-12">
            <span className="font-serif text-accent text-base tracking-[0.2em] uppercase px-6">
              Tematski sklopi
            </span>
          </div>

          <p className="text-center text-foreground/60 text-sm mb-10 max-w-xl mx-auto">
            Pesmi so razporejene v pet tematskih sklopov, ki skupaj tvorijo
            celostno podobo pesničine notranje pokrajine.
          </p>

          {/* 2×2 grid + 1 centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {themes.slice(0, 4).map(({ numeral, title, description }) => (
              <div
                key={numeral}
                className="group relative bg-card border border-border rounded-sm p-7 hover:border-accent/40 hover:shadow-md transition-all duration-200"
              >
                {/* Roman numeral ornament */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-3xl font-light text-accent/60 leading-none select-none">
                    {numeral}
                  </span>
                  <div className="h-px flex-1 bg-border group-hover:bg-accent/30 transition-colors duration-200" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}

            {/* 5th card — centered spanning both columns */}
            <div className="sm:col-span-2 flex justify-center">
              <div
                className="group relative bg-card border border-border rounded-sm p-7 hover:border-accent/40 hover:shadow-md transition-all duration-200 w-full sm:w-1/2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-3xl font-light text-accent/60 leading-none select-none">
                    {themes[4].numeral}
                  </span>
                  <div className="h-px flex-1 bg-border group-hover:bg-accent/30 transition-colors duration-200" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">
                  {themes[4].title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {themes[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IZ ARHIVA — HISTORIČNE FOTOGRAFIJE ───────────────────── */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ornament mb-12">
            <span className="font-serif text-accent text-base tracking-[0.2em] uppercase px-6">
              Iz arhiva
            </span>
          </div>

          <p className="text-center text-foreground/60 text-sm mb-10 max-w-xl mx-auto">
            Historične fotografije in arhivski dokumenti iz zapuščine Mire
            Mokriške ter revije Slovenka.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {archivePhotos.map(({ src, alt, caption }) => (
              <figure key={src} className="group">
                <div className="relative overflow-hidden rounded-sm bg-muted aspect-[3/4]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <figcaption className="text-xs text-muted-foreground text-center mt-2 italic">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SODELUJOČI — PARTNER KARTICE ─────────────────────────── */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ornament mb-12">
            <span className="font-serif text-accent text-base tracking-[0.2em] uppercase px-6">
              Sodelujoči
            </span>
          </div>

          <p className="text-center text-foreground/60 text-sm mb-10 max-w-xl mx-auto">
            Knjiga je nastala v sodelovanju z naslednjimi ustanovami in
            organizacijami.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {partners.map(({ name }) => (
              <div
                key={name}
                className="flex items-center gap-4 bg-card border border-border rounded-sm px-5 py-4 hover:border-accent/30 transition-colors duration-200"
              >
                <span
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
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
                    className="text-primary"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <span className="text-sm text-foreground font-medium leading-snug">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NAROČILO ─────────────────────────────────────────────── */}
      <section id="narocilo" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="ornament mb-8">
              <span className="font-serif text-accent text-base tracking-[0.2em] uppercase px-4">
                Naročilo
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold mb-4">
              Naročilo knjige
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-10">
              Knjigo <em className="font-serif">Razgaljeno srce</em> naročite
              po e-pošti ali telefonu. Cena knjige je{" "}
              <strong className="text-primary-foreground font-serif text-xl">
                20 €
              </strong>
              . Pošljemo vam jo po pošti ali jo prevzamete osebno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:institut@mira-mokriska.si?subject=Naročilo knjige Razgaljeno srce"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium text-sm tracking-wide rounded-sm hover:bg-accent/90 transition-colors duration-200 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                institut@mira-mokriska.si
              </a>
              <a
                href="tel:031755190"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground/80 font-medium text-sm tracking-wide rounded-sm hover:border-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                031 755 190
              </a>
            </div>

            <p className="text-primary-foreground/35 text-sm mt-8">
              Možen je tudi osebni prevzem. Pišite nam za dogovor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
