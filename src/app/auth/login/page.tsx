import React from "react";
import LoginContainer from "@/features/Auth/containers/LoginContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login"
};

export default function LoginPage() {
  return <LoginContainer />;
}
