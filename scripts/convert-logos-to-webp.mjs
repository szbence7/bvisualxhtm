import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, "../src/assets");
const logoFiles = ["rtllogo.jpeg", "tv2logo.jpeg", "aitlogo.png", "amtslogo.jpeg", "oxygenlogo.png"];
const outputSize = 120; // kisebb méret a sorban való megjelenítéshez

for (const file of logoFiles) {
  const inputPath = join(assetsDir, file);
  const baseName = file.replace(/\.[^.]+$/, "");
  const outputPath = join(assetsDir, `${baseName}.webp`);

  try {
    await sharp(inputPath)
      .resize(outputSize, outputSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`✓ ${file} → ${baseName}.webp (${outputSize}x${outputSize})`);
  } catch (err) {
    console.error(`✗ ${file}:`, err.message);
  }
}
