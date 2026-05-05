import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { getArticleBySlug, posts, featured, tagColors } from "../data";

function TagBadge({ tag }: { tag: string }) {
  const cls = tagColors[tag] ?? "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${cls}`}>
      {tag}
    </span>
  );
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/insights" replace />;

  // Related: up to 3 other posts (excluding current)
  const related = [featured, ...posts]
    .filter((p) => p.slug !== article.slug)
    .slice(0, 3);

  // Render simple markdown-ish body: blank lines → paragraphs, **text** → bold
  const renderBody = (body: string) =>
    body
      .split(/\n\n+/)
      .map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.split("**").length === 3) {
          return (
            <h3 key={i} className="text-xl font-black text-gray-900 mt-8 mb-3">
              {trimmed.replace(/\*\*/g, "")}
            </h3>
          );
        }
        // Inline bold within paragraph
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
          part.startsWith("**") ? (
            <strong key={j}>{part.replace(/\*\*/g, "")}</strong>
          ) : (
            part
          )
        );
        return (
          <p key={i} className="text-gray-600 leading-relaxed text-lg">
            {parts}
          </p>
        );
      });

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-10">
          <div className="container mx-auto">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Tuku Insights
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5 text-xs text-white/70 font-medium">
                <Calendar className="h-3.5 w-3.5" />
                {article.date}
              </div>
              <TagBadge tag={article.tag} />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Article body ─────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1fr_280px] gap-14">

          {/* Main content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Author strip */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-100">
              <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{article.author.name}</p>
                <p className="text-xs text-gray-400">{article.author.role}</p>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8 border-l-4 border-primary pl-5">
              {article.excerpt}
            </p>

            {/* Body */}
            <div className="space-y-5">
              {renderBody(article.body)}
            </div>

            {/* Back link */}
            <div className="mt-14 pt-8 border-t border-gray-100">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                <ArrowLeft className="h-4 w-4" /> All Articles
              </Link>
            </div>
          </motion.article>

          {/* Sidebar — related articles */}
          <aside className="space-y-5">
            <h4 className="font-black text-gray-900 text-sm uppercase tracking-wider">
              More Articles
            </h4>
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/insights/${r.slug}`}
                className="block group"
              >
                <div className="rounded-xl overflow-hidden h-32 mb-3">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    loading="lazy"
                  />
                </div>
                <TagBadge tag={r.tag} />
                <p className="text-sm font-bold text-gray-900 mt-2 group-hover:text-primary transition-colors leading-snug">
                  {r.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">{r.date}</p>
              </Link>
            ))}

            {/* CTA card */}
            <div className="bg-primary rounded-2xl p-5 mt-6">
              <p className="text-accent font-black text-xs uppercase tracking-wider mb-2">
                Work With Us
              </p>
              <p className="text-white text-sm leading-relaxed mb-4">
                Ready to build innovation systems that create real outcomes?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-xs px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
