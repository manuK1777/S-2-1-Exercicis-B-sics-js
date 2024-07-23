"use strict";

//Bloc 1.4: Rest & Spread operators
console.log("Bloc 1.4: Rest & Spread operators");

//NIVELL 1

//Exercici 1
console.log("Exercici 1: ");

 const array1 = [1, 2, 3, 4];
 const array2 = [5, 6, 7, 8];

 const arrayComb = [...array1, ...array2];

 console.log(arrayComb);



 //Exercici 2
 console.log("Exercici 2: ");

 function suma (...numeros) {
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
 }

 console.log(suma(22, 45, 743, 2));



 //NIVELL 2 

 //Exercici 3
 console.log("Exercici 3: ");

  const objecte1 = {item: 'Pelota', deporte: 'Fútbol'};
  const objecte2 = {... objecte1}

  objecte2.deporte = "Tenis";

  console.log(objecte1);
  console.log(objecte2);



  //Exercici 4 
  console.log("Exercici 4: ");

const arrayEstudio = ["violín", "contrabajo", "timpani", "platillos", "gong"];
const [cuerda1, cuerda2, ...percusion] = arrayEstudio;

console.log(cuerda1, cuerda2, percusion);



//NIVELL 3

//Exercici 5
console.log("Exercici 5: ");

function muestraPlanetas (arg1, arg2, arg3) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
} 

const arrayX = ["mercurio", "venus", "tierra"];

muestraPlanetas(...arrayX);





//Exercici 6
console.log("Exercici 6");

const contrabajo = {nom: "contrabajo", altura: 180, numCuerdas: 4, marca: "Rubner"};
const contrCollect = {anyo: 1756, mantenidoPor: "Josep", precio: 45000}
const datosContr = { ...contrabajo, ...contrCollect} ;

console.log(datosContr);



