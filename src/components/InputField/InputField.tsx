import { cn } from "@/libs/class-names";
import { useId } from "react";
import { Input, InputProps } from "../Input/Input";

export interface InputFieldProps {
  label: string;
  input?: InputProps;
  error?: string;
}

const InputField = ({ label, input = {}, error }: InputFieldProps) => {
  const inputId = useId();
  return (
    <div className={cn("relative flex flex-col space-y-2")}>
      <label
        className={cn("text-form-label", error && "text-danger-foreground")}
        htmlFor={`inputfield-input-${inputId}`}
      >
        {label}
      </label>
      <Input
        {...input}
        id={`inputfield-input-${inputId}`}
        className={cn(
          input.className,
          error &&
            "border-danger-foreground text-danger-foreground placeholder:text-danger-foreground/80 focus-within:bg-danger/40"
        )}
      />
      <div
        className={cn(
          "max-h-0 transition-all duration-500",
          error && "max-h-10"
        )}
      >
        {error && (
          <p className="text-sm font-semibold text-danger-foreground">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export { InputField };
