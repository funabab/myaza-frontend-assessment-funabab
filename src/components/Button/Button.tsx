import { cn } from "@/libs/class-names";
import { cva, VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import { Slot } from "radix-ui";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex font-semibold text-base items-center disabled:opacity-50 cursor-pointer whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-primary text-primary hover:bg-primary/10"
      },
      size: {
        default: "h-10 px-4 py-3 rounded-lg",
        lg: "h-12 px-8 rounded-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot.Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader className="mr-2 size-4 animate-spin" />}
        <Slot.Slottable>{children}</Slot.Slottable>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants, Button };
