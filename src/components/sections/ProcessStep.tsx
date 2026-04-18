import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

interface ProcessStepProps {
  index: number;
  total: number;
  title: string;
  desc: string;
}

const ProcessStep = ({ index, total, title, desc }: ProcessStepProps) => (
  <Reveal delay={index * 0.06}>
    <div className="relative h-full">
      <div className="glass-card p-7 text-left h-full">
        <div
          className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: "hsl(var(--highlight))" }}
        >
          <span className="text-[0.95rem] font-heading font-semibold leading-none">{index + 1}</span>
        </div>
        <h3 className="mb-2 text-[1rem] font-heading font-semibold text-primary">{title}</h3>
        <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{desc}</p>
      </div>
      {index < total - 1 && (
        <div className="hidden lg:flex absolute top-1/2 -right-5 w-5 h-5 -translate-y-1/2 items-center justify-center">
          <ArrowRight className="text-accent" size={18} aria-hidden="true" />
        </div>
      )}
    </div>
  </Reveal>
);

export default ProcessStep;
