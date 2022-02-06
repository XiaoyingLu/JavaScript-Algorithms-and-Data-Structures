function checkCashRegister(price, cash, cid) {
  const currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY":20,
    "ONE HUNDRED": 100
  };
  let totalAmount = cid.reduce((sum, item) => {
    sum += item[1];
    return sum;
  }, 0);
  totalAmount = totalAmount.toFixed(2);

  let change = cash - price;
  const changeArr = [];
  if (totalAmount < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (totalAmount > change) {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (change >= currency[elem[0]] && elem[1] > 0) {
        temp[1] += currency[elem[0]];
        elem[1] -= currency[elem[0]];
        change -= currency[elem[0]];
        change = change.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArr.push(temp);
      }
    }
    
  } else {
    return {status: "CLOSED", change: cid};
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return {status: "OPEN", change: changeArr};
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);