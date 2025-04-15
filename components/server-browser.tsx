"use client"

import React from "react"
import { Search, Filter, Star, Users, Globe, ArrowUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample server data
const servers = [
  {
    id: 1,
    name: "DDNet GER",
    map: "Multeasymap",
    players: 24,
    maxPlayers: 64,
    ping: 12,
    favorite: true,
    gameMode: "DDrace",
    location: "Germany",
  },
  {
    id: 2,
    name: "DDNet RUS",
    map: "Freezy",
    players: 18,
    maxPlayers: 32,
    ping: 45,
    favorite: false,
    gameMode: "DDrace",
    location: "Russia",
  },
  {
    id: 3,
    name: "DDNet USA",
    map: "Jungle",
    players: 32,
    maxPlayers: 64,
    ping: 120,
    favorite: true,
    gameMode: "Vanilla",
    location: "United States",
  },
  {
    id: 4,
    name: "DDNet BRA",
    map: "Chillout",
    players: 8,
    maxPlayers: 16,
    ping: 180,
    favorite: false,
    gameMode: "Blockworlds",
    location: "Brazil",
  },
  {
    id: 5,
    name: "DDNet CHL",
    map: "Skyline",
    players: 12,
    maxPlayers: 32,
    ping: 150,
    favorite: false,
    gameMode: "DDrace",
    location: "Chile",
  },
]

export function ServerBrowser() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [sortBy, setSortBy] = React.useState("players")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredServers = servers.filter(
    (server) =>
      server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      server.map.toLowerCase().includes(searchTerm.toLowerCase()) ||
      server.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedServers = [...filteredServers].sort((a, b) => {
    if (sortBy === "players") return b.players - a.players
    if (sortBy === "name") return a.name.localeCompare(b.name)
    if (sortBy === "ping") return a.ping - b.ping
    return 0
  })

  return (
    <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Server Browser</span>
          <Badge variant="outline" className="bg-zinc-800 text-zinc-300">
            {servers.length} Servers Online
          </Badge>
        </CardTitle>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search servers..."
              className="pl-8 bg-zinc-800 border-zinc-700"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-800 border-zinc-700">
                <DropdownMenuItem>Show Full Servers</DropdownMenuItem>
                <DropdownMenuItem>Show Empty Servers</DropdownMenuItem>
                <DropdownMenuItem>Show Passworded Servers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-800 border-zinc-700">
                <DropdownMenuItem onClick={() => setSortBy("players")}>Players</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("name")}>Name</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("ping")}>Ping</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4 bg-zinc-800">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="official">Official</TabsTrigger>
            <TabsTrigger value="modded">Modded</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="rounded-md border border-zinc-800 overflow-hidden">
              <div className="bg-zinc-800 px-4 py-2 text-xs font-medium grid grid-cols-12 gap-4">
                <div className="col-span-5">Server</div>
                <div className="col-span-2">Players</div>
                <div className="col-span-3">Game Mode</div>
                <div className="col-span-2">Ping</div>
              </div>

              <div className="divide-y divide-zinc-800">
                {sortedServers.map((server) => (
                  <div
                    key={server.id}
                    className="px-4 py-3 grid grid-cols-12 gap-4 hover:bg-zinc-800/50 transition-colors cursor-pointer"
                  >
                    <div className="col-span-5 flex items-center">
                      {server.favorite && <Star className="h-4 w-4 text-yellow-500 mr-2 fill-yellow-500" />}
                      <div>
                        <div className="font-medium">{server.name}</div>
                        <div className="text-xs text-zinc-400 flex items-center mt-1">
                          <Globe className="h-3 w-3 mr-1" />
                          {server.location} • Map: {server.map}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <Users className="h-4 w-4 text-zinc-500 mr-2" />
                      <span className={server.players > server.maxPlayers * 0.8 ? "text-orange-400" : ""}>
                        {server.players}/{server.maxPlayers}
                      </span>
                    </div>

                    <div className="col-span-3 flex items-center">
                      <Badge variant="outline" className="bg-zinc-800/50">
                        {server.gameMode}
                      </Badge>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <div
                        className={`h-2 w-2 rounded-full mr-2 ${
                          server.ping < 50 ? "bg-green-500" : server.ping < 100 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                      />
                      <span>{server.ping} ms</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="favorites">
            <div className="rounded-md border border-zinc-800 overflow-hidden">
              <div className="bg-zinc-800 px-4 py-2 text-xs font-medium grid grid-cols-12 gap-4">
                <div className="col-span-5">Server</div>
                <div className="col-span-2">Players</div>
                <div className="col-span-3">Game Mode</div>
                <div className="col-span-2">Ping</div>
              </div>

              <div className="divide-y divide-zinc-800">
                {sortedServers
                  .filter((s) => s.favorite)
                  .map((server) => (
                    <div
                      key={server.id}
                      className="px-4 py-3 grid grid-cols-12 gap-4 hover:bg-zinc-800/50 transition-colors cursor-pointer"
                    >
                      <div className="col-span-5 flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-2 fill-yellow-500" />
                        <div>
                          <div className="font-medium">{server.name}</div>
                          <div className="text-xs text-zinc-400 flex items-center mt-1">
                            <Globe className="h-3 w-3 mr-1" />
                            {server.location} • Map: {server.map}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 flex items-center">
                        <Users className="h-4 w-4 text-zinc-500 mr-2" />
                        <span className={server.players > server.maxPlayers * 0.8 ? "text-orange-400" : ""}>
                          {server.players}/{server.maxPlayers}
                        </span>
                      </div>

                      <div className="col-span-3 flex items-center">
                        <Badge variant="outline" className="bg-zinc-800/50">
                          {server.gameMode}
                        </Badge>
                      </div>

                      <div className="col-span-2 flex items-center">
                        <div
                          className={`h-2 w-2 rounded-full mr-2 ${
                            server.ping < 50 ? "bg-green-500" : server.ping < 100 ? "bg-yellow-500" : "bg-red-500"
                          }`}
                        />
                        <span>{server.ping} ms</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="official">
            <div className="flex items-center justify-center h-40 text-zinc-500">No official servers found</div>
          </TabsContent>

          <TabsContent value="modded">
            <div className="flex items-center justify-center h-40 text-zinc-500">No modded servers found</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
