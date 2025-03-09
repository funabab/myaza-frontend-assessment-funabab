"use client";
import { cn } from "@/libs/class-names";
import { cva, VariantProps } from "class-variance-authority";
import {
  forwardRef,
  Fragment,
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState
} from "react";

const inputVariants = cva(
  "disabled:cursor-not-allowed disabled:opacity-50 outline-0 transition-colors",
  {
    variants: {
      variant: {
        default:
          "h-12 px-3 py-4 border rounded-sm border-border placeholder:text-border placeholder:font-normal font-semibold text-sm focus-within:bg-primary/5"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    const [isPasswordInput] = useState(() => type === "password");
    const [showPassword, setShowPassword] = useState(false);
    const Wrapper = isPasswordInput ? "div" : Fragment;
    const inputType = useMemo(() => {
      if (isPasswordInput) {
        return showPassword ? "text" : "password";
      }
      return type;
    }, [isPasswordInput, showPassword, type]);
    const handlePasswordToggle = useCallback(
      () => setShowPassword((prev) => !prev),
      []
    );

    return (
      <Wrapper className="relative size-max">
        <input
          type={inputType}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
        {isPasswordInput && (
          <button
            className="absolute top-4 right-3 m-0 bg-none p-0 text-sm font-bold text-primary"
            onClick={handlePasswordToggle}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </Wrapper>
    );
  }
);
Input.displayName = "Input";

export { inputVariants, Input };
