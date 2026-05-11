import ScrambleHeading from "@/components/ScrambleHeading";
import MagneticButton from "@/components/MagneticButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Autonomous AGSI",
  description: "Learn about the Adl Pillar, Intelligence Logistics positioning, and Founder & Chief Architect Afzal Malik.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24">
      <div className="mb-16">
        <ScrambleHeading as="h1" text="The Adl Pillar" className="text-5xl md:text-6xl mb-6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="prose prose-invert prose-lg text-zinc-300 max-w-none font-inter">
            <p className="text-xl text-emerald-400 font-medium heading-font mb-8">
              Adl means Universal Justice. In the age of AGI, justice means ownership.
            </p>
            
            <p>
              Every workflow, model, and dataset we deploy belongs to you. We are architects, not landlords.
              The current paradigm of AI adoption is fundamentally flawed. Companies are renting intelligence, 
              feeding their proprietary data into black-box models, and slowly eroding their institutional knowledge.
            </p>
            
            <p>
              We call this <strong>Cognitive Erosion</strong>.
            </p>

            <p>
              Autonomous AGSI was founded to counter this trend. We are an <strong>Intelligence Logistics Agency</strong>. 
              Our mission is to help organizations navigate the Great Restructuring by building sovereign AI infrastructure. 
              We do not sell access. We build ownership.
            </p>
            
            <p>
              Our vision is that of The Muslim Futurist — using technology as a Khadim (servant) to empower the Ummah 
              and global businesses alike, ensuring that the tools of tomorrow serve humanity rather than subjugate it.
            </p>
          </div>
        </div>

        <div className="glass-panel p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden group hover:shadow-[0_0_50px_rgba(16,185,129,0.1)] transition-shadow duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
          <h2 className="heading-font text-3xl font-bold mb-2 relative z-10">Afzal Malik</h2>
          <div className="text-emerald-500 font-semibold tracking-wider text-sm mb-6 uppercase relative z-10">Founder & Chief Architect</div>
          <p className="text-zinc-400 mb-8 leading-relaxed text-lg relative z-10">
            Leading the deployment of sovereign intelligence logistics. Architecting systems that prioritize universal justice, systemic leverage, and value-aligned evolution.
          </p>
          <div className="border-t border-zinc-600/30 pt-8 relative z-10">
            <div className="text-sm text-zinc-500 font-bold tracking-widest mb-4 uppercase">Core Values</div>
            <ul className="space-y-4 text-zinc-300 font-medium">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span> Adl (Universal Justice)</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span> Systemic Leverage</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span> Value-Aligned Evolution</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center border-t border-zinc-600/20 pt-20">
        <h2 className="heading-font text-3xl font-bold mb-8">Ready to secure your infrastructure?</h2>
        <MagneticButton href="/contact">Apply for Audit</MagneticButton>
      </div>
    </div>
  );
}
