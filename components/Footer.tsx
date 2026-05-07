import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/o-miri", label: "O Miri" },
  { href: "/knjiga", label: "Knjiga" },
  { href: "/novice", label: "Novice" },
  { href: "/dogodki", label: "Dogodki" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Logo MM.png"
                alt="Logotip Inštituta Mire Mokriške"
                width={80}
                height={80}
                className="w-20 h-20 object-contain brightness-0 invert opacity-90"
              />
              <h2 className="font-serif text-xl font-semibold leading-tight">
                Inštitut Mire Mokriške
              </h2>
            </div>
            <p className="text-primary-foreground/70 italic font-serif text-lg mb-4">
              "Duša naj se z dušo druži!"
            </p>
            <p className="text-primary-foreground/55 text-sm leading-relaxed">
              Prostor za raziskovanje, ohranjanje in navdih ženskega
              ustvarjalnega izraza.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-medium mb-4 text-primary-foreground/80 uppercase tracking-wide text-sm">
              Navigacija
            </h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-medium mb-4 text-primary-foreground/80 uppercase tracking-wide text-sm">
              Kontakt
            </h3>
            <div className="space-y-2 text-sm text-primary-foreground/55">
              <p>
                <a
                  href="mailto:institut@mira-mokriska.si"
                  className="hover:text-primary-foreground transition-colors duration-200"
                >
                  institut@mira-mokriska.si
                </a>
              </p>
              <p>
                <a
                  href="tel:031755190"
                  className="hover:text-primary-foreground transition-colors duration-200"
                >
                  031 755 190
                </a>
              </p>
              <p className="mt-4 leading-relaxed">
                Za naročilo knjige{" "}
                <em className="font-serif">Razgaljeno srce</em> nas
                kontaktirajte po e-pošti ali telefonu.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/35">
          <p>
            © {new Date().getFullYear()} Inštitut Mire Mokriške. Vse pravice
            pridržane.
          </p>
          <p>ISBN 978-961-97210-0-1</p>
        </div>
      </div>
    </footer>
  );
}
