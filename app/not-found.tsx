import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="font-serif text-accent text-6xl font-light mb-4">404</p>
        <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">
          Stran ni bila najdena
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
          Stran, ki jo iščete, ne obstaja ali je bila premaknjena.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
        >
          Nazaj na domov
        </Link>
      </div>
    </section>
  );
}
