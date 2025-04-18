"use client";

import type React from "react";
import {
  Download,
  ComputerIcon as Windows,
  LaptopIcon as Linux,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IClientInfo, useChangelogStore } from "@/store/changelog-store";

export function DownloadSection() {
  const [clientInfo, setClientInfo] = useState<IClientInfo | null>(null);
  const { lastReleaseInfo } = useChangelogStore();

  useEffect(() => {
    lastReleaseInfo().then(setClientInfo);
  }, []);
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-zinc-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Download Pulse</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Available for all major platforms. Always free and open source.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="windows" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger
                value="windows"
                className="data-[state=active]:bg-zinc-300 data-[state=active]:text-background"
              >
                <Windows className="mr-2 h-4 w-4" />
                Windows
              </TabsTrigger>
              {/*
              <TabsTrigger
                value="macos"
                className="data-[state=active]:bg-zinc-800"
              >
                <Apple className="mr-2 h-4 w-4" />
                macOS
              </TabsTrigger>
            */}
              <TabsTrigger
                value="linux"
                className="data-[state=active]:bg-zinc-300 data-[state=active]:text-background"
              >
                <Linux className="mr-2 h-4 w-4" />
                Linux
              </TabsTrigger>
            </TabsList>

            <TabsContent value="windows">
              <DownloadCard
                title="Windows"
                icon={<Windows className="h-8 w-8" />}
                version={clientInfo?.version || "0.0.0"}
                date={clientInfo?.date || "Unknown"}
                size="24.7 MB"
                requirements="Windows 10 or later (64-bit)"
                downloadFullUrl="https://github.com/StormAxs/DDNetPulse/releases/latest/download/Pulse-win.zip"
                downloadBinUrl="https://github.com/StormAxs/DDNetPulse/releases/latest/download/DDNet.exe"
              />
            </TabsContent>

            {/* 
            <TabsContent value="macos">
              <DownloadCard
                title="macOS"
                icon={<Apple className="h-8 w-8" />}
                version="2.3.1"
                date="April 10, 2023"
                size="26.2 MB"
                requirements="macOS 10.13 or later"
                downloadFullUrl="#"
                downloadBinUrl="#"
              />
            </TabsContent>
          */}

            <TabsContent value="linux">
              <DownloadCard
                title="Linux"
                icon={<Linux className="h-8 w-8" />}
                version={clientInfo?.version || "0.0.0"}
                date={clientInfo?.date || "Unknown"}
                size="22.8 MB"
                requirements="CPU"
                downloadFullUrl="https://github.com/StormAxs/DDNetPulse/releases/latest/download/Pulse-gnu.tar.gz"
                downloadBinUrl="https://github.com/StormAxs/DDNetPulse/releases/latest/download/DDNet"
              />
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium mb-4">
              Looking for older versions?
            </h3>
            <p className="text-zinc-400 mb-6">
              Previous releases are available in our archive or on GitHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/StormAxs/DDNetPulse/releases"
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800"
                >
                  GitHub Releases
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface DownloadCardProps {
  title: string;
  icon: React.ReactNode;
  version: string;
  date: string;
  size: string;
  requirements: string;
  downloadFullUrl: string;
  downloadBinUrl: string;
}

function DownloadCard({
  title,
  icon,
  version,
  date,
  requirements,
  downloadFullUrl,
  downloadBinUrl,
}: DownloadCardProps) {
  return (
    <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-3">
          {icon}
          <span>DDNetPulse for {title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <div className="text-sm text-zinc-500">Version</div>
            <div>{version}</div>
          </div>
          <div>
            <div className="text-sm text-zinc-500">Release Date</div>
            <div>{date}</div>
          </div>
          <div>
            <div className="text-sm text-zinc-500">Requirements</div>
            <div className="text-sm">{requirements}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 border-t border-zinc-800 pt-6">
        <Link href={downloadFullUrl}>
          <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Download className="mr-2 h-4 w-4" /> Download Now
          </Button>
        </Link>

        <Link href={downloadBinUrl}>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-zinc-700 hover:bg-zinc-800"
          >
            <Download className="mr-2 h-4 w-4" />
            Download .exe file only
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
