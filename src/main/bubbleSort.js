function checkIsArray(array) {
  return Array.isArray(array);
}
function bubbleSort(arrOfNumber) {
  if (!checkIsArray(arrOfNumber)) {
    return false;
  }
  for (let i = 0; i < arrOfNumber.length; i++) {
    for (let j = 0; j < arrOfNumber.length - 1; j++) {
      if (arrOfNumber[j] > arrOfNumber[j + 1]) {
        let cloneVariable = arrOfNumber[j];
        arrOfNumber[j] = arrOfNumber[j + 1];
        arrOfNumber[j + 1] = cloneVariable;
      }
    }
  }
  return arrOfNumber;
}
console.log(bubbleSort([2, 1, 3, 4, 5, 6, 7, 8, 9, 0]));
module.exports = { bubbleSort };
