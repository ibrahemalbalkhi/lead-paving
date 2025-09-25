import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Lead Paving",
  description: "Real results from real paving contractors. See how our clients generate 20-134X ROI with our digital marketing services.",
};

export default function ResultsPage() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Results for <span className="text-primary">Real Contractors</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              127 paving companies trust us to deliver leads. Here's their stories.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">$8.2M</p>
                <p className="text-gray-600">Revenue Generated</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">47,231</p>
                <p className="text-gray-600">Leads Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">20-134X</p>
                <p className="text-gray-600">Average ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured Success Stories
            </h2>

            {/* Case Study 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary to-orange-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Johnson Paving Co.</h3>
                  <p className="mb-6">Atlanta, GA • Founded 2015</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold">84X</p>
                      <p className="text-sm opacity-90">ROI from trial</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">$42K</p>
                      <p className="text-sm opacity-90">From $500 trial</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">287%</p>
                      <p className="text-sm opacity-90">Year-over-year growth</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">The Challenge</h4>
                    <p className="text-gray-600">
                      Johnson Paving was getting 2-3 calls per month from their basic website.
                      Competitors with stronger online presence were winning all the big commercial jobs.
                      They were skeptical about digital marketing after being burned by previous agencies.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      Started with $500 trial to prove value. Set up Google LSAs and optimized GMB
                      within 48 hours. Launched targeted Google Ads campaign with $1,000 budget.
                      Implemented automated review generation system.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">The Results</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 28 qualified leads in first 30 days</li>
                      <li>• Closed 4 jobs worth $42,000 total</li>
                      <li>• Now on Growth Package getting 40+ leads/month</li>
                      <li>• Expanded from 3 to 8 crew members</li>
                      <li>• Booked solid for 6 weeks out</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="italic text-gray-700 mb-3">
                      "We were skeptical after being burned before, but $500 was worth the risk.
                      Best business decision we ever made. Lead Paving delivered everything they
                      promised and more. We're now the busiest paving company in North Atlanta."
                    </p>
                    <p className="font-bold">- Mike Johnson, Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary to-orange-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Elite Paving Solutions</h3>
                  <p className="mb-6">Dallas, TX • Founded 2012</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold">134X</p>
                      <p className="text-sm opacity-90">ROI from trial</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">$67K</p>
                      <p className="text-sm opacity-90">From $500 trial</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">$2.4M</p>
                      <p className="text-sm opacity-90">Annual revenue increase</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">The Challenge</h4>
                    <p className="text-gray-600">
                      Despite 10 years in business, Elite Paving was invisible online.
                      They relied entirely on word-of-mouth and were seeing declining revenues.
                      Competitors were dominating Google and winning all the large residential developments.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      Aggressive digital presence overhaul starting with $500 trial.
                      Claimed and optimized all local listings. Built conversion-focused website.
                      Launched multi-channel campaign across Google LSAs, Search, and Facebook.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">The Results</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 25 leads in trial month, closed 5 jobs</li>
                      <li>• $67,000 revenue from $500 investment</li>
                      <li>• Now averaging 85 leads/month on Growth Package</li>
                      <li>• Won 3 major commercial contracts</li>
                      <li>• Expanded into 2 new service areas</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="italic text-gray-700 mb-3">
                      "Our competitors were eating our lunch online. Lead Paving changed everything.
                      We're now booked 3 weeks out and turning down work. The trial proved they
                      could deliver, now we're all in on digital."
                    </p>
                    <p className="font-bold">- Robert Williams, CEO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary to-orange-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Superior Asphalt LLC</h3>
                  <p className="mb-6">Phoenix, AZ • Founded 2018</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold">63X</p>
                      <p className="text-sm opacity-90">ROI from trial</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">10X</p>
                      <p className="text-sm opacity-90">Lead increase</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">$890K</p>
                      <p className="text-sm opacity-90">First year revenue</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">The Challenge</h4>
                    <p className="text-gray-600">
                      Newer company struggling to compete with established contractors.
                      Getting only 2-3 calls per week. No online presence beyond basic Facebook page.
                      Needed rapid growth to survive in competitive Phoenix market.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Our Solution</h4>
                    <p className="text-gray-600">
                      Fast-tracked Google LSA approval with expedited verification.
                      Built authority through aggressive review generation campaign.
                      Targeted underserved neighborhoods with precision Google Ads.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">The Results</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 22 leads in trial, closed 3 major jobs</li>
                      <li>• Went from 2-3 calls/week to 2-3 calls/DAY</li>
                      <li>• Generated 47 5-star reviews in 90 days</li>
                      <li>• Hired 5 additional crew members</li>
                      <li>• Became top-rated contractor on Google</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="italic text-gray-700 mb-3">
                      "Google LSAs changed everything. The $500 trial paid for itself in the
                      first week. We went from struggling startup to one of Phoenix's busiest
                      paving companies in less than a year."
                    </p>
                    <p className="font-bold">- David Chen, President</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Success Metrics */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              More Success Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Precision Paving Inc.</h3>
                <p className="text-gray-600 mb-4">Miami, FL</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Trial Results:</span> 31 leads</p>
                  <p><span className="font-semibold">Revenue:</span> $48,500</p>
                  <p><span className="font-semibold">ROI:</span> 97X</p>
                  <p><span className="font-semibold">Now:</span> Lead Gen Package</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">AAA Asphalt Services</h3>
                <p className="text-gray-600 mb-4">Denver, CO</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Trial Results:</span> 24 leads</p>
                  <p><span className="font-semibold">Revenue:</span> $35,000</p>
                  <p><span className="font-semibold">ROI:</span> 70X</p>
                  <p><span className="font-semibold">Now:</span> Growth Package</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Quality Paving Co.</h3>
                <p className="text-gray-600 mb-4">Nashville, TN</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Trial Results:</span> 27 leads</p>
                  <p><span className="font-semibold">Revenue:</span> $52,000</p>
                  <p><span className="font-semibold">ROI:</span> 104X</p>
                  <p><span className="font-semibold">Now:</span> Growth Package</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Pro Seal & Pave</h3>
                <p className="text-gray-600 mb-4">Charlotte, NC</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Trial Results:</span> 20 leads</p>
                  <p><span className="font-semibold">Revenue:</span> $28,000</p>
                  <p><span className="font-semibold">ROI:</span> 56X</p>
                  <p><span className="font-semibold">Now:</span> Lead Gen Package</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Metro Paving Group</h3>
                <p className="text-gray-600 mb-4">Chicago, IL</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Trial Results:</span> 29 leads</p>
                  <p><span className="font-semibold">Revenue:</span> $61,000</p>
                  <p><span className="font-semibold">ROI:</span> 122X</p>
                  <p><span className="font-semibold">Now:</span> Growth Package</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">First Choice Asphalt</h3>
                <p className="text-gray-600 mb-4">Seattle, WA</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Trial Results:</span> 26 leads</p>
                  <p><span className="font-semibold">Revenue:</span> $44,000</p>
                  <p><span className="font-semibold">ROI:</span> 88X</p>
                  <p><span className="font-semibold">Now:</span> Growth Package</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Join These Success Stories</h3>
              <p className="text-xl mb-6">
                Every contractor above started with the same $500 trial.
                Zero risk, massive upside.
              </p>
              <Link href="/get-started" className="btn-primary bg-white text-black hover:bg-gray-100">
                Start Your Success Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results by Numbers */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Results by the Numbers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">127</p>
                <p className="text-gray-600">Active Clients</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">94%</p>
                <p className="text-gray-600">Trial to Monthly Conversion</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">3,847</p>
                <p className="text-gray-600">Leads Last Month</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary mb-2">$1.2M</p>
                <p className="text-gray-600">Client Revenue Last Month</p>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-4">Your Competitors Are Already Here</h3>
              <p className="text-xl mb-6">
                We only work with one paving contractor per area.
                Once your market is taken, you're locked out.
              </p>
              <Link href="/get-started" className="btn-primary text-xl">
                Secure Your Territory Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}