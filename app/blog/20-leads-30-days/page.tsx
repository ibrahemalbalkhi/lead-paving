import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get More Paving Jobs with Google Ads - Lead Paving",
  description: "Complete guide to Google Ads for paving contractors. Learn how to use Google Local Service Ads and Search Ads to get more asphalt and concrete jobs.",
  keywords: "paving contractor google ads, asphalt contractor advertising, concrete contractor marketing, paving business leads",
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
              <p className="text-sm text-gray-500 mb-4">January 15, 2024 • 10 min read</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How to Get More Paving Jobs with Google Ads
              </h1>
              <p className="text-xl text-gray-600">
                Complete guide to Google Ads for paving contractors. Learn how to use Google Local Service Ads
                and Search Ads to consistently win more asphalt, concrete, and driveway projects.
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Hero Image for Blog */}
              <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/stock-images/highway-traffic-at-sunset-with-streetlights.jpg"
                  alt="Highway traffic at sunset with streetlights - representing digital marketing reach for paving contractors"
                  width={1200}
                  height={500}
                  className="w-full h-64 md:h-80 object-cover"
                  priority={false}
                />
              </div>

              <section className="mb-12">
                <p className="text-lg">
                  If you're a paving contractor struggling to get consistent work, you're not alone.
                  85% of homeowners search online before hiring contractors, yet most paving companies
                  still rely on word-of-mouth and outdated marketing methods. Meanwhile, smart contractors
                  are using Google Ads to book jobs weeks in advance.
                </p>
                <p className="text-lg">
                  The good news? You don't need to be a marketing expert to succeed with Google Ads.
                  This guide will show you exactly how to set up and run profitable Google Ads campaigns
                  for your paving business.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Why Google Ads Work So Well for Paving Contractors</h2>

                <p className="text-lg mb-6">
                  Before we dive into tactics, let's understand why Google Ads are perfect for paving businesses:
                </p>

                <h3 className="text-2xl font-semibold mb-4">High-Intent Customers</h3>
                <p>
                  When someone searches "driveway paving near me" or "asphalt repair contractors," they're not browsing.
                  They have a problem and need it fixed. These are customers ready to hire and spend money.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Local Focus</h3>
                <p>
                  Paving is inherently local. Google Ads let you target customers within your exact service area,
                  so you're not wasting money on people too far away to serve.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Measurable Results</h3>
                <p>
                  Unlike traditional advertising, you can track exactly how many calls, leads, and jobs come from
                  your Google Ads campaigns. This makes it easy to calculate ROI and optimize performance.
                </p>

              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Google Local Service Ads: Your Secret Weapon</h2>

                <p className="text-lg mb-6">
                  Google Local Service Ads (LSAs) are the fastest way to get your paving company visible online.
                  These ads appear at the very top of Google search results - above everything else.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Why LSAs Are Perfect for Paving Contractors</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Pay Per Lead:</strong> You only pay when someone actually calls or messages you</li>
                  <li><strong>Google Guaranteed Badge:</strong> Builds instant trust with homeowners</li>
                  <li><strong>Pre-Screened Leads:</strong> Google verifies service area and availability</li>
                  <li><strong>Top Position:</strong> Always appear first in search results</li>
                  <li><strong>Mobile Optimized:</strong> Perfect for on-the-go searches</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 mt-8">LSA Setup Process</h3>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li><strong>Background Check:</strong> Google requires license verification and background checks</li>
                  <li><strong>Service Areas:</strong> Define exactly where you work</li>
                  <li><strong>Budget Setting:</strong> Start with $50-100/day and adjust based on results</li>
                  <li><strong>Business Hours:</strong> Set when you can answer the phone</li>
                  <li><strong>Services Offered:</strong> List all your paving services</li>
                </ol>

                <p className="text-lg">
                  <strong>Expected Results:</strong> Most paving contractors see their first LSA lead within 24-48 hours.
                  Average cost per lead: $25-60. Conversion rate: 15-25%.
                </p>

              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Google Search Ads: Scale Your Lead Generation</h2>

                {/* Programming Code Image */}
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/stock-images/programming-code-on-computer-screen.jpg"
                    alt="Programming code on computer screen - representing the technical setup of Google Ads campaigns"
                    width={1200}
                    height={400}
                    className="w-full h-48 md:h-64 object-cover"
                    priority={false}
                  />
                </div>

                <p className="text-lg mb-6">
                  While LSAs are great for immediate visibility, Google Search Ads let you target more specific
                  customer intent and scale your lead generation significantly.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Best Keywords for Paving Contractors</h3>
                <p className="mb-4">Focus on high-intent keywords that show buying behavior:</p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-lg mb-3">Commercial Paving Keywords</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>"parking lot paving contractors [city]"</li>
                    <li>"commercial asphalt repair [area]"</li>
                    <li>"parking lot resurfacing near me"</li>
                    <li>"commercial paving companies [city]"</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-lg mb-3">Residential Paving Keywords</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>"driveway paving [city]"</li>
                    <li>"asphalt driveway contractors near me"</li>
                    <li>"concrete driveway installation [area]"</li>
                    <li>"driveway repair contractors [city]"</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Setting Up Your First Campaign</h3>
                <ol className="list-decimal pl-6 space-y-3 mb-6">
                  <li><strong>Campaign Type:</strong> Choose "Search" campaign</li>
                  <li><strong>Goal:</strong> Select "Leads" or "Phone calls"</li>
                  <li><strong>Location Targeting:</strong> Target your service area (usually 25-50 mile radius)</li>
                  <li><strong>Budget:</strong> Start with $50-100/day for testing</li>
                  <li><strong>Bidding:</strong> Use "Maximize conversions" or manual CPC</li>
                  <li><strong>Ad Extensions:</strong> Add call, location, and sitelink extensions</li>
                </ol>
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
                <h2 className="text-3xl font-bold mb-6">Common Google Ads Mistakes to Avoid</h2>
                <ul className="space-y-4 mb-6">
                  <li><strong>Targeting too broad:</strong> Don't target entire states. Stick to your actual service area.</li>
                  <li><strong>Ignoring negative keywords:</strong> Add terms like "jobs," "salary," and "free" to avoid irrelevant clicks.</li>
                  <li><strong>Not tracking phone calls:</strong> Use call tracking to measure which ads drive actual phone calls.</li>
                  <li><strong>Setting and forgetting:</strong> Check performance weekly and adjust bids, budgets, and keywords.</li>
                  <li><strong>Sending traffic to your homepage:</strong> Create dedicated landing pages for each service.</li>
                </ul>

                <h2 className="text-3xl font-bold mb-6 mt-8">Getting Started with Google Ads</h2>
                <p className="text-lg mb-6">
                  Setting up profitable Google Ads campaigns for your paving business doesn't have to be complicated.
                  Start with Google Local Service Ads for immediate results, then expand to Search Ads as you get comfortable.
                </p>
                <p className="text-lg mb-6">
                  The key is starting with a clear strategy, measuring everything, and continuously optimizing based on results.
                  Most paving contractors see their first leads within 24-48 hours of going live.
                </p>
                <div className="text-center">
                  <Link href="/get-started" className="btn-primary text-xl">
                    Get Help with Your Google Ads
                  </Link>
                  <p className="text-sm text-gray-600 mt-4">
                    Free consultation to discuss your paving business goals
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