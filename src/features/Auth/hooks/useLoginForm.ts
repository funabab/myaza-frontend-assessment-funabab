"use client";
import { getErrorMessage } from "@/utils/helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { loginWithCredentialAction } from "../actions/auth";
import { LoginFormValue, loginFormValueSchema } from "../schemas/auth";
import { useRouter } from "next/navigation";

export interface useLoginFormProps {
  redirectUrlAfterLogin?: string;
}

const useLoginForm = ({ redirectUrlAfterLogin = "/" }: useLoginFormProps) => {
  const router = useRouter();
  const form = useForm<LoginFormValue>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(loginFormValueSchema)
  });
  const handleLogin = form.handleSubmit(async (data) => {
    try {
      const response = await loginWithCredentialAction(data);
      if ("error" in response) {
        throw new Error(response.error);
      } else {
        toast.success(response.message);
        router.push(redirectUrlAfterLogin);
      }
    } catch (err) {
      toast.error(getErrorMessage(err, "An error occurred while logging in"));
    }
  });
  return { form, handleLogin };
};

export { useLoginForm };
