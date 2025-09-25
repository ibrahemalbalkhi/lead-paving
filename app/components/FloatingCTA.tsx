"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-40 shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">20 Leads in 30 Days - Guaranteed</p>
          <p className="text-sm opacity-90">Pay $500 only if we deliver. Nothing if we don't.</p>
        </div>
        <Link
          href="/get-started"
          className="btn-primary whitespace-nowrap"
        >
          Claim Your $500 Trial
        </Link>
      </div>
    </div>
  );
}