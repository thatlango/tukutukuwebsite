import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

/* ── Data ─────────────────────────────────────────────────── */

const featured = {
  tag: "Innovation",
  date: "Apr 10, 2026",
  title: "Building Innovation Ecosystems in Post-Conflict Communities",
  excerpt:
    "Northern Uganda has emerged as one of East Africa's most resilient innovation stories. We explore how community-embedded systems — not top-down programs — create lasting economic change across post-conflict districts.",
  image:
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80",
  author: { name: "Tuku-Tuku Team", role: "Innovation Labs" },
};

const posts = [
  {
    tag: "Entrepreneurship",
    date: "Mar 22, 2026",
    title: "From Idea to Market: What 1,200 Entrepreneurs Taught Us",
    excerpt:
      "After supporting over a thousand founders across Northern Uganda, patterns emerge. Here are the most common gaps — and how structured programs close them.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    author: { name: "Programs Team", role: "Tuku-Tuku Labs" },
  },
  {
    tag: "Advisory",
    date: "Mar 8, 2026",
    title: "How Development Partners Can Design Programs That Actually Work",
    excerpt:
      "Most innovation programs fail not from lack of funding — but lack of systems. We share the framework we use when advising governments and NGOs on program design.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
    author: { name: "Advisory Team", role: "Consulting" },
  },
  {
    tag: "Digital Platforms",
    date: "Feb 20, 2026",
    title: "Building Tools That Entrepreneurs in East Africa Actually Use",
    excerpt:
      "Designing digital platforms for underconnected markets requires a different playbook. Low data, intermittent power, and feature phones are the baseline — not the exception.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    author: { name: "Tech Team", role: "Platforms" },
  },
  {
    tag: "Programs",
    date: "Feb 5, 2026",
    title: "What Makes a Hackathon Actually Useful for Local Entrepreneurs?",
    excerpt:
      "We've run over 30 hackathons across Northern Uganda. Most failed to produce lasting outcomes — until we changed the design. Here's what works.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    author: { name: "Programs Team", role: "Tuku-Tuku Labs" },
  },
  {
    tag: "Investment Readiness",
    date: "Jan 18, 2026",
    title: "Closing the Gap: Why African Startups Struggle to Attract Investment",
    excerpt:
      "It's rarely about the idea. Most promising ventures from our region fall at the investment readiness stage. We break down the systemic gaps — and how to fix them.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    author: { name: "Investor Relations", role: "Tuku-Tuku Labs" },
  },
  {
    tag: "Community",
    date: "Jan 4, 2026",
    title: "Community Is Not an Audience: Rethinking Participation in Innovation",
    excerpt:
      "Too many programs treat communities as beneficiaries. The ones that create lasting change treat them as architects. Here's what community-embedded innovation really looks like.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
    author: { name: "Tuku-Tuku Team", role: "Innovation Labs" },
  },
];

const POSTS_PER_PAGE = 6;

const tagColors: Record<string, string> = {
  Innovation: "bg-primary/10 text-primary",
  Entrepreneurship: "bg-secondary/10 text-secondary",
  Advisory: "bg-accent/30 text-accent-foreground",
  "Digital Platforms": "bg-blue-50 text-blue-700",
  Programs: "bg-purple-50 text-purple-700",
  "Investment Readiness": "bg-yellow-50 text-yellow-700",
  Community: "bg-emerald-50 text-emerald-700",
};

function TagBadge({ tag }: { tag: string }) {
  const cls = tagColors[tag] ?? "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${cls}`}>
      {tag}
    </span>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export default function InsightsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginated = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <main>
      {/* ── Hero banner ─────────────────────────────────────── */}
      <div className="relative h-56 md:h-72 overflow-hidden rounded-b-3xl">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
          alt="Tuku Insights"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3"
          >
            Tuku-Tuku Innovation Labs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-black text-white mb-3"
          >
            Tuku Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-white/70 text-base max-w-lg"
          >
            Ideas, lessons, and perspectives from the frontlines of East African innovation.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Featured post ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-20 items-center"
        >
          <div className="rounded-2xl overflow-hidden h-72 md:h-80">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                <Calendar className="h-3.5 w-3.5" />
                {featured.date}
              </div>
              <TagBadge tag={featured.tag} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              {featured.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{featured.author.name}</p>
                  <p className="text-xs text-gray-400">{featured.author.role}</p>
                </div>
              </div>
              <Link
                to="#"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── Section label ─────────────────────────────────── */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black text-gray-900">Latest Articles</h3>
          <p className="text-sm text-gray-400 font-medium">
            {posts.length} articles published
          </p>
        </div>

        {/* ── Post grid ─────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginated.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover-lift group"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <TagBadge tag={post.tag} />
                </div>
                <h3 className="font-black text-gray-900 text-base leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
                      <User className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{post.author.name}</p>
                      <p className="text-[10px] text-gray-400">{post.author.role}</p>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Read <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Pagination ─────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-full text-sm font-bold transition-colors ${
                  n === page
                    ? "bg-primary text-white"
                    : "border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* ── Newsletter CTA ─────────────────────────────────── */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Stay Informed
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Get Insights Delivered to You
          </h2>
          <p className="text-white/65 text-lg mb-8 max-w-lg mx-auto">
            Join entrepreneurs, investors, and innovators who follow the Tuku-Tuku perspective on building East Africa's future.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
