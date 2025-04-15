import type React from "react"
import { Zap, Shield, Palette, Gauge, Cpu, Layout, Crosshair, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
            title="Performance Boost"
            description="Optimized rendering engine for higher FPS and smoother gameplay."
          />

          <FeatureCard
            icon={<Shield className="h-6 w-6 text-blue-500" />}
            title="Anti-Bot Compatible"
            description="Fully compatible with DDNet's anti-bot system while providing enhanced features. The client itself was made by the ddnet mod lol:p"
          />

          <FeatureCard
            icon={<Palette className="h-6 w-6 text-pink-500" />}
            title="Customizable"
            description="Import and use custom skins with our advanced skin manager and editor."
          />

          <FeatureCard
            icon={<Gauge className="h-6 w-6 text-green-500" />}
            title="HUD Enhancements"
            description="Customized displays with additional information and statistics."
          />

          <FeatureCard
            icon={<Layout className="h-6 w-6 text-red-500" />}
            title="UI Enhancements"
            description="Modern interface with dark mode, customizable themes, console and improved usability."
          />


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
