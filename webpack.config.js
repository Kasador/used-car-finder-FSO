/* REFERENCES >>>
  1) Using loaders + config setup for the webpack
    a) https://webpack.js.org/concepts/loaders/#using-loaders
    b) https://webpack.js.org/concepts/configuration/
    c) https://stackoverflow.com/questions/39098423/webpack-configuration
    d) https://www.npmjs.com/package/dotenv
    e) https://www.npmjs.com/package/webpack
*/

/* const path = require('path'); // import to make sure we have the output folder
const HtmlWebpackPlugin = require('html-webpack-plugin'); // import so we are using the html template

module.exports = {
    mode: 'development', // make sure we are using dev mode, needed or got an error
    entry: './src/index.js', // entry point of your app
    output: {
        path: path.resolve(__dirname, 'dist'), // output folder
        filename: 'bundle.js', // the file that is output'd into the folder, 
    },
    module: {
        rules: [
            {
                test: /\.js$/, // make sure we are using Babel loader to .js files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/, // complice SCSS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/, // complice HTML files
                use: ['html-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // look for the specific HTML template
        }),
    ],
    devServer: {
        static: './dist', // finally, we serve content from "dist" directory
        open: true, // set to true to auto-open 
    },
}; */ // Ran the code example, and finally got it work with a simple npm install, was really overcomplicating things. I WAS CLOSE >>> was reading documents...

/* DEVELOPER NOTES >>>
  Does running npm install if the webpack.config.js has the /node_moduels in it? 
  Will it AUTO-generate? So I don't HAVE to write this myself unless I need to specific and change things?
  path is using the OG require function that's builit in, path is just the variable name. Basically, is this the same as...
  ...using imports in ReactJS? 
  EX: https://stackoverflow.com/questions/54800819/why-does-import-react-from-react-not-work
    a) import react from 'react'; OR
    b) import { MyVariable } from './path/route/to/variable.jsx';
      1) https://stackoverflow.com/questions/54800819/why-does-import-react-from-react-not-work
          ex: 
            import defaultExport from "module-name";
            import { export } from "module-name";
  Is the index.js the index.js in ReactJS? 
  and... The style.scss is the index.css which I would have named it that. 
  Finally, the dist folder is and has to be the "public" folder, which would serve and complice the ES6 into READABLE JS for the browser. 
  What I do not understand, is why do we have the assets in the SRC folder and NOT the public? Wouldn't we have static assets in the folder? That is not dynamic...?

  >>> Lots of questions, but as you can realize, I never understood FULLY the structure and what everything is doing more or less until now. I started using ReactJS back in 2018-ish?
  which at that point we were using the npm create-react-app, which is the OLD way, and now we use other methods like vite, 

  REACTJS REF >>>
    Old >>> https://legacy.reactjs.org/docs/create-a-new-react-app.html
    New >>> https://react.dev/blog/2023/03/16/introducing-react-dev // https://vite.dev/guide/
      a) and now we have even NEWER methods, like NextJS which uses the React framework using SSR (faster, but more expensive) VS. CSR (Slower, less expensive)
        1) JS > ES6 (OOP) > ReactJS > NextJS --- from my understanding, its like layers within layers, haha.
    When section changes to div, the section is deleted and the new div is added <<< From the newer website

    THANK YOU FOR THE SETUP! This helps speed things up a TON! Especially for the people who are newer and/or are new to the OOP/Class based JS methods from functional programming.
    I remember spending days way back just even getting a working setup started for ReactJS. (Had to level up, due to the fact jobs were in HIGH demand for those who had knowledge in AngularJS/ReactJS)
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',  // Injects styles into DOM
          'css-loader',    // Turns CSS into CommonJS
          'sass-loader',   // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,  // Matches image files
        type: 'asset/inline',  // Emits separate files and returns their URLs
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serves static files from the 'dist' directory
    },
    compress: true,
    port: 9001,
    hot: false
  },
  mode: 'development',
};

