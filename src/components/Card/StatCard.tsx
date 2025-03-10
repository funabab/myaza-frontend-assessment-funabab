import { ReactNode } from "react";
import { Card } from "./Card";
import { cn } from "@/libs/class-names";

export interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  rate: string;
  status: "success" | "danger";
}

const StatCard = ({ icon, title, value, status, rate }: StatCardProps) => {
  return (
    <Card>
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="text-sm/[20px] text-muted-foreground">{title}</div>
          <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
        </div>
        <span
          className={cn(
            "mt-auto ml-auto rounded-full px-1 py-px text-xs",
            status === "success" && "bg-success text-success-foreground",
            status === "danger" && "bg-danger text-danger-foreground"
          )}
        >
          {rate}
        </span>
      </div>
    </Card>
  );
};

export { StatCard };
