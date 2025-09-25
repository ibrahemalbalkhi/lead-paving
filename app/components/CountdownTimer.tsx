"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endOfMonth = new Date();
      endOfMonth.setMonth(endOfMonth.getMonth() + 1);
      endOfMonth.setDate(0);
      endOfMonth.setHours(23, 59, 59, 999);

      const difference = endOfMonth.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white p-6 rounded-lg text-center">
      <p className="text-sm uppercase tracking-wide mb-4">Trial Spots Close In:</p>
      <div className="flex justify-center gap-4">
        <div>
          <p className="text-3xl font-bold">{timeLeft.days}</p>
          <p className="text-xs uppercase">Days</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.hours}</p>
          <p className="text-xs uppercase">Hours</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.minutes}</p>
          <p className="text-xs uppercase">Minutes</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.seconds}</p>
          <p className="text-xs uppercase">Seconds</p>
        </div>
      </div>
    </div>
  );
}