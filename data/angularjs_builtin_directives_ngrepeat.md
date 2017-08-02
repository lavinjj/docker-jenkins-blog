# AngularJS - Using built-in directives (ngRepeat)
This is the second article about AngularJS built-in directives series.
Into the [first article](#/article/angularjs_builtin_directives) i used  *ngController* and now it's time to see how to manage the data into the html web page and to do that i describe the directive ngRepeat.

### The ngRepeat directive
This directive is useful to iterate over arrays and objects and can be used with any elements of a list such as options of select and rows of a table.
It provides a repeat expression that describes how iterate over the array using a variable that will hold each item in the iteration.

Here there is a practical example:

    <!DOCTYPE html>
    <html lang="en" ng-app="angularAppName">
        <head>
           <title>One page blog</title>
           <script src="angular.js"></script>
           <script>
                var app = angular.module("angularAppName", []);

                app.controller("ArticleController", function ($scope) {
                    $scope.articles = [
                        {
                            "title":"AngularJS - Using built-in directives",
                            "summary":"One of the most important concept used from AngularJS is the directive. It is an extension ...",
                            "date":"30/11/2014"
                        },
                        {
                            "title":"AngularJS - Four ways to organize the code",
                            "summary":"When starting a new AngularJS project a common question is \"how do we organize the code?\"",
                            "date":"12/11/2014"
                         }
                    ];
                });
           </script>
        </head>
        <body ng-controller="ArticleController">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="item in articles">
                        <td><span ng-bind="item.date"></span></td>
                        <td><span ng-bind="item.title"></span></td>
                        <td><span ng-bind="item.summary"></span></td>
                    </tr>
                </tbody>
            </table>
        </body>
    </html>

As you can see, i defined a controller called **articleCtrl** which is responsable for loading the array of articles.

In the html code there is the directive **ngRepeat** with the expression **"item in articles"** for cycling the table row,
which is used to show all article data.
