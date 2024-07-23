"use strict";

//Bloc 1.5: Array transformations
console.log("Bloc 1.5: Array transformations");

//NIVELL 1

//Exercici 1
console.log("Exercici 1: ");

const arrayNum = [1, 2, 3, 4];

const arrayNumQuad = arrayNum.map(x => x * x);

console.log(arrayNumQuad);


//Exercici 2
console.log("Exercici 2: ");

const parells = arrayNum.filter(x => x % 2 == 0);

console.log(parells);


//Exercici 3 
console.log("Exercici 3");

const arrayN = [1, 10, 8, 11];

const numMayDeu = arrayN.find(x => x > 10);

console.log(numMayDeu);


//Exercici 4
console.log("Exercici 4: ");

const arrNum = [13, 7, 8, 21];

const sum = arrNum.reduce((acc, x) => acc + x, 0);

console.log(sum);


//NIVELL 2

//Exercici 5
console.log("Exercici 5: ");

const arrNros = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const result = arrNros.filter(x => x >= 10).map(x => x * 2).reduce((acc, x) => acc + x, 0);

console.log(result);


//NIVELL 3

//Exercici 6
console.log("Exercici 6: ");

const arrayNumbers = [11, 12, 13, 14];

const every = arrayNumbers.every(x => x > 10);
const some = arrayNumbers.some(x => x > 10);

console.log(`¿Tots els elements són majors que 10? ${every}`);
console.log(`¿Algun element és major que 10? ${some}`);


