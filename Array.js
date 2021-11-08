let array = [];
for (let i = 100; i > 0; i--) {
    if (i % 11 == 0) {
      array.push(i);
    }
  }
  console.log(...array);