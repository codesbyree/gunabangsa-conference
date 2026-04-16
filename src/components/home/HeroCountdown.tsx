import React, { useEffect, useState } from "react";

export default function HeroCountdown() {
   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('November 5, 2026 09:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);
   
    return (
<div className="flex items-center justify-center gap-4 mb-20">
          {[
            { val: timeLeft.days, label: 'D' },
            { val: timeLeft.hours, label: 'H' },
            { val: timeLeft.minutes, label: 'M' },
            { val: timeLeft.seconds, label: 'S' }
          ].map((t, i) => (
            <React.Fragment key={i}>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-black text-white">{String(t.val).padStart(2, '0')}</div>
                <div className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">{t.label}</div>
              </div>
              {i < 3 && <div className="text-xl md:text-4xl font-light text-white/20 mt-[-16px]">:</div>}
            </React.Fragment>
          ))}
        </div>
    )
}