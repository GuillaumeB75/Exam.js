function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(average([12, 40, 16, 20]));