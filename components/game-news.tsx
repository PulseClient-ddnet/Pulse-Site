"use client"

import React from "react"
import { Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "DDRaceNetwork 15.0 Released",
    date: "2023-04-12",
    category: "Update",
    summary: "The latest version brings improved physics, new maps, and various bug fixes.",
    content:
      "We're excited to announce the release of DDRaceNetwork 15.0! This major update includes a complete overhaul of the physics engine, 10 new official maps, and fixes for numerous long-standing bugs. The new physics engine provides more accurate collision detection and smoother movement, especially in high-ping environments. We've also added new customization options for your character and improved the UI for better visibility during gameplay.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Spring Tournament Announced",
    date: "2023-04-08",
    category: "Event",
    summary: "Join the Spring Tournament starting April 20th with prizes for top players.",
    content:
      "Get ready for our biggest tournament yet! The Spring Tournament will run from April 20th to May 5th, featuring both solo and team competitions across multiple map categories. Top players will receive exclusive in-game items and real prizes including gaming peripherals. Registration is open now through our website. We'll be streaming all final matches on our official Twitch channel with professional commentary.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Community Map Contest Results",
    date: "2023-04-01",
    category: "Community",
    summary: "See the winners of our recent community map design contest.",
    content:
      "After reviewing over 200 submissions, we're thrilled to announce the winners of our Community Map Design Contest! The grand prize goes to 'Ethereal Pathways' by mapmaker SkyBuilder, which impressed our judges with its innovative mechanics and beautiful aesthetics. The top 5 maps will be added to our official rotation in the next update. Thank you to everyone who participated and congratulations to all the winners!",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Server Maintenance Schedule",
    date: "2023-03-25",
    category: "Announcement",
    summary: "Planned maintenance for all servers on April 15th.",
    content:
      "We will be performing scheduled maintenance on all DDRaceNetwork servers on April 15th from 2:00 UTC to 6:00 UTC. During this time, all servers will be unavailable as we upgrade our infrastructure to support the growing player base. This maintenance will improve server stability and reduce lag during peak hours. We apologize for any inconvenience and appreciate your understanding as we work to provide a better gaming experience.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function GameNews() {
  return (
    <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>News & Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 bg-zinc-800">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4 space-y-6">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </TabsContent>

          <TabsContent value="updates" className="mt-4 space-y-6">
            {newsItems
              .filter((item) => item.category === "Update")
              .map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
          </TabsContent>

          <TabsContent value="events" className="mt-4 space-y-6">
            {newsItems
              .filter((item) => item.category === "Event")
              .map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
          </TabsContent>

          <TabsContent value="community" className="mt-4 space-y-6">
            {newsItems
              .filter((item) => item.category === "Community")
              .map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

interface NewsCardProps {
  item: {
    id: number
    title: string
    date: string
    category: string
    summary: string
    content: string
    image: string
  }
}

function NewsCard({ item }: NewsCardProps) {
  const [expanded, setExpanded] = React.useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-800/30">
      <div className="md:flex">
        <div className="md:w-1/3 h-48 md:h-auto">
          <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 md:w-2/3">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="outline"
              className={`
                ${
                  item.category === "Update"
                    ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                    : item.category === "Event"
                      ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                      : item.category === "Community"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                }
              `}
            >
              {item.category}
            </Badge>
            <div className="flex items-center text-xs text-zinc-400">
              <Calendar className="h-3 w-3 mr-1" />
              {item.date}
            </div>
          </div>

          <h3 className="text-lg font-bold mb-2">{item.title}</h3>

          <p className="text-zinc-400 text-sm mb-3">{expanded ? item.content : item.summary}</p>

          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={toggleExpanded} className="text-xs hover:bg-zinc-800">
              {expanded ? "Show Less" : "Read More"}
            </Button>

            <Button variant="outline" size="sm" className="text-xs bg-zinc-800 border-zinc-700">
              <ExternalLink className="h-3 w-3 mr-1" />
              View on Web
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
