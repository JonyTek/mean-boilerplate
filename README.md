# mean-boilerplate
A starter template for MEAN applications

This template is build with [Gulp](http://gulpjs.com/) for tasks, [Sass]() for styles & [Karma](http://karma-runner.github.io/)/ [Jasmine](http://jasmine.github.io/) for tests.

## Features
* Full Js linter with [gulp-jshint](https://github.com/spalger/gulp-jshint) and [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) as the reporter
* Full build automation including minification

## Getting started

Step 1. Install [NodeJS](http://nodejs.org/download/)

Step 2. Install the npm dependencies
```shell
cd path/to/project
npm install
```

Step 4. Run Gulp dev
```shell
gulp dev
```

## Additional gulp commands

Build and minify all js & css
```shell
gulp compile
```

Build all js & css
```shell
gulp build
```

Lint all js
```shell
gulp lint:js
```
