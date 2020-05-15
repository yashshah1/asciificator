const Jimp = require('jimp');
const AsciificatorUtils = require('./utils');
const fs = require('fs');
// https://stackoverflow.com/a/286162/11362183
function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
}

module.exports = options => {
  clean(options);
  options = Object.assign(
    AsciificatorUtils.defaultAsciificatorOptions,
    options,
  );
  let {
    inputFile,
    outputFile,
    imageWidth,
    imageHeight,
    greenWeight,
    blueWeight,
    redWeight,
  } = options;
  if (!inputFile) throw 'Input File Needed';
  imageWidth = imageWidth || Jimp.AUTO;
  imageHeight = imageHeight || Jimp.AUTO;

  Jimp.read(inputFile)
    .then(img => {
      img = img
        .resize(imageWidth, imageHeight)
        .scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
          let value =
            redWeight * this.bitmap.data[idx] +
            greenWeight * this.bitmap.data[idx + 1] +
            blueWeight * this.bitmap.data[idx + 2];
          value = value > 255 ? 255 : value;
          this.bitmap.data[idx] = Math.floor(value);
        });
      img = AsciificatorUtils.reduceImageSize([...img.bitmap.data])
        .map(
          e =>
            AsciificatorUtils.AsciificatorCharacters[
              Math.floor(
                e /
                  Math.ceil(
                    255 / AsciificatorUtils.AsciificatorCharacters.length,
                  ),
              )
            ],
        )
        .join('');
      let newImage = [];
      for (let i = 0; i < img.length; i += imageWidth)
        newImage.push(img.slice(i, i + imageWidth));
      newImage = newImage.join('\n');
      if (outputFile)
        fs.writeFile(
          outputFile,
          newImage,
          err => err && console.log('Error writing to file'),
        );
      else console.log(newImage);
    })
    .catch(e => console.log(e));
};
