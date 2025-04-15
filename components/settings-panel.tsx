import { Monitor, Volume2, Gamepad2, Network, Eye, Save, RotateCcw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SettingsPanel() {
  return (
    <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="graphics" className="w-full">
          <TabsList className="grid grid-cols-5 bg-zinc-800">
            <TabsTrigger value="graphics">
              <Monitor className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Graphics</span>
            </TabsTrigger>
            <TabsTrigger value="audio">
              <Volume2 className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Audio</span>
            </TabsTrigger>
            <TabsTrigger value="controls">
              <Gamepad2 className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Controls</span>
            </TabsTrigger>
            <TabsTrigger value="network">
              <Network className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Network</span>
            </TabsTrigger>
            <TabsTrigger value="interface">
              <Eye className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Interface</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="graphics" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="resolution">Resolution</Label>
                <Select defaultValue="1080p">
                  <SelectTrigger id="resolution" className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select resolution" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="720p">1280x720</SelectItem>
                    <SelectItem value="1080p">1920x1080</SelectItem>
                    <SelectItem value="1440p">2560x1440</SelectItem>
                    <SelectItem value="4k">3840x2160</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quality">Quality Preset</Label>
                <Select defaultValue="high">
                  <SelectTrigger id="quality" className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="ultra">Ultra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="vsync">VSync</Label>
                  <Switch id="vsync" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="fullscreen">Fullscreen</Label>
                  <Switch id="fullscreen" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Brightness</Label>
                <Slider defaultValue={[75]} max={100} step={1} className="py-4" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label>Master Volume</Label>
                <Slider defaultValue={[80]} max={100} step={1} className="py-4" />
              </div>

              <div className="space-y-2">
                <Label>Music Volume</Label>
                <Slider defaultValue={[60]} max={100} step={1} className="py-4" />
              </div>

              <div className="space-y-2">
                <Label>Effects Volume</Label>
                <Slider defaultValue={[90]} max={100} step={1} className="py-4" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="mute">Mute All</Label>
                  <Switch id="mute" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audio-device">Audio Device</Label>
                <Select defaultValue="default">
                  <SelectTrigger id="audio-device" className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select audio device" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="default">System Default</SelectItem>
                    <SelectItem value="headphones">Headphones</SelectItem>
                    <SelectItem value="speakers">Speakers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="controls" className="mt-4">
            <div className="rounded-md border border-zinc-800 overflow-hidden">
              <div className="bg-zinc-800 px-4 py-2 text-xs font-medium grid grid-cols-12 gap-4">
                <div className="col-span-4">Action</div>
                <div className="col-span-4">Primary</div>
                <div className="col-span-4">Secondary</div>
              </div>

              <div className="divide-y divide-zinc-800">
                <KeybindRow action="Move Up" primary="W" secondary="Up Arrow" />
                <KeybindRow action="Move Down" primary="S" secondary="Down Arrow" />
                <KeybindRow action="Move Left" primary="A" secondary="Left Arrow" />
                <KeybindRow action="Move Right" primary="D" secondary="Right Arrow" />
                <KeybindRow action="Jump" primary="Space" secondary="" />
                <KeybindRow action="Hook" primary="Mouse 1" secondary="F" />
                <KeybindRow action="Fire" primary="Mouse 2" secondary="G" />
                <KeybindRow action="Chat" primary="T" secondary="Y" />
                <KeybindRow action="Scoreboard" primary="Tab" secondary="" />
                <KeybindRow action="Menu" primary="Escape" secondary="" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="network" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="nickname">Nickname</Label>
                <Input id="nickname" defaultValue="ProGamer123" className="bg-zinc-800 border-zinc-700" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clan">Clan Tag</Label>
                <Input id="clan" defaultValue="[DDR]" className="bg-zinc-800 border-zinc-700" />
              </div>

              <div className="space-y-2">
                <Label>Connection Quality</Label>
                <Select defaultValue="auto">
                  <SelectTrigger className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select connection quality" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="low">Low Bandwidth</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High Quality</SelectItem>
                    <SelectItem value="auto">Auto (Recommended)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="predict">Prediction</Label>
                  <Switch id="predict" defaultChecked />
                </div>
                <p className="text-xs text-zinc-500">Enables client-side prediction for smoother gameplay</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="antilag">Anti-lag</Label>
                  <Switch id="antilag" defaultChecked />
                </div>
                <p className="text-xs text-zinc-500">Reduces perceived lag at the cost of accuracy</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="interface" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="showfps">Show FPS</Label>
                  <Switch id="showfps" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="showping">Show Ping</Label>
                  <Switch id="showping" defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label>UI Scale</Label>
                <Slider defaultValue={[100]} max={150} min={50} step={10} className="py-4" />
              </div>

              <div className="space-y-2">
                <Label>Chat Opacity</Label>
                <Slider defaultValue={[80]} max={100} step={5} className="py-4" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language" className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ru">Russian</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-zinc-800 pt-4">
        <Button variant="outline" className="bg-zinc-800 border-zinc-700">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Default
        </Button>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  )
}

interface KeybindRowProps {
  action: string
  primary: string
  secondary: string
}

function KeybindRow({ action, primary, secondary }: KeybindRowProps) {
  return (
    <div className="px-4 py-3 grid grid-cols-12 gap-4 hover:bg-zinc-800/50 transition-colors">
      <div className="col-span-4 font-medium">{action}</div>
      <div className="col-span-4">
        <Button variant="outline" size="sm" className="w-full bg-zinc-800 border-zinc-700 font-mono text-xs">
          {primary}
        </Button>
      </div>
      <div className="col-span-4">
        <Button variant="outline" size="sm" className="w-full bg-zinc-800 border-zinc-700 font-mono text-xs">
          {secondary || "—"}
        </Button>
      </div>
    </div>
  )
}
