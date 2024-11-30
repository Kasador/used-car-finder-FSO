# 1️⃣ Update 01

Read and go into _webpack.config.js_. 

# Webpack Configuration and Development Notes

This document serves as a reference and developer notes for setting up and using Webpack, as well as understanding the file structure and configuration for modern JavaScript development.

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