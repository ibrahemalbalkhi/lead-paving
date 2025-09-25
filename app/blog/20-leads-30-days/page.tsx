import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Generate 20 Paving Leads in 30 Days - Lead Paving",
  description: "The exact step-by-step process we use to guarantee 20 qualified leads for paving contractors in their first month. Proven strategies that work.",
  keywords: "paving leads, contractor marketing, lead generation, Google LSAs, paving advertising",
};

export default function BlogPost() {
  return (
    <>
      <Header />
      <FloatingCTA />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              <p className="text-sm text-gray-500 mb-4">January 15, 2024 • 8 min read</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How We Generate 20 Paving Leads in 30 Days
              </h1>
              <p className="text-xl text-gray-600">
                The exact step-by-step process we use to guarantee 20 qualified leads for
                paving contractors in their first month. No fluff, just proven strategies
                that have generated 47,000+ leads.
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <p className="text-lg">
                  Every paving contractor we work with starts skeptical. They've been burned
                  by marketing agencies before. They've heard promises of "guaranteed leads"
                  that never materialized. So when we tell them we'll deliver 20 qualified
                  paving leads in 30 days or they pay nothing, they assume it's too good to be true.
                </p>
                <p className="text-lg">
                  But here's the thing: it's not magic. It's a systematic, proven process
                  that we've refined across 127 paving contractors. And today, I'm going to
                  show you exactly how we do it.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Foundation: Days 1-7</h2>

                <h3 className="text-2xl font-semibold mb-4">Google Local Service Ads (48 Hours)</h3>
                <p>
                  The first thing we do is get you on Google Local Service Ads. These are the
                  "Google Guaranteed" ads that show up at the very top of search results. For
                  paving contractors, they're absolute gold.
                </p>
                <p>Here's why LSAs work so well:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>You only pay for actual phone calls, not clicks</li>
                  <li>Google pre-screens the leads for service area and availability</li>
                  <li>The "Google Guaranteed" badge builds instant trust</li>
                  <li>You appear above ALL other ads and organic results</li>
                </ul>
                <p>
                  We typically see the first LSA leads within 48-72 hours of activation.
                  Average cost per lead: $30-50. Conversion rate: 15-20%.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Google My Business Optimization (Day 3-4)</h3>
                <p>
                  While LSAs are warming up, we completely overhaul your Google My Business
                  profile. This isn't just filling out your hours and uploading a few photos.
                  We're talking about:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Adding all relevant service categories (most contractors miss 5-10)</li>
                  <li>Optimizing your business description with high-intent keywords</li>
                  <li>Uploading 20-30 high-quality project photos</li>
                  <li>Setting up Google Posts for current offers</li>
                  <li>Enabling messaging and quote requests</li>
                </ul>
                <p>
                  Result: 40% increase in profile views, 60% increase in direction requests,
                  3-5 additional leads per week just from GMB.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Competitor Analysis (Day 5-6)</h3>
                <p>
                  We analyze your top 5 local competitors to understand exactly how they're
                  winning online. We look at their keywords, ad copy, offers, and weaknesses.
                  This intelligence shapes our entire strategy.
                </p>
                <p className="font-semibold">
                  By Day 7, you typically have 2-5 qualified leads from LSAs and GMB alone.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Acceleration: Days 8-14</h2>

                <h3 className="text-2xl font-semibold mb-4">Google Search Ads Launch</h3>
                <p>
                  Week 2 is when we launch your Google Search Ads campaigns. This is where
                  the lead volume really starts to scale. We're not talking about generic
                  "paving contractor" keywords. We target high-intent searches like:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>"driveway paving quote [city]"</li>
                  <li>"asphalt repair near me"</li>
                  <li>"parking lot paving contractors"</li>
                  <li>"residential paving companies [area]"</li>
                  <li>"get driveway paved cost"</li>
                </ul>
                <p>
                  With a $500-1000 ad budget, we typically generate 10-15 leads from Google
                  Ads alone during the trial month. Cost per lead: $50-80. These leads have
                  buying intent - they're actively looking for paving services NOW.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Landing Page Optimization</h3>
                <p>
                  Your ads are only as good as where they send people. We create or optimize
                  a landing page specifically for paving leads with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Clear headline matching search intent</li>
                  <li>Trust signals (reviews, certifications, guarantee)</li>
                  <li>Simple quote request form (name, phone, service needed)</li>
                  <li>Mobile-first design (70% of searches are mobile)</li>
                  <li>Fast load time (under 2 seconds)</li>
                </ul>
                <p className="font-semibold">
                  By Day 14, you're typically at 7-13 total leads.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Momentum: Days 15-21</h2>

                <h3 className="text-2xl font-semibold mb-4">Review Generation System</h3>
                <p>
                  Reviews are the lifeblood of local paving contractors. We implement an
                  automated system that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Sends review requests via SMS 3 days after job completion</li>
                  <li>Provides direct links to Google review page</li>
                  <li>Includes templates to make reviewing easy</li>
                  <li>Follows up if no response</li>
                </ul>
                <p>
                  Most contractors see 5-10 new 5-star reviews in the first 30 days. Each
                  review increases conversion rates by approximately 2%.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Campaign Optimization</h3>
                <p>
                  By week 3, we have enough data to optimize aggressively:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Pause underperforming keywords</li>
                  <li>Increase bids on high-converting terms</li>
                  <li>Add negative keywords to prevent waste</li>
                  <li>Adjust geographic targeting based on lead quality</li>
                  <li>Test new ad copy variations</li>
                </ul>
                <p className="font-semibold">
                  By Day 21, you're typically at 13-22 total leads.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Delivery: Days 22-30</h2>

                <h3 className="text-2xl font-semibold mb-4">The Final Push</h3>
                <p>
                  The last week is about maximizing every opportunity:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Increase ad budgets on best-performing campaigns</li>
                  <li>Launch retargeting ads to website visitors</li>
                  <li>Send follow-up messages to unconverted leads</li>
                  <li>Expand service area for more opportunities</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Lead Tracking & Reporting</h3>
                <p>
                  Every lead is documented with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Name and contact information</li>
                  <li>Service requested</li>
                  <li>Source (LSA, Google Ads, GMB, etc.)</li>
                  <li>Date and time of inquiry</li>
                  <li>Estimated project value</li>
                </ul>
                <p className="font-semibold text-xl">
                  Final result: 20-32 qualified leads delivered. Guarantee met. Client
                  converts to monthly package 94% of the time.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Secret Sauce</h2>
                <p>
                  Here's what most marketing agencies don't understand about paving contractors:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Seasonality matters:</strong> We adjust budgets for weather patterns</li>
                  <li><strong>Commercial vs. residential:</strong> Different keywords, different messaging</li>
                  <li><strong>Emergency services:</strong> "Pothole repair" converts 3X better than "asphalt maintenance"</li>
                  <li><strong>Local proof:</strong> Showing jobs in their neighborhood builds trust</li>
                  <li><strong>Speed to lead:</strong> Calling within 5 minutes increases close rate by 400%</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Why This Works Every Time</h2>
                <p>
                  This isn't theory. We've run this exact playbook 127 times. It works because:
                </p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>We only target people actively looking for paving services</li>
                  <li>We appear everywhere they search (LSAs, Ads, GMB)</li>
                  <li>We build trust with Google's backing and social proof</li>
                  <li>We make it incredibly easy to request a quote</li>
                  <li>We follow up quickly and professionally</li>
                </ol>
                <p className="text-lg font-semibold">
                  The average paving contractor using our system sees a 20-90X ROI on their
                  $500 trial investment. That's $10,000-45,000 in revenue from a $500 risk.
                </p>
              </section>

              <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Your Next Steps</h2>
                <p className="text-lg mb-6">
                  You now know exactly how we generate 20 paving leads in 30 days. The
                  question is: are you going to keep losing jobs to competitors who are
                  using these strategies, or are you ready to dominate your market?
                </p>
                <p className="text-lg mb-6">
                  Remember: we only work with one paving contractor per area. Once your
                  competitor claims your territory, you're locked out.
                </p>
                <div className="text-center">
                  <Link href="/get-started" className="btn-primary text-xl">
                    Claim Your $500 Trial Now
                  </Link>
                  <p className="text-sm text-gray-600 mt-4">
                    20 leads guaranteed or pay nothing
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}