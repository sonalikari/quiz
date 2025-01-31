import React, { useEffect, useState, useRef } from "react";

const Timer = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const timeoutCalled = useRef(false);

  useEffect(() => {
    setTimeLeft(duration);
    timeoutCalled.current = false;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1 && !timeoutCalled.current) {
          timeoutCalled.current = true;
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration, onTimeout]);

  return (
    <div className="text-right text-red-600 font-semibold">
      ⏳ Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
