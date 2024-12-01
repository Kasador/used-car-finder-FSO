/* REFERENCES >>>
    1) font awesome + webpack
        a) https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack
            developer notes: // import '@fortawesome/fontawesome-free/js/solid' just found out I need pro :(
    2) webpack running JS twice 
        a) https://stackoverflow.com/questions/37081559/all-my-code-runs-twice-when-compiled-by-webpack
    3) array methods + functions
        a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        b) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        c) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
        d) https://builtin.com/software-engineering-perspectives/remove-duplicates-from-array-javascript
        e) https://www.w3schools.com/js/js_array_sort.asp#mark_reverse
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
        const findSelectElement = document.getElementById('year');

        const option = document.createElement('option');
        option.textContent = "test";
        option.setAttribute('value', 'testValue');

        console.log(option);
        console.log(findSelectElement);

        findSelectElement.append(option);
        // this.findSelectElement.document.append(option);
    }

    getYears() {
        const storeYears = []; // new array for years
        carData[0].forEach(items => { // find the years in the carData JSON (the main JSON)
            storeYears.push(items.year); // push all years to the new array made
        });

        storeYears.sort(); // sort the new years array, so they are in order and not random
        console.log(storeYears, "Years Sorted");

        const filterYears = [...new Set(storeYears)]; // make a new array, take the sorted array, filter and take out all repeated years
        console.log(filterYears, "Years Filtered");

        filterYears.reverse(); // once sorted, filtered, reverse the array so the highest year is at index value 0, not the last
        console.log(filterYears, "Years Reversed");

        this.yearArray = filterYears; // finally, store the result of years into the instance array for use
        console.log(this.yearArray, "Years Ready For Use!");
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