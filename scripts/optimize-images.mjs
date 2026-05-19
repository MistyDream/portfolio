import sharp from 'sharp';

await sharp('public/moi_cartoon.png')
  .resize({ width: 640, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile('public/moi_cartoon.webp');
