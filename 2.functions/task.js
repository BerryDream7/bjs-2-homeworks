function getArrayParams(...arr) {
  
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = (sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: +avg };
}

console.log(getArrayParams(-158, 256, 5));  //(-158, 256, 34.33)
console.log(getArrayParams(32, 6, -60, 135));  //(-60, 135, 28.25)
console.log(getArrayParams(33));  //(33, 33, 33)


function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) return 0;

  return (sumEvenElement / countEvenElement);

}

console.log(summElementsWorker());  // 0
console.log(summElementsWorker(32, 63, 25, 10));  // 130

console.log(differenceMaxMinWorker());  // 0
console.log(differenceMaxMinWorker(32, 63, 25, 10));  // 53

console.log(differenceEvenOddWorker(62, 10, 75, 99, 15, 23, 46, 94, 32, 10));  // 42
console.log(differenceEvenOddWorker(4, 49, 51, 35, 50, 62, 55, 12, 38, 15));  // -39

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));  // 5,00
console.log(averageEvenElementsWorker(63, 10, 75, 99, 15, 23, 38, 94, 40, 21));  // 45,50

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

const arr = [[32, 63, 25, 10], [52, 22, 14, 29, 95], [82, 75, 41, 86, 45], [23, 65, 48, 90, 62]];

console.log(makeWork(arr, summElementsWorker)); // 329
console.log(makeWork(arr, differenceMaxMinWorker));  // 81
console.log(makeWork(arr, differenceEvenOddWorker));  // 112
console.log(makeWork(arr, averageEvenElementsWorker));  // 84,00