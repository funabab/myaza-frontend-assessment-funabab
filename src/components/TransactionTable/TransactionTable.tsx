"use client";
import { cn } from "@/libs/class-names";
import { Avatar } from "radix-ui";
import { ComponentProps } from "react";

export interface Transaction {
  id: string;
  icon: string;
  name: string;
  date: string;
  amount: string;
  description: string;
  status: "deposited" | "failed";
}

export interface TransactionTableProps extends ComponentProps<"table"> {
  transactions: Transaction[];
  filter?: Partial<Record<keyof Transaction, true>>;
}

const TransactionTable = ({
  transactions,
  className,
  filter = {} as Exclude<TransactionTableProps["filter"], undefined>,
  ...props
}: TransactionTableProps) => {
  return (
    <table
      {...props}
      className={cn(
        "table table-auto border-collapse border-spacing-4.5 font-karla",
        className
      )}
    >
      <thead>
        <tr>
          {!filter.icon && <td className="text-sm text-muted">Name</td>}
          {!filter.date && <td className="px-3 text-sm text-muted">Date</td>}
          {!filter.description && (
            <td className="px-3 text-sm text-muted">Description</td>
          )}
          {!filter.amount && (
            <td className="px-3 text-sm text-muted">Amount</td>
          )}
          {!filter.status && <td className="text-sm text-muted">Status</td>}
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr
            key={transaction.id}
            className="border-b border-[#2D2B4D] last:border-none"
          >
            {!filter.name && (
              <td className="flex items-center gap-1 py-3 text-sm whitespace-nowrap">
                <Avatar.Root className="size-6 shrink-0 rounded-full">
                  <Avatar.Image
                    src={transaction.icon}
                    className="size-6 rounded-full object-cover"
                  />
                  <Avatar.Fallback className="size-6 rounded-full bg-border" />
                </Avatar.Root>
                <span>{transaction.name}</span>
              </td>
            )}
            {!filter.date && (
              <td className="px-3 py-3 text-sm whitespace-nowrap">
                {transaction.date}
              </td>
            )}
            {!filter.description && (
              <td className="px-3 py-3 text-sm whitespace-nowrap">
                {transaction.description}
              </td>
            )}
            {!filter.amount && (
              <td className="px-3 py-3 text-sm whitespace-nowrap">
                {transaction.amount}
              </td>
            )}

            {!filter.status && (
              <td className="py-3 text-sm whitespace-nowrap">
                <span
                  className={cn(
                    "mt-auto ml-auto rounded-full px-1 py-px text-xs capitalize",
                    transaction.status === "deposited" &&
                      "bg-success text-success-foreground",
                    transaction.status === "failed" &&
                      "bg-danger text-danger-foreground"
                  )}
                >
                  {transaction.status}
                </span>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TransactionTable };
