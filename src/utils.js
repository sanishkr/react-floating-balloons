function randomColor(colors) {
  return colors[random(0, colors.length)];
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export {
  random,
  randomColor,
}