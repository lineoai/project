import type { Metadata } from "next";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { DesignSystemProvider } from "@repo/design-system";
import { cn } from "@repo/design-system/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
});

const clash = localFont({
  src: "./font/clash.otf",
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          syne.variable,
          clash.variable,
          "antialiased overflow-x-hidden min-w-screen bg-[#070E02]"
        )}
      >
        <DesignSystemProvider>{children}</DesignSystemProvider>
      </body>
    </html>
  );
}
