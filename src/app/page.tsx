import ScrambleHeading from "@/components/ScrambleHeading";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center z-10">
          <ScrambleHeading 
            text="Navigating the Great Restructuring."
            className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tighter"
          />
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12">
            We are an Intelligence Logistics Agency. We build autonomous systems so you own the future, not rent it.
          </p>
          <div className="flex justify-center">
            <MagneticButton href="/contact">Apply for Audit</MagneticButton>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 border-y border-zinc-600/20 bg-slate-900 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block text-zinc-600 heading-font text-2xl uppercase tracking-widest font-bold">
          <span className="mx-8">According to 39 global reports, 70% of organizations face Cognitive Erosion within 12 months of AI adoption. We build systems that prevent it.</span>
          <span className="mx-8">According to 39 global reports, 70% of organizations face Cognitive Erosion within 12 months of AI adoption. We build systems that prevent it.</span>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="mb-16">
          <h2 className="heading-font text-4xl font-bold mb-4">Core Logistics</h2>
          <p className="text-zinc-400">Deploying intelligence across your entire operational stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="glass-panel p-8 group hover:border-emerald-500/50 transition-colors">
            <h3 className="heading-font text-2xl font-bold mb-4 text-zinc-200 group-hover:text-emerald-500 transition-colors">Workflow Automation</h3>
            <p className="text-zinc-400 mb-6">
              Founder-free systems using n8n and recursive agent loops. Zero human touch in operations.
            </p>
            <div className="text-sm font-medium text-emerald-500">Starting at $1,200/mo</div>
          </div>

          {/* Service 2 */}
          <div className="glass-panel p-8 group hover:border-emerald-500/50 transition-colors">
            <h3 className="heading-font text-2xl font-bold mb-4 text-zinc-200 group-hover:text-emerald-500 transition-colors">AI Privacy & Sovereignty Audits</h3>
            <p className="text-zinc-400 mb-6">
              We build Private Brains. Local LLM hosting. Your data never leaves your walls.
            </p>
            <div className="text-sm font-medium text-emerald-500">Enquire Only</div>
          </div>

          {/* Service 3 */}
          <div className="glass-panel p-8 group hover:border-emerald-500/50 transition-colors">
            <h3 className="heading-font text-2xl font-bold mb-4 text-zinc-200 group-hover:text-emerald-500 transition-colors">Strategic Foresight & Governance</h3>
            <p className="text-zinc-400 mb-6">
              1-on-1 consultancy for navigating the rupture between 2025-2040. Board-level work.
            </p>
            <div className="text-sm font-medium text-emerald-500">Enquire Only</div>
          </div>

          {/* Service 4 */}
          <div className="glass-panel p-8 group hover:border-emerald-500/50 transition-colors">
            <h3 className="heading-font text-2xl font-bold mb-4 text-zinc-200 group-hover:text-emerald-500 transition-colors">Autonomous Workforce Deployment</h3>
            <p className="text-zinc-400 mb-6">
              Level 3 AI integration. Digital Employees with dedicated dashboards, memory, and KPIs.
            </p>
            <div className="text-sm font-medium text-emerald-500">Enquire Only</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 container mx-auto px-6 text-center border-t border-zinc-600/20">
        <h2 className="heading-font text-4xl md:text-5xl font-bold mb-8">Secure Your Infrastructure.</h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
          Stop renting capability. Start building ownership. Book a strategic audit to map your transition.
        </p>
        <MagneticButton href="/contact">Apply for Audit</MagneticButton>
      </section>
    </div>
  );
}
