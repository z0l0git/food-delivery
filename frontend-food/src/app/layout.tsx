import type { Metadata } from "next";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

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
        <div className={roboto.className}>
          <div className="px-[20px] md:px-[120px]">
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
