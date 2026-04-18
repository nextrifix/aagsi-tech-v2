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

        <div className="glass-panel p-10 flex flex-col justify-center">
          <h2 className="heading-font text-2xl font-bold mb-2">Afzal Malik</h2>
          <div className="text-emerald-500 font-mono text-sm mb-6">Founder & Chief Architect</div>
          <p className="text-zinc-400 mb-8">
            Leading the deployment of sovereign intelligence logistics. Architecting systems that prioritize universal justice, systemic leverage, and value-aligned evolution.
          </p>
          <div className="border-t border-zinc-600/30 pt-6">
            <div className="text-sm text-zinc-500 font-medium mb-2">CORE VALUES</div>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-none"></span> Adl (Universal Justice)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-none"></span> Systemic Leverage</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-none"></span> Value-Aligned Evolution</li>
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
