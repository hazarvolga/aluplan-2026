import { CheckCircle2 } from "lucide-react";

type SystemRequirementsCardProps = {
  title: string;
  requirements: string[];
};

const SystemRequirementsCard = ({ title, requirements }: SystemRequirementsCardProps) => {
  return (
    <div className="bg-card rounded-xl shadow-md p-6 border border-border">
      <h3 className="font-display text-xl font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground text-sm leading-relaxed">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SystemRequirementsCard;
