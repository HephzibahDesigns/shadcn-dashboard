import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck } from "lucide-react";
import { ReactNode } from "react";

type HoverBadgeProp = {
  title: string;
  text: string;
  badge: ReactNode;
};

export default function HoverBadge({ title, text, badge }: HoverBadgeProp) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{badge}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm">{text}</p>
            <div className="text-muted-foreground text-xs">
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
