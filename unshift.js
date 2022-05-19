function unshiftTest(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.unshift(i);
  }

  return arr;
}

let arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 18, 23, 1, 2, 3, 0.158, 1, 2, 3, 9, 10,
  11, 18, 23, 1, 2, 3, 9, 10,
];

console.time(`response time request ${unshiftTest(arr)}`);
unshiftTest(arr);
console.timeEnd(`response time request ${unshiftTest(arr)}`);

// time complexity of O(1)
