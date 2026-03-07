import { useEffect, useState, useMemo } from "react";

// Move calculation logic outside to keep the component clean
const calculateTimeLeft = (targetDate: number) => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

export default function Countdown() {
  // Initialize with a function to avoid unnecessary Date objects on re-renders
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(new Date("November 5, 2026 09:00:00").getTime()),
  );

  useEffect(() => {
    const target = new Date("November 5, 2026 09:00:00").getTime();

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Memoize the display data to prevent re-creating the array on every tick
  const displayItems = useMemo(
    () => [
      { val: timeLeft.days, label: "D" },
      { val: timeLeft.hours, label: "H" },
      { val: timeLeft.minutes, label: "M" },
      { val: timeLeft.seconds, label: "S" },
    ],
    [timeLeft],
  );

  return (
    <div className="flex items-center justify-center gap-4 mb-20 select-none">
      {displayItems.map((t, i) => (
        <div key={t.label} className="flex items-center gap-1">
          <div className="text-center min-w-12 md:min-w-20">
            <div className="text-4xl md:text-6xl font-black text-white tabular-nums">
              {String(t.val).padStart(2, "0")}
            </div>
            <div className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase mt-1">
              {t.label}
            </div>
          </div>

          {i < 3 && (
            <div className="text-3xl md:text-5xl font-light text-white/20 -mt-6">
              :
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
