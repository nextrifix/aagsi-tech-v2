import Link from "next/link";

export default function BusinessAuditPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Business Audit</p>
      <h1 className="heading-font mt-4 text-4xl text-zinc-100 md:text-5xl">Understand where your business stands now.</h1>
      <p className="mt-5 max-w-2xl text-zinc-400">
        The audit maps your visibility, readiness, automation potential, and technology priorities before any implementation recommendation.
      </p>
      <div className="mt-8 border border-zinc-800 bg-zinc-950/70 p-5 text-sm text-zinc-300">
        Zero-friction entry: no login required to start. Account setup comes later only when continuity and tracking are needed.
      </div>
      <Link href="/contact" className="mt-8 inline-flex border border-zinc-200 bg-zinc-100 px-6 py-3 text-sm text-zinc-950">
        Start a Conversation
      </Link>
    </section>
  );
}
