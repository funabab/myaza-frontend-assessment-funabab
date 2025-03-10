"use client";
import Logo from "@/assets/images/logo.svg";
import { Button } from "@/components/Button/Button";
import { InputField } from "@/components/InputField/InputField";
import Link from "next/link";
import { ComponentProps } from "react";
import { UseFormReturn } from "react-hook-form";

export interface LoginFormProps extends ComponentProps<"div"> {
  form?: UseFormReturn<{ email: string; password: string }>;
  forgetPasswordLink?: string;
  loginLink?: string;
  onLogin?: () => void;
}
export default function LoginForm({
  form,
  forgetPasswordLink = "#",
  loginLink = "#",
  onLogin,
  ...props
}: LoginFormProps) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center">
        <Logo />
        <h1 className="mt-6 font-space-grotesk text-heading-1">
          Welcome back, Ali Riaz 🙇🏾‍♀️
        </h1>
        <p>Login to access your Uifry account</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin?.();
        }}
      >
        <div className="mt-6 space-y-4">
          <InputField
            label="Email Address"
            input={{
              ...(form && form.register("email")),
              type: "email",
              placeholder: "E.g Aliriaz@Uifry.com",
              fullWidth: true
            }}
            error={form?.formState.errors.email?.message}
          />
          <div>
            <InputField
              label="Password"
              input={{
                ...(form && form.register("password")),
                type: "password",
                fullWidth: true
              }}
              error={form?.formState.errors.password?.message}
            />
            <div className="text-end">
              <Button className="ml-auto" variant="link" asChild>
                <Link href={forgetPasswordLink}>I Forgot My Password!</Link>
              </Button>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="mt-12 w-full"
          type="submit"
          loading={form?.formState.isSubmitting}
        >
          Login
        </Button>
        <p className="mt-4 text-center font-semibold">
          Not Ali Raiz?{" "}
          <Button variant="link" asChild>
            <Link href={loginLink}>Login To Continue</Link>
          </Button>
        </p>
      </form>
    </div>
  );
}
