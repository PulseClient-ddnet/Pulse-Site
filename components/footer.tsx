import { Github, Twitter, DiscIcon as Discord, Heart } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
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
            <p className="text-zinc-500 text-sm max-w-md">
              An open-source DDRaceNetwork client modification focused on
              performance, customization, and enhanced features.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            <div>
              <h3 className="text-sm font-semibold mb-4 text-zinc-300">
                Product
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href="#changelog"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-zinc-300">
                Resources
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 text-zinc-300">
                Community
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center"
                  >
                    <Discord className="h-4 w-4 mr-2" />
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            © 2025 DDNetPulse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-zinc-500 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>for the DDRaceNetwork community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
