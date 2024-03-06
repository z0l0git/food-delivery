import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Food Delivery",
  description: "Food Delivery by Zolo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
