function popTest(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    arr.pop();
  }

  return arr;
}

let arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
];

console.time(`restponse time request ${popTest(arr)}`);
console.log(popTest(arr));
console.timeEnd(`restponse time request ${popTest(arr)}`);

// time complexity of O(1)
