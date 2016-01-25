questionsJs
====

Inspired by Firebase & AngularJS TodoMVC Example

#### Configuration
Please change this firebase URL to your app URL. Otherwise, it won't work.


#### How to install `node` and `npm`
- [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
- [Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)
- [Linux](http://blog.teamtreehouse.com/install-node-js-npm-linux)

Local webserver
----

```
$ cd questionsJS (working directory)
$ sudo npm install -g karma
$ npm start
```

Note: you might encounter errors when installing karma. Scroll down to the "Trouble Shooting" section for a solution.

Unit Testing with [Karma](http://karma-runner.github.io/0.13/index.html)
----

#### Installation
```
$ sudo npm install -g karma karma-cli karma-coverage karma-chrome-launcher karma-jasmine
```

Test case: `test/unit/*`
```
$ karma start karma.conf.js
```

#### Installation with NPM
```
$ npm install
```

Test case: `test/unit/*`
```
$ npm test

