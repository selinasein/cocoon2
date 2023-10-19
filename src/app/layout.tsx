import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";

const inter = Roboto({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-500 text-white  dark:bg-black">
      <ReduxProvider>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
