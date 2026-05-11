import Link from "next/link";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="glass-panel border border-zinc-600/30 rounded-full h-16 flex items-center justify-between px-6 shadow-2xl shadow-emerald-500/10">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="Autonomous AGSI Logo" width={32} height={32} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="heading-font font-bold text-lg tracking-tight text-zinc-200 group-hover:text-emerald-400 transition-colors">
            Autonomous AGSI
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
          <Link href="/blog" className="hover:text-emerald-400 transition-colors">Lab</Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:block scale-90 origin-right">
          <MagneticButton href="/contact">Apply for Audit</MagneticButton>
        </div>
      </div>
    </header>
  );
}
