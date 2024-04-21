const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

let target = path.resolve(__dirname, 'src/public/images/heros');
let destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 1080px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(1080)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -medium.jpg
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });

target = path.resolve(__dirname, 'src/public/images/logos');
destination = path.resolve(__dirname, 'dist/images/logos');
fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 144px, dengan prefix -large.png
    sharp(`${target}/${image}`)
      .resize(144)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.png`,
      ));

    // mengubah ukuran gambar dengan lebar 72px, dengan prefix -small.png
    sharp(`${target}/${image}`)
      .resize(72)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.png`,
      ));
  });
