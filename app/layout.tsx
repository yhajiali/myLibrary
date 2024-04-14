import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideNav } from "./components/SideNav";
import { MainNav } from "./components/MainNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "myLibrary | Your house of books",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <MainNav />
        </header>
        <main className="flex pt-16">
          <SideNav />
          {children}
        </main>
      </body>
    </html>
  );
}
