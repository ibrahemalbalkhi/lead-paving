import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import CountdownTimer from "../components/CountdownTimer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$500 Trial - 20 Paving Leads in 30 Days | Lead Paving",
  description: "Detailed breakdown of our $500 trial offer. Get 20 qualified paving leads in 30 days or pay nothing. See exactly what happens each week.",
};

export default function TrialPage() {
  return (
    <>
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The <span className="text-primary">$500 Trial</span> That Changes Everything
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              20 qualified paving leads in 30 days - guaranteed.
              Pay only if we deliver. Nothing if we don't.
            </p>
            <Link href="/get-started" className="btn-primary text-xl">
              Start Your Trial Today
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Here's Exactly How Your 30-Day Trial Works
            </h2>

            {/* Week 1 */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-primary to-orange-600 text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold">Week 1: Foundation & First Leads</h3>
                <p>Days 1-7: Setting up your lead generation infrastructure</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-b-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 1-2: Google LSA Setup</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Create and verify your LSA profile</li>
                      <li>• Background check and insurance verification</li>
                      <li>• Service area and budget configuration</li>
                      <li>• Google guarantee badge activation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 3-4: GMB Optimization</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Complete profile optimization</li>
                      <li>• Add service categories and areas</li>
                      <li>• Upload photos and portfolio</li>
                      <li>• Enable messaging and booking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 5-6: Competitor Analysis</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Analyze top 5 local competitors</li>
                      <li>• Identify service gaps and opportunities</li>
                      <li>• Review their pricing strategies</li>
                      <li>• Document their weaknesses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 7: First Results</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• First LSA calls start coming in</li>
                      <li>• GMB visibility increases</li>
                      <li>• Initial performance metrics</li>
                      <li>• Lead tracking system activated</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-800">Week 1 Expected Results: 2-5 qualified leads</p>
                </div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-primary to-orange-600 text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold">Week 2: Acceleration & Scale</h3>
                <p>Days 8-14: Launching paid advertising campaigns</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-b-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 8-9: Google Ads Launch</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Campaign structure creation</li>
                      <li>• Keyword research and selection</li>
                      <li>• Ad copy writing and testing</li>
                      <li>• $500-1000 budget deployment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 10-11: Landing Page</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Conversion-optimized design</li>
                      <li>• Trust signals and testimonials</li>
                      <li>• Lead capture forms</li>
                      <li>• Mobile responsiveness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 12-13: Campaign Optimization</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Bid adjustments based on data</li>
                      <li>• Negative keyword additions</li>
                      <li>• Ad schedule optimization</li>
                      <li>• Quality score improvements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 14: Performance Review</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Week 2 lead analysis</li>
                      <li>• Cost per lead calculation</li>
                      <li>• Conversion rate tracking</li>
                      <li>• Strategy adjustments</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-800">Week 2 Expected Results: 5-8 additional leads (7-13 total)</p>
                </div>
              </div>
            </div>

            {/* Week 3 */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-primary to-orange-600 text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold">Week 3: Momentum & Reviews</h3>
                <p>Days 15-21: Building social proof and automation</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-b-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 15-16: Review System</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Automated review requests</li>
                      <li>• SMS and email templates</li>
                      <li>• Review response templates</li>
                      <li>• Google review optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 17-18: Follow-Up Automation</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Lead nurture sequences</li>
                      <li>• Automated text messaging</li>
                      <li>• Email drip campaigns</li>
                      <li>• Quote follow-ups</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 19-20: Expansion</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Additional service areas</li>
                      <li>• New keyword targets</li>
                      <li>• Budget reallocation</li>
                      <li>• Performance scaling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 21: Analysis</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Lead quality assessment</li>
                      <li>• ROI calculations</li>
                      <li>• Conversion tracking</li>
                      <li>• Strategy refinement</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-800">Week 3 Expected Results: 6-9 additional leads (13-22 total)</p>
                </div>
              </div>
            </div>

            {/* Week 4 */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-primary to-orange-600 text-white p-6 rounded-t-lg">
                <h3 className="text-2xl font-bold">Week 4: Delivery & Growth Planning</h3>
                <p>Days 22-30: Final push and future strategy</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-b-lg p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 22-25: Final Push</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Campaign maximization</li>
                      <li>• Budget optimization</li>
                      <li>• Lead quality focus</li>
                      <li>• Conversion improvements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 26-28: Reporting</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Comprehensive lead report</li>
                      <li>• ROI documentation</li>
                      <li>• Performance metrics</li>
                      <li>• Success case studies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 29: Strategy Session</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Results presentation</li>
                      <li>• Growth opportunities</li>
                      <li>• Monthly package options</li>
                      <li>• Scaling recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Day 30: Decision Time</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 20+ leads delivered</li>
                      <li>• Package selection</li>
                      <li>• Seamless transition</li>
                      <li>• Continued growth</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-800">Week 4 Expected Results: 7-10 additional leads (20-32 total)</p>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="bg-black text-white p-8 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-4">Our Iron-Clad Guarantee</h3>
              <p className="text-xl mb-6">
                If we don't deliver 20 qualified paving leads in 30 days,
                you pay absolutely nothing. Zero. Nada. Zilch.
              </p>
              <Link href="/get-started" className="btn-primary text-xl">
                Start Your Risk-Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Counts as a Lead */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Counts as a Qualified Lead?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-600 mb-4">✓ What Counts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Homeowner or business owner requesting paving quote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Project size within your service minimums</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Located within your service area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Ready to start within 90 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Valid contact information provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Specific paving service requested</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-600 mb-4">✗ What Doesn't Count</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Spam or fake inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Existing customers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Outside service area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>General information seekers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Competitors researching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span>Job seekers or salespeople</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg text-center">
              <p className="text-xl font-bold mb-2">Every Lead is Tracked and Documented</p>
              <p>You'll receive a detailed report with contact info, project details, and source for every single lead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions About the Trial
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h3 className="font-bold text-xl mb-3">What happens if you don't deliver 20 leads?</h3>
                <p className="text-gray-600">
                  Simple - you don't pay. We take all the risk. If we deliver 19 leads or less,
                  you owe us nothing. We're that confident in our system.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h3 className="font-bold text-xl mb-3">Do I need to sign a contract after the trial?</h3>
                <p className="text-gray-600">
                  No contracts ever. After your successful trial, you can continue month-to-month
                  with our packages. Cancel anytime with 30 days notice. No penalties, no hassles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h3 className="font-bold text-xl mb-3">How much should I budget for ad spend?</h3>
                <p className="text-gray-600">
                  We recommend $500-1000 in Google Ads budget during the trial. This goes directly
                  to Google, not us. This investment typically generates 10-15 of your 20 leads.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h3 className="font-bold text-xl mb-3">Can I choose my service area?</h3>
                <p className="text-gray-600">
                  Absolutely. We'll target your exact service area, whether it's a 10-mile radius
                  or specific zip codes. We can adjust this anytime based on your capacity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h3 className="font-bold text-xl mb-3">What if I can't handle 20 leads?</h3>
                <p className="text-gray-600">
                  We can throttle lead flow to match your capacity. Some clients prefer 10 high-quality
                  leads over 20 standard ones. We'll customize the approach to your needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <h3 className="font-bold text-xl mb-3">When do I pay the $500?</h3>
                <p className="text-gray-600">
                  Only after we deliver your 20th qualified lead. We'll send you a detailed report
                  and invoice. You have 7 days to review and pay. No upfront payment required.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <CountdownTimer />
              <Link href="/get-started" className="btn-primary text-xl mt-8">
                Claim Your Trial Spot Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}