# mean-boilerplate
A starter template for MEAN applications

This template is build with [Gulp](http://gulpjs.com/) for tasks, [Sass]() for styles & [Karma](http://karma-runner.github.io/)/ [Jasmine](http://jasmine.github.io/) for tests.

## Features
* Full Js linter with [gulp-jshint](https://github.com/spalger/gulp-jshint) and [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) as the reporter
* Full build automation including minification
* All templates are stored in $templateCache for increased performance
* Routing is setup with [ui-router](https://github.com/angular-ui/ui-router)
* Unit tests with [Jasmine](http://jasmine.github.io/) & [Karma](http://karma-runner.github.io/)
* Live reload with [gulp-livereload](https://github.com/vohof/gulp-livereload)
* Authorisation with [passport-local](https://github.com/jaredhanson/passport-local)
* Development mode injects individual angular files, prod mode will concatinate & minify. This allows for easy debugging

## Pages

## Getting started

Step 1. Install [NodeJS](http://nodejs.org/download/)

Step 2. Checkout/ download project

Step 3. Install the npm dependencies
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

Run unit tests
```shell
gulp run:unit
```
