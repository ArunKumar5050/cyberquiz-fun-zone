
import { cn } from "@/lib/utils";

const JSProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-cyber-light mb-2">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="h-3 w-full bg-cyber-darker rounded-full overflow-hidden cyber-border">
        <div 
          className={cn(
            "h-full transition-all duration-500 ease-out rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default JSProgressBar;
