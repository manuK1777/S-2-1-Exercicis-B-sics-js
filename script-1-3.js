"use strict";

//Bloc 1.3: Callbacks
console.log("Bloc 1.3: Callbacks");


//NIVELL 1

//Exercici 1
console.log("Exercici 1: ");

function print(some) {
  console.log(some);
}

function procesar(n, callback) {
  let message = `És el nombre: ${n}`;
  print(message);
}

procesar(237, print);



//Exercici 2
console.log("Exercici 2:");

function suma(num1, num2) {
  return num1 + num2;
}

function calculadora(num1, num2, callback) {
  return callback(num1, num2);
}

const result = calculadora(23, 12, suma);
console.log(result);



//NIVELL 2

//Exercici 3
console.log("Exercici 3");

function esperarISaludar (nom, myCallback) {

  setTimeout(myCallback, 2000, nom);
}

function mostrarSaludo (nom) {
  console.log(`Hola! Soy ${nom}`);
}

esperarISaludar("Pep", mostrarSaludo);



// SE DEBE COMENTAR EL EJERCICIO 3 PARA SEGUIR CON LA REVISIÓN



//Exercici 4

// DESCOMENTAR PARA SEGUIR

// console.log("Exercici 4: ");

// const arrayItems = ["lápiz", "goma", "sacapuntas", "cuaderno", "bolígrafo"];

// function processarElements(array, miCallback) {
//   array.forEach((item) => miCallback(item));
// }

// function printItems(item) {
//   console.log(item);
// }

// processarElements(arrayItems, printItems);




// //NIVELL 3

// //Exercici 5
// console.log("Exercici 5: ");

// function processarCadena(cadena, miiCallback) {
//   const cadenaMay = cadena.toUpperCase();
//   miiCallback(cadenaMay);
// }

// function imprimeCadenaMay (cadena) {
//   console.log(cadena);
// }

// processarCadena("hddjslasdst", imprimeCadenaMay);
