function maxProduct(numbers) {
  let maxProduct = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let product = numbers[j] * numbers[i];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
}

module.exports = { maxProduct };
