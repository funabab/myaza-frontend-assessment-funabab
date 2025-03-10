import { Button } from "@/components/Button/Button";
import { Menu, X } from "lucide-react";
import { Dialog } from "radix-ui";
import { NavMenu, NavMenuProps } from "./NavMenu";

export interface HambugerMenuProps {
  navMenu: NavMenuProps;
}

const HambugerMenu = ({ navMenu }: HambugerMenuProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" className="size-8">
          <Menu />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 h-full w-3/4 gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=open]:slide-in-from-left sm:max-w-sm">
          <Dialog.Title className="sr-only">Hambudger Menu</Dialog.Title>
          <NavMenu {...navMenu} className="h-full" />
          <Dialog.Close className="focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { HambugerMenu };
