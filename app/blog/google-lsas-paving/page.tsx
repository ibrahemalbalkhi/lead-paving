import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Google LSAs Are Gold for Paving Contractors - Lead Paving",
  description: "Google Local Service Ads deliver 3X better ROI than traditional advertising for paving contractors. Learn why LSAs are transforming the industry.",
  keywords: "Google LSAs, Local Service Ads, paving contractor advertising, lead generation, Google Guaranteed",
};

export default function BlogPost() {
  return (
    <>
      <Header />
      <FloatingCTA />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <p className="text-sm text-gray-500 mb-4">January 10, 2024 • 6 min read</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Why Google LSAs Are Gold for Paving Contractors
              </h1>
              <p className="text-xl text-gray-600">
                Google Local Service Ads are transforming how paving contractors get leads.
                Here's why LSAs deliver 3X better ROI than traditional advertising.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              {/* Curved Road Image */}
              <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/stock-images/curved-road-in-open-valley-mountains.jpg"
                  alt="Curved road in open valley with mountains - representing the path to success with Google Local Service Ads"
                  width={1200}
                  height={500}
                  className="w-full h-64 md:h-80 object-cover"
                  priority={false}
                />
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The $30 Phone Call That Changes Everything</h2>
                <p className="text-lg">
                  Imagine paying just $30 for a phone call from a homeowner who needs their
                  driveway paved. Not a click. Not an impression. An actual phone call from
                  someone ready to hire a paving contractor. That's the power of Google Local
                  Service Ads, and it's why they're revolutionizing lead generation for paving
                  contractors.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">What Are Google LSAs?</h2>
                <p>
                  Google Local Service Ads appear at the very top of search results - above
                  Google Ads, above organic results, above everything. They're the first thing
                  people see when searching for "paving contractor near me" or "driveway paving."
                </p>
                <p>Key features that make LSAs unique:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Pay Per Lead, Not Per Click:</strong> You only pay when someone calls or messages you</li>
                  <li><strong>Google Guaranteed Badge:</strong> Builds instant trust with homeowners</li>
                  <li><strong>Pre-Screened Leads:</strong> Google verifies service area and availability</li>
                  <li><strong>Top Position:</strong> Always appear first in search results</li>
                  <li><strong>Mobile Optimized:</strong> Perfect for on-the-go searches</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Numbers Don't Lie</h2>
                <p>Here's what we're seeing across our 127 paving contractor clients:</p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-3">
                    <li><strong>Average Cost Per Lead:</strong> $30-50</li>
                    <li><strong>Conversion Rate:</strong> 15-20%</li>
                    <li><strong>Average Job Value:</strong> $5,000-15,000</li>
                    <li><strong>ROI:</strong> 100-300X per lead that converts</li>
                    <li><strong>Time to First Lead:</strong> 24-48 hours</li>
                  </ul>
                </div>
                <p className="font-semibold">
                  Compare this to traditional advertising where you might pay $500 for a
                  newspaper ad that generates zero trackable leads.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Why LSAs Work So Well for Paving</h2>

                <h3 className="text-2xl font-semibold mb-4">1. High-Intent Searches</h3>
                <p>
                  People searching for paving services are ready to buy. They're not browsing.
                  They have a cracked driveway, a pothole problem, or a new construction project.
                  They need help NOW.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">2. Trust Factor</h3>
                <p>
                  The Google Guaranteed badge is powerful. Google backs your work up to $2,000.
                  For homeowners nervous about hiring contractors, this removes the risk.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">3. Local Focus</h3>
                <p>
                  LSAs only show your ad to people in your service area. No wasted impressions
                  from people 100 miles away. Every lead is local and serviceable.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">4. Mobile Dominance</h3>
                <p>
                  70% of paving searches happen on mobile. LSAs are designed for mobile with
                  prominent call buttons. One tap and they're calling you.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Real Results from Real Contractors</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <p className="italic mb-2">
                      "We went from 5 leads a month to 5 leads a day with LSAs. Cost per lead
                      dropped from $200 with Facebook ads to $35 with Google LSAs."
                    </p>
                    <p className="font-semibold">- Mike, Johnson Paving (Atlanta)</p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <p className="italic mb-2">
                      "First week with LSAs generated 8 leads. Closed 2 jobs worth $18,000.
                      That's a 360X return on a $50 investment."
                    </p>
                    <p className="font-semibold">- Sarah, Elite Paving (Dallas)</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">How to Maximize LSA Performance</h2>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong>Respond Fast:</strong> Answer calls within 30 seconds. Speed beats everything.
                  </li>
                  <li>
                    <strong>Set Proper Hours:</strong> Update availability to match when you can answer.
                  </li>
                  <li>
                    <strong>Complete Your Profile:</strong> Add all services, photos, and certifications.
                  </li>
                  <li>
                    <strong>Get Reviews:</strong> More reviews = higher ranking in LSA results.
                  </li>
                  <li>
                    <strong>Track Everything:</strong> Know your cost per lead and conversion rate.
                  </li>
                </ol>
              </section>

              <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
                <p className="text-lg mb-6">
                  Google LSAs are the single most effective lead generation tool for paving
                  contractors. Period. Lower cost per lead, higher conversion rates, and
                  instant results. If you're not using LSAs, you're literally giving leads
                  to your competitors.
                </p>
                <div className="text-center">
                  <Link href="/get-started" className="btn-primary text-xl">
                    Get LSAs Set Up in 48 Hours
                  </Link>
                  <p className="text-sm text-gray-600 mt-4">
                    $500 trial - 20 leads guaranteed
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