"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [leads, setLeads] = useState(20);
  const [closeRate, setCloseRate] = useState(15);
  const [avgJobValue, setAvgJobValue] = useState(8000);

  const closedJobs = Math.floor((leads * closeRate) / 100);
  const revenue = closedJobs * avgJobValue;
  const investment = 500;
  const roi = Math.round((revenue / investment - 1) * 100);
  const profit = revenue - investment;

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Calculate Your ROI</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">
            Leads Generated (Minimum 20)
          </label>
          <input
            type="range"
            min="20"
            max="40"
            value={leads}
            onChange={(e) => setLeads(parseInt(e.target.value))}
            className="w-full"
          />
          <p className="text-2xl font-bold text-primary mt-2">{leads} leads</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Your Close Rate (%)
          </label>
          <input
            type="range"
            min="5"
            max="30"
            value={closeRate}
            onChange={(e) => setCloseRate(parseInt(e.target.value))}
            className="w-full"
          />
          <p className="text-2xl font-bold text-primary mt-2">{closeRate}%</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Average Job Value ($)
          </label>
          <select
            value={avgJobValue}
            onChange={(e) => setAvgJobValue(parseInt(e.target.value))}
            className="w-full p-3 border rounded-lg"
          >
            <option value="5000">$5,000</option>
            <option value="8000">$8,000</option>
            <option value="10000">$10,000</option>
            <option value="12000">$12,000</option>
            <option value="15000">$15,000</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Your Investment
          </label>
          <p className="text-2xl font-bold">$500</p>
          <p className="text-sm text-gray-600">One-time trial fee</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Expected Jobs</p>
            <p className="text-3xl font-bold">{closedJobs}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Expected Revenue</p>
            <p className="text-3xl font-bold text-green-600">
              ${revenue.toLocaleString()}
            </p>
          </div>
          <div className="bg-primary text-white p-4 rounded-lg">
            <p className="text-sm mb-1">Your ROI</p>
            <p className="text-3xl font-bold">{roi}X</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
          <p className="text-lg">
            <span className="font-bold">Net Profit: </span>
            <span className="text-2xl font-bold text-green-600">
              ${profit.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}