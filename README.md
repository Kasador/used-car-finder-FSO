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
```
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
```


Happy coding y'all! Good luck!

# 1️⃣ Update 01

Read and go into _webpack.config.js_. 

# Webpack Configuration and Development Notes

Developer notes for setting up and using Webpack, as well as understanding the file structure and configuration for modern JavaScript development.

---

## References

1. **Using Loaders + Config Setup for Webpack**  
   - [Webpack Loaders Documentation](https://webpack.js.org/concepts/loaders/#using-loaders)  
   - [Webpack Configuration Documentation](https://webpack.js.org/concepts/configuration/)  
   - [StackOverflow: Webpack Configuration](https://stackoverflow.com/questions/39098423/webpack-configuration)  
   - [npm: dotenv](https://www.npmjs.com/package/dotenv)  
   - [npm: webpack](https://www.npmjs.com/package/webpack)  

---

## Example Webpack Configuration

Below is a simple example of a working `webpack.config.js` file:

```javascript
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js', 
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/, 
                use: ['html-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: './dist', 
        open: true,
    },
};
```

# ⚙️ Updates 

![Screenshot 2024-11-30 102732](https://github.com/user-attachments/assets/7fc0b20c-63ea-484f-869b-e3f0c44cf960)

## New Update on _webpack.config.js_

```javascript
plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
    }),
  ],
```

This is needed due to the fact that it was running my scripts _twice_. One from the index.html script tag with bundle.js and the other with the _HtmlWebpackPlugin_ function. I fixed this by added _inject: false,_ to the plugins array.

### Screenshots Below >>>
![Screenshot 2024-11-30 122555](https://github.com/user-attachments/assets/21f2d8e6-1393-4baf-90ed-db2ac1074532)
![Screenshot 2024-11-30 123834](https://github.com/user-attachments/assets/7ac24637-c5cd-4668-8501-48531cd5e37f)