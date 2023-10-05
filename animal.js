module.exports = class {
    
    /* Exempel på hur en Konstruktor metod ser ut i Java och C#
    animal() {

    }
    */

    //Konstruktor method i JS here alltid "constructor"
    constructor(name, age, speices) {
        //Använd ALLTID this. för att anropa attribut och metoder inuti den egna klassen
        this.name = name;
        this.age = age;
        this.speices = speices;
    }

    aging() {
        this.age++;
    }

    setColor(color) {
        //Kan initera nya attribut till en klass utan att för-initiera dem först
        this.color = color;
    }

    toString() {
        console.log(`Denna ${this.speices} heter ${this.name} och är ${this.age} år gammal.`);
    }

}