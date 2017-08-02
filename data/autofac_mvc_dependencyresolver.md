# ASP.NET MVC dependency resolution and Autofac

From the current version of [ASP.NET MVC (release 3+)](http://www.asp.net/mvc) provides a new **IDependencyResolver** interface that makes it easier to integrate *DI frameworks*.

For instance, if you are using [AutoFac](http://code.google.com/p/autofac/) you can write code like this:

    public class AutoFacDependencyResolver : IDependencyResolver
    {
        readonly IContainer _container;
        public AutoFacDependencyResolver ( ContainerBuilder builder )
        {
            this._container = builder.Build();
        }
        public object GetService( Type serviceType )
        {
            try
            {
                return _container.Resolve( serviceType );
            }
            catch { return null; }
       }
    
        public IEnumerable GetServices( Type serviceType )
        {
            try
            {
                var enumerableType = typeof( IEnumerable ).MakeGenericType( serviceType );
                return _container.Resolve( enumerableType ) as IEnumerable;
            }
            catch { return null; }
       }
    }
    
Now, it’s easy to register your types and what should resolver use:

    protected void Application_Start()
    {
        // register type
        var containerBuilder = new ContainerBuilder();
        containerBuilder.RegisterType<MyConcreteClass>().As<IMYInterface>();
    
        // set resolver
        DependencyResolver.SetResolver(
            new AutoFacDependencyResolver( containerBuilder ) );
    }

*Antonio Di Motta*