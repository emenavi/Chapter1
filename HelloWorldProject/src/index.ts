/*class Greeter {

    greeting: string;
    
    constructor( message: string ) {
        this.greeting = message;
    }

    greet() {
        return "Hello " + this.greeting;
    }

}

let greeter = new Greeter("World");
// console.log("Hola M" + greeter);
let button = document.createElement('button');

button.textContent = "Say Hello";

button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);*/ 


/*let myObj:any = {};
let ageSym = Symbol('age');
let nameSym = Symbol('name');
myObj['age'] = 25;
myObj[ageSym] = 20;
myObj[nameSym] = 'Carlos';*/
//console.log(myObj);
// console.log(myObj);
// console.log(Object.keys(myObj));
/*for (let key in myObj) {
    console.log(key+" > "+myObj[key]);
} */
// console.log(Object.getOwnPropertyNames(myObj));
// console.log(Object.getOwnPropertySymbols(myObj));
/*for (let sym of Object.getOwnPropertySymbols(myObj)){
    console.log(sym.toString()+" > "+myObj[sym]);
}

console.log(Object.getOwnPropertySymbols(myObj)[0]===ageSym);*/


let fruits: string[] = ['Banana', "Mango", "Orange"];

/*fruits.forEach(function(fruit, index, fruits) {
    console.log("the fruit number " + index + " is " + fruit);
});*/

fruits.forEach((fruit,index)=>{
    console.log("the fruit number " + index + " is " + fruit);
});

fruits.forEach((fruit)=>{
    console.log(fruit);
})

let myregexp: RegExp = /([^,]+)/gi;
let mymatches: string[];

/*while ((mymatches = myregexp.exec(fruits)) != null {
    console.log("Found "+ mymatches[0]+ " at "+myregexp.lastIndex);
}*/

/*let newLength: number = fruits.push("Watermelon");
let newLength2: number = fruits.push("Lemmon");
console.log (newLength2);

for (let x of fruits) {
    console.log(x);
}*/

/*let lastFruit: string = fruits.pop()!;
console.log("Last fruit is: "+ lastFruit);

let firstFruit: string = fruits.shift() as string;
console.log("Fist fruit is: "+ firstFruit);*/

/*let newLenght3: number = fruits.unshift("Strawberry"); 

for (let x of fruits) {
    console.log(x);
}*/

/*let pos: number = fruits.indexOf("Mango");
console.log(pos);

let fruitsReversed: string[] = fruits.reverse();
for (let x of fruitsReversed) {
    console.log(x);
}*/

/*let fruitsSorted: string[] = fruits.sort((a,b) => {
    if (a>b) return 1;
    if (b>a) return -1;
    return 0;
});

for (let x of fruits) {
    console.log(x);
}

let fruitString: string = fruits.join(';');
console.log(fruitString);*/

/*let fruits: any[] = [["Banana", "Mango"], ["Orange", "Watermelon"]];

for (let row in fruits){
    for (let eachFruit of row){
        console.log(eachFruit);
    }
}*/