exports.AsciificatorCharacters = '.,:;+*?%$34#8@'.split('').reverse().join('');
exports.reduceImageSize = imgBuffer => imgBuffer.filter((_, i) => i % 4 === 0);
exports.defaultAsciificatorOptions = {
  inputFile: null,
  outputFile: null,
  imageWidth: 100,
  imageHeight: null,
  greenWeight: 0.3,
  blueWeight: 0.578,
  redWeight: 0.122,
};
