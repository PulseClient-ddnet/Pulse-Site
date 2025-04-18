"use client";

import {
  Calendar,
  GitCommit,
  GitPullRequest,
  Bug,
  Zap,
  Package,
  GitMerge,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useEffect, useState } from "react";
import { ChangelogEntry, useChangelogStore } from "@/store/changelog-store";
import Link from "next/link";

export function ChangelogSection() {
  const [changelog, setChangelog] = useState<ChangelogEntry[]>([]);
  const { formatedChangelog } = useChangelogStore();

  useEffect(() => {
    formatedChangelog().then(setChangelog);
  }, []);

  return (
    <section id="changelog" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Changelog</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Stay up to date with the latest improvements and fixes
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {changelog.map((entry, index) => (
            <Card
              key={index}
              className="border-zinc-800 bg-zinc-900/60 backdrop-blur-sm"
            >
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
                        ) : change.type === "fix" ? (
                          <Badge className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 border-0">
                            <Bug className="h-3 w-3 mr-1" />
                            Fix
                          </Badge>
                        ) : (
                          change.type === "ddnet_version" && (
                            <Badge className="bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 border-0">
                              <GitMerge className="h-3 w-3 mr-1" />
                              DDNet Version
                            </Badge>
                          )
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
            <Link
              href="https://github.com/StormAxs/DDNetPulse/releases"
              target="_blank"
              className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center"
            >
              <GitCommit className="h-4 w-4 mr-1" />
              View full changelog on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
