# Getting Started With Angular 1.x

#### Angular App Scaffolding
```
app
  - css
    - default.css
  - img
    - image1.jpg
    - image2.jpg
    - etc...
  - js
    - controllers
      - MainController.js
  - app.js
package.json (made after executing 'npm init')
index.html
server.js
```

Of course this does not include the angular dependencies but overall, this is the structure I would go with for an Angular 1.x app

#### Dependencies
First we need to install Angular 1.x (In this case I'm using v1.5.7):
```
npm install --save angular@1.5.7
```

Next we need a development server to see our work:
```
npm install --save-dev live-server
```

#### Setting Up The Dev Server
Citing the [live-server](https://github.com/tapio/live-server) documentation, making a dev server is not too difficult:

```JavaScript
var liveServer = require('live-server');

var params = {
  port: 3131, // http://localhost:(insert number here)
  root: './', // the location of your root directory (i.e. where you place all your files)
  open: true // this will open a new tab in your web browser automatically upon initiation of server.js
};

liveServer.start(params);
```

Now all that is left is to run the command: `node server.js` thereby starting your dev server with live-reload

#### index.html
We need to make sure of a couple things to make Angular 1.x work:
- [ ] Include `script` tags for `angular.js`, `app.js`, and `MainController.js`
- [ ] Include `ng-app` directive in the `body` tag

For example:
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Basics of Angular</title>
    <link rel="stylesheet" href="./app/css/default.css">
  </head>
  <body ng-app="myApp">
    <script src="./node_modules/angular/angular.js"></script>
    <script src="./app/app.js"></script>
    <script src="./app/js/controllers/MainController.js"></script>
  </body>
</html>
```

#### Angular Terms
**module** = Think of a module as a bucket containing a bunch of components (i.e. *directives*, *services*, *controllers*, *filters*, etc...)

**directive** = Directives instantiate an application's scope. In this case, we have a directive `ng-app` which tells Angular that the module `myApp` will live within the `body` tag. You also have access to `myApp`'s scope within the `body` tag

**controller** = Controllers manage data within an application. We assign values to `$scope` which can be reflected in the view using `{{}}`

**expression** = Expressions are what we use to display data from the *controller* = `{{}}`

**filters** = Filters formats data for display. To add a filter, we simply need to add a `|` (pipe) with a filter name after the pipe like:
`{{dollars | currency}}`

#### Modules
Modules are pretty simple to set up:
```JavaScript
// app.js
var app = angular.module('myApp', []);
```
We are instantiating a new Angular module called `myApp` where the empty array contains modules `myApp` depends on

#### Directives
So far we have used `ng-app` and `ng-controller` but we have not gone over `ng-repeat`, `ng-src`, and `ng-click`:

`ng-src` allows you to use `{{}}` with your paths/URLs so if you have a bunch of images you want to show and all these images are in the same directory, using `ng-src` along with `ng-repeat` might be a good way to loop through an object containing the correct paths and displaying the correct images.

As mentioned above, `ng-repeat` will loop through an array and return each object within the array:

```HTML
<div ng-repeat="game in games">
  <h5>{{game.title}}</h5>
  <h5>{{game.price}}</h5>
  <br>
</div>

<!-- Instead of -->
<div>
  <h5>{{games[0].title}}</h5>
  <h5>{{games[0].price}}</h5>
  <br>
  <h5>{{games[1].title}}</h5>
  <h5>{{games[1].price}}</h5>
</div>
```

`ng-click` attaches specific behavior to an element and executes that behavior when the element is clicked on

#### Controllers
Since we are not dealing with live data or not calling an API for any data, the controller is simple to set up:
```JavaScript
// MainController.js
app.controller('MainController', ['$scope', function($scope){
  $scope.text = 'Hello!';
}]);
```
We made a controller whose child scope (an object called `$scope`) contains one property called `text` which refers to a string `Hello!`. The array contains *services* that `MainController` now depends on. In this case `$scope` is a *service*

In `index.html` we can show `Hello!` by pairing the `ng-controller` directive with a `div` tag, this tells Angular to instantiate a new Controller object and inject the child `$scope` of `MainController` into the corresponding `div` tag like so:

```HTML
<!-- index.html (somewhere in the body tag) -->
<div ng-controller="MainController">
  <h2>{{ text }}</h2>
</div>
```

#### Conclusion
A user...
- Hits the Angular application in the browser
- Views content thanks to the collaboration of the *expressions*, *filters*, and *directives*
- Clicks on the button to execute a function located in the *controller*
- Sees an updated value thanks to the *controller* updating the view with a new value, all without reloading the page
