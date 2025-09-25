import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paving Marketing Blog - Lead Generation Tips & Strategies",
  description: "Learn proven digital marketing strategies for paving contractors. Get tips on generating leads, Google LSAs, and growing your paving business.",
};

const blogPosts = [
  {
    slug: "20-leads-30-days",
    title: "How We Generate 20 Paving Leads in 30 Days",
    excerpt: "The exact step-by-step process we use to guarantee 20 qualified leads for paving contractors in their first month. No fluff, just proven strategies.",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    slug: "google-lsas-paving",
    title: "Why Google LSAs Are Gold for Paving Contractors",
    excerpt: "Google Local Service Ads are transforming how paving contractors get leads. Learn why LSAs deliver 3X better ROI than traditional advertising.",
    date: "2024-01-10",
    readTime: "6 min read",
  },
  {
    slug: "500-dollar-test",
    title: "The $500 Marketing Test That Changes Everything",
    excerpt: "How a simple $500 trial removes all risk and proves ROI before committing to monthly marketing. The psychology behind risk reversal.",
    date: "2024-01-05",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Paving Marketing <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Proven strategies to generate more leads and grow your paving business
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">{post.date} • {post.readTime}</p>
                        <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-primary font-semibold hover:underline">
                      Read More →
                    </span>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 bg-black text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Results?</h3>
              <p className="text-xl mb-6">
                Stop reading about success. Start experiencing it.
              </p>
              <Link href="/get-started" className="btn-primary text-xl">
                Start Your $500 Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}