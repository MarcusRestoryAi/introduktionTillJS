//Importerar klass från filen animal.js
const animal = require("./animal.js");

//Skapar ett objekt av klassen
const myNewPet = new animal("Snoddas", 12, "Cat");

console.log(myNewPet.toString());