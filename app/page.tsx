import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import ROICalculator from "./components/ROICalculator";
import CountdownTimer from "./components/CountdownTimer";
import Image from "next/image";

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
              Digital Marketing That Gets Paving Contractors{" "}
              <span className="text-primary">More Jobs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Google Ads, SEO, and websites that generate qualified leads for asphalt and concrete contractors.
            </p>
            <Link href="/get-started" className="btn-primary text-xl">
              Get More Paving Jobs
            </Link>
            <p className="mt-6 text-gray-600">
              Start with our risk-free pilot program. Proven results for 127+ contractors.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">127+</p>
                <p className="text-sm text-gray-600">Paving Companies Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">$2.5M+</p>
                <p className="text-sm text-gray-600">Revenue Generated for Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">3 Years</p>
                <p className="text-sm text-gray-600">Paving Industry Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Complete Digital Marketing Solutions for Paving Contractors
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 p-8 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Google Ads</h3>
                <p className="text-gray-300 mb-4">
                  Get your paving company at the top of Google search results when customers are looking for asphalt, concrete, and driveway services.
                </p>
                <ul className="text-left text-sm space-y-2">
                  <li>• Google Local Service Ads (Pay per lead)</li>
                  <li>• Search ads for high-intent keywords</li>
                  <li>• Conversion tracking and optimization</li>
                </ul>
              </div>
              <div className="bg-white/10 p-8 rounded-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-primary mb-4">SEO</h3>
                <p className="text-gray-300 mb-4">
                  Dominate local search results for paving services in your area. Get found when customers search for contractors nearby.
                </p>
                <ul className="text-left text-sm space-y-2">
                  <li>• Local SEO optimization</li>
                  <li>• Google My Business management</li>
                  <li>• Content marketing for contractors</li>
                </ul>
              </div>
              <div className="bg-white/10 p-8 rounded-lg">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Website Development</h3>
                <p className="text-gray-300 mb-4">
                  Professional websites that convert visitors into customers. Mobile-optimized and built for the paving industry.
                </p>
                <ul className="text-left text-sm space-y-2">
                  <li>• Lead capture optimization</li>
                  <li>• Project portfolio showcases</li>
                  <li>• Fast loading and mobile-friendly</li>
                </ul>
              </div>
            </div>
            <p className="text-xl">
              Stop losing jobs to competitors who dominate online.
              Get the digital marketing your paving business needs to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How We Transform Your Paving Business</h2>
            <p className="text-xl text-gray-600">
              Our proven process for getting paving contractors more jobs online
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Paving Industry Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/stock-images/asphalt-road-construction-heavy-roller-machine.jpg"
                alt="Heavy roller machine on asphalt road construction site - representing our expertise in the paving industry"
                width={1200}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
                priority={false}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Discovery & Strategy</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Analyze your current online presence</li>
                      <li>✓ Research local competition</li>
                      <li>✓ Identify target keywords and markets</li>
                      <li>✓ Create custom marketing strategy</li>
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
                    <h3 className="font-bold text-xl mb-2">Implementation</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Launch Google Ads campaigns</li>
                      <li>✓ Optimize Google My Business</li>
                      <li>✓ Website development/optimization</li>
                      <li>✓ Start SEO foundation work</li>
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
                    <h3 className="font-bold text-xl mb-2">Optimization</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Monitor campaign performance</li>
                      <li>✓ A/B test ad variations</li>
                      <li>✓ Refine targeting and keywords</li>
                      <li>✓ Improve conversion rates</li>
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
                    <h3 className="font-bold text-xl mb-2">Scale & Growth</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Expand successful campaigns</li>
                      <li>✓ Add new service offerings</li>
                      <li>✓ Increase market coverage</li>
                      <li>✓ Build long-term online presence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary text-white p-8 rounded-lg text-center">
              <p className="text-2xl font-bold mb-4">
                Ready to Start Getting More Paving Jobs?
              </p>
              <Link href="/get-started" className="btn-primary bg-white text-black hover:bg-gray-100">
                Get Your Free Marketing Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Real Results for Paving Contractors</h2>
            <p className="text-xl text-gray-600">
              See how our digital marketing drives actual business growth
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Analytics Dashboard Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/stock-images/laptop-showing-website-analytics-dashboard.jpg"
                alt="Digital marketing analytics dashboard showing website performance metrics for paving contractors"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>

            <ROICalculator />

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-5xl mb-2">📈</p>
                <h3 className="font-bold text-xl mb-2">300% More Leads</h3>
                <p className="text-gray-600">
                  Average increase in qualified inquiries from paving customers
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-5xl mb-2">🎯</p>
                <h3 className="font-bold text-xl mb-2">Higher Quality Jobs</h3>
                <p className="text-gray-600">
                  Target commercial and residential projects that pay better
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <p className="text-5xl mb-2">💰</p>
                <h3 className="font-bold text-xl mb-2">Measurable ROI</h3>
                <p className="text-gray-600">
                  Track every lead, conversion, and dollar of revenue generated
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
            <h2 className="text-4xl font-bold mb-4">Choose Your Marketing Package</h2>
            <p className="text-xl text-gray-600">
              Flexible monthly services designed for growing paving businesses
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
            Start with our pilot program to test results • No long-term contracts • Cancel anytime
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories from Our Clients</h2>
            <p className="text-xl text-gray-600">
              See how paving contractors are growing their businesses with our marketing services.
            </p>
          </div>

          {/* Inspiring Road Image */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <Image
              src="/stock-images/long-straight-road-to-horizon-under-cloudy-sky.jpg"
              alt="Long straight road leading to the horizon - representing the journey to success for paving contractors"
              width={1200}
              height={400}
              className="w-full h-48 md:h-64 object-cover"
              priority={false}
            />
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
                    "Their Google Ads management doubled our leads in 3 months. Best marketing investment we've made.
                    Now we're consistently booked 6 weeks out."
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
                    2-3 calls per DAY. Their setup and management saved us thousands in wasted ad spend."
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
                    "Our competitors were eating our lunch online. Their SEO and website work
                    got us ranking #1 for 'paving contractors Dallas'. Now we're booked solid."
                  </p>
                  <p className="text-sm font-bold mt-2">- Robert Williams, CEO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/results" className="btn-primary">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Why Paving Contractors Choose Us for Digital Marketing
            </h2>

            {/* Tunnel Transformation Image */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/stock-images/car-driving-through-sunlit-tunnel.jpg"
                alt="Car driving through sunlit tunnel - representing transformation and growth for paving contractors"
                width={1200}
                height={400}
                className="w-full h-48 md:h-64 object-cover"
                priority={false}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Industry Specialists</h3>
                <p className="text-gray-600">We only work with paving contractors. We understand your business, your customers, and your challenges.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-gray-600">127+ paving companies trust us with their marketing. Our track record speaks for itself.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">No Long Contracts</h3>
                <p className="text-gray-600">Month-to-month service. We earn your business every 30 days with results, not contracts.</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-8">
              <p className="text-lg font-bold mb-2">
                🔒 Exclusive Territory Protection
              </p>
              <p className="text-gray-700">
                We only work with ONE paving contractor per service area.
                When you work with us, your direct competitors can't.
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
              Ready to Grow Your Paving Business?
            </h2>
            <p className="text-xl mb-8">
              While you're thinking about it, your competitors are already getting more jobs online.
              Let's discuss how we can help your paving company dominate your local market.
            </p>

            <div className="bg-white/10 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">What You Get</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <p className="font-bold mb-2">✓ Free Consultation</p>
                  <p className="text-sm">Marketing strategy session</p>
                </div>
                <div>
                  <p className="font-bold mb-2">✓ Custom Proposal</p>
                  <p className="text-sm">Tailored to your business</p>
                </div>
                <div>
                  <p className="font-bold mb-2">✓ No Pressure</p>
                  <p className="text-sm">Just honest advice</p>
                </div>
              </div>
            </div>

            <Link href="/get-started" className="btn-primary text-xl mb-6">
              Get Your Free Marketing Consultation
            </Link>

            <p className="text-sm opacity-75">
              30-minute call • Industry insights • Custom marketing plan
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
