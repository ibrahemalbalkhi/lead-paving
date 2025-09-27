import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads, SEO & Website Services for Paving Contractors | Lead Paving",
  description: "Complete digital marketing services for paving contractors. Google Ads management, local SEO, and professional websites that generate more jobs.",
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
              Marketing Services for <span className="text-primary">Paving Contractors</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Google Ads, SEO, and professional websites designed specifically for asphalt and concrete contractors.
            </p>
            <Link href="/get-started" className="btn-primary text-xl">
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Comparison */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
              <p className="text-xl text-gray-600">
                Everything your paving business needs to dominate online
              </p>
            </div>

            {/* Digital Marketing Dashboard Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/stock-images/digital-marketing-analytics-dashboard-on-tablet.jpg"
                alt="Digital marketing analytics dashboard on tablet showing campaign performance for paving contractors"
                width={1200}
                height={500}
                className="w-full h-48 md:h-72 object-cover"
                priority={false}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Google Ads Service */}
              <div className="border-2 border-gray-200 rounded-lg p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-2">Google Ads</h3>
                <p className="text-gray-600 mb-4">Get instant visibility when customers search for paving services</p>
                <div className="mb-8">
                  <p className="text-3xl font-bold text-primary">Starting at</p>
                  <p className="text-4xl font-bold text-primary">$1,500</p>
                  <p className="text-gray-600">/month management</p>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-lg mb-2">What's Included:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Google Local Service Ads</span>
                        <p className="text-sm text-gray-600">Pay per lead, Google Guaranteed</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Search Ads</span>
                        <p className="text-sm text-gray-600">Target high-intent keywords</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Campaign Optimization</span>
                        <p className="text-sm text-gray-600">Continuous performance improvement</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Conversion Tracking</span>
                        <p className="text-sm text-gray-600">Track every lead and call</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Monthly Reports</span>
                        <p className="text-sm text-gray-600">Detailed performance analytics</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/get-started"
                  className="block text-center py-3 px-6 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* SEO Service */}
              <div className="border-2 border-primary rounded-lg p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full">
                  <span className="text-sm font-bold">MOST POPULAR</span>
                </div>
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-3xl font-bold mb-2">SEO Services</h3>
                <p className="text-gray-600 mb-4">Dominate local search results for paving contractors in your area</p>
                <div className="mb-8">
                  <p className="text-3xl font-bold text-primary">Starting at</p>
                  <p className="text-4xl font-bold text-primary">$2,000</p>
                  <p className="text-gray-600">/month</p>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-lg mb-2">What's Included:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Local SEO Optimization</span>
                        <p className="text-sm text-gray-600">Rank for "paving contractors near me"</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Google My Business</span>
                        <p className="text-sm text-gray-600">Complete optimization and management</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Content Marketing</span>
                        <p className="text-sm text-gray-600">Industry-relevant blog posts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Review Management</span>
                        <p className="text-sm text-gray-600">Automated review generation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Competitive Analysis</span>
                        <p className="text-sm text-gray-600">Stay ahead of local competitors</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/get-started"
                  className="btn-primary block text-center"
                >
                  Get Started
                </Link>
              </div>

              {/* Website Development Service */}
              <div className="border-2 border-gray-200 rounded-lg p-8">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-3xl font-bold mb-2">Website Development</h3>
                <p className="text-gray-600 mb-4">Professional websites that convert visitors into paving customers</p>
                <div className="mb-8">
                  <p className="text-3xl font-bold text-primary">Starting at</p>
                  <p className="text-4xl font-bold text-primary">$3,500</p>
                  <p className="text-gray-600">one-time + hosting</p>
                </div>

                <div className="mb-8">
                  <p className="font-bold text-lg mb-2">What's Included:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Custom Design</span>
                        <p className="text-sm text-gray-600">Built specifically for paving contractors</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Mobile Responsive</span>
                        <p className="text-sm text-gray-600">Perfect on all devices</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Lead Capture Forms</span>
                        <p className="text-sm text-gray-600">Convert visitors to customers</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Project Gallery</span>
                        <p className="text-sm text-gray-600">Showcase your best work</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <div>
                        <span className="font-semibold">Fast Loading</span>
                        <p className="text-sm text-gray-600">Optimized for search engines</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/get-started"
                  className="block text-center py-3 px-6 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 text-center mb-12">
              <p className="font-bold text-lg mb-2">📌 Flexible Service Packages</p>
              <p className="text-gray-700">
                All services can be combined for maximum impact. Google Ads management fees are separate from your ad spend budget.
                We'll recommend the right combination based on your business goals and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              Why Paving Contractors Choose Our Marketing Services
            </h2>

            {/* Mountain Valley Road Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/stock-images/winding-road-through-mountain-valley-landscape.jpg"
                alt="Winding road through mountain valley landscape - representing our journey with paving contractors"
                width={1200}
                height={400}
                className="w-full h-48 md:h-64 object-cover"
                priority={false}
              />
            </div>

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
              <h3 className="text-2xl font-bold mb-4">Ready to Get More Paving Jobs?</h3>
              <p className="text-xl mb-6">
                Every day you wait, your competitors get stronger online.
                Let's discuss which services will work best for your business.
              </p>
              <Link href="/get-started" className="btn-primary text-xl">
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}