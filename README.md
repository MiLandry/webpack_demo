#Webpack demo
This web app will demonstrate the core functionalities of webpack. The website itself simply displays "hello webpack" to the browser and console logs something.  Since webpack is a build tool, the commands below show how to build with webpack and how to run inside of webpackdevserver using npm.

##getting started
(optional) `npm install webpack -g`

`npm install`

##to build from cli
###using the webpack config file (recommended)
this will "webpack" all the input files into corresponding output files as defined in webpack.config.js. its also more convenient
`webpack`

###the raw webpack command
NB: don't use the raw command, it doesn"t work well.  It might be a whitespace/carriage thing but stick to using the config file for commmands
Here app.js is the input, and bundle.js is the generated output file

`webpack ./app.js bundle.js`



##to run the built app
###using script
`npm start`


###Notes
there is somenonsense about what happens if there is no bundle.js file, or that running webpack over and over doesn't clean contents out first .