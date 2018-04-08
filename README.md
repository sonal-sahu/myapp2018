PROJECT Get better at Data Science

Requirements
For development, you will only need Node.js installed on your environment. 

Node
Node is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.

$ node --version
v0.10.24

$ npm --version
1.3.21

Node installation on OS X
You will need to use a Terminal. On OS X, you can find the default terminal in /Applications/Utilities/Terminal.app.
Please install Homebrew if it's not already done with the following command.
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
If everything when fine, you should run
brew install node

Node installation on Linux

sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs

Node installation on Windows
Just go on official Node.js website & grab the installer. Also, be sure to have git available in your PATH, npm might need it.
________________________________________

Create React App
$npm install -g create-react-app
$create-react-app my-app
$cd my-app
$npm start

Create my-app folder and run 
$npm start

Which will start our application on http://localhost:3000/

Install Bootstrap
Looking to quickly add Bootstrap to your project? Use BootstrapCDN, provided for free by the folks at MaxCDN. 
Copy-paste the stylesheet <link> into your <head> before all other stylesheets to load our CSS.
	
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
And then put in index.html.

Install Gulp
A task runner to compile the sass into standard css.
To set up Gulp, the gulp CLI is needed to be installed by running 
$npm install –-global gulp-cli

Install Gulp for the project
If a package.json file already exists with list of all of the dependencies that Gulp will need for the project, then you can simply switch to the project root directory in the site terminal and run the command npm install. This only needs to happen once so that the dependencies can be downloaded for the project.

If a package.json file does not exist, switch to the project root directory for the site in a terminal. For this configuration, you can install gulp and the needed dependencies using the command npm install gulp gulp-compass gulp-autoprefixer gulp-minify-css gulp-uglify gulp-rename gulp-concat gulp-notify gulp-livereload gulp-plumber --save-dev. You only need to do this once so that the dependencies can be downloaded for the project.

Create customize gulpfile.js
Gulp will look for gulpfile.js into your project folder.

Below gulpfile.js-

'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST ='./src/Assets/css';

//Compile SCSS
gulp.task('compile_scss',function(){
	
	gulp.src(SCSS_SRC)
	.pipe(sass().on('error',sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({suffix: '.min'}))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST));
	
});

//detect changes in SCSS
gulp.task('watch_scss',function(){

gulp.watch(SCSS_SRC,['compile_scss']);
});

// run tasks
gulp.task('default',  ['watch_scss']);

Run Gulp
•To just compile the scripts and SCSS one time, simply run the default command gulp. You can also run any of the other task names, like gulp styles.
•To watch the templates, .scss, and .js files for changes, and to automatically compile and minify the relevant files, run the command gulp live. If the livereload browser extensions are installed and enabled, the browser will automatically refresh when any changes are made to style and javascript files in the src directory, or to any template files in the templates directory.


Install
$ git clone https://github.com/sonal-sahu/myapp2018.git
$ cd myapp2018
$ npm install

Start & watch
Go to the project folder and start command prompt
$ npm start

Start another command prompt and go to the project folder location and run-
$ gulp
________________________________________


Languages & tools
HTML, JavaScript- React is used for UI, CSS, Bootstrap, Sass and Gulp.

