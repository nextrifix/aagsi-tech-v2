import ScrambleHeading from "@/components/ScrambleHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Autonomous AGSI",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">
      <ScrambleHeading as="h1" text="Privacy Policy" className="text-4xl mb-12" />
      <div className="prose prose-invert max-w-none text-zinc-300 font-inter">
        <p>Effective Date: {new Date().toLocaleDateString()}</p>
        <p>
          At Autonomous AGSI, we adhere to the principle of Adl (Universal Justice), and this extends to how we handle your data. 
          We believe in your right to sovereignty over your own intelligence logistics.
        </p>
        <h2 className="heading-font text-zinc-200">1. Data Collection</h2>
        <p>
          We collect minimal data necessary for business operations and technical communication. 
          Any data collected during an audit is treated with the highest confidentiality and is never used to train public or proprietary models without explicit, written consent.
        </p>
        <h2 className="heading-font text-zinc-200">2. Data Usage</h2>
        <p>
          Information provided via our contact or audit application forms is used solely to evaluate fit for our services and to facilitate strategic consulting.
        </p>
        <h2 className="heading-font text-zinc-200">3. Sovereign Infrastructure</h2>
        <p>
          For clients engaging in our AI Privacy & Sovereignty Audits, we build Private Brains. This means your operational data remains within your controlled environments (local or private cloud), ensuring zero data leakage to external LLM providers.
        </p>
      </div>
    </div>
  );
}
