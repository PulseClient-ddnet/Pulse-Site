import type React from "react"
import {
  Zap, Shield, Palette, StarsIcon, WebhookIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {CollapseIcon} from "next/dist/client/components/react-dev-overlay/ui/icons/collapse-icon";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Advanced Features</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Pulse enhances your DDRaceNetwork experience with these powerful features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-purple-500" />}
            title="Lighty"
            description="Enhanced rendering, with the help of which were made a lot of pretty stuff:3"
          />

          <FeatureCard
            icon={<Shield className="h-6 w-6 text-blue-500" />}
            title="Anti-Bot Compatible"
            description="Fully compatible with DDNet's anti-bot. The client itself was made by the ddnet mod lol:p"
          />

          <FeatureCard
            icon={<Palette className="h-6 w-6 text-pink-500" />}
            title="Customizable"
            description="Most of the stuff in ddnet which wasn't able to customize in DDNet is able to customize here:p"
          />

          <FeatureCard
            icon={<StarsIcon className="h-6 w-6 text-green-500" />}
            title="HUD Enhancements"
            description="Customized displays with additional information and statistics."
          />

          <FeatureCard
            icon={<WebhookIcon className="h-6 w-6 text-red-500" />}
            title="Socket.IO Support"
            description="Pulse have built-in websocket support, and with help of socket.io we are able to organize the backend"
          />

          {/*<FeatureCard*/}
          {/*    icon={<TrophyIcon className="h-6 w-6 text-white" />}*/}
          {/*    title="<In Progress> -> Achievements"*/}
          {/*    description="With websocket.io suport we including achievement. They'll be tied to the community(DDRace/KoG/Block)"*/}
          {/*/>*/}

          {/*<FeatureCard*/}
          {/*    icon={<BoxesIcon className="h-6 w-6 text-white" />}*/}
          {/*    title="<In Progress> -> Stats counter & Tracker"*/}
          {/*    description="In-game tracker for future statistics display"*/}
          {/*/>*/}


          <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-2">And Much More</h3>
              <p className="text-zinc-400">Discover all the features by downloading Pusle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-800/60 transition-colors">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
