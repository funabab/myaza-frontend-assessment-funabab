"use client";
import { cn } from "@/libs/class-names";
import { cva, VariantProps } from "class-variance-authority";
import { Search } from "lucide-react";
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
    VariantProps<typeof inputVariants> {
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, fullWidth = false, ...props }, ref) => {
    const [isPasswordInput] = useState(() => type === "password");
    const [isSearchInput] = useState(() => type === "search");
    const [showPassword, setShowPassword] = useState(false);
    const Wrapper = isPasswordInput || isSearchInput ? "div" : Fragment;
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
      <Wrapper
        {...((isPasswordInput || isSearchInput) && {
          className: cn("relative size-max", fullWidth && "w-full")
        })}
      >
        <input
          type={inputType}
          className={cn(
            inputVariants({ variant, className }),
            fullWidth && "w-full",
            isSearchInput &&
              "h-10 rounded-lg border-none bg-secondary placeholder:text-muted"
          )}
          ref={ref}
          {...props}
        />
        {isPasswordInput && (
          <button
            className="absolute top-4 right-3 m-0 bg-none p-0 text-sm font-bold text-primary"
            onClick={handlePasswordToggle}
            type="button"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
        {isSearchInput && <Search className="absolute top-3 right-3 size-4" />}
      </Wrapper>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
