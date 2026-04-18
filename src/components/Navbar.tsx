import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-zinc-600/20">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="heading-font font-bold text-xl tracking-tight text-zinc-200 hover:text-emerald-500 transition-colors">
          Autonomous AGSI
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/services" className="hover:text-emerald-500 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-emerald-500 transition-colors">About</Link>
          <Link href="/blog" className="hover:text-emerald-500 transition-colors">Lab</Link>
          <Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <MagneticButton href="/contact">Apply for Audit</MagneticButton>
        </div>
      </div>
    </header>
  );
}
