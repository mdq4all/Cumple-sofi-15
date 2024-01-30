"use client";

import { useEffect, useState } from "react";

const Counter = () => {
  const calculateTimeLeft = () => {
    const targetDate = "2024-02-23T23:59:59";
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const difference = targetTime - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className="bg-primary text-secondary">
      <h3 className="text-center pb-2 pt-4 font-roboto text-xl text-white">
        faltan:
      </h3>
      <div className="flex items-center justify-center gap-x-2 py-2 font-josefina">
        <div className="text-center">
          <p>Días</p>
          <p>{timeLeft.days}</p>
        </div>
        <div className="text-center">
          <p>Horas</p>
          <p>{timeLeft.hours}</p>
        </div>
        <div className="text-center">
          <p>Minutos</p>
          <p>{timeLeft.minutes}</p>
        </div>
        <div className="text-center">
          <p>Segundos</p>
          <p>{timeLeft.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
