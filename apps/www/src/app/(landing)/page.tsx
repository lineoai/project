
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import HeroSection from "./_components/hero";
import Navbar  from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.home.title,
    template: `%s - ${siteConfig.home.title}`,
  },
  description: siteConfig.home.description,
};

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-4 relative">
      <Navbar />
      <HeroSection />
    </main>
  );
}
