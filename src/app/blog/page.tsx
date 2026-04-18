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
          <article key={post.id} className="glass-panel p-8 group transition-colors hover:border-emerald-500/30">
            <div className="text-emerald-500 font-mono text-sm mb-3">{post.date}</div>
            <h2 className="heading-font text-2xl font-bold mb-4 text-zinc-200 group-hover:text-emerald-400 transition-colors">
              <Link href={post.slug}>{post.title}</Link>
            </h2>
            <p className="text-zinc-400 leading-relaxed font-inter">
              {post.excerpt}
            </p>
            <div className="mt-6">
              <Link href={post.slug} className="text-sm font-bold tracking-wider text-zinc-300 hover:text-emerald-500 uppercase transition-colors">
                Read Dispatch →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
