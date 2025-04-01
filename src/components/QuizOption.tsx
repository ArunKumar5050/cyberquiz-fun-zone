
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface QuizOptionProps {
  id: string;
  text: string;
  isCorrect: boolean;
  isSelected: boolean;
  isRevealed: boolean;
  onSelect: (id: string) => void;
  disabled: boolean;
}

const QuizOption = ({
  id,
  text,
  isCorrect,
  isSelected,
  isRevealed,
  onSelect,
  disabled,
}: QuizOptionProps) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("animate-scale-in");
    const timer = setTimeout(() => setAnimationClass(""), 300);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <button
      className={cn(
        "option-button",
        animationClass,
        isRevealed && isCorrect && "option-correct",
        isRevealed && isSelected && !isCorrect && "option-incorrect",
        disabled && "opacity-70 cursor-not-allowed"
      )}
      onClick={() => !disabled && onSelect(id)}
      disabled={disabled}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "h-5 w-5 rounded-full border flex items-center justify-center",
            isSelected ? "border-cyber-blue bg-cyber-blue/20" : "border-cyber-blue/50"
          )}
        >
          {isSelected && <div className="h-2 w-2 rounded-full bg-cyber-blue"></div>}
        </div>
        <span className="flex-1">{text}</span>
        {isRevealed && isCorrect && (
          <span className="text-cyber-green text-sm">✓ Correct</span>
        )}
        {isRevealed && isSelected && !isCorrect && (
          <span className="text-cyber-red text-sm">✗ Incorrect</span>
        )}
      </div>
    </button>
  );
};

export default QuizOption;
