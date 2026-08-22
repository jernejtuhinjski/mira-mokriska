import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/markdown";

const poems = [
  {
    text: "Kako srce kopni, kako žalost zori,\nkdar ves svet je hladen — le duša gori.",
    source: "Razgaljeno srce",
  },
  {
    text: "Duša naj se z dušo druži,\nmisli naj se z misljo spletat' —\nnajdeva se v lepoti skupni,\nkatera nas bo vedno vedat'.",
    source: "Iz zapuščine, 1912",
  },
  {
    text: "Saj mi je poezija pol življenja —\nmoja prva ljubezen.",
    source: "Pismo Lei Fatur, 1911",
  },
];

const awards = [
  {
    title: "Naša Slovenija 2025",
    issuer: "Kultura-Natura Slovenija",
    url: "https://www.kultura-natura.si/2025/03/prejemniki-priznanj-nasa-slovenija-2025/",
  },
];

const partners = [
  "Občina Kamnik",
  "Frančiškanski samostan Kamnik",
  "Gimnazija in SŠ Rudolfa Maistra Kamnik",
  "KUD Franc Jelovšek Mengeš",
  "Studio Primer",
  "Creatim",
];

export default async function HomePage() {
  const novice = getAllPosts("novice").slice(0, 2);
  const dogodki = getAllPosts("dogodki")
    .filter((e) => !e.archived)
    .slice(0, 2);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#faf7f2" }}
      >
        {/* Vezje lipa — vidna tekstura */}
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
        {/* Gradient — tekst ostane berljiv nad teksturo */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/80 to-[#faf7f2]/10" />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-4 items-center">

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-accent opacity-70" />
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  Inštitut Mire Mokriške
                </span>
              </div>

              <h1
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] mb-8"
                style={{ color: "#1a3a2a" }}
              >
                Odkrivamo
                <br />
                <span className="italic font-normal">pozabljeno</span>
                <br />
                ustvarjalko
              </h1>

              <blockquote className="font-serif text-xl sm:text-2xl italic text-accent mb-8 leading-relaxed">
                "Duša naj se z dušo druži!"
              </blockquote>

              <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-xl">
                Prostor za raziskovanje, ohranjanje in navdih ženskega
                ustvarjalnega izraza. Vračamo glas pozabljeni pesnici Miri
                Mokriški — Anici Žemlja (1875–1922).
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/o-miri"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
                >
                  Spoznajte Miro
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/knjiga"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary text-primary font-medium text-sm tracking-wide rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                >
                  Knjiga
                </Link>
              </div>
            </div>

            {/* Portrait — desktop only */}
            <div className="hidden lg:flex items-center justify-center flex-shrink-0">
              <div className="relative" style={{ width: "460px", height: "600px" }}>
                <Image
                  src="/images/Mira_Mokriska_portret_Background_Removed.webp"
                  alt="Portret Mire Mokriške (Anice Žemlja, 1875–1922)"
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/35">
          <span className="text-xs tracking-widest uppercase">Navzdol</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="animate-bounce">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── POETRY QUOTES ────────────────────────────────────────── */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="ornament mb-20">
            <span className="font-serif text-accent text-base tracking-[0.2em] uppercase px-6">
              Iz poezije
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {poems.map((poem, i) => (
              <div
                key={i}
                className="flex flex-col pb-12 border-b border-border/40 md:border-0 md:pb-0 last:border-0 last:pb-0"
              >
                <div className="w-10 h-px bg-accent mb-8 opacity-70" />
                <blockquote className="font-serif text-2xl italic text-foreground leading-[1.75] mb-6 flex-1 whitespace-pre-line">
                  {`"${poem.text}"`}
                </blockquote>
                <cite className="text-sm text-muted-foreground not-italic font-medium tracking-wide">
                  — {poem.source}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK SECTION ─────────────────────────────────────────── */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Book cover — real image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div
                  className="rounded-sm overflow-hidden shadow-2xl"
                  style={{
                    boxShadow:
                      "8px 8px 0 oklch(0.665 0.115 70 / 0.15), 0 20px 60px oklch(0.152 0.012 50 / 0.25)",
                  }}
                >
                  <Image
                    src="/images/Naslovnica MM.png"
                    alt="Naslovnica knjige Razgaljeno srce — Izbrane pesmi Mire Mokriške"
                    width={280}
                    height={380}
                    className="w-48 sm:w-60 h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent opacity-60" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent opacity-60" />
              </div>
            </div>

            {/* Book info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-accent opacity-70" />
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                  Knjiga
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-2 leading-tight">
                Razgaljeno srce
              </h2>
              <p className="font-serif text-xl italic text-muted-foreground mb-6">
                Izbrane pesmi
              </p>

              <p className="text-foreground/70 leading-relaxed mb-4">
                Prva zbirka izbranih del pesnice Mire Mokriške — Anice Žemlja
                — ki je v zgodnjem 20. stoletju drzno vstopila v literarno
                pokrajino v času, ko so bili ženski glasovi na robu.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Pesmi so razporejene v pet tematskih sklopov: ljubezen,
                narava, duhovnost, osamljenost in trpljenje. 108 strani v
                trdi vezavi.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div>
                  <p className="text-3xl font-serif font-semibold text-foreground">
                    20 €
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Naročite po e-pošti ali telefonu
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/knjiga"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
                >
                  Več o knjigi
                  <svg
                    width="16"
                    height="16"
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
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground/70 font-medium text-sm tracking-wide rounded-sm hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Naroči
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT INSTITUTE ──────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

            {/* LEVO: Logotip inštituta */}
            <div className="flex items-center justify-center mb-10 lg:mb-0 lg:mr-16">
              <Image
                src="/images/Logo MM.png"
                alt="Logotip Inštituta Mire Mokriške"
                width={380}
                height={380}
                className="w-56 sm:w-72 lg:w-96 h-auto object-contain"
              />
            </div>

            {/* DESNO: Tekst */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent opacity-70" />
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                  O inštitutu
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-7 leading-tight">
                Prostor za ohranjanje{" "}
                <span className="italic font-normal">ženskega glasu</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-8 text-base sm:text-lg">
                Inštitut Mire Mokriške je posvečen odkrivanju, ohranjanju in
                ponovnemu vračanju glasu pesnici in pisateljici Miri Mokriški
                — Anici Žemlja — ki je na prelomu 20. stoletja ustvarjala v
                senci pozabe. Naš namen je njeno literarno dediščino ohraniti
                za prihodnje rodove in jo umestiti v slovensko kulturno
                zgodovino.
              </p>
              {awards.length > 0 && (
                <div className="mb-8">
                  <p className="text-accent text-xs tracking-[0.2em] uppercase font-medium mb-2.5">
                    Priznanje
                  </p>
                  {awards.map((award) => (
                    <a
                      key={award.title}
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-4 py-3 w-fit border border-border rounded-sm hover:border-accent transition-colors duration-200 cursor-pointer group"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="text-accent flex-shrink-0"
                      >
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                      <span className="font-serif text-sm leading-snug">
                        <span className="font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                          {award.title}
                        </span>
                        <span className="text-muted-foreground"> · {award.issuer}</span>
                      </span>
                    </a>
                  ))}
                </div>
              )}
              <Link
                href="/o-miri"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-colors duration-200 cursor-pointer group"
              >
                Spoznajte Miro
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── BUKLA / MEDIJI ────────────────────────────────────────── */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-accent opacity-70" />
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                  Mediji
                </span>
              </div>
              <h2 className="font-serif text-4xl font-semibold mb-4 leading-tight">
                Objavljeno v reviji Bukla
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                Revija Bukla (št. 192, januar–februar 2026) je objavila obsežen
                prispevek o pesnici Miri Mokriški in delu Inštituta. Njena
                zgodba se vrača v slovensko literarno zavest.
              </p>
              <Link
                href="/novice/razgaljeno-srce-gorenjski-glas"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200 cursor-pointer text-sm font-medium group"
              >
                Preberi več
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
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Bukla magazine image */}
            <div className="relative">
              <div className="rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/referenca Bukla_page-0001.jpg"
                  alt="Prispevek o Miri Mokriški v reviji Bukla, številka 192, januar–februar 2026"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-accent/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS + EVENTS ────────────────────────────────────────── */}
      {(novice.length > 0 || dogodki.length > 0) && (
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Novice */}
              {novice.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-serif text-3xl font-semibold text-foreground">
                      Novice
                    </h2>
                    <Link
                      href="/novice"
                      className="text-sm text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      Vse novice →
                    </Link>
                  </div>
                  <div className="space-y-6">
                    {novice.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/novice/${post.slug}`}
                        className="block group border-b border-border pb-6 last:border-0 last:pb-0 cursor-pointer"
                      >
                        <p className="text-xs text-muted-foreground mb-2 tracking-wide uppercase">
                          {formatDate(post.date)}
                        </p>
                        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Dogodki */}
              {dogodki.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-serif text-3xl font-semibold text-foreground">
                      Prihajajoči dogodki
                    </h2>
                    <Link
                      href="/dogodki"
                      className="text-sm text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      Vsi dogodki →
                    </Link>
                  </div>
                  <div className="space-y-6">
                    {dogodki.map((event) => (
                      <Link
                        key={event.slug}
                        href={`/dogodki/${event.slug}`}
                        className="block group border-b border-border pb-6 last:border-0 last:pb-0 cursor-pointer"
                      >
                        <p className="text-xs text-muted-foreground mb-2 tracking-wide uppercase">
                          {formatDate(event.date)}
                          {event.location && ` · ${event.location}`}
                        </p>
                        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
                          {event.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
