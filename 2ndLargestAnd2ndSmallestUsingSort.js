let newArray = new Array();
 for (let i = 0; i < 10; i++) {
     let num = Math.floor(Math.random() * 900) + 99;
     newArray.push(num);
 }

 newArray.sort();

 console.log(`\n Sorted Array Value : ${newArray}`);
 console.log("\n Second Largest Value : " + newArray[newArray.length - 2]);
 console.log("\n Second Smallest Value : " + newArray[1]);