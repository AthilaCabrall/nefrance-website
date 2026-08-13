import { chromium } from "playwright";
import path from "node:path";

const outDir = process.argv[2];

const shots = [
  { name: "nefrance-desktop.png", width: 1440, height: 900 },
  { name: "nefrance-mobile.png", width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const shot of shots) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 2,
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: path.join(outDir, shot.name),
    fullPage: true,
  });
  await page.close();
  console.log("saved", shot.name);
}

await browser.close();
