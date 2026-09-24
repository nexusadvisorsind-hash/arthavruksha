import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Mutual Funds": "bg-secondary/10 text-secondary",
  "Real Estate": "bg-green-soft text-green",
  Insurance: "bg-accent/15 text-accent-foreground",
  Loans: "bg-primary/10 text-primary",
  "Personal Finance": "bg-secondary/10 text-secondary",
};

export const metadata = {
  title: "Insights & Articles | Artha Vruksha",
  description:
    "Plain-language guides on mutual funds, real estate, insurance and loans — from the Artha Vruksha team.",
};

export default function Blog() {
  return (
    <>
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 mb-6">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-wide">
              Insights &amp; Guides
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Learn Before You Decide</h1>
          <p className="font-body text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Honest, plain-language articles on mutual funds, real estate, insurance and loans —
            written by our team to help you make better decisions, not to sell you anything.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-lift bg-surface border border-border rounded-2xl p-7 flex flex-col group"
              >
                <span
                  className={`inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-semibold font-body mb-4 ${categoryColors[post.category]}`}
                >
                  {post.category}
                </span>
                <h2 className="font-heading font-semibold text-lg text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-foreground-muted leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between font-body text-xs text-foreground-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-secondary font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
