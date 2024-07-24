"use strict";

//Bloc 1.7: Promises & Async/Await

//NIVELL 1

// //Exercici 1
console.log("Exercici 1: ");

const promesaSaludo = new Promise((resolve) => {
    setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

//Exercici 2
console.log("Exercici 2: ");

promesaSaludo.then((saludo) => {
  console.log(saludo);
});

//COMENTAR EJERCICIOS 1 Y 2. DESCOMENTAR EJERCICIO 3 PARA SEGUIR

//Exercici 3
// console.log("Exercici 3: ");

// const promesa = new Promise((resolve, reject) => {
//   let input = "";
//   input = "hola";

//   setTimeout(() => {
//     if (input == "hola") {
//       resolve(`Resuelto`);
//     } else {
//       reject(`Rechazado`);
//     }
//   }, 2000);
// });

// promesa
//   .then((estado) => {
//     console.log(estado);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//COMENTAR EJERCICIO 3 y DESCOMENTAR EJERCICIO 4 PARA SEGUIR

//Exercici 4
// console.log("Exercici 4: ");

// //Promise Exercici 1
// const promesaSaludo = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hola, món");
//   }, 2000);
// });

// async function capturarSaludo() {
//   const salut = await promesaSaludo;
//   console.log(salut);
// }

// capturarSaludo();


//COMENTAR EL EJERCICIO 4 Y DESCOMENTAR EL 5 PARA SEGUIR

//NIVELL 2

//Exercici 5
// console.log("Exercici 5: ");

// ////Promise Exercici 1
// const promesaSaludo = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hola, món");
//     }, 2000);
//   });

// async function capturarSaludo() {
//     try {
//         const salut = await promesaSaludo;
//         console.log(salut);
//     } catch (error) {
//         console.error('Error al obtener los datos:', error);
//  }
// };

//   capturarSaludo();


//COMENTAR EL EJERCICIO 5 Y DESCOMENTAR EL 6 PARA SEGUIR


//NIVELL 3

//Exercici 6:
// console.log("Exercici 6: ");

// const promiseSaludo1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, `Hola`)
// );
// const promiseSaludo2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 3000, `Chau`)
// );

// Promise.all([promiseSaludo1, promiseSaludo2])
//   .then((values) => {
//     values.forEach(element => { console.log(element) });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
