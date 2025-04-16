import { create } from "zustand";
import { getReleases, IGithubRelease } from "@/lib/github";

import { format } from "date-fns";

interface IChangelogStore {
  releases: IGithubRelease[];
  fetchReleases: () => Promise<IGithubRelease[]>;
  lastReleaseInfo: () => Promise<IClientInfo>;
  formatedChangelog: () => Promise<ChangelogEntry[]>;
  _fetchPromise?: Promise<IGithubRelease[]>;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: {
    type: string;
    description: string;
  }[];
}

export interface IClientInfo {
  version: string;
  date: string;
}

const getAttachment = (line: string) => {
  if (line.includes("IMPROVEMENT: ")) {
    return {
      type: "improvement",
      description: line.replace("IMPROVEMENT: ", ""),
    };
  } else if (line.includes("FIX: ")) {
    return {
      type: "fix",
      description: line.replace("FIX: ", ""),
    };
  } else if (line.includes("FEATURE: ")) {
    return {
      type: "feature",
      description: line.replace("FEATURE: ", ""),
    };
  } else if (line.includes("DDNET_VERSION: ")) {
    return {
      type: "ddnet_version",
      description: line.replace("DDNET_VERSION: ", ""),
    };
  }
};

export const useChangelogStore = create<IChangelogStore>((set, get) => ({
  releases: [],
  _fetchPromise: undefined,

  fetchReleases: async () => {
    const { releases, _fetchPromise } = get();

    if (releases.length > 0) return releases;
    if (_fetchPromise) return _fetchPromise;

    const promise = getReleases().then((fetched) => {
      set({ releases: fetched, _fetchPromise: undefined });
      return fetched;
    });

    set({ _fetchPromise: promise });
    return promise;
  },
  lastReleaseInfo: async () => {
    const releases = await get().fetchReleases();
    const release = releases[0];

    return {
      version: release.tag_name || "unknown",
      date: format(new Date(release.created_at), "dd MMMM, yyyy") || "",
    };
  },
  formatedChangelog: async () => {
    const releases = await get().fetchReleases();

    return releases.map((release: IGithubRelease) => {
      const date = format(new Date(release.created_at), "dd MMMM, yyyy") || "";
      const version = release.tag_name || "unknown";
      const changes =
        release.body?.split("\n").map(getAttachment).filter(Boolean) || [];

      return {
        version,
        date,
        changes,
      };
    }) as ChangelogEntry[];
  },
}));
