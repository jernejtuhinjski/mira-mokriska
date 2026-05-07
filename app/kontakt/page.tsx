import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Inštitut Mire Mokriške. Naročite knjigo Razgaljeno srce ali se povežite z nami.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent opacity-70" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
              Stik
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-tight mb-4">
            Kontakt
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
            Veselimo se vašega sporočila — za naročilo knjige, sodelovanje ali
            katerokoli vprašanje.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">
                Pišite ali pokličite
              </h2>

              <div className="space-y-6 mb-10">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      E-pošta
                    </h3>
                    <a
                      href="mailto:institut@mira-mokriska.si"
                      className="text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      institut@mira-mokriska.si
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Odgovorimo v 1–2 delovnih dneh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:031755190"
                      className="text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      031 755 190
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dosegljivi ob delovnikih
                    </p>
                  </div>
                </div>
              </div>

              {/* Book order */}
              <div className="bg-muted/40 border border-border rounded-sm p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  Naročilo knjige
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  Za naročilo knjige <em className="font-serif">Razgaljeno srce</em>{" "}
                  (20 €) pošljite e-pošto z naslednjimi podatki:
                </p>
                <ul className="space-y-1.5 text-sm text-foreground/60">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">—</span>
                    Ime in priimek
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">—</span>
                    Dostavni naslov (za pošiljanje)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">—</span>
                    Telefonska številka za obvestilo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">—</span>
                    Število izvodov
                  </li>
                </ul>
                <a
                  href="mailto:institut@mira-mokriska.si?subject=Naročilo knjige Razgaljeno srce"
                  className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
                >
                  Pošlji naročilo
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
                </a>
              </div>
            </div>

            {/* Right side — about + quote */}
            <div className="flex flex-col gap-8">
              <div className="bg-primary text-primary-foreground rounded-sm p-8">
                <h2 className="font-serif text-2xl font-semibold mb-4">
                  O inštitutu
                </h2>
                <p className="text-primary-foreground/70 leading-relaxed mb-4">
                  Inštitut Mire Mokriške je posvečen odkrivanju, ohranjanju
                  in ponovnemu vračanju glasu pesnici Miri Mokriški —
                  Anici Žemlja.
                </p>
                <p className="text-primary-foreground/70 leading-relaxed">
                  Delujemo v sodelovanju z lokalno skupnostjo, kulturnimi in
                  znanstvenimi ustanovami ter z ljubitelji literature po vsej
                  Sloveniji in v zamejstvu.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-8 py-2">
                <blockquote className="font-serif text-2xl italic text-foreground leading-relaxed mb-4">
                  "Duša naj se z dušo druži!"
                </blockquote>
                <cite className="text-sm text-muted-foreground not-italic tracking-wide">
                  — Mira Mokriška
                </cite>
              </div>

              <div className="bg-card border border-border rounded-sm p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Partnerji
                </h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  {[
                    "Občina Kamnik",
                    "Frančiškanski samostan Kamnik",
                    "Gimnazija in SŠ Rudolfa Maistra Kamnik",
                    "KUD Franc Jelovšek Mengeš",
                    "Studio Primer",
                    "Creatim",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
