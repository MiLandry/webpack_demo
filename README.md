#Webpack demo
This web app will demonstrate the core functionalities of webpack. The website itself simply displays "hello webpack" to the browser and console logs something.  Since webpack is a build tool, the commands below show how to build with webpack and how to run inside of webpackdevserver using npm. It uses the commonjs module loading system, although webpack should be able to work with any of them.

##getting started
(optional) `npm install webpack -g`

`npm install`

##to build from cli
###using the webpack config file (recommended)
this will "webpack" all the input files into corresponding output files as defined in webpack.config.js. its also more convenient

`webpack`

if you want to run the production build (this triggers the minify option) :

`webpack -p`

but you don't just want the out of the box stuff for the prod build, you want other custom stuff too (like stripping out console.logs), as declared in the custom config file, so run this:

`webpack --config webpack-production.config.js -p`

Usually the above command is not something you would store as a script or in the repo, you are going to likely stick this in a build server somewhere.

###the raw webpack command
NB: don't use the raw command, it doesn"t work well.  It might be a whitespace/carriage thing but stick to using the config file for commmands
Here app.js is the input, and bundle.js is the generated output file

`webpack ./app.js bundle.js`



##to run the built app
###using script
`npm start`


###Notes
there is somenonsense about what happens if there is no bundle.js file, or that running webpack over and over doesn't clean contents out first .