/* REFERENCES >>>
    1) font awesome + webpack
        a) https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack
            developer notes: // import '@fortawesome/fontawesome-free/js/solid' just found out I need pro :(
    2) webpack running JS twice 
        a) https://stackoverflow.com/questions/37081559/all-my-code-runs-twice-when-compiled-by-webpack
    3) array methods + functions (Wow, ES6 is amazing...)
        a) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        b) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        c) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
        d) https://builtin.com/software-engineering-perspectives/remove-duplicates-from-array-javascript
        e) https://www.w3schools.com/js/js_array_sort.asp#mark_reverse
        f) https://stackoverflow.com/questions/52461095/sort-an-array-of-objects-if-property-exists
        g) https://stackoverflow.com/questions/39275193/how-to-check-if-object-has-property-javascript
        h) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
        i) https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
        j) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
        k) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        l) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    4) ES6 if statements 
        a) https://stackoverflow.com/questions/8860654/javascript-single-line-if-statement-best-syntax-this-alternative
    5) event handling 
        a) https://stackoverflow.com/questions/36192230/event-not-firing-on-input-change-for-appended-elements
        b) https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/

import './style.scss'; // imports >>>
import data from './data.json'

const carData = new Array(data); // global variables/arrays >>>
const disableMake = document.querySelector('#make');
const disableModel = document.querySelector('#model');

console.log(carData, 'The car data');
console.log(carData[0].length, 'The car data');

class Main { // Main class
    constructor() {
        this.yearArray = []; // arrays/var - for year, make, model etc
        this.makeArray = [];
        this.modelArray = [];

        this.getYearInput = null;
        this.getMakeInput = null;
        this.getModelInput = null;

        disableMake.disabled = true; // have other options disabled until user advances
        disableModel.disabled = true;

        this.setInit = false; // start app & use state management
        this.setState = 0;
        this.init();
    }

    init() { // start the application
        this.setInit = true;
        console.log('Application successfully started:', this.setInit);

        const exitDevMode = document.querySelector('#exit-dev-mode');
        const exitDevViewer = document.querySelector('#results-section');
        exitDevMode.addEventListener('click', () => {
            // console.log('clicked')
            exitDevMode.style.display = 'none';
            exitDevViewer.style.display = 'none';

        })

        this.getYears();
    }

    buildDOM() { // build the DOM elements needed for backend appending data from JSON
        if (this.setState === 0) {
            console.log('DOM >>> Years Appended')
                console.log('Dropdown Years Total:',this.yearArray.length);
                this.yearArray.forEach(year => { // loop thru array and make options for the select HTML element with the ID
                let option = document.createElement('option'); // use array data
                option.textContent = year;
                option.setAttribute('value', year);

                console.log(option); // see what is made
                // findSelectElement.document.appendChild(option);
                const findYearDropDown = document.querySelector('#year');
                // if (findSelectElement) { findSelectElement.append(option) } using ES6 methods 
                findYearDropDown ? findYearDropDown.append(option) : console.error('Element not found.'); // ES6 one-line if statement
            });
        } else if (this.setState === 1) {
            console.log('DOM >>> Make Appended')

            disableMake.disabled = false;
            disableMake.style.cursor = 'pointer';

                console.log('Dropdown Make Total:',this.makeArray.length);
                this.makeArray.forEach(make => { // loop thru array and make options for the select HTML element with the ID
                let option = document.createElement('option'); // use array data
                option.textContent = make;
                option.setAttribute('value', make);

                console.log(option); // see what is made
                // findSelectElement.document.appendChild(option);
                const findMakeDropDown = document.querySelector('#make');
                // if (findSelectElement) { findSelectElement.append(option) } using ES6 methods 
                findMakeDropDown ? findMakeDropDown.append(option) : console.error('Element not found.'); // ES6 one-line if statement
            });
        } else if (this.setState == 2) {
            console.log('DOM >>> Model Appended')

            disableModel.disabled = false;
            disableModel.style.cursor = 'pointer';

            console.log('Dropdown Models Total:',this.modelArray.length);
                this.modelArray.forEach(model => { // loop thru array and make options for the select HTML element with the ID
                let option = document.createElement('option'); // use array data
                option.textContent = model;
                option.setAttribute('value', model);

                console.log(option); // see what is made
                // findSelectElement.document.appendChild(option);
                const findModelDropDown = document.querySelector('#model');
                // if (findSelectElement) { findSelectElement.append(option) } using ES6 methods 
                findModelDropDown ? findModelDropDown.append(option) : console.error('Element not found.'); // ES6 one-line if statement
            });
        }
    }

    getYears() {
        console.log('Fetch Years');

        const findYearDropDown = document.querySelector('#year'); // event handler
        const findMakeDropDown = document.querySelector('#make');
        findYearDropDown.addEventListener('change', (e) => {
            // console.log(e.target.value, 'event handler fired!');
            this.getYearInput = e.target.value;
            console.log("Year Input Stored:", this.getYearInput);

            this.setState = 1;
            // this.setState ? this.getMakes() : this.getYears();
            if (this.setState === 1) {
                findMakeDropDown.innerHTML = '<option value="select-a-make">select a make</option>';
                this.getMakes();
            }
        });

        const storeYears = []; // new array for years
        carData[0].forEach(items => { // find the years in the carData JSON (the main JSON)
            storeYears.push(items.year); // push all years to the new array made
        });

        storeYears.sort(); // sort the new years array, so they are in order and not random
        // console.log(storeYears, "Years Sorted");

        const filterYears = [...new Set(storeYears)]; // make a new array, take the sorted array, filter and take out all repeated years
        // console.log(filterYears, "Years Filtered");

        filterYears.reverse(); // once sorted, filtered, reverse the array so the highest year is at index value 0, not the last
        // console.log(filterYears, "Years Reversed");

        this.yearArray = filterYears; // finally, store the result of years into the instance array for use
        console.log(this.yearArray, "Years Ready For Use!");

        this.buildDOM();
    }

    /* DEVELOPER NOTES: I ended up solving this issue without the internet >>> 
        Basically, what happened was the combo of appending elements and global scoping, I was trying to attach
        event handlers from within a method in a method. And by going from main Class > init > getYears, it attached the event
        handler, and I believe to real issue is due to the fact that I appended elements, and then got the select ele, which
        was responsive for the event firing. Due to the change and the dynamic nature of OOP, it never got attached. 
    */
    // getYearInput() {
    //     const findYearDropDown = document.querySelector('#year');
    //     this.value = findYearDropDown.options[findYearDropDown.selectedIndex].value; 
    //     console.log(this.value)
    // }

    getMakes() {
        console.log('Fetch Makes');

        const findMakeDropDown = document.querySelector('#make'); // event handler
        const findModelDropDown = document.querySelector('#model');
        findMakeDropDown.addEventListener('change', (e) => {
            // console.log(e.target.value, 'event handler fired!');
            this.getMakeInput = e.target.value;
            console.log("Make Input Stored:", this.getMakeInput);

            this.setState = 2;
            // this.setState ? this.getMakes() : this.getYears();
            if (this.setState === 2) {
                findModelDropDown.innerHTML = '<option value="select-a-model">select a model</option>';
                this.getModels();
            }
        });

        const filterMakesByYear = [...new Set(data.filter((car) => car.year == this.getYearInput))]; // new array for make

        const storeMakes = [];
        filterMakesByYear.forEach(items => { // find in the carData JSON (the main JSON)
            storeMakes.push(items.Manufacturer); // push all makes that are filtered to the new array made
        });

        storeMakes.sort(); // sort the new years array, so they are in order and not random
        // console.log(storeMakes, "Makes Sorted");

        const noRepeatMakes = [...new Set(storeMakes)]; // make a new array, take the sorted array, filter and take out all repeated 
        // console.log(noRepeatMakes, "Makes Filtered");

        this.makeArray = noRepeatMakes;
        console.log(this.makeArray, "Makes Ready For Use!");

        this.buildDOM();
    }

    getModels() {
        console.log('Fetch Models');

        const findModelDropDown = document.querySelector('#model'); // event handler
        findModelDropDown.addEventListener('change', (e) => {
            // console.log(e.target.value, 'event handler fired!');
            this.getModelInput = e.target.value;
            console.log("Model Input Stored:", this.getModelInput);

            this.setState = 3;
            // this.setState ? this.getMakes() : this.getYears();
            if (this.setState === 3) {
                const car = new Car(this.getYearInput, this.getMakeInput, this.getModelInput);
                car.displaySelectedCar();
            }
        });

        const storeModels = [];
        const filterModelsByYear = Array.from(new Set(data.filter((car) => car.year == this.getYearInput))); // new array for make
        const filterModelsByMakes = [...new Set(filterModelsByYear.filter((car) => car.Manufacturer == this.getMakeInput))];
        // console.log('test', filterModelsByMakes)
        filterModelsByMakes.forEach(items => { // find in the carData JSON (the main JSON)
            storeModels.push(items.model); // push all Models that are filtered to the new array made
        });

        storeModels.sort(); // sort 
        // console.log(storeModels, "Models Sorted");

        const noRepeatModels = [...new Set(storeModels)]; // models a new array, take the sorted array, filter and take out all
        // console.log(noRepeatModels, "Models Filtered");

        this.modelArray = noRepeatModels;
        console.log(this.modelArray, "Models Ready For Use!");

        this.buildDOM();
    }
}

