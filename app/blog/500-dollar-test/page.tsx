import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The $500 Marketing Test That Changes Everything - Lead Paving",
  description: "How a simple $500 trial removes all risk and proves ROI before committing to monthly marketing. The psychology behind risk reversal for paving contractors.",
  keywords: "risk-free marketing, paving contractor trial, guaranteed leads, marketing ROI, risk reversal",
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
              <p className="text-sm text-gray-500 mb-4">January 5, 2024 • 5 min read</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The $500 Marketing Test That Changes Everything
              </h1>
              <p className="text-xl text-gray-600">
                How a simple $500 trial removes all risk and proves ROI before committing
                to monthly marketing. The psychology behind risk reversal that's converting
                94% of skeptical paving contractors.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Problem With Marketing Agencies</h2>
                <p className="text-lg">
                  Every paving contractor has the same story. They hired a marketing agency.
                  Paid $2,000-5,000 per month. Got vague reports about "impressions" and
                  "brand awareness." Zero trackable leads. Money down the drain.
                </p>
                <p className="text-lg">
                  The problem? Traditional agencies ask for huge commitments upfront with no
                  proof they can deliver. It's like hiring a paving crew who wants full payment
                  before they've even looked at the driveway.
                </p>
                <p className="text-lg font-semibold">
                  We flipped the model: Prove the value first. Get paid after.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">How The $500 Trial Works</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>We generate 20 qualified paving leads in 30 days</li>
                    <li>You track every lead with full transparency</li>
                    <li>If we deliver 20+ leads, you pay $500</li>
                    <li>If we deliver less than 20, you pay nothing</li>
                    <li>No contracts, no obligations, no fine print</li>
                  </ol>
                </div>
                <p>
                  It's that simple. We take all the risk. You have everything to gain and
                  literally nothing to lose.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Psychology of Risk Reversal</h2>
                <p>
                  Why do 94% of contractors who try our $500 trial become monthly clients?
                  It's not magic - it's psychology.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Trust Through Action</h3>
                <p>
                  We don't ask you to trust us. We EARN your trust by delivering results first.
                  When you see 20 real leads with real phone numbers from real homeowners,
                  trust is automatic.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Proof Eliminates Doubt</h3>
                <p>
                  Every contractor doubts whether digital marketing works for paving. The trial
                  eliminates that doubt with hard proof. Not testimonials. Not case studies.
                  Your own leads, your own results.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8">Low Risk, High Reward</h3>
                <p>
                  $500 is less than most contractors spend on fuel in a week. But the potential
                  return is $10,000-45,000 in new business. The risk/reward ratio is so skewed
                  in your favor, saying no is irrational.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Math That Makes It Work</h2>
                <p>Here's why the $500 trial is profitable for everyone:</p>
                <div className="bg-black text-white p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-xl mb-4">For You (The Contractor):</h4>
                  <ul className="space-y-2">
                    <li>• 20 leads minimum @ 15% close rate = 3 jobs</li>
                    <li>• 3 jobs @ $8,000 average = $24,000 revenue</li>
                    <li>• Investment: $500</li>
                    <li>• ROI: 4,700%</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4">For Us (Lead Paving):</h4>
                  <ul className="space-y-2">
                    <li>• $500 doesn't cover our costs</li>
                    <li>• We lose money on every trial</li>
                    <li>• BUT: 94% convert to $2,500-4,000/month packages</li>
                    <li>• Lifetime value: $30,000-50,000 per client</li>
                  </ul>
                </div>
                <p className="mt-6 font-semibold">
                  It's a win-win. You get risk-free proof. We get a long-term client.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">What Contractors Say</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <p className="italic mb-2">
                      "I was 100% skeptical. But for $500, what did I have to lose? They
                      delivered 28 leads. I closed 4 jobs worth $42,000. Now I'm a client
                      for life."
                    </p>
                    <p className="font-semibold">- Mike Johnson, Atlanta</p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <p className="italic mb-2">
                      "Every other agency wanted $3,000/month minimum with 6-month contracts.
                      Lead Paving said 'pay us $500 AFTER we deliver.' That confidence sold me."
                    </p>
                    <p className="font-semibold">- Robert Williams, Dallas</p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <p className="italic mb-2">
                      "The $500 trial paid for itself in 3 days. First week, 8 leads.
                      Closed one commercial job for $31,000. Best ROI I've ever seen."
                    </p>
                    <p className="font-semibold">- David Chen, Phoenix</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Why Most Agencies Won't Do This</h2>
                <p>If the $500 trial is so effective, why doesn't every agency offer it?</p>
                <ul className="list-disc pl-6 space-y-3 mb-6">
                  <li><strong>They can't deliver:</strong> Most agencies can't guarantee 20 leads because they don't have proven systems</li>
                  <li><strong>They work with everyone:</strong> Generalist agencies don't understand paving deeply enough</li>
                  <li><strong>They need cash upfront:</strong> Without results, they need contracts to stay afloat</li>
                  <li><strong>They fear accountability:</strong> Guarantees mean accountability for actual results</li>
                </ul>
                <p className="font-semibold">
                  We only work with paving contractors. We've perfected the system over 127
                  clients. We can guarantee results because we've done it 127 times before.
                </p>
              </section>

              <section className="mb-12 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">The Decision Is Simple</h2>
                <p className="text-lg mb-6">
                  Option 1: Keep doing what you're doing. Hope word-of-mouth picks up. Watch
                  competitors with weaker work win jobs online. Wonder what if.
                </p>
                <p className="text-lg mb-6">
                  Option 2: Risk $500 (only if we deliver). Get 20 guaranteed leads. Close
                  2-3 jobs. Make $10,000-45,000. Transform your business.
                </p>
                <p className="text-xl font-bold mb-6">
                  This isn't a sales pitch. It's math. The $500 trial removes all risk and
                  proves everything. The only question is: are you ready to grow?
                </p>
                <div className="text-center">
                  <Link href="/get-started" className="btn-primary text-xl">
                    Start Your $500 Trial Today
                  </Link>
                  <p className="text-sm text-gray-600 mt-4">
                    Only 5 spots available this month
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