let newArray = [];
  for (let i = increment; i <= 100 * increment; i += increment) {
    startTime = Date.now();
    newArray.push(addNums(i));
    endTime = Date.now();
    console.log(`${endTime - startTime}`);
  }
  return newArray;
  // }
}
