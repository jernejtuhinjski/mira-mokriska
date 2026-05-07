import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Dogodki",
  description:
    "Prihajajoči in pretekli dogodki Inštituta Mire Mokriške — predstavitve, predavanja, pogovori.",
};

export default function DogodkiPage() {
  const all = getAllPosts("dogodki");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = all.filter((e) => new Date(e.date) >= today);
  const archive = all.filter((e) => new Date(e.date) < today);

  return (
    <>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent opacity-70" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
              Dogajanje
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-tight">
            Dogodki
          </h1>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-10">
            Prihajajoči dogodki
          </h2>

          {upcoming.length === 0 ? (
            <div className="border border-border rounded-sm p-12 text-center">
              <p className="font-serif text-xl text-muted-foreground italic">
                Trenutno ni načrtovanih dogodkov.
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Spremljajte nas za novosti.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {upcoming.map((event) => (
                <Link
                  key={event.slug}
                  href={`/dogodki/${event.slug}`}
                  className="group flex flex-col sm:flex-row gap-6 bg-card border border-border rounded-sm p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {/* Date block */}
                  <div className="sm:w-32 flex-shrink-0 text-center sm:text-left">
                    <div className="bg-primary text-primary-foreground rounded-sm p-4 inline-block sm:block">
                      <p className="font-serif text-2xl font-semibold leading-none">
                        {new Date(event.date).getDate()}
                      </p>
                      <p className="text-xs text-primary-foreground/70 uppercase tracking-wide mt-1">
                        {new Date(event.date).toLocaleDateString("sl-SI", {
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                      {event.title}
                    </h3>
                    {event.location && (
                      <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
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
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {event.location}
                      </p>
                    )}
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {event.excerpt}
                    </p>
                  </div>

                  <div className="sm:self-center flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-200 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Archive */}
      {archive.length > 0 && (
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-10">
              Arhiv dogodkov
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {archive.map((event) => (
                <Link
                  key={event.slug}
                  href={`/dogodki/${event.slug}`}
                  className="group bg-card border border-border rounded-sm p-6 hover:border-primary/20 transition-all duration-200 cursor-pointer"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    {formatDate(event.date)}
                    {event.location && ` · ${event.location}`}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-foreground/50 text-sm leading-relaxed line-clamp-2">
                    {event.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
