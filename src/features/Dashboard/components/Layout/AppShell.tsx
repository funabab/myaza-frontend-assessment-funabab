import Logo from "@/assets/images/logo.svg";
import { Input } from "@/components/Input/Input";
import Link from "next/link";
import React from "react";
import { HambugerMenu } from "./HambudgerMenu";
import { NavMenu, NavMenuProps } from "./NavMenu";

export interface AppShellProps {
  title: string;
  subTitle: string;
  navMenu: NavMenuProps;
  children?: React.ReactNode;
}

const AppShell = ({ title, subTitle, navMenu, children }: AppShellProps) => {
  return (
    <div className="flex">
      <NavMenu {...navMenu} className="hidden w-73.25 shrink-0 lg:flex" />
      <div className="flex h-[100dvh] w-full grow flex-col 2xl:container 2xl:mx-auto">
        <div className="shrink-0 bg-background">
          <div className="flex items-center justify-between gap-5 px-6 py-10 lg:hidden">
            <div className="flex items-center gap-3">
              <HambugerMenu navMenu={navMenu} />
              <Link href="/">
                <Logo className="[&_g:first-of-type_path]:fill-primary" />
              </Link>
            </div>
            <Input
              type="search"
              placeholder="Search"
              className="w-40 !rounded-full md:w-96"
            />
          </div>
        </div>
        <div className="flex min-h-0 grow flex-col overflow-y-auto md:overflow-x-visible">
          <div className="flex shrink-0 items-center justify-between gap-10 px-6 pb-10 lg:p-10 lg:pb-6">
            <div>
              <h1 className="text-heading-1 whitespace-nowrap">{title}</h1>
              <p className="mt-2.5 text-base text-secondary-foreground">
                {subTitle}
              </p>
            </div>
            <div className="hidden lg:block">
              <Input
                type="search"
                placeholder="Search for anything...."
                className="w-95"
              />
            </div>
          </div>
          <div className="relative grow px-6 pb-4.5 md:overflow-auto lg:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { AppShell };
