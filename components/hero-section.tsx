import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('/header.png')] bg-center opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            DDnetPulse
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            The ultimate DDRaceNetwork client modification
          </p>
          <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
            Experience DDNet like never before with enhanced visuals,
            performance optimizations, and exclusive features designed for both
            casual and competitive players.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Download className="mr-2 h-5 w-5" />
              <Link href="#download">Download</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-800"
            >
              <Github className="mr-2 h-5 w-5" />
              <Link
                href="https://github.com/StormAxs/DDNetPulse/"
                target="_blank"
              >
                View on GitHub
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-sm text-zinc-500">
            Version 2.3.1 • Released April 10, 2023 • Windows, Linux & macOS
          </div>
        </div>
      </div>
    </section>
  );
}
