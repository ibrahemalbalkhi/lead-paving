import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Paving Contractors | Lead Paving",
  description: "Proven digital marketing packages for paving contractors. Lead Generation ($2,500/mo) and Growth Package ($4,000/mo). Start with our $500 trial.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Marketing That <span className="text-primary">Delivers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Two proven packages designed specifically for paving contractors.
              Both start with our risk-free $500 trial.
            </p>
            <Link href="/get-started" className="btn-primary text-xl">
              Start With $500 Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Comparison */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Choose Your Growth Path</h2>
              <p className="text-xl text-gray-600">
                Both packages require completing our $500 trial first
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Lead Generation Package */}
              <div className="border-2 border-gray-200 rounded-lg p-8">
                <h3 className="text-3xl font-bold mb-2">Lead Generation</h3>
                <p className="text-gray-600 mb-4">Perfect for established contractors ready to scale</p>
                <div className="mb-8">
                  <p className="text-5xl font-bold text-primary">$2,500</p>
                  <p className="text-gray-600">/month</p>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-lg mb-2">Expected Results:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 30-50 qualified leads/month</li>
                    <li>• 5-8 new jobs/month</li>
                    <li>• $25,000-80,000 revenue/month</li>
                    <li>• 10-32X ROI average</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-lg mb-2">What's Included:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Google Local Service Ads</span>
                        <p className="text-sm text-gray-600">Full setup and management with Google Guarantee</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Google My Business</span>
                        <p className="text-sm text-gray-600">Complete optimization and daily management</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Review Generation</span>
                        <p className="text-sm text-gray-600">Automated system to get 5-10 reviews/month</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Google Search Ads</span>
                        <p className="text-sm text-gray-600">$1,500-3,000/mo budget management</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Conversion Website</span>
                        <p className="text-sm text-gray-600">Mobile-optimized lead capture site</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Monthly Reporting</span>
                        <p className="text-sm text-gray-600">Detailed performance and ROI reports</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/get-started"
                  className="block text-center py-3 px-6 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Start With Trial
                </Link>
              </div>

              {/* Growth Package */}
              <div className="border-2 border-primary rounded-lg p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full">
                  <span className="text-sm font-bold">MOST POPULAR</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Growth Package</h3>
                <p className="text-gray-600 mb-4">For contractors serious about dominating their market</p>
                <div className="mb-8">
                  <p className="text-5xl font-bold text-primary">$4,000</p>
                  <p className="text-gray-600">/month</p>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-lg mb-2">Expected Results:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 60-100 qualified leads/month</li>
                    <li>• 10-15 new jobs/month</li>
                    <li>• $50,000-150,000 revenue/month</li>
                    <li>• 12-37X ROI average</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-lg mb-2">Everything in Lead Generation, PLUS:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Facebook & Instagram Ads</span>
                        <p className="text-sm text-gray-600">$1,000-2,000/mo social media campaigns</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Email Marketing</span>
                        <p className="text-sm text-gray-600">Automated nurture campaigns and newsletters</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">SEO Content</span>
                        <p className="text-sm text-gray-600">2 optimized blog posts/month for organic growth</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Social Media Management</span>
                        <p className="text-sm text-gray-600">3 posts/week on Facebook and Instagram</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Dedicated Account Manager</span>
                        <p className="text-sm text-gray-600">Weekly calls and priority support</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Competitor Monitoring</span>
                        <p className="text-sm text-gray-600">Stay ahead with market intelligence</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/get-started"
                  className="btn-primary block text-center"
                >
                  Start With Trial
                </Link>
              </div>
            </div>

            {/* Ad Spend Note */}
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 text-center mb-12">
              <p className="font-bold text-lg mb-2">📌 Important: Ad Spend Not Included</p>
              <p className="text-gray-700">
                Monthly packages cover our management fees only. Recommended ad spend:
                $1,500-3,000/month for Lead Generation, $3,000-5,000/month for Growth.
                All ad spend goes directly to Google/Facebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Paving Contractors Choose Lead Paving
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-xl mb-3">Paving-Only Focus</h3>
                <p className="text-gray-600">
                  We only work with paving contractors. We know your business,
                  your customers, and exactly how to reach them.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-xl mb-3">Territory Protection</h3>
                <p className="text-gray-600">
                  One client per service area. When you work with us,
                  your competitors can't.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-xl mb-3">Proven ROI</h3>
                <p className="text-gray-600">
                  127 paving contractors averaging 20-90X returns.
                  Every dollar invested comes back multiplied.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-bold text-xl mb-3">Fast Results</h3>
                <p className="text-gray-600">
                  Leads start flowing within 72 hours. No waiting months
                  for SEO or brand building.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🎖️</div>
                <h3 className="font-bold text-xl mb-3">Google Certified</h3>
                <p className="text-gray-600">
                  Google Partner certified team managing millions in
                  paving contractor ad spend.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-xl mb-3">No Contracts</h3>
                <p className="text-gray-600">
                  Month-to-month service. We earn your business every
                  30 days with results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Your Journey to Market Domination
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Start with $500 Trial</h3>
                  <p className="text-gray-600">
                    Prove our value with 20 guaranteed leads in 30 days.
                    Pay only if we deliver.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Choose Your Package</h3>
                  <p className="text-gray-600">
                    After seeing results, select the package that matches
                    your growth goals and capacity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Scale Your Business</h3>
                  <p className="text-gray-600">
                    Watch as consistent lead flow transforms your business.
                    Hire more crews, take bigger jobs, grow revenue.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Dominate Your Market</h3>
                  <p className="text-gray-600">
                    Become the go-to paving contractor in your area.
                    Your competitors will wonder what happened.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-black text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Grow?</h3>
              <p className="text-xl mb-6">
                Every day you wait, your competitors get stronger online.
                Start with zero risk.
              </p>
              <Link href="/get-started" className="btn-primary text-xl">
                Claim Your $500 Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}