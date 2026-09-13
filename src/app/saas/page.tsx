import Link from "next/link";

export default function SaasPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">AAGSI /saas</p>
      <h1 className="heading-font mt-4 text-4xl text-zinc-100 md:text-5xl">Business Intelligence &amp; Evolution Platform</h1>
      <p className="mt-5 max-w-2xl text-zinc-400">
        This is the continuity layer for saved assessments, historical scores, recommendations, roadmaps, and team collaboration.
      </p>
      <div className="mt-8 border border-zinc-800 bg-zinc-950/70 p-5 text-sm text-zinc-300">
        Public exploration stays open. Authentication unlocks save, monitor, collaborate, and continue.
      </div>
      <Link href="/" className="mt-8 inline-flex border border-zinc-700 px-6 py-3 text-sm text-zinc-200">
        Return to Homepage
      </Link>
    </section>
  );
}
