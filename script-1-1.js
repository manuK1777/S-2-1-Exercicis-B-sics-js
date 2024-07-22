"use strict";

//Bloc 1.1: Arrow functions
console.log("Bloc 1.1: Arrow functions");


//NIVELL 1

//Exercici 1
const add = (a, b) => a + b;
console.log(`Exerci 1: ${add(25, 22)}`);

//Exercici 2
const randomNumber = () => Math.floor(Math.random() * 101);
console.log(`Exercici 2: ${randomNumber()}`);

//Exercici 3
class Person {
  constructor(name) {
    this.name = name;
  }

  greet = (name) => console.log(`Hola, ${this.name}.`);
}

const person = new Person("Joan");
console.log("Exercici 3: ");
person.greet();


//NIVELL 2

//Exercici 4

function printNumbers(array) {

  const imprimir = n => console.log(n);

  for (let i = 0; i < array.length; i++) {
    imprimir(array[i]);
  }
}

const arrayNum = [100, 22, 35, 14, 57, 6, 74, 38, 29, 10];
console.log("Exercici 4: ");
printNumbers(arrayNum);



//NIVELL 3

//Exercici 5
console.log("Exercici 5: ");
const delayedMessage = message => {
    const print = () => console.log(message);
    setTimeout(print, 3000, message);
}

delayedMessage("soy un mensaje después de 3 segundos");


