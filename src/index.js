// Imports your SCSS stylesheet
// https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack

import './style.scss';
import data from './data.json'
// import '@fortawesome/fontawesome-free/js/solid' just found out I need pro :(

class Main { // Main class
    constructor() {

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