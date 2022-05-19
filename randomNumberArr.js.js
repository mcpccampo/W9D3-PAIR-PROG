// JS Arrays Big-O
function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));
    startTime = Date.now();
    res.push(randomNumber);
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }

  return res;
}

console.log(randomNumberArr(100));
// time complexity   O(1)
// space complexity  O(1)
