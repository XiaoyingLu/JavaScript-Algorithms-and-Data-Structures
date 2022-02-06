function uniteUnique() {
  //make an array out of the given arrays and flatten it (using the spread operator)
  let flatArray = [];
  let i = 0;
  while (arguments[i]) {
    flatArray = flatArray.concat(arguments[i]);
    i++;
  }
  // clears any duplicates
  let uniqueArray = flatArray.filter((item, pos) => {
    return flatArray.indexOf(item) == pos;
  });
  return uniqueArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));