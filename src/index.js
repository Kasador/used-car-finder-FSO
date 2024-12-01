/* REFERENCES >>>
    1) font awesome + webpack
        a) https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack
            developer notes: // import '@fortawesome/fontawesome-free/js/solid' just found out I need pro :(
    2) webpack running JS twice 
        a) https://stackoverflow.com/questions/37081559/all-my-code-runs-twice-when-compiled-by-webpack
    3) sorting + array methods and functions
        a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

import './style.scss';
import data from './data.json'

const carData = new Array(data);

console.log(carData, 'The car data');
console.log(carData[0].length, 'The car data');

class Main { // Main class
    constructor() {
        this.yearArray = [];
        this.makeArray = [];
        this.moduleArray = [];

        this.setInit = false; // start app and use state management
        this.init();
    }

    init() { // start the application
        this.setInit = true;
        console.log('Application successfully started:', this.setInit);
        // this.buildDOM();
        this.getYears();
    }

    buildDOM() { // build the DOM elements needed for backend appending data from JSON
        const option = document.createElement('option');
        option.textContent = "test";
        option.setAttribute('value', 'testValue');

        const findSelectElement = document.getElementById('year');

        console.log(option);
        console.log(findSelectElement);

        findSelectElement.append(option);
        // this.findSelectElement.document.append(option);
    }

    getYears() {
        const storeYears = [];

        carData[0].forEach(items => {
            storeYears.push(items.year);
        });

        console.log(storeYears, "the years");
    }

    getMakes() {
        
    }

    getModels() {
        
    }
}

class Year { // Main class
    constructor(year) {
        this.year = year;
    }

    getYear() {

    }
}

class Make extends Year { // Main class
    constructor(year, make) {
        super(year);
        this.make = make
    }

    getMake() {
        console.log("Year");
        // carData[0].forEach(year => {
        //     console.log(year, "the years");
        // })
    }
}

class Model extends Make { // Main class
    constructor(year, make, model) {
        super(year, make);
        this.model = model;
    }

    getModel() {
        console.log("Made");
        // carData[0].forEach(year => {
        //     console.log(year, "the years");
        // })
    }
}

class Car extends Model { // Main class
    constructor(year, make, model) {
        super(year, make, model);
    }

    displaySelectedCar() {
        console.log(`The year is ${this.year} and the make is ${this.make} and finally the model is ${this.model}.`)
        // carData[0].forEach(year => {
        //     console.log(year, "the years");
        // })
    }
}

const main = new Main();

const car = new Car(2018, 'BMW', "Model");

console.log(car.displaySelectedCar());