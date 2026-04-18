import ScrambleHeading from "@/components/ScrambleHeading";
import MagneticButton from "@/components/MagneticButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Autonomous AGSI",
  description: "Secure Your Infrastructure. Apply for an AI Readiness Audit.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">
      <div className="mb-12 text-center">
        <ScrambleHeading as="h1" text="Secure Your Infrastructure." className="text-4xl md:text-6xl mb-6" />
        <p className="text-xl text-zinc-400">
          Apply for an Audit. All inquiries are strictly confidential.
        </p>
      </div>

      <div className="glass-panel p-8 md:p-12">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="revenue" className="block text-sm font-bold text-zinc-300">Annual Revenue Range</label>
            <select id="revenue" className="w-full bg-slate-900 border border-zinc-700 text-zinc-200 p-3 outline-none focus:border-emerald-500 transition-colors">
              <option value="">Select Range</option>
              <option value="under-1m">Under $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m-20m">$5M - $20M</option>
              <option value="over-20m">Over $20M</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="bottleneck" className="block text-sm font-bold text-zinc-300">Primary Manual Bottleneck</label>
            <textarea id="bottleneck" rows={3} placeholder="Describe the operational constraint holding you back..." className="w-full bg-slate-900 border border-zinc-700 text-zinc-200 p-3 outline-none focus:border-emerald-500 transition-colors"></textarea>
          </div>

          <div className="space-y-2">
            <label htmlFor="stack" className="block text-sm font-bold text-zinc-300">Current Tech Stack</label>
            <input type="text" id="stack" placeholder="e.g., Salesforce, Custom ERP, AWS..." className="w-full bg-slate-900 border border-zinc-700 text-zinc-200 p-3 outline-none focus:border-emerald-500 transition-colors" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-bold text-zinc-300">Estimated Budget</label>
              <select id="budget" className="w-full bg-slate-900 border border-zinc-700 text-zinc-200 p-3 outline-none focus:border-emerald-500 transition-colors">
                <option value="">Select Budget</option>
                <option value="under-5k">Under $5k</option>
                <option value="5k-15k">$5k - $15k</option>
                <option value="15k-50k">$15k - $50k</option>
                <option value="over-50k">Over $50k</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="urgency" className="block text-sm font-bold text-zinc-300">Urgency</label>
              <select id="urgency" className="w-full bg-slate-900 border border-zinc-700 text-zinc-200 p-3 outline-none focus:border-emerald-500 transition-colors">
                <option value="">Select Timeline</option>
                <option value="immediate">Immediate (0-30 days)</option>
                <option value="q-next">Next Quarter</option>
                <option value="exploring">Just Exploring</option>
              </select>
            </div>
          </div>

          <div className="pt-6 flex justify-center">
            <MagneticButton type="submit">Submit Questionnaire</MagneticButton>
          </div>
        </form>
      </div>
    </div>
  );
}
