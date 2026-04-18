import ScrambleHeading from "@/components/ScrambleHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Autonomous AGSI",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">
      <ScrambleHeading as="h1" text="Terms of Service" className="text-4xl mb-12" />
      <div className="prose prose-invert max-w-none text-zinc-300 font-inter">
        <p>Effective Date: {new Date().toLocaleDateString()}</p>
        <h2 className="heading-font text-zinc-200">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services of Autonomous AGSI, you agree to be bound by these Terms of Service. 
          We are an Intelligence Logistics Agency, and our services involve strategic deployment of autonomous systems.
        </p>
        <h2 className="heading-font text-zinc-200">2. Service Scope</h2>
        <p>
          Our engagements, including Workflow Automation, AI Privacy Audits, and Autonomous Workforce Deployment, are custom strategic implementations. Specific deliverables, timelines, and ownership rights will be defined in a separate Master Services Agreement (MSA) for each client.
        </p>
        <h2 className="heading-font text-zinc-200">3. Intellectual Property</h2>
        <p>
          In alignment with our Adl Pillar, we build ownership, not rental models. Upon completion and payment of a project, the implemented systems, workflows, and local models belong entirely to the client, free from vendor lock-in, unless otherwise stipulated in the MSA.
        </p>
        <h2 className="heading-font text-zinc-200">4. Limitation of Liability</h2>
        <p>
          While we architect high-performance autonomous systems, Autonomous AGSI is not liable for indirect damages, cognitive erosion resulting from third-party tools, or disruptions caused by external API changes beyond our control.
        </p>
      </div>
    </div>
  );
}
