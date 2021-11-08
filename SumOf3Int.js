const newarray = [];
newarray.push(2);
newarray.push(3);
newarray.push(-4);
let sum = 0;
for (let i = 0; i <= newarray.length - 1; i++) {
  sum = sum + newarray.indexOf(i);
}
console.log(sum);