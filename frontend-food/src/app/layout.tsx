import type { Metadata } from "next";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

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
      <body>
        <div>
          <div className="px-[20px] md:px-[120px]">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
