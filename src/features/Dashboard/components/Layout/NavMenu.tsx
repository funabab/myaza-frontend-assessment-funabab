"use client";
import DropdownIcon from "@/assets/images/arrow-down-icon.svg";
import DarkThemeIcon from "@/assets/images/dark-theme-icon.svg";
import Logo from "@/assets/images/logo.svg";
import { Avatar } from "@/components/Avatar/Avatar";
import { Button } from "@/components/Button/Button";
import { Menu } from "@/features/Dashboard/data/menus";
import { cn } from "@/libs/class-names";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, Separator } from "radix-ui";
import { ComponentProps, useMemo } from "react";

export interface NavMenuProps extends ComponentProps<"nav"> {
  menus: Menu[];
  selectedSegment?: string | null;
  profile: {
    name: string;
    email: string;
    role: string;
  };
}

const NavMenu = ({
  menus,
  className,
  selectedSegment,
  profile,
  ...props
}: NavMenuProps) => {
  const avatarFallbackText = useMemo(
    () =>
      profile.name
        .split(" ")
        .map((name) => name[0])
        .join(""),
    [profile.name]
  );
  return (
    <nav
      className={cn("flex flex-col bg-secondary px-7 pt-10", className)}
      {...props}
    >
      <Link href="/">
        <Logo className="[&_g:first-of-type_path]:fill-primary" />
      </Link>
      <ul className="mt-10 space-y-4">
        {menus.map((menu, index) => (
          <li key={index}>
            {menu.type === "menu-item" && (
              <Button
                className={cn(
                  "w-full justify-start gap-4.5",
                  selectedSegment !== menu.segment && "font-normal"
                )}
                variant={selectedSegment === menu.segment ? "primary" : "ghost"}
                asChild
              >
                <Link href={menu.href}>
                  {menu.icon}
                  {menu.label}
                </Link>
              </Button>
            )}
            {menu.type === "divider" && (
              <Separator.Root
                className="h-px bg-separator"
                orientation="horizontal"
              />
            )}
          </li>
        ))}
        <li>
          <Button
            className={cn(
              "w-full justify-start gap-4.5 bg-transparent font-normal text-white hover:bg-primary/10"
            )}
          >
            <DarkThemeIcon />
            Dark Theme
          </Button>
        </li>
      </ul>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button
            variant="ghost"
            className="-mx-3 mt-auto mb-16.5 h-14 justify-start gap-3"
          >
            <Avatar fallback={avatarFallbackText} />
            <span className="flex flex-col text-start text-base font-bold">
              <strong>{profile.name}</strong>
              <span className="text-sm font-normal capitalize">
                {profile.role}
              </span>
            </span>
            <DropdownIcon className="ml-auto" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          align="center"
          side="top"
          sideOffset={10}
          className="bg-popover text-popover-foreground z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] w-60 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border border-separator p-1 shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          <DropdownMenu.DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">
            <div className="flex flex-col space-y-1">
              <p className="text-sm leading-none font-medium">{profile.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {profile.email}
              </p>
            </div>
          </DropdownMenu.DropdownMenuLabel>
          <DropdownMenu.DropdownMenuSeparator className="-mx-1 my-1 h-px bg-separator" />
          <DropdownMenu.DropdownMenuGroup>
            <DropdownMenu.DropdownMenuItem
              className="relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-danger-foreground transition-colors outline-none select-none focus:bg-danger focus:text-danger-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              asChild
            >
              <a href="/api/auth/logout">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </a>
            </DropdownMenu.DropdownMenuItem>
          </DropdownMenu.DropdownMenuGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </nav>
  );
};

export { NavMenu };
