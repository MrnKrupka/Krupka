//1st async func
async function orderPrice() {
  let price = 12;
  let tip = 6;
  let tax = 1;
  return price + tip + tax;
}

orderPrice().then((bill) => {
  console.log(`Your bill is ${bill}$`);
});

//2nd async func
async function calcBanquet() {
  let basicBill = 40;
  let guestList = 13;
  return { banquetBillStandart: basicBill * guestList, guestList };
}

calcBanquet().then(({ banquetBillStandart, guestList }) => {
  let banquetCostCoefficient = 1.1;
  console.log(
    `The cost of for ${guestList} guests banquet on a weekday is ` +
      banquetBillStandart * banquetCostCoefficient +
      `$`
  );
});

//3rd async func
async function order() {
  return ["Tomato soup", "Bread"];
}

order()
  .then((list) => {
    console.log(list);
    return list;
  })
  .then((preOrder) => {
    preOrder.push("Tea");
    console.log(preOrder);
  });
