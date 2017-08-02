# MongoLab Rest Client

I love build ASP.NET MVC projects using C# for this reason I’m searching an inexpensive way for publish my web projects using [PaaS](http://en.wikipedia.org/wiki/Platform_as_a_service) approach.
After this search I choose [AppHarbor](https://appharbor.com/) solution for host application but for storage I wanted to experiment a Nosql database because I like flexibility of schema feature and there are many free solutions in internet.
I found [MongoLab](https://mongolab.com) a cloud [MongoDB](http://www.mongodb.com) hosting that provide 500MB without cost. The main way for access to mongodb database on mongolab are rest api very simple to use, but I’m .net developer so I created a small library for manage database using only C# classes.
I called it [MongoLab-Rest-Client](https://github.com/antdimot/MongoLab-Rest-Client) and I release it on GitHub (yes I wanted try also git :) ).

What can we do with MongoLab-Rest-Client? Today all crud operations on our entities.

Steps:

1.  Sign up to http://mongolab.com
2.  Get the apikey ( ex. 123456789012345678901234 )
3.  Write c# code

Example:

    var client = new MRestClient( “mydb” );
    client.Apikey = “12345678901234567890123”;
    
    // store a new entity
    var obj = new Product();
    var result = client.Create( obj );
    
    // make a query using criteria api
    var criteria = new Criteria();
    criteria.Add( Restriction.Or
            .Add( Restriction.Eq( “Name”, “name1″ ) )
            .Add( Restriction.Eq( “Name”, “name2″ ) ) )
            .Add( Restriction.Lte( “Quantity”, 2 ) );
            
    IList products = client.GetByCriteria( criteria );


Only simple C# code, without define a schema on database.

*Antonio Di Motta*