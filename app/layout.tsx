import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Local imports
import Navigation from "@/components/Navigation";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type ChildrenProps = Readonly<{ children: React.ReactNode }>;

export const metadata: Metadata = {
  title: "American Express Coding Challenge",
  description: "A challenge to build a user list which liks to a user profile",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
