# AngularJS - Four ways to organize the code
When starting a new AngularJS project a common question is "how do we organize the code?".
There are many ways, tendencies, and techniques to organize the project's code within files and directories.
Specially with projects based on [Angularjs](https://angularjs.org/) is possible summarize all techniques with four styles:

1.  The inline style
2.  The stereotyped style
3.  The specific style
4.  The domain style

### The inline style
It's useful for making a presentation, for developing a fast and disposable application prototype or to evaluate a potential product idea.
The only project structure consists of index.html file with inline declarations for the scripts and style.

    app/            -> files of the application
        index.html  -> main html file
        angular.js  -> AngularJS script

### The stereotyped style
This style is useful for small apps with a limited number of components
such as controllers, services, directives, and filters.
The approach is mandatory if you must develop a simple project.

    app/                    -> files of the application
        lib/                -> javascript libraries
            angular.js      -> AngularJS script
        css/                -> css files
            app.css         -> application stylesheet
        js/                 -> application javascript components
            config.js          -> main application script
            controllers.js  -> all controllers script
            filters.js      -> all filters script
            services.js     -> all services script
            directives.js   -> all directives script
        partials/           -> partial view directory
            blog.html       -> blog view
            post.html       -> post view
            comment.html    -> comment view
        index.html          -> main html file

### The specific style
It's very hard to maintain a lot of code inside the same file.
When the project is growing can be useful splitting the scripts into specific ones.

    app/                        -> files of the application
        lib/                    -> javascript libraries
            angular.js          -> AngularJS script
        css/                    -> css files
            app.css             -> application stylesheet
        js/                     -> javascript application components
            controllers/        -> controllers directory
                blogCtrl.js     -> blog controller
                postCtrl.js     -> post controller
                commentCtrl.js  -> comment controller
            filters/            -> filters directory
            services/           -> services directory
            directives/         -> directives directory
            config.js              -> main application script
        partials/               -> partial view directory
            blog.html           -> blog view
            post.html           -> post view
            comment.html        -> comment view
        index.html              -> main html file

### The domain style
If the complex has a complex domain model with hundreds of components the best ways to organize the code is by distributing each component in a domain-named folder structure.

    app/                        -> files of the application
        lib/                    -> javascript libraries
            angular.js          -> AngularJS script
        application/            -> application module directory
            filters/            -> filters directory
            services/           -> services directory
            directives/         -> directives directory
            app.css             -> application stylesheet
            config.js              -> main application script
        blog/                   -> blog module directory
            blogCtrl.js         -> blog controller
            blog.css            -> blog stylesheet
            blog.html           -> blog view
        post/                   -> post directory
            postCtrl.js         -> post controller
            post.css            -> post stylesheet
            post.html           -> post view
        comment/                -> comment directory
            commentCtrl.js      -> comment controller
            comment.css         -> comment stylesheet
            comment.html        -> comment view
        index.html              -> main html file


