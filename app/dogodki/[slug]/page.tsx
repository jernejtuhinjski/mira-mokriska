import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost, formatDate } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts("dogodki").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getPost("dogodki", slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.excerpt,
  };
}

export default async function DogodekPage({ params }: Props) {
  const { slug } = await params;
  const event = await getPost("dogodki", slug);
  if (!event) notFound();

  return (
    <>
      <section className="pt-32 pb-12 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/dogodki"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors duration-200 cursor-pointer"
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
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Vsi dogodki
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent opacity-70" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
              {event.archived ? "Arhiv" : "Dogodek"}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-6 max-w-3xl">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
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
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              {formatDate(event.date)}
            </span>
            {event.location && (
              <span className="flex items-center gap-2">
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
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article
              className="lg:col-span-2 prose-literary"
              dangerouslySetInnerHTML={{ __html: event.content }}
            />

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {!event.archived && (
                  <div className="bg-primary text-primary-foreground rounded-sm p-6">
                    <h2 className="font-serif text-lg font-semibold mb-4">
                      Udeležba
                    </h2>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                      Za prijavo ali dodatne informacije o dogodku nas
                      kontaktirajte.
                    </p>
                    <a
                      href="mailto:institut@mira-mokriska.si"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors duration-200 cursor-pointer"
                    >
                      Pišite nam
                    </a>
                  </div>
                )}

                <div className="bg-card border border-border rounded-sm p-6">
                  <h2 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Knjiga
                  </h2>
                  <p className="font-serif text-base italic text-muted-foreground mb-2">
                    Razgaljeno srce
                  </p>
                  <p className="text-sm text-foreground/60 mb-4">
                    Izbrane pesmi Mire Mokriške
                  </p>
                  <Link
                    href="/knjiga"
                    className="text-sm text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    Naročite izvod →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
