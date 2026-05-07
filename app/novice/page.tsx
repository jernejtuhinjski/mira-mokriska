import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Novice",
  description:
    "Aktualne novice in sporočila Inštituta Mire Mokriške.",
};

export default function NovicePage() {
  const posts = getAllPosts("novice");

  return (
    <>
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent opacity-70" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
              Blog
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-tight">
            Novice
          </h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-muted-foreground italic">
                Kmalu prihajajo prve novice.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/novice/${post.slug}`}
                  className="group flex flex-col bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  {/* Card image area */}
                  <div
                    className="h-40 w-full"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.925 0.020 160), oklch(0.880 0.025 85))",
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                      {formatDate(post.date)}
                      {post.category && (
                        <>
                          {" · "}
                          <span className="text-accent">{post.category}</span>
                        </>
                      )}
                    </p>
                    <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-foreground/60 text-sm leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium group-hover:text-accent transition-colors duration-200">
                      Preberi
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
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
