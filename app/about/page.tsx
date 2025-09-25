import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lead Paving - Digital Marketing Exclusively for Paving Contractors",
  description: "Learn why Lead Paving only works with paving contractors and how our specialized focus delivers 20-90X ROI for our clients.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Only Do <span className="text-primary">One Thing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Generate leads for paving contractors. That's it. That's all we do.
              And we're the best in the world at it.
            </p>
          </div>
        </div>
      </section>

      {/* Why Only Paving */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why We Only Work With Paving Contractors
                </h2>
                <p className="text-gray-600 mb-4">
                  While other agencies try to be everything to everyone, we made a different choice.
                  We decided to master one industry: paving.
                </p>
                <p className="text-gray-600 mb-4">
                  This laser focus means we know exactly what keywords convert. We know the seasonal patterns.
                  We understand your customers' buying journey. We speak your language.
                </p>
                <p className="text-gray-600 mb-4">
                  Every strategy, every campaign, every piece of copy is built specifically for paving contractors.
                  No generic templates. No one-size-fits-all solutions.
                </p>
                <p className="font-bold text-lg">
                  When you're the specialist, you deliver specialist results.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-6">What This Means for You:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Proven Strategies</span>
                      <p className="text-sm text-gray-600">No experimenting with your budget</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Industry Knowledge</span>
                      <p className="text-sm text-gray-600">We know driveways from parking lots</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Faster Results</span>
                      <p className="text-sm text-gray-600">No learning curve, just leads</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <span className="font-semibold">Better ROI</span>
                      <p className="text-sm text-gray-600">Optimized for paving conversions</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-6 text-lg">
              <p>
                Lead Paving started when our founder watched his brother's paving company struggle
                to compete online. Despite doing excellent work for 15 years, they were losing
                jobs to newer companies with better digital marketing.
              </p>
              <p>
                After helping transform his brother's business from 5 leads per month to 50+,
                word spread quickly in the paving community. Other contractors wanted the same results.
              </p>
              <p>
                We tried working with multiple industries at first, but quickly realized something:
                when we focused only on paving, our results went through the roof. We knew the exact
                keywords. The perfect ad copy. The seasonal patterns. The customer psychology.
              </p>
              <p>
                So we made the decision: paving only. No roofers. No plumbers. No landscapers.
                Just paving contractors who want to dominate their local market.
              </p>
              <p className="text-xl font-bold">
                Today, we've generated over 47,000 leads for 127 paving contractors across the country,
                delivering an average ROI of 20-90X.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              The Lead Paving Difference
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-xl mb-3">Risk-Free Trial</h3>
                <p className="text-gray-600">
                  Every relationship starts with our $500 trial. 20 leads in 30 days
                  or you pay nothing. We take all the risk.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-xl mb-3">Territory Protection</h3>
                <p className="text-gray-600">
                  One client per service area. When you work with us,
                  your competitors can't. Your market is yours alone.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-xl mb-3">Performance Focus</h3>
                <p className="text-gray-600">
                  No vanity metrics. We measure success in leads generated,
                  jobs closed, and revenue earned. Real ROI only.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">🎯 Results Over Everything</h4>
                  <p className="text-gray-600">
                    If we don't deliver leads, we don't deserve your money. Simple as that.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">🤝 Transparency Always</h4>
                  <p className="text-gray-600">
                    Every lead tracked, every dollar accounted for, every metric reported.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">⚡ Speed Matters</h4>
                  <p className="text-gray-600">
                    Leads within 72 hours, not months. Your business can't wait.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">📈 Continuous Improvement</h4>
                  <p className="text-gray-600">
                    What worked yesterday might not work tomorrow. We never stop optimizing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              The Team Behind Your Success
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                  👨‍💼
                </div>
                <h3 className="font-bold text-xl mb-2">Google Ads Specialists</h3>
                <p className="text-gray-600">
                  Certified experts managing over $10M in paving contractor ad spend
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                  👩‍💻
                </div>
                <h3 className="font-bold text-xl mb-2">LSA Experts</h3>
                <p className="text-gray-600">
                  Dedicated team for Google Local Service Ads optimization and management
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                  📊
                </div>
                <h3 className="font-bold text-xl mb-2">Account Managers</h3>
                <p className="text-gray-600">
                  Your dedicated point of contact for strategy and performance reviews
                </p>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg text-center">
              <p className="text-2xl font-bold mb-2">
                Combined 47+ Years of Digital Marketing Experience
              </p>
              <p className="text-xl">
                All focused on one thing: generating leads for paving contractors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Paving Contractors Choose Us
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-2xl mr-4">🎯</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">We Know Your Business</h3>
                  <p className="text-gray-600">
                    We understand the difference between residential driveways and commercial parking lots.
                    We know your busy season. We speak your customers' language.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">🚀</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">Proven Systems That Work</h3>
                  <p className="text-gray-600">
                    No experimenting with your budget. Every campaign is based on proven strategies
                    that have generated 47,000+ leads for paving contractors.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">💰</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">ROI You Can Bank On</h3>
                  <p className="text-gray-600">
                    20-90X average returns aren't luck. They're the result of laser-focused
                    expertise and relentless optimization.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">🛡️</span>
                <div>
                  <h3 className="font-bold text-xl mb-2">Your Success Is Our Success</h3>
                  <p className="text-gray-600">
                    No long-term contracts because we earn your business every month with results.
                    If you're not growing, we're not doing our job.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-black text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Dominate Your Market?
              </h3>
              <p className="text-xl mb-6">
                Join 127 paving contractors who trust us with their growth.
                Start with zero risk.
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