import { Outfit } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Loop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
