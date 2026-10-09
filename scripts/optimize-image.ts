import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

// Downscale Master Images To Web Standards (1920x1080)
function optimizeImage(targetPath: string, targetWidth = 1920, targetHeight = 1080, quality = 85) {
  const fullPath = resolve(process.cwd(), targetPath);

  if (!existsSync(fullPath)) {
    console.error(`Error: File not found at ${fullPath}`);
    process.exit(1);
  }

  console.log(`Optimizing ${fullPath} to ${targetWidth}x${targetHeight} (q=${quality})...`);

  const tempPath = `/tmp/opt-${Date.now()}.webp`;

  try {
    execSync(`cwebp -resize ${targetWidth} ${targetHeight} -q ${quality} "${fullPath}" -o "${tempPath}"`, {
      stdio: "inherit",
    });

    execSync(`mv "${tempPath}" "${fullPath}"`);
    console.log(`Successfully downscaled and optimized ${fullPath}`);
  } catch (error) {
    console.error("Failed to optimize image with cwebp:", error);
    process.exit(1);
  }
}

const target = process.argv[2];
if (!target) {
  console.log("Usage: pnpm tsx scripts/optimize-image.ts <path-to-image> [width] [height] [quality]");
  process.exit(0);
}

const width = process.argv[3] ? Number.parseInt(process.argv[3], 10) : 1920;
const height = process.argv[4] ? Number.parseInt(process.argv[4], 10) : 1080;
const q = process.argv[5] ? Number.parseInt(process.argv[5], 10) : 85;

optimizeImage(target, width, height, q);
