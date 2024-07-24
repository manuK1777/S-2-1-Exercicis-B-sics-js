"use strict";

//Bloc 1.6: Array loops
console.log("Bloc 1.6: Array loops");

//NIVELL 1

//Exercici 1
console.log("Exercici 1: ");

const arrayNoms = ['Anna', 'Bernat', 'Clara'];

arrayNoms.forEach(element => {console.log(element);});


//Exercici 2
console.log("Exercici 2: ");

for (const nom of arrayNoms) {
    console.log(nom);
}



//NIVELL 2

//Exercici 3
console.log("Exercici 3: ");

let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}


//Exercici 4
console.log("Exercici 4: ");

let numeros = [1, 2, 3, 4, 5, 6]; 

for (const num of numeros) {
    if (num != 5) {
        console.log(num);
    } else {
        break
    }
};


//NIVELL 3 

//Exercici 5
console.log("Exercici 5: ");

for (const [index, element] of arrayNoms.entries()) {
    console.log(`${element}, ${index}`);
  }