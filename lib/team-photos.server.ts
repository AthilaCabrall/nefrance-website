import fs from "node:fs";
import path from "node:path";

const TEAM_PHOTOS_DIR = path.join(process.cwd(), "public", "team");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/**
 * Reads /public/team/{slug}/ and returns every image found there as a URL.
 * Drop a file in that folder and it shows up here on the next page load,
 * no code change needed.
 */
export function getTeamPhotos(slug: string): string[] {
  const dir = path.join(TEAM_PHOTOS_DIR, slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => `/team/${slug}/${file}`);
  } catch {
    return [];
  }
}
