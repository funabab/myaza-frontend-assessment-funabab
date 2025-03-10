export type LayoutMetadata = {
  segment: string | null;
  title: string;
  subTitle: string;
};

export const layoutMetadata: LayoutMetadata[] = [
  {
    segment: null,
    title: "Welcome Back, Ali 👋",
    subTitle: "Here’s what’s happening with your store today."
  },
  {
    segment: "my-wallet",
    title: "My Wallets",
    subTitle: "Manage all your wallets from here"
  }
];

export const defaultLayoutMetadata = layoutMetadata[0];
