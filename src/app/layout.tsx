import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { siteConfig } from "@/config/site";

import { Navbar } from "@/components/common/navbar";

import dynamic from "next/dynamic";
const ThemeProvider = dynamic(
  () => import("@/components/providers/theme-provider"),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div>
            <div className="container mx-auto py-12">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
