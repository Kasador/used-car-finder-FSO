// Imports your SCSS stylesheet
// https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack
// https://stackoverflow.com/questions/37081559/all-my-code-runs-twice-when-compiled-by-webpack

import './style.scss';
import data from './data.json'
// import '@fortawesome/fontawesome-free/js/solid' just found out I need pro :(

const carData = new Array(data);

console.log(carData, 'The car data');

class Main { // Main class
    constructor() {
        this.setInit = false; // start app and use state management
        this.init();
        this.buildDOM();
    }

    init() { // start the application
        this.setInit = true;
        console.log('Application successfully started:', this.setInit);
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
}

class Car { // Main class
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
    }
}

class Year extends Car { // Main class
    constructor(year, make, model) {
        super(year);
        this.make = make
    }
}

class Make extends Car { // Main class
    constructor() {

    }
}

class Model extends Car { // Main class
    constructor() {

    }
}

const main = new Main();
