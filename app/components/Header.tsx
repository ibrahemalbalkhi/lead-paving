"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-black">
              Lead<span className="text-primary">Paving</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/trial"
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              $500 Trial
            </Link>
            <Link
              href="/services"
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/results"
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              Results
            </Link>
            <Link
              href="/about"
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/get-started"
              className="btn-primary text-white"
            >
              Start Your Trial
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link
                href="/trial"
                className="text-foreground font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                $500 Trial
              </Link>
              <Link
                href="/services"
                className="text-foreground font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/results"
                className="text-foreground font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Results
              </Link>
              <Link
                href="/about"
                className="text-foreground font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/get-started"
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Your Trial
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}