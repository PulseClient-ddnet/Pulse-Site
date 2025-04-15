import { Calendar, GitCommit, GitPullRequest, Bug, Zap, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample changelog data
const changelogEntries = [
  {
    version: "2.3.1",
    date: "April 10, 2023",
    changes: [
      { type: "fix", description: "Fixed crash when connecting to servers with custom assets" },
      { type: "fix", description: "Resolved UI scaling issues on high DPI displays" },
      { type: "improvement", description: "Improved loading times for large maps" },
    ],
  },
  {
    version: "2.3.0",
    date: "March 25, 2023",
    changes: [
      { type: "feature", description: "Added advanced skin editor with layer support" },
      { type: "feature", description: "New performance monitoring tools" },
      { type: "improvement", description: "Enhanced netcode for better responsiveness" },
      { type: "improvement", description: "Updated UI with new dark theme" },
      { type: "fix", description: "Fixed memory leak in the renderer" },
    ],
  },
  {
    version: "2.2.5",
    date: "February 12, 2023",
    changes: [
      { type: "fix", description: "Fixed compatibility issues with latest DDNet update" },
      { type: "improvement", description: "Optimized texture loading for faster startup" },
      { type: "fix", description: "Resolved friend list synchronization issues" },
    ],
  },
]

export function ChangelogSection() {
  return (
    <section id="changelog" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Changelog</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Stay up to date with the latest improvements and fixes</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {changelogEntries.map((entry, index) => (
            <Card key={index} className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-purple-500" />
                    <span>Version {entry.version}</span>
                  </div>
                  <div className="flex items-center text-sm text-zinc-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {entry.date}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 pt-2">
                  {entry.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {change.type === "feature" ? (
                          <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30 border-0">
                            <Zap className="h-3 w-3 mr-1" />
                            Feature
                          </Badge>
                        ) : change.type === "improvement" ? (
                          <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-0">
                            <GitPullRequest className="h-3 w-3 mr-1" />
                            Improvement
                          </Badge>
                        ) : (
                          <Badge className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 border-0">
                            <Bug className="h-3 w-3 mr-1" />
                            Fix
                          </Badge>
                        )}
                      </div>
                      <div className="text-zinc-300">{change.description}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <div className="text-center pt-4">
            <a href="#" className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center">
              <GitCommit className="h-4 w-4 mr-1" />
              View full changelog on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
