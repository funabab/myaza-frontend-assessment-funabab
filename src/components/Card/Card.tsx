import { cn } from "@/libs/class-names";
import { ComponentProps, ReactNode } from "react";

export interface CardProps extends Omit<ComponentProps<"div">, "title"> {
  title?: ReactNode;
}

const Card = ({ title, className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-4 rounded-2xl bg-secondary p-4",
        className
      )}
      {...props}
    >
      {title}
      <div>{children}</div>
    </div>
  );
};

export { Card };
