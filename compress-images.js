import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'src/assets';

async function compressImage(filename, maxWidth, quality) {
  const filePath = path.join(assetsDir, filename);
  
  console.log(`Compressing ${filename}...`);
  try {
    const buffer = fs.readFileSync(filePath);
    let pipeline = sharp(buffer);
    const metadata = await pipeline.metadata();
    
    // Only resize if the width is larger than maxWidth
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, fit: 'inside', withoutEnlargement: true });
    }
    
    if (filename.endsWith('.webp')) {
      pipeline = pipeline.webp({ quality });
    } else if (filename.endsWith('.png')) {
      pipeline = pipeline.png({ quality, compressionLevel: 9 });
    }
    
    await pipeline.toFile(filePath);
    
    const newStats = fs.statSync(filePath);
    console.log(`Finished ${filename}: ${(newStats.size / 1024).toFixed(2)} KB`);
  } catch (err) {
    console.error(`Error compressing ${filename}:`, err);
  }
}

async function run() {
  await compressImage('room1.webp', 1920, 75);
  await compressImage('room2.webp', 1920, 75);
  await compressImage('room3.webp', 1920, 75);
  await compressImage('room4.webp', 1920, 75);
  await compressImage('room5.webp', 1920, 75);
  await compressImage('outlook.webp', 1920, 75);
  console.log('Done!');
}

run();
