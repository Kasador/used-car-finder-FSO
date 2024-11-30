// Imports your SCSS stylesheet
import './style.scss';

import data from './data.json'

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