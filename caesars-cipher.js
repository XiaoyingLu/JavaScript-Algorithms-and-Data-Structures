function rot13(str) {
   return str.replace(/[A-Z]/gi, c =>
  "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c) ] )
}

console.log(rot13("SERR PBQR PNZC"));