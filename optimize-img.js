const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

let filePath = "*.{png,jpg,jpeg}";
if (process.argv.length > 2) filePath = process.argv[2] + filePath;

const matches = glob.sync(filePath);
const MAX_WIDTH = 1392 * 2;
const QUALITY = 80;

console.log(`optimizing files at ${filePath}`);
// console.log(`matches: ${matches}`);

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    const info = await stream.metadata();

    if (info.width < MAX_WIDTH) {
      return;
    }

    console.log(`optimizing ${match}...`);

    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `-optimized${ext}`
    );

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    return stream;
    // return fs.rename(optimizedName, match);
  })
);
