"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/o-miri", label: "O Miri" },
  { href: "/knjiga", label: "Knjiga" },
  { href: "/novice", label: "Novice" },
  { href: "/dogodki", label: "Dogodki" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#faf7f2",
        borderBottom: "1px solid #e8e0d5",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Inštitut Mire Mokriške — domov"
        >
          <Image
            src="/images/Logo MM.png"
            alt="Logotip Inštituta Mire Mokriške"
            width={48}
            height={48}
            className="w-12 h-12 object-contain flex-shrink-0"
          />
          <div className="leading-tight">
            <span className="block font-serif text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
              Inštitut
            </span>
            <span className="block font-serif text-xs font-normal italic text-muted-foreground group-hover:text-primary/70 transition-colors duration-200">
              Mire Mokriške
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "relative text-sm tracking-wide transition-colors duration-200",
                    "after:absolute after:bottom-[-2px] after:left-0 after:h-px after:transition-all after:duration-200",
                    active
                      ? "text-primary after:w-full after:bg-accent"
                      : "text-foreground/70 hover:text-foreground after:w-0 hover:after:w-full after:bg-accent"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zapri meni" : "Odpri meni"}
          aria-expanded={open}
        >
          <span
            className={cn(
              "block w-6 h-px bg-foreground transition-all duration-200",
              open && "translate-y-[8px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-foreground transition-all duration-200",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-foreground transition-all duration-200",
              open && "-translate-y-[8px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96 border-b border-border" : "max-h-0"
        )}
      >
        <ul
          className="flex flex-col px-6 py-4 gap-1"
          style={{ backgroundColor: "#faf7f2" }}
          role="list"
        >
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "block py-2.5 text-base border-b border-border/40 last:border-0 transition-colors duration-200",
                    active
                      ? "text-primary font-medium"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
