//Init array
let colors = ["Green", "Yellow", "Blue"];
//Använder push för att mata in ett nytt värde
colors.push("Red");

console.log(colors[0]);

let summa = 0;

let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((value) => {
    summa += value;
})

console.log(`Summan av aarrayen är ${summa}`);

let tal1 = 5;
let tal2 = "7";

console.log(tal1 + tal2);
//Detta ger output 57, då + teknet ses som en Concat funktion när en sträng är involverad