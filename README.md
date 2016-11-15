#Webpack demo
This web app will demonstrate the core functionalities of webpack. The website itself simply displays "hello webpack" to the browser and console logs something.  Since webpack is a build tool, the commands below show how to build with webpack and how to run inside of webpackdevserver using npm.

##getting started
npm install webpack -g
npm install

##to build from cli
###using the script
npm build

###the raw webpack command
Here app.js is the input, and bundle.js is the generated output file

`webpack ./app.js bundle.js`



##to run the built app
###using script
npm start




###Notes
there is somenonsense about what happens if there is no bundle.js file, or that running webpack over and over doesn't clean contents out first .