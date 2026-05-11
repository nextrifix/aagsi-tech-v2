import ScrambleHeading from "@/components/ScrambleHeading";
import MagneticButton from "@/components/MagneticButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Autonomous AGSI",
  description: "Intelligence logistics services including Workflow Automation, AI Privacy Audits, Strategic Foresight, and Autonomous Workforce Deployment.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24">
      <div className="mb-16 border-b border-zinc-600/20 pb-12">
        <ScrambleHeading as="h1" text="Service Catalog" className="text-5xl md:text-6xl mb-6" />
        <p className="text-xl text-zinc-400 max-w-3xl">
          We route intelligence through autonomous systems so founders own the infrastructure, not rent it. 
          Every deployment is sovereign, transparent, and built for the long term.
        </p>
      </div>

      <div className="space-y-12">
        {/* Service 1 */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-start group hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500">
          <div className="md:w-1/3">
            <h2 className="heading-font text-3xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Workflow Automation</h2>
            <div className="inline-block bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mt-4">Retainer: $1,200/mo</div>
          </div>
          <div className="md:w-2/3">
            <p className="text-zinc-300 text-xl font-medium mb-4 leading-relaxed">
              Founder-free systems using n8n and recursive agent loops.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              We design and deploy automated workflows that eliminate manual bottlenecks. The goal is zero human touch in operations, freeing leadership to focus on strategy rather than execution. All systems are deployed on infrastructure you control.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-start group hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500">
          <div className="md:w-1/3">
            <h2 className="heading-font text-3xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">AI Privacy & Sovereignty Audits</h2>
            <div className="inline-block bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mt-4">Enquire Only</div>
          </div>
          <div className="md:w-2/3">
            <p className="text-zinc-300 text-xl font-medium mb-4 leading-relaxed">
              We build Private Brains. Local LLM hosting where data stays within client&apos;s walls.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              A new high-trust offer. We audit data leaks in your current stack, then deploy local LLMs and private vector databases. Your intellectual property is your most valuable asset—ensure it never trains public models. Your Brain, Your Walls.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-start group hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500">
          <div className="md:w-1/3">
            <h2 className="heading-font text-3xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Strategic Foresight & Governance</h2>
            <div className="inline-block bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mt-4">Enquire Only</div>
          </div>
          <div className="md:w-2/3">
            <p className="text-zinc-300 text-xl font-medium mb-4 leading-relaxed">
              1-on-1 consultancy for navigating the rupture between 2025-2040.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Board-level advisory. We map rupture risks, ensure AGI compliance, and guide workforce transition strategies. We provide the intelligence needed to make high-stakes decisions in an era of unprecedented technological acceleration.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-start group hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-500">
          <div className="md:w-1/3">
            <h2 className="heading-font text-3xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Autonomous Workforce Deployment</h2>
            <div className="inline-block bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mt-4">Enquire Only</div>
          </div>
          <div className="md:w-2/3">
            <p className="text-zinc-300 text-xl font-medium mb-4 leading-relaxed">
              Level 3 AI integration. Digital Employees with dedicated dashboards.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              We do not build chatbots. We deploy agents with memory, operational scope, and KPIs. They execute tasks, monitor systems, and send you reports. They are digital employees integrated directly into your organizational structure.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-xl text-zinc-400 mb-8 font-medium">According to 39 global reports, 70% of organizations face Cognitive Erosion within 12 months of AI adoption. We build systems that prevent it.</p>
        <MagneticButton href="/contact">Apply for Audit</MagneticButton>
      </div>
    </div>
  );
}
