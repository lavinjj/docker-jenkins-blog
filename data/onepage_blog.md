# One Page Blog using AngularJS and Markdown

Yes, I have changed my blog again, but this time i decided to design and code it personally.

Before starting the development of my new blog, i collected the requirements.

Below is my short list of requirements:

1.  It must be easy to write a new post.
2.  It must be easy to process and update.
3.  It must not use a database.
4.  It must be possible to use any hosting solution.

To accomplish the first, I thought to use [Markdown](http://daringfireball.net/projects/markdown/) syntax.
It's a super easy syntax because it has few elements to remember but still enough for writing a good article.
But there was a problem.
How do you transform the markdown text into html text?
After a fast search, I found a small javascript library: [Pagedown](https://code.google.com/p/pagedown/wiki/PageDown).
It provides an easy way to do that.

Example:

    var converter = new Markdown.Converter();
    document.write(converter.makeHtml("**I am bold!**"));

The second requirement has been easy to accomplish because I decided to use [GIT](http://git-scm.com) (a simple *PUSH* command).
In particularly there is the possibility to use a public repository hosted on [Github](https://github.com) using it as web site repository.

No database, it was hard to accomplish.
So, I decided to reduce the quantity of data and saving it using json files.
This solution is good because i could load it using simple rest request.

For hosting, the best way is developing something that must to work only into a browser.
So, I decided to use only html, css and javascript.
How did i put a complex logic into a web page without going crazy?
The answer was [Angularjs](https://angularjs.org).

What is Angularjs?
The description as reported on home page of the project is follows.

*"HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications.
AngularJS lets you extend HTML vocabulary for your application.
The resulting environment is extraordinarily expressive, readable, and quick to develop."*

Great, now i had all necessary tools for developing my new blog.

The result? It's the article that you are reading now :)

Please feel free to download and/or fork the code of [One page blog](https://github.com/antdimot/antdimot.github.io).

All that you need is located in the **data** folder, where there are the articles (.md) and json files.

*Antonio Di Motta*


