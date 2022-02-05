function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

function findLongestWordLength2(s) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");