import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost, formatDate } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts("novice").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost("novice", slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NovinaPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost("novice", slug);
  if (!post) notFound();

  return (
    <>
      <section className="pt-32 pb-12 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/novice"
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
            Vse novice
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent opacity-70" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
              {post.category ?? "Novica"}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-tight mb-4 max-w-3xl">
            {post.title}
          </h1>
          <p className="text-primary-foreground/60 text-sm">
            {formatDate(post.date)}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article
              className="lg:col-span-2 prose-literary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-card border border-border rounded-sm p-6">
                  <h2 className="font-serif text-lg font-semibold text-foreground mb-4">
                    O inštitutu
                  </h2>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                    Inštitut Mire Mokriške odkriva, ohranja in vrača glas
                    pozabljeni pesnici Miri Mokriški.
                  </p>
                  <Link
                    href="/o-miri"
                    className="text-sm text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    Spoznajte Miro →
                  </Link>
                </div>

                <div className="bg-card border border-border rounded-sm p-6">
                  <h2 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Knjiga
                  </h2>
                  <p className="font-serif text-base italic text-muted-foreground mb-3">
                    Razgaljeno srce
                  </p>
                  <p className="text-sm text-foreground/60 mb-4">20 €</p>
                  <Link
                    href="/knjiga"
                    className="text-sm text-primary hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    Več o knjigi →
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
