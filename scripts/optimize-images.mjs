import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');

async function getFiles(dir) {
    let files = [];
    try {
        const dirents = await fs.readdir(dir, { withFileTypes: true });
        for (const dirent of dirents) {
            const res = path.resolve(dir, dirent.name);
            if (dirent.isDirectory()) {
                files = files.concat(await getFiles(res));
            } else {
                files.push(res);
            }
        }
    } catch (err) {
        console.error(`Error reading dir ${dir}:`, err.message);
    }
    return files;
}

async function optimizeImages() {
    console.log('Finding images in:', ASSETS_DIR);
    const allFiles = await getFiles(ASSETS_DIR);
    const imageFiles = allFiles.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

    console.log(`Found ${imageFiles.length} images.`);

    let totalSaved = 0;
    let optimizedCount = 0;

    for (const file of imageFiles) {
        try {
            const originalBuffer = await fs.readFile(file);
            const ext = path.extname(file).toLowerCase();
            let pipeline = sharp(originalBuffer);

            if (ext === '.jpg' || ext === '.jpeg') {
                pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
            } else if (ext === '.png') {
                // Use palette: true for significant reduction with minimal quality loss (quantization)
                pipeline = pipeline.png({ quality: 80, palette: true, compressionLevel: 9 });
            } else if (ext === '.webp') {
                pipeline = pipeline.webp({ quality: 80 });
            }

            const newBuffer = await pipeline.toBuffer();

            if (newBuffer.length < originalBuffer.length) {
                const saved = originalBuffer.length - newBuffer.length;
                await fs.writeFile(file, newBuffer);
                totalSaved += saved;
                optimizedCount++;
                console.log(`Optimized: ${path.relative(ROOT_DIR, file)} (-${(saved / 1024).toFixed(2)} KB)`);
            }
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    }

    console.log('--------------------------------------------------');
    console.log(`Optimization complete.`);
    console.log(`Optimized ${optimizedCount} images.`);
    console.log(`Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages().catch(console.error);
