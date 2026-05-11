import ScrambleHeading from "@/components/ScrambleHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Autonomous AGSI",
  description: "Privacy policy and data sovereignty rules for Autonomous AGSI.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl min-h-screen">
      <div className="mb-16">
        <ScrambleHeading as="h1" text="Privacy Policy" className="text-4xl md:text-5xl mb-6" />
        <p className="text-emerald-500 font-mono text-sm uppercase tracking-widest">Effective Date: May 2026</p>
      </div>

      <div className="glass-panel p-8 md:p-12 rounded-3xl text-zinc-300 space-y-8 leading-relaxed font-inter">
        <section>
          <h2 className="heading-font text-2xl font-bold text-zinc-200 mb-4">1. Data Sovereignty</h2>
          <p>
            At Autonomous AGSI, we operate on the principle of absolute Data Sovereignty. We do not sell, rent, or monetize your intellectual property or operational data. When we deploy local LLMs or private vector databases, your data stays entirely within your walls.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-bold text-zinc-200 mb-4">2. Information Collection</h2>
          <p>
            When you apply for an Audit through our website, we collect necessary professional information including corporate email, estimated revenue range, technical stack details, and operational bottlenecks. This information is strictly used for evaluating architectural requirements.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-bold text-zinc-200 mb-4">3. Zero-Retention Systems</h2>
          <p>
            By default, the autonomous agents and workflows we design for clients operate on zero-retention principles on our end. You, the client, retain 100% ownership and access logs for all AI interactions taking place on your deployed infrastructure.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-bold text-zinc-200 mb-4">4. Third-Party Integrations</h2>
          <p>
            Any third-party APIs (such as external model providers) used during strategic integration are strictly subjected to zero-training data agreements where applicable. We prioritize open-source and self-hosted alternatives to prevent Cognitive Erosion.
          </p>
        </section>
      </div>
    </div>
  );
}
