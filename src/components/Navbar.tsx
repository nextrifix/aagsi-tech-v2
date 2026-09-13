import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-5 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
      <div className="glass-panel h-14 border border-zinc-700/60 bg-zinc-950/80 px-5 md:px-6">
        <div className="flex h-full items-center justify-between gap-4">
          <Link href="/" className="heading-font text-sm font-semibold tracking-[0.18em] text-zinc-100">
            AAGSI
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <Link href="/" className="transition hover:text-zinc-100">Explore</Link>
            <Link href="/blog" className="transition hover:text-zinc-100">Research</Link>
            <Link href="/business-audit" className="transition hover:text-zinc-100">Business Audit</Link>
            <Link href="/services" className="transition hover:text-zinc-100">Services</Link>
          </nav>

          <Link href="/contact" className="border border-zinc-600 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-200 transition hover:border-zinc-200">
            Start a Conversation
          </Link>
        </div>
      </div>
    </header>
  );
}
