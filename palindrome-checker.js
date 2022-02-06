function palindrome(str) {
  let s = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  for(let i = 0; i < s.length/2; i++) {
    if (s[i] != s[s.length-i-1]) {
      return false;
    }
  }
  return true;
}

palindrome("A man, a plan, a canal. Panama");