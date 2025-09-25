"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CountdownTimer from "../components/CountdownTimer";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    monthlyRevenue: "",
    currentLeads: "",
    serviceTypes: [] as string[],
    hearAbout: "",
    readyToStart: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceTypeChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(service)
        ? prev.serviceTypes.filter(s => s !== service)
        : [...prev.serviceTypes, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-4xl font-bold mb-4">
                Perfect! Your Trial Spot is Reserved
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We'll call you within 2 hours to get your campaigns started.
                Check your email for next steps.
              </p>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
                <h2 className="font-bold text-xl mb-3">What Happens Next:</h2>
                <ol className="text-left space-y-2">
                  <li>1. Quick 15-minute onboarding call today</li>
                  <li>2. Google LSA setup begins immediately</li>
                  <li>3. First leads within 72 hours</li>
                  <li>4. 20 leads delivered within 30 days</li>
                </ol>
              </div>
              <p className="font-bold text-lg">
                Get ready to dominate your market! 🚀
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Claim Your <span className="text-primary">$500 Trial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              20 qualified paving leads in 30 days - guaranteed.
              Takes 2 minutes. Zero risk.
            </p>

            <div className="mb-8">
              <CountdownTimer />
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 inline-block">
              <p className="font-bold text-red-600">
                ⚠️ Only 3 Trial Spots Remaining This Month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Let's Get Your Leads Flowing
              </h2>

              {/* Business Information */}
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4 text-primary">Business Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="ABC Paving Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="john@abcpaving.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      placeholder="Atlanta"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      State *
                    </label>
                    <select
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AZ">Arizona</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="IL">Illinois</option>
                      <option value="NC">North Carolina</option>
                      <option value="TX">Texas</option>
                      <option value="WA">Washington</option>
                      {/* Add more states as needed */}
                    </select>
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4 text-primary">Business Details</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Current Monthly Revenue *
                    </label>
                    <select
                      required
                      value={formData.monthlyRevenue}
                      onChange={(e) => setFormData({...formData, monthlyRevenue: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Select Range</option>
                      <option value="0-50k">$0 - $50,000</option>
                      <option value="50-100k">$50,000 - $100,000</option>
                      <option value="100-250k">$100,000 - $250,000</option>
                      <option value="250-500k">$250,000 - $500,000</option>
                      <option value="500k+">$500,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Current Leads Per Month *
                    </label>
                    <select
                      required
                      value={formData.currentLeads}
                      onChange={(e) => setFormData({...formData, currentLeads: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Select Range</option>
                      <option value="0-5">0-5 leads</option>
                      <option value="5-10">5-10 leads</option>
                      <option value="10-20">10-20 leads</option>
                      <option value="20-50">20-50 leads</option>
                      <option value="50+">50+ leads</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Services You Offer (Check all that apply) *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Residential Driveways",
                      "Commercial Parking Lots",
                      "Sealcoating",
                      "Asphalt Repair",
                      "New Construction",
                      "Resurfacing"
                    ].map((service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.serviceTypes.includes(service)}
                          onChange={() => handleServiceTypeChange(service)}
                          className="mr-2"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-4 text-primary">Final Questions</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      required
                      value={formData.hearAbout}
                      onChange={(e) => setFormData({...formData, hearAbout: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Select Option</option>
                      <option value="google">Google Search</option>
                      <option value="facebook">Facebook</option>
                      <option value="referral">Referral from Another Contractor</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      When are you ready to start getting leads? *
                    </label>
                    <select
                      required
                      value={formData.readyToStart}
                      onChange={(e) => setFormData({...formData, readyToStart: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Select Timeframe</option>
                      <option value="immediately">Immediately</option>
                      <option value="week">Within a week</option>
                      <option value="month">Within a month</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">The $500 Trial Agreement:</h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• We'll generate minimum 20 qualified paving leads in 30 days</li>
                  <li>• You pay $500 only AFTER we deliver the 20th lead</li>
                  <li>• If we deliver less than 20 leads, you pay nothing</li>
                  <li>• No contracts, no obligations beyond the trial</li>
                  <li>• You'll need $500-1000 for Google Ads budget (paid to Google)</li>
                </ul>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mr-2 mt-1"
                  />
                  <span className="text-sm">
                    I understand and agree to the trial terms. I'm ready to get 20 leads
                    in 30 days or pay nothing.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-xl disabled:opacity-50"
              >
                {isSubmitting ? "Securing Your Trial Spot..." : "Start My $500 Trial Now"}
              </button>

              <p className="text-center text-sm text-gray-600 mt-4">
                🔒 Your information is secure and will never be shared
              </p>
            </form>

            {/* Trust Elements */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">127</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">47,231</p>
                <p className="text-gray-600">Leads Generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">20-90X</p>
                <p className="text-gray-600">Average ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}