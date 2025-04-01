
import { useEffect, useState } from "react";

interface TimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
  isActive: boolean;
}

const Timer = ({ duration, onTimeUp, isActive }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;
    
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, isActive]);

  // Calculate percentage remaining for visual timer
  const percentageLeft = (timeLeft / duration) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-cyber-light mb-1">
        <span>Time Remaining</span>
        <span>{timeLeft} sec</span>
      </div>
      <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
        <div 
          className="h-full bg-cyber-blue rounded-full transition-all duration-1000 ease-linear"
          style={{ width: `${percentageLeft}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
