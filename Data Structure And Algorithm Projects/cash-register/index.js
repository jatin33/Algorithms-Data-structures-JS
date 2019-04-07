function checkCashRegister(price, cash, cid) {

    const cashRegister = {
        status: '',
        change: []
    }

    let amtDue = cash - price;
    let i = -1;
    Object.keys(currencyUnitValue).forEach((unit) => {
        if (amtDue > currencyUnitValue[unit]) {
            i++;
        }
    });
    let totalCash = 0;
    let j = i;
    while (j >= 0) {
        totalCash += cid[j][1];
        j--;
    }

    if (totalCash === amtDue) {
        cashRegister.status = 'CLOSED',
            cashRegister.change = cid
        return cashRegister;
    } else if (totalCash < amtDue) {
        cashRegister.status = 'INSUFFICIENT_FUNDS'
        return cashRegister;
    } else {
        while (i >= 0) {
            if (cid[i][1] < amtDue) {
                amtDue = Number((amtDue - cid[i][1]).toFixed(2));
                cashRegister.change.push([cid[i][0], cid[i][1]]);
            } else {
                let noOfCoinsReq = Math.floor(amtDue / currencyUnitValue[cid[i][0]]);
                let valueToDeductFromAmtDue = noOfCoinsReq * currencyUnitValue[cid[i][0]];
                if (valueToDeductFromAmtDue) {
                    cashRegister.change.push([cid[i][0], valueToDeductFromAmtDue]);
                }
                amtDue = Number((amtDue - valueToDeductFromAmtDue).toFixed(2));
            }
            cashRegister.status = 'OPEN';
            i--;
        }
        return cashRegister;
        // Here is your change, ma'am.
    }
}


const currencyUnitValue = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);