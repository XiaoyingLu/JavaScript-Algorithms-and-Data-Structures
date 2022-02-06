// Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));