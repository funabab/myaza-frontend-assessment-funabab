import { useForm } from "react-hook-form";
import { LoginFormValue, loginFormValueSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useLoginForm() {
  const form = useForm<LoginFormValue>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(loginFormValueSchema)
  });
  const handleLogin = form.handleSubmit(async (data) => {
    console.log(data);
  });
  return { form, handleLogin };
}
