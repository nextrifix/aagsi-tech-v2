import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-slate-900/50 backdrop-blur-md relative z-10 py-16 mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <Image src="/logo.png" alt="Autonomous AGSI Logo" width={36} height={36} className="group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100" />
              <h3 className="heading-font font-bold text-xl text-zinc-200 group-hover:text-emerald-400 transition-colors">Autonomous AGSI</h3>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm mb-6 leading-relaxed">
              Intelligence Logistics Agency. We build autonomous systems so you own the future, not rent it.
            </p>
            <p className="text-zinc-500 text-xs">
              Multan, Pakistan | <a href="mailto:nextrifix@gmail.com" className="hover:text-emerald-500">nextrifix@gmail.com</a>
            </p>
          </div>
          <div>
            <h4 className="heading-font font-semibold text-zinc-200 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/services" className="hover:text-emerald-500 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-500 transition-colors">Lab</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="heading-font font-semibold text-zinc-200 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Autonomous AGSI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
