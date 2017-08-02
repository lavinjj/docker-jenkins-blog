# AngularJS - Custom directives
AngularJS provides many built-in directives and someone of that I have already presented, but it's always possible define
a own directive using the great capability for creating custom directives.

The goal is write something like this:

     <articlepanel data="item"></articlepanel>

To do that, we have to lear how to register a new directive. For example if you want define a new directive
you must write something like this:

    var app = angular.module("angularAppName", []);

    app.directive( "articlepanel", function () {
        return {
        };
    });

Now, it's important define what it has to show. So, look the following **article.html**:

    <div class="panel">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{article.title}}
            </h3>
        </div>
        <div class="panel-body">
            <p class="text-left">{{article.summary}}</p>
        </div>
    </div>

The html above code is a template specialized to show the title and summary of an article using a [panel Bootstrap component](http://getbootstrap.com/components/#panels).



