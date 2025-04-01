
import { cn } from "@/lib/utils";
import { ShieldAlert } from "lucide-react";

interface SecurityTipProps {
  title: string;
  description: string;
  className?: string;
}

const SecurityTip = ({ title, description, className }: SecurityTipProps) => {
  return (
    <div className={cn("cyber-card p-4 border-l-4 border-l-cyber-yellow", className)}>
      <div className="flex gap-3">
        <div className="text-cyber-yellow mt-1">
          <ShieldAlert size={24} />
        </div>
        <div>
          <h3 className="font-bold text-cyber-yellow mb-1">{title}</h3>
          <p className="text-sm text-cyber-light">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityTip;
