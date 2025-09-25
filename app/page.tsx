import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ROICalculator from "./components/ROICalculator";
import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              20 Qualified Paving Leads in 30 Days -{" "}
              <span className="text-primary">Guaranteed</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Pay $500 only if we deliver. If not, you pay nothing.
            </p>
            <Link href="/get-started" className="btn-primary text-xl">
              Claim Your $500 Trial
            </Link>
            <p className="mt-6 text-gray-600">
              No contracts. No setup fees. Just results.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">127</p>
                <p className="text-sm text-gray-600">Paving Companies Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">20-90X</p>
                <p className="text-sm text-gray-600">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">3,847</p>
                <p className="text-sm text-gray-600">Leads This Month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="section bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              While You Read This, Your Competitor Got 3 Leads From Google
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-2">85%</p>
                <p className="text-sm">of customers find paving contractors online</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-2">$5-15K</p>
                <p className="text-sm">average paving job value you're missing</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-2">$500-1500</p>
                <p className="text-sm">lost revenue every single day</p>
              </div>
            </div>
            <p className="text-xl">
              Every day without proper digital marketing is money left on the table.
              Your competitors are winning jobs that should be yours.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Timeline */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your 30-Day Success Timeline</h2>
            <p className="text-xl text-gray-600">
              Here's exactly how we'll generate your 20 leads
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Week 1: Foundation</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Google Local Service Ads setup</li>
                      <li>✓ Google My Business optimization</li>
                      <li>✓ Competitor analysis</li>
                      <li>✓ First leads start coming in</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Week 2: Acceleration</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Launch Google Ads campaigns</li>
                      <li>✓ $500-1000 ad budget deployed</li>
                      <li>✓ Landing page optimization</li>
                      <li>✓ 5-10 leads generated</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Week 3: Momentum</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Review generation system activated</li>
                      <li>✓ Automated follow-ups</li>
                      <li>✓ Campaign optimization</li>
                      <li>✓ 15+ total leads</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Week 4: Delivery</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ 20+ qualified leads delivered</li>
                      <li>✓ Performance report</li>
                      <li>✓ Conversion recommendations</li>
                      <li>✓ Monthly package discussion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary text-white p-8 rounded-lg text-center">
              <p className="text-2xl font-bold mb-4">
                Results Guaranteed or You Pay Nothing
              </p>
              <Link href="/trial" className="btn-primary bg-white text-black hover:bg-gray-100">
                See Full Trial Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Math Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Simple Math That Makes Sense</h2>
            <p className="text-xl text-gray-600">
              See exactly how $500 turns into $10,000-45,000
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ROICalculator />

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-5xl mb-2">📞</p>
                <h3 className="font-bold text-xl mb-2">20 Leads</h3>
                <p className="text-gray-600">
                  Minimum guaranteed qualified calls from homeowners ready for paving
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-5xl mb-2">🏗️</p>
                <h3 className="font-bold text-xl mb-2">2-3 Jobs</h3>
                <p className="text-gray-600">
                  Average conversions with just 10-15% close rate
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-5xl mb-2">💰</p>
                <h3 className="font-bold text-xl mb-2">$10-45K Revenue</h3>
                <p className="text-gray-600">
                  Typical return from your $500 investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">After Your Successful Trial</h2>
            <p className="text-xl text-gray-600">
              Continue dominating your market with our proven monthly packages
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Lead Generation Package</h3>
              <p className="text-4xl font-bold text-primary mb-6">
                $2,500<span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Google Local Service Ads management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Google My Business optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Review generation system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Google Search Ads management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Conversion-optimized website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Monthly performance reports</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="block text-center py-3 px-6 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="border-2 border-primary rounded-lg p-8 relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg">
                <span className="text-sm font-bold">BEST VALUE</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Growth Package</h3>
              <p className="text-4xl font-bold text-primary mb-6">
                $4,000<span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="font-semibold">Everything in Lead Generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Facebook/Instagram advertising</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Email marketing automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>2 SEO blog posts per month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Social media management (3x/week)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="btn-primary block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          <p className="text-center mt-8 text-gray-600">
            All packages require a successful $500 trial first • No long-term contracts • Cancel anytime
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Real Results for Real Contractors</h2>
            <p className="text-xl text-gray-600">
              These paving companies took the $500 trial. Here's what happened.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Johnson Paving Co.</h3>
                <p className="text-gray-600 mb-4">Atlanta, GA</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trial Leads:</span>
                    <span className="font-bold text-2xl">28</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Jobs Closed:</span>
                    <span className="font-bold text-2xl">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-bold text-2xl text-green-600">$42,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-bold text-2xl text-primary">84X</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm italic">
                    "We were skeptical, but $500 was worth the risk. Best decision we ever made.
                    Now on the Growth Package getting 40+ leads monthly."
                  </p>
                  <p className="text-sm font-bold mt-2">- Mike Johnson, Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Superior Asphalt LLC</h3>
                <p className="text-gray-600 mb-4">Phoenix, AZ</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trial Leads:</span>
                    <span className="font-bold text-2xl">22</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Jobs Closed:</span>
                    <span className="font-bold text-2xl">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-bold text-2xl text-green-600">$31,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-bold text-2xl text-primary">63X</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm italic">
                    "Google LSAs changed everything. We went from 2-3 calls a week to
                    2-3 calls per DAY. The $500 trial paid for itself in the first week."
                  </p>
                  <p className="text-sm font-bold mt-2">- David Chen, President</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Elite Paving Solutions</h3>
                <p className="text-gray-600 mb-4">Dallas, TX</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Trial Leads:</span>
                    <span className="font-bold text-2xl">25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Jobs Closed:</span>
                    <span className="font-bold text-2xl">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-bold text-2xl text-green-600">$67,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-bold text-2xl text-primary">134X</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm italic">
                    "Our competitors were eating our lunch online. Now we're booked
                    3 weeks out. The trial proved they could deliver, now we're all in."
                  </p>
                  <p className="text-sm font-bold mt-2">- Robert Williams, CEO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/results" className="btn-primary">
              See More Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Urgency */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              127 Paving Companies Already Dominating Their Markets
            </h2>

            <div className="mb-12">
              <CountdownTimer />
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
              <p className="text-xl font-bold text-red-600 mb-2">
                ⚠️ Only 5 Trial Spots Remaining This Month
              </p>
              <p className="text-gray-700">
                We limit trials to ensure quality results for every client.
                Once these spots are filled, you'll have to wait until next month.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-semibold mb-2">This Week</p>
                <p className="text-3xl font-bold text-primary mb-2">3</p>
                <p className="text-gray-600">Contractors Started Their Trial</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg font-semibold mb-2">Last Month</p>
                <p className="text-3xl font-bold text-primary mb-2">18</p>
                <p className="text-gray-600">Trial Clients Converted to Monthly</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-8">
              <p className="text-lg font-bold mb-2">
                🔒 Your Competitor Exclusive Protection
              </p>
              <p className="text-gray-700">
                We only work with ONE paving contractor per service area.
                If your competitor signs up first, you're locked out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Your Competitors Are Getting These Leads Right Now
            </h2>
            <p className="text-xl mb-8">
              Every day you wait is revenue lost. The $500 trial removes all risk.
              You literally have nothing to lose and everything to gain.
            </p>

            <div className="bg-white/10 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">The Lead Paving Guarantee</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <p className="font-bold mb-2">✓ 20 Leads Minimum</p>
                  <p className="text-sm">Or you pay nothing</p>
                </div>
                <div>
                  <p className="font-bold mb-2">✓ 30 Days or Less</p>
                  <p className="text-sm">Fast results guaranteed</p>
                </div>
                <div>
                  <p className="font-bold mb-2">✓ No Contracts</p>
                  <p className="text-sm">Month-to-month after trial</p>
                </div>
              </div>
            </div>

            <Link href="/get-started" className="btn-primary text-xl mb-6">
              Start Your $500 Trial Now
            </Link>

            <p className="text-sm opacity-75">
              Takes 2 minutes • Instant approval • Start getting leads within 72 hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
