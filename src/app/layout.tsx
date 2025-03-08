import "@/styles/globals.css";
import { fontKarla } from "@/utils/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UIFry",
  description: "UIFry Dashboard"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontKarla.variable} ${fontKarla.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
