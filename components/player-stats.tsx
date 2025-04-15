import type React from "react"
import { Trophy, Clock, Flag, Heart, Target, Zap, BarChart3, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

// Sample player data
const playerData = {
  username: "ProGamer123",
  level: 42,
  xp: 7800,
  nextLevelXp: 10000,
  totalGames: 1248,
  wins: 523,
  topRank: 17,
  playtime: "324h 15m",
  achievements: 28,
  totalAchievements: 50,
  recentMaps: [
    { name: "Multeasymap", time: "01:23.45", rank: 3, date: "2023-04-10" },
    { name: "Freezy", time: "02:45.67", rank: 12, date: "2023-04-08" },
    { name: "Jungle", time: "03:12.89", rank: 5, date: "2023-04-05" },
    { name: "Skyline", time: "04:56.12", rank: 1, date: "2023-04-01" },
  ],
  stats: {
    accuracy: 78,
    speed: 82,
    teamwork: 65,
    survival: 91,
  },
}

export function PlayerStats() {
  return (
    <div className="space-y-6">
      <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
        <CardHeader className="pb-2">
          <CardTitle>Player Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{playerData.username.substring(0, 2)}</span>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">{playerData.username}</h3>
                <div className="text-sm text-zinc-400">Level {playerData.level}</div>
                <div className="mt-2">
                  <Progress value={(playerData.xp / playerData.nextLevelXp) * 100} className="h-2 bg-zinc-800" />
                  <div className="mt-1 text-xs text-zinc-500">
                    {playerData.xp} / {playerData.nextLevelXp} XP
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={<Trophy className="h-4 w-4 text-yellow-500" />}
                label="Win Rate"
                value={`${Math.round((playerData.wins / playerData.totalGames) * 100)}%`}
                description={`${playerData.wins} / ${playerData.totalGames} games`}
              />

              <StatCard
                icon={<Target className="h-4 w-4 text-red-500" />}
                label="Top Rank"
                value={`#${playerData.topRank}`}
                description="Global leaderboard"
              />

              <StatCard
                icon={<Clock className="h-4 w-4 text-blue-500" />}
                label="Playtime"
                value={playerData.playtime}
                description="Total time played"
              />

              <StatCard
                icon={<Flag className="h-4 w-4 text-green-500" />}
                label="Achievements"
                value={`${playerData.achievements}/${playerData.totalAchievements}`}
                description={`${Math.round((playerData.achievements / playerData.totalAchievements) * 100)}% completed`}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="grid grid-cols-3 bg-zinc-800">
          <TabsTrigger value="recent">Recent Maps</TabsTrigger>
          <TabsTrigger value="stats">Performance</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="mt-4">
          <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="rounded-md border border-zinc-800 overflow-hidden">
                <div className="bg-zinc-800 px-4 py-2 text-xs font-medium grid grid-cols-12 gap-4">
                  <div className="col-span-5">Map Name</div>
                  <div className="col-span-3">Time</div>
                  <div className="col-span-2">Rank</div>
                  <div className="col-span-2">Date</div>
                </div>

                <div className="divide-y divide-zinc-800">
                  {playerData.recentMaps.map((map, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 grid grid-cols-12 gap-4 hover:bg-zinc-800/50 transition-colors"
                    >
                      <div className="col-span-5 font-medium">{map.name}</div>
                      <div className="col-span-3 font-mono">{map.time}</div>
                      <div className="col-span-2">
                        <span
                          className={`px-2 py-0.5 rounded text-xs ${
                            map.rank === 1
                              ? "bg-yellow-500/20 text-yellow-300"
                              : map.rank <= 3
                                ? "bg-blue-500/20 text-blue-300"
                                : "bg-zinc-700/50 text-zinc-300"
                          }`}
                        >
                          #{map.rank}
                        </span>
                      </div>
                      <div className="col-span-2 text-zinc-400 text-sm">{map.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="mt-4">
          <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Performance Metrics</h3>

                  <div className="space-y-3">
                    <StatBar
                      icon={<Target className="h-4 w-4 text-red-500" />}
                      label="Accuracy"
                      value={playerData.stats.accuracy}
                      color="from-red-500 to-orange-500"
                    />

                    <StatBar
                      icon={<Zap className="h-4 w-4 text-yellow-500" />}
                      label="Speed"
                      value={playerData.stats.speed}
                      color="from-yellow-500 to-amber-500"
                    />

                    <StatBar
                      icon={<Users className="h-4 w-4 text-blue-500" />}
                      label="Teamwork"
                      value={playerData.stats.teamwork}
                      color="from-blue-500 to-cyan-500"
                    />

                    <StatBar
                      icon={<Heart className="h-4 w-4 text-green-500" />}
                      label="Survival"
                      value={playerData.stats.survival}
                      color="from-green-500 to-emerald-500"
                    />
                  </div>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-4 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 mx-auto text-zinc-500 mb-4" />
                    <p className="text-zinc-400">Detailed statistics charts coming soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-4">
          <Card className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Trophy className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">Achievements Coming Soon</h3>
                <p className="text-zinc-400 max-w-md mx-auto">
                  Track your progress, earn badges, and showcase your accomplishments in the upcoming achievements
                  system.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  description: string
}

function StatCard({ icon, label, value, description }: StatCardProps) {
  return (
    <div className="bg-zinc-800/50 rounded-lg p-4">
      <div className="flex items-center mb-2">
        {icon}
        <span className="text-xs text-zinc-400 ml-1.5">{label}</span>
      </div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-zinc-500 mt-1">{description}</div>
    </div>
  )
}

interface StatBarProps {
  icon: React.ReactNode
  label: string
  value: number
  color: string
}

function StatBar({ icon, label, value, color }: StatBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon}
          <span className="text-sm ml-1.5">{label}</span>
        </div>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
