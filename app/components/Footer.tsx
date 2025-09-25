import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Lead<span className="text-primary">Paving</span>
              </h3>
              <p className="text-gray-400">
                Digital marketing exclusively for paving contractors.
                20 leads in 30 days guaranteed.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/trial" className="text-gray-400 hover:text-primary transition-colors">
                    $500 Trial
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/results" className="text-gray-400 hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/20-leads-30-days" className="text-gray-400 hover:text-primary transition-colors">
                    How We Generate 20 Leads
                  </Link>
                </li>
                <li>
                  <Link href="/blog/google-lsas-paving" className="text-gray-400 hover:text-primary transition-colors">
                    Google LSAs for Paving
                  </Link>
                </li>
                <li>
                  <Link href="/blog/500-dollar-test" className="text-gray-400 hover:text-primary transition-colors">
                    The $500 Test
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Get Started</h4>
              <p className="text-gray-400 mb-4">
                Ready to dominate your market?
              </p>
              <Link href="/get-started" className="btn-primary inline-block">
                Start Your Trial
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                No risk. No contracts. Just results.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="mb-2">
              © {new Date().getFullYear()} Lead Paving. All rights reserved.
            </p>
            <p className="text-sm">
              We only work with one paving contractor per service area.
              <Link href="/get-started" className="text-primary hover:underline ml-1">
                Secure your territory now.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}