class Year { // Year class
    constructor(year) {
        this.year = year;
        this.finalArray = [];
    }
}

class Make extends Year { // Make class
    constructor(year, make) {
        super(year);
        this.make = make
    }
}

class Model extends Make { // Model class
    constructor(year, make, model) {
        super(year, make);
        this.model = model;
    }
}

class Car extends Model { // Car class
    constructor(year, make, model) {
        super(year, make, model);
    }

    displaySelectedCar() {
        const filterFinalByYear = Array.from(new Set(data.filter((car) => car.year == this.year)));
        const filterFinalByMakes = Array.from(new Set(filterFinalByYear.filter((car) => car.Manufacturer == this.make)));
        const filterFinalByModel = [...new Set(filterFinalByMakes.filter((car) => car.model == this.model))];

        filterFinalByModel.sort();
        this.finalArray = filterFinalByModel;
        let length = this.finalArray.length;

        this.displayList();
    }

    displayList() {
        console.log('Results', this.finalArray);
        const list = document.querySelector('#list-results');
        list.innerHTML = '<li><h3>Results Listed Here - Dev Mode<h3></li>';

        this.finalArray.map(item => { // loop thru array and make options for the select HTML element with the ID
            let li = document.createElement('li'); // use array data
            li.textContent = `Price: $${item.price}    | Transmission: ${item.transmission}    | Mileage: ${item.mileage}`;
            // li.setAttribute('', year);

            // console.log(li);

            list ? list.append(li) : console.error('Element not found.'); // ES6 one-line if statement
        });

        console.log(`You searched for a ${this.year} ${this.make}, ${this.model}. Good choice!`);
    }
}

const main = new Main();

// const car = new Car(2018, 'BMW', "Model");

// console.log(car.displaySelectedCar());