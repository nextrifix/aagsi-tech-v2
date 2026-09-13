import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DecisionLab from "@/components/DecisionLab";

const capabilityLenses = [
  "Business Audit",
  "Digital Visibility",
  "GEO",
  "AEO",
  "AI Readiness",
  "Automation",
  "Agent Readiness",
  "Technology Adoption",
];

const researchStructures = [
  "Case studies",
  "Measured outcomes",
  "Research notes",
  "Live experiments",
  "Evidence log",
];

export default function Home() {
  return (
    <div className="pb-24 pt-28">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-end">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-zinc-500">AAGSI · Future-ready intelligence platform</p>
          <h1 className="heading-font max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-zinc-100 md:text-7xl">
            Know what matters.
            <br />
            Know what to do next.
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-400 md:text-lg">
            AAGSI helps decision-makers understand change, assess impact, decide with evidence, act with focus, and measure what works.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#explore"
              className="group inline-flex items-center gap-2 border border-zinc-600/70 bg-zinc-900/70 px-6 py-3 text-sm text-zinc-100 transition hover:border-zinc-200"
            >
              Explore AAGSI
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/business-audit"
              className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm text-zinc-300 transition hover:border-zinc-500"
            >
              Check Your Business
            </Link>
          </div>
        </div>

        <div className="border border-zinc-800 bg-zinc-950/75 p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Live decision surface</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              { label: "Understand", value: "Signals mapped" },
              { label: "Assess", value: "Evidence weighted" },
              { label: "Decide", value: "State assigned" },
              { label: "Act + Measure", value: "Roadmap tracked" },
            ].map((item) => (
              <div key={item.label} className="border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                <p className="mt-2 text-sm text-zinc-200">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300">
            Public intelligence and consulting today. Product continuity through <span className="text-zinc-100">/saas</span>.
          </div>
        </div>
      </section>

      <section id="explore" className="mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Immediate product experience</p>
            <h2 className="heading-font mt-3 text-3xl text-zinc-100 md:text-4xl">What should your business do about what&apos;s next?</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-zinc-400 md:block">No login. No signup. Explore the AAGSI decision model directly.</p>
        </div>
        <DecisionLab />
      </section>

      <section className="mx-auto mt-24 grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-2">
        <div className="border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Business evolution system</p>
          <div className="mt-6 space-y-3">
            {[
              "Technology change",
              "Business understanding",
              "Assessment",
              "Evidence",
              "Decision",
              "Implementation",
              "Measurement",
              "Continuous evolution",
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-4 border border-zinc-800 bg-zinc-900/50 p-3">
                <span className="w-7 text-xs text-zinc-500">0{index + 1}</span>
                <span className="text-sm text-zinc-200">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">One intelligence system · multiple lenses</p>
          <h3 className="heading-font mt-3 text-2xl text-zinc-100">Capabilities are connected, not siloed services.</h3>
          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {capabilityLenses.map((lens) => (
              <div key={lens} className="border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300">
                {lens}
              </div>
            ))}
          </div>
          <div className="mt-6 border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300">
            Explore publicly first. Create an account later for continuity, tracking, collaboration, and historical intelligence.
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="grid gap-8 border border-zinc-800 bg-zinc-950/70 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Research and proof structure</p>
            <h3 className="heading-font mt-3 text-3xl text-zinc-100">Trust grows with evidence.</h3>
            <p className="mt-4 max-w-xl text-sm text-zinc-400">
              The homepage is designed to strengthen as real case studies, measured outcomes, and implementation evidence are added.
            </p>
          </div>
          <div className="space-y-2">
            {researchStructures.map((item) => (
              <div key={item} className="border border-dashed border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="border border-zinc-700 bg-zinc-950 px-6 py-8 text-center md:px-10 md:py-10">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Progressive conversion</p>
          <h2 className="heading-font mt-3 text-3xl text-zinc-100 md:text-4xl">Explore → Understand → Trust → Engage</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 md:text-base">
            If you want to know what AAGSI would find about your business and what to do next, we can map it together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="border border-zinc-200 bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-white">
              Start a Conversation
            </Link>
            <Link href="/services" className="border border-zinc-700 px-6 py-3 text-sm text-zinc-300 transition hover:border-zinc-500">
              Consulting + Implementation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
