# Entity Framework 4.1 news

I like very much the last release (4.1) of [Entity Framework](http://msdn.microsoft.com/en-us/data/aa937723).
Although the EF team have to work hard to catch up the quality of [NHibernate](http://www.nhforge.org/) (it is still the best ORM), but
they are on the right way.

This release adding a new developing model called code-first, which is added to model-first and database-first.
Personally, I prefer this new approach because can able to use [DDD (Domain Driven Design)](http://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215).

The first action that we have to do when starting a new project is define the entities that matching with the real scenario
required, without to be afraid about how the instances have to persist.

Example:

    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }

The only overhead added is the definition of a new class that will be extend **DbContext**,
which is the entry point for managing the entities persistence.

Example:

    public class MyContext : DbContext
    {
        public DbSet<User> Users { get; set; }
    }
    
Finished!

###No database has been created and no table has been defined.

Now, we have to write only a simple *LINQ* statement to get the information from database.

    var ctx = new MyContext();
    
    var query = from o in ctx.Users select o;
    
    var users = query.ToList();
    
What's happened?

Simply, at the time for executing the method **ToList()**, the EF engine will generate for us a new database (Sql Server),
with the name MyContext containing the required tables for persisting the entities defined as **DbSet** into class *MyContext* and then
will execute a T-Sql query provides from *LINQ* provider of Entity Framework.

*Antonio Di Motta*
