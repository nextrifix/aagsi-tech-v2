import ScrambleHeading from "@/components/ScrambleHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Autonomous AGSI",
  description: "Terms of Service for Autonomous AGSI.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl min-h-screen">
      <div className="mb-16">
        <ScrambleHeading as="h1" text="Terms of Service" className="text-4xl md:text-5xl mb-6" />
        <p className="text-emerald-500 font-mono text-sm uppercase tracking-widest">Effective Date: May 2026</p>
      </div>

      <div className="glass-panel p-8 md:p-12 rounded-3xl text-zinc-300 space-y-8 leading-relaxed font-inter">
        <section>
          <h2 className="heading-font text-2xl font-bold text-zinc-200 mb-4">1. The Adl Pillar Agreement</h2>
          <p>
            By engaging with Autonomous AGSI, you agree to the principles of the Adl Pillar. We build infrastructure for you to own. We do not engage in indefinite vendor lock-in. Upon final deployment and handover, the operational systems, recursive agent loops, and private models are the sole property of the client.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-bold text-zinc-200 mb-4">2. Application for Audit</h2>
          <p>
            Submitting an application for an AI Readiness Audit does not guarantee a strategic engagement. We reserve the right to select partners based on operational maturity, alignment with our core values, and technical feasibility.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-bold text-zinc-200 mb-4">3. Liability</h2>
          <p>
            While we build highly resilient, founder-free systems with zero human touch in operations, Autonomous AGSI is not liable for structural decisions made by the client following the handover phase, nor for disruptions caused by external third-party API deprecations.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-bold text-zinc-200 mb-4">4. Governance</h2>
          <p>
            All autonomous workforce deployments (Level 3 AI Integration) must adhere to mutually agreed upon ethical guardrails and KPI limitations to ensure safe operational boundaries.
          </p>
        </section>
      </div>
    </div>
  );
}
