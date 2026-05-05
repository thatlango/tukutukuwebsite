import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { featured, posts, tagColors } from "./data";

const POSTS_PER_PAGE = 6;

function TagBadge({ tag }: { tag: string }) {
  const cls = tagColors[tag] ?? "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${cls}`}>
      {tag}
    </span>
  );
}

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
          <Link
            to={`/insights/${featured.slug}`}
            className="block rounded-2xl overflow-hidden h-72 md:h-80 group"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                <Calendar className="h-3.5 w-3.5" />
                {featured.date}
              </div>
              <TagBadge tag={featured.tag} />
            </div>
            <Link to={`/insights/${featured.slug}`}>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4 hover:text-primary transition-colors">
                {featured.title}
              </h2>
            </Link>
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
                to={`/insights/${featured.slug}`}
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
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover-lift group"
            >
              <Link to={`/insights/${post.slug}`} className="block h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <TagBadge tag={post.tag} />
                </div>
                <Link to={`/insights/${post.slug}`}>
                  <h3 className="font-black text-gray-900 text-base leading-snug mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
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
                    to={`/insights/${post.slug}`}
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
