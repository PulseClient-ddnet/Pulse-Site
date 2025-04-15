import type React from "react"
import { Download, ComputerIcon as Windows, Apple, LaptopIcon as Linux } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      {/* Background elements */}
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
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="windows" className="data-[state=active]:bg-zinc-800">
                <Windows className="mr-2 h-4 w-4" />
                Windows
              </TabsTrigger>
              <TabsTrigger value="macos" className="data-[state=active]:bg-zinc-800">
                <Apple className="mr-2 h-4 w-4" />
                macOS
              </TabsTrigger>
              <TabsTrigger value="linux" className="data-[state=active]:bg-zinc-800">
                <Linux className="mr-2 h-4 w-4" />
                Linux
              </TabsTrigger>
            </TabsList>

            <TabsContent value="windows">
              <DownloadCard
                title="Windows"
                icon={<Windows className="h-8 w-8" />}
                version="2.3.1"
                date="April 10, 2023"
                size="24.7 MB"
                requirements="Windows 10 or later (64-bit)"
                downloadUrl="#"
                mirrorUrl="#"
              />
            </TabsContent>

            <TabsContent value="macos">
              <DownloadCard
                title="macOS"
                icon={<Apple className="h-8 w-8" />}
                version="2.3.1"
                date="April 10, 2023"
                size="26.2 MB"
                requirements="macOS 10.13 or later"
                downloadUrl="#"
                mirrorUrl="#"
              />
            </TabsContent>

            <TabsContent value="linux">
              <DownloadCard
                title="Linux"
                icon={<Linux className="h-8 w-8" />}
                version="2.3.1"
                date="April 10, 2023"
                size="22.8 MB"
                requirements="CPU"
                downloadUrl="#"
                mirrorUrl="#"
              />
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium mb-4">Looking for older versions?</h3>
            <p className="text-zinc-400 mb-6">Previous releases are available in our archive or on GitHub</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                Version Archive
              </Button>
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                GitHub Releases
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface DownloadCardProps {
  title: string
  icon: React.ReactNode
  version: string
  date: string
  size: string
  requirements: string
  downloadUrl: string
  mirrorUrl: string
}

function DownloadCard({ title, icon, version, date, size, requirements, downloadUrl, mirrorUrl }: DownloadCardProps) {
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
            <div className="text-sm text-zinc-500">File Size</div>
            <div>{size}</div>
          </div>
          <div>
            <div className="text-sm text-zinc-500">Requirements</div>
            <div className="text-sm">{requirements}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 border-t border-zinc-800 pt-6">
        <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Download className="mr-2 h-4 w-4" /> Download Now
        </Button>
        <Button variant="outline" className="w-full sm:w-auto border-zinc-700 hover:bg-zinc-800">
          Download .exe file only
        </Button>
      </CardFooter>
    </Card>
  )
}
