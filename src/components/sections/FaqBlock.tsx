import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";

interface FaqBlockProps {
  items: { q: string; a: string }[];
}

const FaqBlock = ({ items }: FaqBlockProps) => (
  <Reveal delay={0.1}>
    <Accordion
      type="single"
      collapsible
      className="rounded-md bg-white/85 backdrop-blur-sm px-5 md:px-7 ring-1 ring-border/40 shadow-[0_2px_8px_-4px_hsl(212_40%_15%_/_0.06)]"
    >
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/40 last:border-0">
          <AccordionTrigger className="text-left text-[0.95rem] font-heading font-semibold text-foreground hover:no-underline py-5">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-[0.88rem] leading-[1.85] text-muted-foreground pb-5">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </Reveal>
);

export default FaqBlock;
