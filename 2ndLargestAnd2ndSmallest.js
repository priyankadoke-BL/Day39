let newArray = new Array();
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 99;
    newArray.push(num);
}


function findSecondLargest() {
    let max = Math.max.apply(null, newArray);
    newArray.splice(newArray.indexOf(max), 1);
    return Math.max.apply(null, newArray);
}

console.log(newArray);

let secondLargestValue = findSecondLargest();
console.log("\nSecond Largest value : " + secondLargestValue);

function findSecondSmallest() {
    let min = Math.min.apply(null, newArray)
    newArray.splice(newArray.indexOf(min), 1);
    return Math.min.apply(null, newArray);
}

let secondSmallestValue = findSecondSmallest();
console.log("\nSecond Smallest value : " + secondSmallestValue);