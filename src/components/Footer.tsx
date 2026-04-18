import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-600/20 bg-slate-900 relative z-10 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="heading-font font-bold text-xl text-zinc-200 mb-4">Autonomous AGSI</h3>
            <p className="text-zinc-400 text-sm max-w-sm mb-6">
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
