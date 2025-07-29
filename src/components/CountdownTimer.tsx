import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const conferenceDate = new Date('December 11, 2025 09:00:00').getTime();
      const now = new Date().getTime();
      const distance = conferenceDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Conference Countdown</h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="countdown-item">
            <div className="text-4xl font-bold text-center">{formatNumber(timeLeft.days)}</div>
            <div className="text-sm text-center">Days</div>
          </div>
          <div className="countdown-item">
            <div className="text-4xl font-bold text-center">{formatNumber(timeLeft.hours)}</div>
            <div className="text-sm text-center">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="text-4xl font-bold text-center">{formatNumber(timeLeft.minutes)}</div>
            <div className="text-sm text-center">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="text-4xl font-bold text-center">{formatNumber(timeLeft.seconds)}</div>
            <div className="text-sm text-center">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;