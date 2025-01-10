import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-01-10T21:12:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevTimeLeft(timeLeft); 
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // if all blocks should glow
  const isAllBlocksGlow =
    timeLeft.days < 0 ||
    (timeLeft.days === 0 && timeLeft.hours < 12 && timeLeft.minutes < 60 && timeLeft.seconds <60);

  const renderTime = (value, prevValue, isDays) => {
    const isFlipping = value !== prevValue;
    const isDaysGlow = isDays && timeLeft.days <= 4; 
    const isGlowing = isAllBlocksGlow || isDaysGlow; 
    return (
      <div className="flex flex-col items-center">
        <div
          className={`bg-white text-red-500 text-4xl font-bold w-16 h-16 flex items-center justify-center rounded shadow-md ${
            isFlipping ? "animate-flip" : ""
          } ${isGlowing ? "animate-glow" : ""}`} 
        >
          {value}
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-4 justify-center mt-10">
      <div className="flex flex-col items-center">
        <div className="text-sm text-gray-500">DAYS</div>
        {renderTime(timeLeft.days, prevTimeLeft.days, true)}
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm text-gray-500">HOURS</div>
        {renderTime(timeLeft.hours, prevTimeLeft.hours, false)}
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm text-gray-500">MINUTES</div>
        {renderTime(timeLeft.minutes, prevTimeLeft.minutes, false)}
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm text-gray-500">SECONDS</div>
        {renderTime(timeLeft.seconds, prevTimeLeft.seconds, false)}
      </div>
    </div>
  );
};

export default Countdown;
