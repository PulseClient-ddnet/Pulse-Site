import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DownloadSection } from "@/components/download-section";
import { ChangelogSection } from "@/components/changelog-section";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="pulseicon.png"
              alt="P"
              width="40"
              height="40"
              className="rounded-md"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              DDNetPulse
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#changelog"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Changelog
            </Link>
            <Link
              href="https://github.com/StormAxs/DDNetPulse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </Link>
          </nav>
          <Link href="#download">
            <Button size="sm" className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </Link>
        </div>
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <ChangelogSection />
      </main>

      <Footer />
    </div>
  );
}
