import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-zinc-800 bg-zinc-950/60 py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="heading-font text-sm tracking-[0.18em] text-zinc-100">AAGSI</p>
          <p className="mt-4 max-w-sm text-sm text-zinc-400">
            Public intelligence and consulting front door for the future AAGSI Business Intelligence &amp; Evolution Platform.
          </p>
          <p className="mt-4 text-xs text-zinc-500">Multan, Pakistan · nextrifix@gmail.com</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li><Link href="/">Homepage</Link></li>
            <li><Link href="/blog">Research</Link></li>
            <li><Link href="/services">Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500">Platform</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li><Link href="/business-audit">Business Audit</Link></li>
            <li><Link href="/contact">Start a Conversation</Link></li>
            <li><Link href="/saas">Future /saas</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-zinc-800 px-6 pt-6 text-xs text-zinc-600">
        © {new Date().getFullYear()} AAGSI. All rights reserved.
      </div>
    </footer>
  );
}
