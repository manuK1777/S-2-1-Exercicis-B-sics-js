"use strict";

//Bloc 1.2: Operador ternari
console.log("Bloc 1.2: Operador ternari");

//nivell 1

//Exercici 1
console.log("Exercici 1: ");

function potConduir (edat) {
  (edat >= 18) ? console.log("Pots conduir") : console.log("No pots conduir");
}

potConduir(12);


//Exercici 2
console.log("Exercici 2: ");

let num1 = 27;
let num2 = 34;

(num1 > num2) ? console.log("num1 és més gran") : console.log("num2 és més gran");



//NIVELL 2

//Exercici 3
console.log("Exercici 3: ");

let n = 0
let message = ""

message = (n > 0) ? "És positiu":
          (n < 0) ? "És negatiu" : "És zero";

console.log(message);


//NIVELL 3      

//Exercici 4
console.log("Exercici 4: ");
/**Operador ternari dins un bucle: Escriu una funció parOImpar 
 * que accepti un array de números i utilitzi un bucle per a recórrer
 *  l'array. Dins del bucle, utilitza l'operador ternari per a 
 * determinar si cada número és parell o imparell. */

function parOImpar (array) {

    let message = ""

    for (let i = 0; i < array.length; i++) {
    
        const element = array[i];
        message = (element % 2 == 0) ? "És parell" : "És imparell";
        console.log(message);
    }    
}

const arrayNum =  [22, 73, 45, 99, 2, 33, 432, 763, 94];
parOImpar(arrayNum);




