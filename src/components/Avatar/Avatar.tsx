"use client";
import { cn } from "@/libs/class-names";
import { Avatar as RadixAvatar } from "radix-ui";
import { ComponentProps } from "react";

export interface AvatarProps extends ComponentProps<"span"> {
  src?: string | null;
  fallback?: string;
}

const Avatar = ({ className, src, fallback, ...props }: AvatarProps) => {
  return (
    <RadixAvatar.Root
      className={cn("size-10 rounded-full", className)}
      {...props}
    >
      {src && (
        <RadixAvatar.Image
          className="size-10 rounded-full object-cover"
          src={src}
        />
      )}
      <RadixAvatar.Fallback className="flex size-10 items-start justify-center rounded-full bg-secondary-foreground pt-2 text-secondary">
        {fallback}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export { Avatar };
