let origDogs = ["Bulldog","Beagle","Labrador"];
let cats = new Array("Americal Curl","Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

//Array Copy elments

let SliceDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//statck functions LIFO push and pop
let pushDog = dogs.push("GoldenRetriever");
let popDog  = dogs.pop();
dogs[dogs.length]="poodle";


//Add and remove from the list

let addFirst = dogs.unshift("Golder Retriever");
let shiftDog = dogs.shift();

//atomic add or remove elements
dogs.splice(2,1,"pug","Boxer");

//array function concat,slice and sort
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs,...cats,...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([fisrt,second]){console.log("scan:"+ fisrt +""+second); }
scanArray(animals);


let joinAnimals = animals.join(" ");
let AlAnimals = "" ;
for (let animal  of animals ) AlAnimals += animal + "";

console.log("Animals:" + AlAnimals);

