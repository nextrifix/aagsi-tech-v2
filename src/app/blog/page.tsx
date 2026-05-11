import ScrambleHeading from "@/components/ScrambleHeading";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lab | Autonomous AGSI",
  description: "Research and insights on intelligence logistics, the great restructuring, and autonomous systems.",
};

const POSTS = [
  {
    id: 1,
    title: "The Competency Paradox: Why More Tools Lead to Less Output",
    date: "October 12, 2024",
    excerpt: "Research from 39 global reports indicates that simply adding AI tools without redesigning the underlying logistical architecture accelerates Cognitive Erosion. Here is how to build resilient systems instead.",
    slug: "#",
  },
  {
    id: 2,
    title: "Architecting the Digital Employee: A Level 3 Integration Guide",
    date: "September 28, 2024",
    excerpt: "Moving beyond chatbots. We explore the architectural requirements for deploying autonomous agents with dedicated memory, operational scope, and measurable KPIs.",
    slug: "#",
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
      <div className="mb-16">
        <ScrambleHeading as="h1" text="The Lab" className="text-5xl md:text-6xl mb-6" />
        <p className="text-xl text-zinc-400">
          Research, intelligence, and dispatches from the edge of the Great Restructuring.
        </p>
      </div>

      <div className="space-y-12">
        {POSTS.map((post) => (
          <article key={post.id} className="glass-panel p-10 rounded-3xl group transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <div className="text-emerald-500 font-semibold tracking-wider text-sm mb-4 uppercase">{post.date}</div>
            <h2 className="heading-font text-3xl font-bold mb-4 text-zinc-200 group-hover:text-emerald-400 transition-colors">
              <Link href="/contact">{post.title}</Link>
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg font-inter mb-6">
              {post.excerpt}
            </p>
            <div>
              <Link href="/contact" className="text-sm font-bold tracking-wider text-emerald-500 hover:text-emerald-400 uppercase transition-colors flex items-center gap-2 w-fit">
                Request Full Dispatch <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
