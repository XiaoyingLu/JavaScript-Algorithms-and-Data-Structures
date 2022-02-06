function telephoneCheck(str) {
  const numRex = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;
    return numRex.test(str);
}

telephoneCheck("555-555-5555");