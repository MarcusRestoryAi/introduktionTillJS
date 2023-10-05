//Deklarera en klass
class animal {
    /*
    void animal() {

    }
    */

    //Konstruktor method
    constructor(name, age, speices) {
        this.name = name;
        this.age = age;
        this.speices = speices;
    }

    aging() {
        this.age++;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        console.log(`Denna ${this.speices} heter ${this.name} och är ${this.age} år gammal.`);
    }

}

//deklarerar ett object av animal
const myCat = new animal("Elvis", 16, "Cat");
const myDog = new animal("Belman", 11, "Dog");

console.log(myCat.age);
myCat.aging();
myCat.toString();
myDog.toString();

// Array för Object hantering
const myAnimals = [];
myAnimals.push(myCat, myDog);
myAnimals.push( new animal("Gördis", 5, "Cat"));

//Alla djur åldras och skriver ut sin data
myAnimals.forEach((animal) => {
    animal.aging();
    animal.toString();
})

//samma object har flera refs
myCat.age = 99;
console.log(myAnimals[0].age);

console.log(myCat.color);
myCat.setColor("White");
console.log(myCat.color);