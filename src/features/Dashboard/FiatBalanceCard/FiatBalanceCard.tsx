import { cn } from "@/libs/class-names";
import { ComponentProps, ReactNode } from "react";

export interface FiatBalanceCardProps extends ComponentProps<"div"> {
  icon: ReactNode;
  title: string;
  balance: string;
}

const FiatBalanceCard = ({
  icon,
  title,
  balance,
  className,
  ...props
}: FiatBalanceCardProps) => {
  return (
    <div
      className={cn(
        "flex gap-2 rounded-lg border border-accent p-4",
        className
      )}
      {...props}
    >
      <div className="flex h-7.5 w-10 shrink-0 items-center justify-center rounded-full bg-white">
        {icon}
      </div>
      <div className="text-base">
        <p>{title}</p>
        <p className="mt-1 text-xs text-border">{balance}</p>
      </div>
    </div>
  );
};

export { FiatBalanceCard };
