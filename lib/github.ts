const GITHUB_API_URL =
  "https://api.github.com/repos/StormAxs/DDNetPulse/releases";
const MAX_RELEASES = 5;

export interface IGithubRelease {
  id: number;
  tag_name: string;
  created_at: string;
  name: string;
  body: string;
}

export async function getReleases(): Promise<IGithubRelease[]> {
  const releases: Promise<IGithubRelease[]> = fetch(GITHUB_API_URL).then(
    (res) => res.json() as Promise<IGithubRelease[]>,
  );

  return (await releases).slice(0, MAX_RELEASES);
}
