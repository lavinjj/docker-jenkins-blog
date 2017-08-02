# AngularJS - Using built-in directives
One of the most important concept used from AngularJS is the directive.
It is an extension of the HTML vocabulary that allows us to create new behaviors for creating reusable components.
A directive can be used within the whole application and even provide their own custom components.

There are many built in directives in AngularJS and in this article i describe ngApp, ngController and ngBind directives.

### The ngApp directive
The ngApp defines the root of an AngularJS application.
It is used to bootstrap the framework and we can use with or without parameters also if it is recommended that you provide
a module name, defining the entry point of the application in which other components such as controllers, services, filters, and directives.

    <!DOCTYPE html>
    <html lang="en" ng-app="angularAppName">
        <head>
            <title>My app</title>
            <script src="angular.js"></script>
            ...

There is only one *ngApp* directive in the same HTML document.

### The ngController directive
The ngController is an important directive and usually the first that we learned when starting to use AngularJS.
We can attach any controller to the view using the ngController directive, so the view and controller start to share the same scope and are ready to work together.


    <!DOCTYPE html>
    <html lang="en" ng-app="angularAppName">
        <head>
           <title>My app</title>
           <script src="angular.js"></script>
           <script>
                var app = angular.module("angularAppName", []);

                app.controller("HomeController", function ($scope) {
                    $scope.message = "Hello World!";
                });
           </script>
        </head>
        <body ng-controller="HomeController">
            <h3 ng-bind="message"></h3>
        </body>
    </html>

The code defines a controller called **homeCtrl** built using *onepageblog* application.
Then, it is possible to apply the controller to markup code using **ng-controller** notation.

### The ngBind directive
It is generally applied to an element and replaces the content with the results of the expression.
In alternative is possible to use the double curly markup, for example, *{{expression}}*.

The last example uses **ng-bind** directive to apply the message defined into the controller using the **$scope** variable.

There are many others built-in directives and in the next article i'll describe them.
