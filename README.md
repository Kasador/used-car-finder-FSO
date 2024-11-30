# 📝 Full Sail University - Used Car Finder

In this week's activity, you are tasked with building a new ES6/HTML/CSS application that will run in your browser. The purpose of this application is to find used cars based on their year, make, and model—similar to the functionality found on websites like the _**Kelley Blue Book.**_

### ⚙️ Overview

Using _npm_ as well as modular design concepts; OOP ***(object-oriented programming)***, in order to better organize and development an application similar to car finder applications and/or bookings for companies; **flights, cars, hotels, etc...**

# Car Finder

In this activity you will be creating & styling a simple user interface (UI) that will allow users to select a car based on year, make, and model. The interface should display three different dropdown lists one for each of the following:

- Year 
- Make 
- Model

So what's the catch? So both the **Make** and **Model** dropdowns will be automatically updated based on the previous dropdown selection. For example if start off by selecting the year "2021" the **Make** dropdown should automatically fetch a list of car manufactures that make models for that year. The same goes with the **Model** dropdown select. Once you select a **Make** it should pre-populate with only models that are made in 2021 for the selected **Make**. 

## Tech Requirements

Please note that everything has already been setup for you on this week's assignment. All boilerplate code including Webpack, and configration has already been written for you. Please use the existing files & code located in this folder.

- Webpack for compiling your ES6 app (already setup for you)
- SCSS for styling your UI 

## Running The Project

Since everything has been setup for you in order to complete this week's assignment all you need to do in order to start coding is to run the following command inside the `assignments/1-car-finder` directory...

    cd assignments/1-car-finder
    npm install
    npm run start

Running the above command should automatically open up your web browser to a blank white page. You may start coding your project. Any changes you make to your code will automatically be compiled. All you have to do is refresh your browser anytime you make a change. 

## Project File Structure

.
├── dist/                 -> This folder is only used to house your compiled ES6 code for your browser to use.
│   └── bundle.js         -> The main script that gets compiled from your src/ code and loads it into your browser. 
├── package.json          -> Your node dependencies, devDependencies, and scripts.
├── package-lock.json     -> Used by node to keep track of dependency versions.
├── README.md             -> You are reading me right now =)
├── src/                  -> All your assignment code will be done inside this directory.
│   ├── data.json         -> Contains all of the car year, make, and model data.
│   ├── index.html        -> Your main HTML file.
│   ├── index.js          -> YOur main ES6 JavaScript file to place all of your code into.
│   └── style.scss        -> Your primary SCSS stylesheet you will use to place all of your styles into.
└── webpack.config.js     -> Tells nodejs how to compile your ES6 project.



Happy coding y'all! Good luck!
