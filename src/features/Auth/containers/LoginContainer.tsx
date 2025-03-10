"use client";
import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { TestimonialCarousel } from "../components/Testimonial/TestimonialCarousel";
import authDashboardViewImage from "@/assets/images/auth-dashboard-view.png";
import Image from "next/image";
import { useLoginForm } from "../hooks/useLoginForm";

const testimonials = [
  {
    rating: 5,
    message: `“I’ve been using Uifry for over a year, and it’s helped simplify all my payments.”`,
    author: {
      name: "Ali Riaz",
      location: "Singapore"
    }
  },
  {
    rating: 5,
    message: `“Uifry has made tracking my expenses so much easier and more efficient.”`,
    author: {
      name: "Sophia Martinez",
      location: "New York, USA"
    }
  },
  {
    rating: 5,
    message: `“With Uifry, I can manage my budget effortlessly and stay on track.”`,
    author: {
      name: "James Carter",
      location: "London, UK"
    }
  }
];

export interface LoginContainerProps {
  redirectUrlAfterLogin?: string;
}

export default function LoginContainer({
  redirectUrlAfterLogin
}: LoginContainerProps) {
  const { form, handleLogin } = useLoginForm({ redirectUrlAfterLogin });

  return (
    <div className="flex">
      <main className="flex min-h-[100dvh] grow items-center justify-center bg-secondary px-4 sm:px-0 xl:justify-end xl:pr-21.5">
        <LoginForm
          className="-mt-16 w-full max-w-106 2xl:-mt-31"
          form={form}
          onLogin={handleLogin}
        />
      </main>
      <aside className="relative hidden w-182.5 overflow-hidden px-16 xl:flex 2xl:w-240 2xl:items-center 2xl:justify-center">
        <TestimonialCarousel
          className="mt-16 w-full max-w-150.5 duration-1000 animate-in fade-in 2xl:-mt-120"
          testimonials={testimonials}
          autoplay
        />
        <Image
          src={authDashboardViewImage}
          alt=""
          loading="eager"
          className="absolute -bottom-14 left-48 duration-1000 animate-in fade-in slide-in-from-bottom-20 2xl:left-64"
        />
      </aside>
    </div>
  );
}
