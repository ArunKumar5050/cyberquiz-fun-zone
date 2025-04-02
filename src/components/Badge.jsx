
import { cn } from "@/lib/utils";

const Badge = ({ title, description, icon, unlocked, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-4 cyber-card",
        !unlocked && "opacity-50 grayscale",
        unlocked && "animate-fade-in",
        className
      )}
    >
      <div className={cn(
        "flex items-center justify-center h-16 w-16 rounded-full mb-3",
        unlocked ? "bg-cyber-blue/20 text-cyber-blue animate-pulse-glow" : "bg-gray-700 text-gray-500"
      )}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className={cn(
        "text-lg font-bold mb-1",
        unlocked ? "text-cyber-blue" : "text-gray-400"
      )}>
        {title}
      </h3>
      <p className="text-sm text-center text-cyber-light">
        {description}
      </p>
    </div>
  );
};

export default Badge;
